import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <Card className="max-w-2xl w-full animate-scale-in">
        <CardContent className="pt-12 pb-8 text-center">
          <div className="w-20 h-20 gradient-purple-blue rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
            <Icon name="CheckCircle2" size={40} className="text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Спасибо за заявку!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            Ваша заявка на членство в КПК "ФИН ФОРМУЛА" успешно отправлена
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8 max-w-xl mx-auto">
            <div className="flex items-start gap-4 text-left">
              <Icon name="Info" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100">
                  Что дальше?
                </h3>
                <ul className="space-y-2 text-blue-900 dark:text-blue-100">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="flex-shrink-0 mt-0.5" />
                    <span>Наш менеджер свяжется с вами в течение 1-2 рабочих дней</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="flex-shrink-0 mt-0.5" />
                    <span>Обсудим условия вступления и размер паевого взноса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="flex-shrink-0 mt-0.5" />
                    <span>Ответим на все ваши вопросы о членстве в кооперативе</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-xl mx-auto">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="w-10 h-10 gradient-purple-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Phone" size={20} className="text-white" />
              </div>
              <div className="text-sm font-semibold mb-1">Телефон</div>
              <div className="text-xs text-muted-foreground">+7 (___) ___-__-__</div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="w-10 h-10 gradient-orange-pink rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Mail" size={20} className="text-white" />
              </div>
              <div className="text-sm font-semibold mb-1">Email</div>
              <div className="text-xs text-muted-foreground">info@fin-formula.ru</div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="w-10 h-10 gradient-purple-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Clock" size={20} className="text-white" />
              </div>
              <div className="text-sm font-semibold mb-1">Время ответа</div>
              <div className="text-xs text-muted-foreground">1-2 рабочих дня</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="gradient-purple-blue text-white"
            >
              <Icon name="Home" size={20} />
              Вернуться на главную
            </Button>
            <Button
              onClick={() => navigate('/#services')}
              size="lg"
              variant="outline"
            >
              <Icon name="Info" size={20} />
              Узнать о услугах
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
