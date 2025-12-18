import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const KEY_RATE = 16.5;

export default function LoanCalculator() {
  const [amount, setAmount] = useState(500000);
  const [months, setMonths] = useState(12);
  const [interest, setInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const rate = KEY_RATE + 10;
    const monthlyRate = rate / 12 / 100;
    const calculatedInterest = amount * monthlyRate * months;
    const total = amount + calculatedInterest;
    const monthly = total / months;
    
    setInterest(calculatedInterest);
    setTotalPayment(total);
    setMonthlyPayment(monthly);
  }, [amount, months]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(num);
  };

  const currentRate = KEY_RATE + 10;

  return (
    <Card className="max-w-2xl mx-auto hover:shadow-2xl transition-shadow">
      <CardHeader>
        <div className="flex items-start gap-2 md:gap-3 mb-2">
          <div className="w-10 h-10 md:w-12 md:h-12 gradient-orange-pink rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon name="Calculator" size={20} className="text-white md:w-6 md:h-6" />
          </div>
          <div>
            <CardTitle className="text-lg md:text-2xl">Калькулятор займа</CardTitle>
            <CardDescription className="text-xs md:text-sm">Рассчитайте стоимость финансирования</CardDescription>
          </div>
        </div>
        <div className="bg-accent/10 rounded-lg p-2 md:p-3 mt-3 md:mt-4">
          <div className="flex items-center justify-between flex-wrap gap-1">
            <span className="text-xs md:text-sm text-muted-foreground">Ставка по займу:</span>
            <span className="text-base md:text-lg font-bold text-accent">{currentRate}% годовых</span>
          </div>
          <div className="text-xs text-muted-foreground mt-0.5 md:mt-1">
            Ключевая ставка ЦБ ({KEY_RATE}%) + 10%
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 md:space-y-6">
        <div className="space-y-2 md:space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <Label htmlFor="loan-amount" className="text-sm md:text-base">Сумма займа</Label>
            <Input
              id="loan-amount"
              type="text"
              value={formatNumber(amount)}
              onChange={(e) => {
                const value = e.target.value.replace(/[^\d]/g, '');
                setAmount(Number(value) || 0);
              }}
              className="w-full sm:w-36 md:w-40 text-right font-semibold text-sm md:text-base"
            />
          </div>
          <Slider
            value={[amount]}
            onValueChange={(value) => setAmount(value[0])}
            min={50000}
            max={10000000}
            step={50000}
            className="py-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>50 000 ₽</span>
            <span>10 000 000 ₽</span>
          </div>
        </div>

        <div className="space-y-2 md:space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="loan-months" className="text-sm md:text-base">Срок займа</Label>
            <div className="flex items-center gap-1 md:gap-2">
              <span className="font-semibold text-xl md:text-2xl text-accent">{months}</span>
              <span className="text-sm md:text-base text-muted-foreground">мес.</span>
            </div>
          </div>
          <Slider
            value={[months]}
            onValueChange={(value) => setMonths(value[0])}
            min={1}
            max={60}
            step={1}
            className="py-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1 месяц</span>
            <span>60 месяцев</span>
          </div>
        </div>

        <div className="border-t pt-4 md:pt-6 space-y-3 md:space-y-4">
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-950/20 dark:to-pink-950/20 rounded-xl p-4 md:p-6 space-y-3 md:space-y-4">
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm md:text-base text-muted-foreground">Ежемесячный платеж:</span>
              <span className="text-lg md:text-2xl font-bold text-gradient">
                {formatNumber(monthlyPayment)}
              </span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-sm md:text-base text-muted-foreground">Начисленные проценты:</span>
              <span className="text-base md:text-xl font-bold text-accent">
                {formatNumber(interest)}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 md:pt-3 border-t gap-2">
              <span className="text-sm md:text-base text-muted-foreground">Общая сумма к возврату:</span>
              <span className="text-xl md:text-3xl font-bold">
                {formatNumber(totalPayment)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-3 pt-2">
            <div className="text-center p-2 md:p-3 bg-muted/50 rounded-lg">
              <div className="text-xs text-muted-foreground mb-0.5 md:mb-1">Сумма займа</div>
              <div className="font-bold text-xs md:text-sm">{formatNumber(amount)}</div>
            </div>
            <div className="text-center p-2 md:p-3 bg-muted/50 rounded-lg">
              <div className="text-xs text-muted-foreground mb-0.5 md:mb-1">Ставка</div>
              <div className="font-bold text-xs md:text-sm">{currentRate}%</div>
            </div>
            <div className="text-center p-2 md:p-3 bg-muted/50 rounded-lg">
              <div className="text-xs text-muted-foreground mb-0.5 md:mb-1">Период</div>
              <div className="font-bold text-xs md:text-sm">{months} мес.</div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 md:p-4 flex gap-2 md:gap-3">
          <Icon name="Info" size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs md:text-sm text-amber-900 dark:text-amber-100">
            <strong>Важно:</strong> Расчет является предварительным. Точные условия финансирования обсуждаются индивидуально с менеджером фонда.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}