import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import MembershipForm from './MembershipForm';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: 'О фонде', href: '#about', icon: 'Building2' },
    { label: 'Услуги', href: '#services', icon: 'Briefcase' },
    { label: 'Преимущества', href: '#advantages', icon: 'Star' },
    { label: 'Членство', href: '#membership', icon: 'Users' },
    { label: 'FAQ', href: '#faq', icon: 'HelpCircle' },
    { label: 'Контакты', href: '#contact', icon: 'Phone' }
  ];

  const handleMenuClick = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-purple-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ФФ</span>
            </div>
            <div className="text-left">
              <div className="font-bold">КПК "ФИН ФОРМУЛА"</div>
              <div className="text-xs text-muted-foreground font-normal">Меню навигации</div>
            </div>
          </SheetTitle>
        </SheetHeader>
        
        <nav className="flex flex-col gap-2 mt-8">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleMenuClick(item.href)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-left"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={item.icon as any} size={18} className="text-primary" />
              </div>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-6 pt-6 border-t">
          <MembershipForm>
            <Button className="w-full gradient-purple-blue text-white" size="lg">
              <Icon name="UserPlus" size={20} />
              Стать членом
            </Button>
          </MembershipForm>
        </div>

        <div className="mt-6 pt-6 border-t space-y-3">
          <div className="text-sm text-muted-foreground font-semibold mb-3">Контакты</div>
          <div className="flex items-center gap-2 text-sm">
            <Icon name="Phone" size={16} className="text-primary" />
            <span>+7 (___) ___-__-__</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon name="Mail" size={16} className="text-primary" />
            <span>info@fin-formula.ru</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
