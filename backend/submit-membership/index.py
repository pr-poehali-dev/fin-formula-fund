import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
import urllib.request
import urllib.error

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отправка заявки на членство в КПК через Email и Telegram
    Принимает: POST запрос с данными формы (inn, phone, fullName)
    Возвращает: HTTP ответ с результатом отправки
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Обработка CORS preflight
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Метод не поддерживается'}),
            'isBase64Encoded': False
        }
    
    # Парсинг данных формы
    body_data = json.loads(event.get('body', '{}'))
    inn: str = body_data.get('inn', '')
    phone: str = body_data.get('phone', '')
    full_name: str = body_data.get('fullName', '')
    
    # Валидация
    if not inn or not phone or not full_name:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Все поля обязательны'}),
            'isBase64Encoded': False
        }
    
    # Получение настроек из переменных окружения
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    results = {'email': False, 'telegram': False, 'errors': []}
    
    # Отправка Email
    try:
        msg = MIMEMultipart('alternative')
        msg['From'] = smtp_user
        msg['To'] = smtp_user
        msg['Subject'] = f'Новая заявка на членство в КПК от {full_name}'
        
        html_body = f'''
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
                <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
                    📋 Новая заявка на членство в КПК
                </h2>
                <div style="background-color: white; padding: 20px; border-radius: 6px; margin-top: 20px;">
                    <p style="margin: 10px 0;"><strong>ФИО контактного лица:</strong> {full_name}</p>
                    <p style="margin: 10px 0;"><strong>ИНН организации:</strong> {inn}</p>
                    <p style="margin: 10px 0;"><strong>Номер телефона:</strong> {phone}</p>
                </div>
                <div style="margin-top: 20px; padding: 15px; background-color: #e0e7ff; border-left: 4px solid #6366f1; border-radius: 4px;">
                    <p style="margin: 0; color: #4338ca; font-size: 14px;">
                        <strong>Следующий шаг:</strong> Свяжитесь с клиентом для обсуждения условий вступления и размера паевого взноса.
                    </p>
                </div>
            </div>
        </body>
        </html>
        '''
        
        msg.attach(MIMEText(html_body, 'html', 'utf-8'))
        
        # Подключение к SMTP через STARTTLS (порт 143 используется с TLS)
        server = smtplib.SMTP(smtp_host, smtp_port, timeout=10)
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
        server.quit()
        results['email'] = True
    except Exception as e:
        results['errors'].append(f'Email ошибка: {str(e)}')
    
    # Отправка в Telegram
    try:
        telegram_message = f'''🆕 <b>Новая заявка на членство</b>

👤 <b>ФИО:</b> {full_name}
🏢 <b>ИНН:</b> {inn}
📞 <b>Телефон:</b> {phone}

💡 Свяжитесь с клиентом для обсуждения условий вступления'''
        
        telegram_url = f'https://api.telegram.org/bot{telegram_token}/sendMessage'
        telegram_data = json.dumps({
            'chat_id': telegram_chat_id,
            'text': telegram_message,
            'parse_mode': 'HTML'
        }).encode('utf-8')
        
        req = urllib.request.Request(
            telegram_url,
            data=telegram_data,
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req, timeout=10) as response:
            if response.status == 200:
                results['telegram'] = True
    except Exception as e:
        results['errors'].append(f'Telegram ошибка: {str(e)}')
    
    # Определение статуса ответа
    if results['email'] or results['telegram']:
        status_code = 200
        message = 'Заявка успешно отправлена'
    else:
        status_code = 500
        message = 'Не удалось отправить заявку'
    
    return {
        'statusCode': status_code,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': results['email'] or results['telegram'],
            'message': message,
            'details': results
        }),
        'isBase64Encoded': False
    }