import { useLanguage } from '@/i18n/LanguageContext';
import { EmergencyIcon } from './EmergencyIcon';
import { emergencies } from '@/data/emergencies';
import { emergenciesFa } from '@/data/emergenciesFa';
import type { Category } from '@/data/types';

interface EmergencyCardProps {
  id: string;
  onClick: () => void;
}

const categoryStyles: Record<Category, { ring: string; badge: string; iconBg: string; iconColor: string; labelKey: string }> = {
  critical: {
    ring: 'ring-rose-200 hover:ring-rose-300',
    badge: 'bg-rose-100 text-rose-700',
    iconBg: 'from-rose-50 to-rose-100/50',
    iconColor: 'text-rose-600',
    labelKey: 'critical',
  },
  urgent: {
    ring: 'ring-amber-200 hover:ring-amber-300',
    badge: 'bg-amber-100 text-amber-700',
    iconBg: 'from-amber-50 to-amber-100/50',
    iconColor: 'text-amber-600',
    labelKey: 'urgent',
  },
  guidance: {
    ring: 'ring-teal-200 hover:ring-teal-300',
    badge: 'bg-teal-100 text-teal-700',
    iconBg: 'from-teal-50 to-sky-50',
    iconColor: 'text-teal-600',
    labelKey: 'guidance',
  },
  'mental-health': {
    ring: 'ring-violet-200 hover:ring-violet-300',
    badge: 'bg-violet-100 text-violet-700',
    iconBg: 'from-violet-50 to-violet-100/50',
    iconColor: 'text-violet-600',
    labelKey: 'mentalHealth',
  },
};

export function EmergencyCard({ id, onClick }: EmergencyCardProps) {
  const { lang, t } = useLanguage();
  const data = lang === 'fa' ? emergenciesFa[id] : emergencies[id];
  const enData = emergencies[id];
  const styles = categoryStyles[enData.category];
  const urgencyLabel = t[styles.labelKey as keyof typeof t] as string;

  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-start gap-3 rounded-3xl bg-white p-5 text-start shadow-sm ring-1 ${styles.ring} transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400`}
    >
      <div className="flex w-full items-center justify-between">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${styles.iconBg} ${styles.iconColor} transition-colors`}>
          <EmergencyIcon name={enData.icon} className="h-7 w-7" />
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}>
          {urgencyLabel}
        </span>
      </div>
      <div className="mt-1">
        <h3 className="text-lg font-bold text-slate-800 leading-tight">{data.title}</h3>
        <p className="mt-1 text-sm text-slate-500 leading-snug">{data.subtitle}</p>
      </div>
      <span className="mt-auto flex items-center gap-1 text-sm font-medium text-teal-600">
        {t.tapToView}
      </span>
    </button>
  );
}
