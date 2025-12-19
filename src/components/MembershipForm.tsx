import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface MembershipFormProps {
  children: React.ReactNode;
}

export default function MembershipForm({ children }: MembershipFormProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    inn: '',
    phone: '',
    fullName: ''
  });

  const formatINN = (value: string) => {
    return value.replace(/\D/g, '').slice(0, 12);
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length === 0) return '';
    if (cleaned.length <= 1) return `+7 (${cleaned}`;
    if (cleaned.length <= 4) return `+7 (${cleaned.slice(1)}`;
    if (cleaned.length <= 7) return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4)}`;
    if (cleaned.length <= 9) return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleINNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatINN(e.target.value);
    setFormData({ ...formData, inn: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://functions.poehali.dev/427a83bd-614a-45b4-9f59-ae24429bd021', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setFormData({ inn: '', phone: '', fullName: '' });
        setOpen(false);
        navigate('/thank-you');
      } else {
        alert('Ошибка при отправке заявки. Попробуйте позже.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ошибка при отправке заявки. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidINN = formData.inn.length === 10 || formData.inn.length === 12;
  const isValidPhone = formData.phone.replace(/\D/g, '').length === 11;
  const isFormValid = isValidINN && isValidPhone && formData.fullName.trim().length >= 3;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 gradient-purple-blue rounded-xl flex items-center justify-center">
              <Icon name="UserPlus" size={24} className="text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl">Заявка на членство</DialogTitle>
              <DialogDescription>
                Заполните форму для вступления в КПК
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="inn" className="text-base">
              ИНН организации (ИП) <span className="text-destructive">*</span>
            </Label>
            <Input
              id="inn"
              type="text"
              placeholder="1234567890 или 123456789012"
              value={formData.inn}
              onChange={handleINNChange}
              className="text-base"
              required
            />
            <p className="text-xs text-muted-foreground">
              10 цифр для ИП или 12 цифр для организации
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base">
              Номер телефона <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-base">
              ФИО контактного лица <span className="text-destructive">*</span>
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Иванов Иван Иванович"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="text-base"
              required
            />
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex gap-3">
            <Icon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900 dark:text-blue-100">
              После отправки заявки наш менеджер свяжется с вами для обсуждения условий вступления и размера паевого взноса.
            </div>
          </div>

          <Button
            type="submit"
            className="w-full gradient-purple-blue text-white"
            size="lg"
            disabled={!isFormValid || isSubmitting}
          >
            <Icon name={isSubmitting ? "Loader2" : "Send"} size={20} className={isSubmitting ? "animate-spin" : ""} />
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </Button>

          {!isFormValid && (
            <p className="text-xs text-center text-muted-foreground">
              Заполните все обязательные поля корректно
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}