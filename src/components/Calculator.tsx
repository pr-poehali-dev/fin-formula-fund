import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const KEY_RATE = 16.5;

export default function Calculator() {
  const [amount, setAmount] = useState(500000);
  const [months, setMonths] = useState(6);
  const [income, setIncome] = useState(0);
  const [totalReturn, setTotalReturn] = useState(0);

  useEffect(() => {
    const rate = KEY_RATE + 2;
    const monthlyRate = rate / 12 / 100;
    const calculatedIncome = amount * monthlyRate * months;
    const total = amount + calculatedIncome;
    
    setIncome(calculatedIncome);
    setTotalReturn(total);
  }, [amount, months]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(num);
  };

  const currentRate = KEY_RATE + 2;

  return (
    <Card className="max-w-2xl mx-auto hover:shadow-2xl transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 gradient-purple-blue rounded-xl flex items-center justify-center">
            <Icon name="Calculator" size={24} className="text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl">Калькулятор доходности</CardTitle>
            <CardDescription>Рассчитайте доход от размещения средств</CardDescription>
          </div>
        </div>
        <div className="bg-primary/10 rounded-lg p-3 mt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Ставка размещения:</span>
            <span className="text-lg font-bold text-primary">{currentRate}% годовых</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Ключевая ставка ЦБ ({KEY_RATE}%) + 2%
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="amount" className="text-base">Сумма размещения</Label>
            <Input
              id="amount"
              type="text"
              value={formatNumber(amount)}
              onChange={(e) => {
                const value = e.target.value.replace(/[^\d]/g, '');
                setAmount(Number(value) || 0);
              }}
              className="w-40 text-right font-semibold"
            />
          </div>
          <Slider
            value={[amount]}
            onValueChange={(value) => setAmount(value[0])}
            min={100000}
            max={10000000}
            step={50000}
            className="py-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>100 000 ₽</span>
            <span>10 000 000 ₽</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="months" className="text-base">Срок размещения</Label>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-2xl text-primary">{months}</span>
              <span className="text-muted-foreground">мес.</span>
            </div>
          </div>
          <Slider
            value={[months]}
            onValueChange={(value) => setMonths(value[0])}
            min={3}
            max={12}
            step={1}
            className="py-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>3 месяца</span>
            <span>12 месяцев</span>
          </div>
        </div>

        <div className="border-t pt-6 space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Ваш доход:</span>
              <span className="text-2xl font-bold text-gradient">
                {formatNumber(income)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Сумма к возврату:</span>
              <span className="text-3xl font-bold">
                {formatNumber(totalReturn)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">В месяц</div>
              <div className="font-bold text-sm">{formatNumber(income / months)}</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">Ставка</div>
              <div className="font-bold text-sm">{currentRate}%</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">Период</div>
              <div className="font-bold text-sm">{months} мес.</div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 flex gap-3">
          <Icon name="Info" size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-900 dark:text-amber-100">
            <strong>Важно:</strong> Расчет является предварительным. Точные условия размещения обсуждаются индивидуально с менеджером фонда.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}