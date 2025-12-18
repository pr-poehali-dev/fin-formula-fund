import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Calculator from '@/components/Calculator';
import LoanCalculator from '@/components/LoanCalculator';
import MembershipForm from '@/components/MembershipForm';
import MobileMenu from '@/components/MobileMenu';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const services = [
    {
      icon: 'TrendingUp',
      title: 'Разместить средства',
      description: 'Получайте доход выше банковских депозитов при размещении свободных денежных средств',
      features: ['Высокие ставки', 'Прозрачность условий', 'Гибкие сроки'],
      gradient: 'gradient-purple-blue'
    },
    {
      icon: 'Wallet',
      title: 'Получить финансирование',
      description: 'Финансирование бизнеса без зависимости от банковских кредитов и их условий',
      features: ['Быстрое решение', 'Лояльные условия', 'Без залогов'],
      gradient: 'gradient-orange-pink'
    }
  ];

  const advantages = [
    { icon: 'Users', title: 'Объединение юр. лиц', text: 'Формирование фонда за счет паевых взносов участников' },
    { icon: 'Shield', title: 'Независимость', text: 'Финансирование без условий и ограничений банков' },
    { icon: 'Percent', title: 'Выгодные ставки', text: 'Доходность выше банковских депозитов' },
    { icon: 'Vote', title: 'Участие в управлении', text: 'Каждый член может влиять на решения фонда' },
    { icon: 'FileText', title: 'Прозрачность', text: 'Полная отчетность и открытость операций' },
    { icon: 'Zap', title: 'Быстрые решения', text: 'Оперативное рассмотрение заявок' }
  ];

  const stats = [
    { value: '2016', label: 'Год основания' },
    { value: '100+ млн', label: 'Активы фонда' },
    { value: '50+', label: 'Участников' },
    { value: '98%', label: 'Удовлетворенность' }
  ];

  const faqItems = [
    {
      q: 'Кто может стать членом КПК?',
      a: 'Членом кооператива может стать любое юридическое лицо, готовое внести паевой взнос и соблюдать устав фонда.'
    },
    {
      q: 'Какой размер паевого взноса?',
      a: 'Размер паевого взноса зависит от условий членства. Подробную информацию можно получить, связавшись с нами.'
    },
    {
      q: 'Какая доходность при размещении средств?',
      a: 'Ставки по размещению средств превышают банковские депозиты и зависят от суммы и срока размещения.'
    },
    {
      q: 'Как быстро можно получить финансирование?',
      a: 'Решение по заявке принимается в течение 3-5 рабочих дней после предоставления всех документов.'
    },
    {
      q: 'Нужен ли залог для получения финансирования?',
      a: 'Условия финансирования определяются индивидуально. Для членов кооператива возможно финансирование без залога.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-purple-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ФФ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">КПК "ФИН ФОРМУЛА"</h1>
              <p className="text-xs text-muted-foreground">Фонд финансирования бизнеса</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О фонде</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#membership" className="text-sm font-medium hover:text-primary transition-colors">Членство</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-2">
            <MembershipForm>
              <Button className="gradient-purple-blue text-white hidden md:flex">
                Стать членом
              </Button>
            </MembershipForm>
            <MobileMenu />
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-purple-blue opacity-5"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Финансирование бизнеса{' '}
              <span className="text-gradient">без границ</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              КПК "ФИН ФОРМУЛА" — объединение юридических лиц для взаимного финансирования и развития бизнеса с 2016 года
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gradient-purple-blue text-white">
                <Icon name="TrendingUp" size={20} />
                Разместить средства
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <Icon name="Wallet" size={20} />
                Получить финансирование
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <Card key={idx} className="text-center animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О фонде</h2>
            <p className="text-lg text-muted-foreground">
              Мы создаем условия для роста вашего бизнеса через взаимное финансирование
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 gradient-purple-blue rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <CardTitle>Что такое КПК?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Кредитный потребительский кооператив — это объединение юридических лиц, которые формируют фонд за счет паевых взносов. Члены кооператива могут получать финансирование на развитие бизнеса без зависимости от банковских условий.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 gradient-orange-pink rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <CardTitle>Наша миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Обеспечить доступное финансирование для развития бизнеса и создать выгодные условия для размещения свободных средств участников с гарантией прозрачности и надежности.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">
              Два направления для роста вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {services.map((service, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className={`h-2 ${service.gradient}`}></div>
                <CardHeader>
                  <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-4 animate-float`}>
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${service.gradient} text-white`}>
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Calculator />
            <LoanCalculator />
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Преимущества фонда</h2>
            <p className="text-lg text-muted-foreground">
              Почему стоит выбрать КПК "ФИН ФОРМУЛА"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-all hover:-translate-y-1 group">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 gradient-purple-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={adv.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground">{adv.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Условия членства</h2>
            <p className="text-lg text-muted-foreground">
              Присоединяйтесь к сообществу активных предпринимателей
            </p>
          </div>

          <Card className="hover:shadow-2xl transition-shadow">
            <CardContent className="pt-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 gradient-purple-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="UserPlus" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Как стать членом</h3>
                    <p className="text-muted-foreground">
                      Для вступления в кооператив необходимо внести паевой взнос, который формирует фонд финансирования. Размер взноса и условия обсуждаются индивидуально.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 gradient-orange-pink rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Права участников</h3>
                    <p className="text-muted-foreground">
                      Каждый член кооператива имеет право на участие в управлении фондом, получение финансирования на развитие бизнеса и размещение свободных средств под выгодные проценты.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 gradient-purple-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Гарантии стабильности</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        Работаем с 2016 года
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        Активы фонда более 100 миллионов рублей
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        Полная прозрачность отчетности
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <MembershipForm>
                <Button className="w-full mt-8 gradient-purple-blue text-white" size="lg">
                  <Icon name="Send" size={20} />
                  Подать заявку на членство
                </Button>
              </MembershipForm>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на часто задаваемые вопросы
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Готовы обсудить сотрудничество? Оставьте заявку
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Наши контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-purple-blue rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Телефон</div>
                    <div className="font-semibold">+7 (800) 302-31-82</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-orange-pink rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold">info@ffrf.ru</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-purple-blue rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Адрес</div>
                    <div className="font-semibold">Шахты, пр-кт. Пушкина, д. 29а</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                  />
                  <Button type="submit" className="w-full gradient-purple-blue text-white">
                    <Icon name="Send" size={18} />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 gradient-purple-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">ФФ</span>
                </div>
                <div>
                  <div className="font-bold">КПК "ФИН ФОРМУЛА"</div>
                  <div className="text-sm text-gray-400">С 2016 года</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Кредитный потребительский кооператив для финансирования и развития бизнеса
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О фонде</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#advantages" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#membership" className="hover:text-white transition-colors">Членство</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (800) 302-31-82</li>
                <li>info@ffrf.ru</li>
                <li>Шахты, пр-кт. Пушкина, д. 29а</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2016-2025 КПК "ФИН ФОРМУЛА". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}