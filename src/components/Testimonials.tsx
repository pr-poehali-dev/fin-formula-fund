import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Алексей Морозов',
      role: 'ООО "ТехПром"',
      text: 'Получили финансирование для расширения производства за 3 дня. Банки бы рассматривали заявку месяцами. Условия прозрачные, без скрытых комиссий.',
      rating: 5
    },
    {
      name: 'Елена Соколова',
      role: 'ИП Соколова Е.А.',
      text: 'Размещаю свободные средства в КПК уже 2 года. Доходность стабильно выше банковских депозитов на 4-5%. Полностью доверяю фонду.',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      role: 'ООО "СтройГрупп"',
      text: 'Взяли финансирование на закупку оборудования. Условия гибкие, учли особенности нашего бизнеса. Спасибо за профессионализм!',
      rating: 5
    },
    {
      name: 'Ирина Белова',
      role: 'ООО "МедПлюс"',
      text: 'Стали членами фонда по рекомендации партнеров. Оценили прозрачность и участие в управлении. Теперь рекомендуем сами!',
      rating: 5
    },
    {
      name: 'Сергей Новиков',
      role: 'ООО "АвтоТрейд"',
      text: 'Быстрое решение по финансированию помогло не упустить выгодную сделку. В банке бы не успели. Очень довольны сотрудничеством!',
      rating: 5
    },
    {
      name: 'Мария Кузнецова',
      role: 'ООО "КомфортДом"',
      text: 'Размещаем корпоративные средства в КПК. Доходность отличная, выплаты всегда вовремя. Надежный финансовый партнер для бизнеса.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Отзывы <span className="text-gradient">участников</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-4">
            Более 50 компаний доверяют нам свое финансовое развитие
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card 
              key={idx} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-4 md:pt-6 pb-4 md:pb-6">
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full gradient-purple-blue flex items-center justify-center text-white font-bold text-sm md:text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20">
            <CardContent className="pt-4 md:pt-6 pb-4 md:pb-6">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full gradient-purple-blue flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-white md:w-8 md:h-8" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">98% удовлетворенность</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Наши участники рекомендуют КПК "ФИН ФОРМУЛА" своим партнерам
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}