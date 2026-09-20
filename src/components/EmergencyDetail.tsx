import { useLanguage } from '@/i18n/LanguageContext';
import { EmergencyIcon } from './EmergencyIcon';
import { emergencies } from '@/data/emergencies';
import { emergenciesFa } from '@/data/emergenciesFa';
import { Phone, AlertTriangle, XCircle, ChevronLeft, ChevronRight, PhoneCall, LifeBuoy } from 'lucide-react';

interface EmergencyDetailProps {
  id: string;
  onBack: () => void;
}

export function EmergencyDetail({ id, onBack }: EmergencyDetailProps) {
  const { lang, t, dir } = useLanguage();
  const data = lang === 'fa' ? emergenciesFa[id] : emergencies[id];
  const enData = emergencies[id];
  const BackIcon = dir === 'rtl' ? ChevronRight : ChevronLeft;
  const isMentalHealth = enData.category === 'mental-health';

  return (
    <div className="mx-auto max-w-2xl px-4 pb-24 pt-4">
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-slate-50 hover:text-slate-800"
      >
        <BackIcon className="h-4 w-4" />
        {t.back}
      </button>

      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <div className="flex items-center gap-4">
          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${isMentalHealth ? 'from-violet-50 to-violet-100/50 text-violet-600' : 'from-teal-50 to-sky-50 text-teal-600'}`}>
            <EmergencyIcon name={enData.icon} className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 leading-tight">{data.title}</h1>
            <p className="mt-0.5 text-sm text-slate-500">{data.subtitle}</p>
          </div>
        </div>

        {data.warning && (
          <div className={`mt-5 flex items-start gap-3 rounded-2xl p-4 ring-1 ${isMentalHealth ? 'bg-violet-50 ring-violet-100' : 'bg-amber-50 ring-amber-100'}`}>
            <AlertTriangle className={`mt-0.5 h-5 w-5 flex-shrink-0 ${isMentalHealth ? 'text-violet-500' : 'text-amber-500'}`} />
            <p className={`text-sm font-medium ${isMentalHealth ? 'text-violet-800' : 'text-amber-800'}`}>{data.warning}</p>
          </div>
        )}

        <div className="mt-6 space-y-4">
          {data.steps.map((step, idx) => (
            <div
              key={idx}
              className="flex gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
                {idx + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.detail}</p>
                {step.warning && (
                  <p className="mt-2 text-xs font-semibold text-amber-600">
                    ⚠ {step.warning}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {data.whenToCall && (
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-rose-50 p-4 ring-1 ring-rose-100">
            <PhoneCall className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-500" />
            <div>
              <h3 className="text-sm font-bold text-rose-800">{t.whenToCall}</h3>
              <p className="mt-1 text-sm text-rose-700">{data.whenToCall}</p>
              <div className="mt-3 flex items-start gap-2 rounded-xl bg-rose-100/60 p-3 ring-1 ring-rose-200">
                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-600" />
                <p className="text-xs font-semibold text-rose-800">{t.whenToCallWarning}</p>
              </div>
            </div>
          </div>
        )}

        {data.hotline && (
          <div className="mt-4 flex items-start gap-3 rounded-2xl bg-violet-50 p-4 ring-1 ring-violet-100">
            <LifeBuoy className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-500" />
            <div>
              <h3 className="text-sm font-bold text-violet-800">{t.hotline}</h3>
              <p className="mt-1 text-sm text-violet-700">{data.hotline}</p>
            </div>
          </div>
        )}

        {data.doNot && data.doNot.length > 0 && (
          <div className="mt-6">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-800">
              <XCircle className="h-5 w-5 text-rose-500" />
              {t.doNotList}
            </h2>
            <ul className="space-y-2">
              {data.doNot.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 rounded-xl bg-rose-50 p-3 text-sm font-medium text-rose-700 ring-1 ring-rose-100"
                >
                  <span className="mt-0.5 text-rose-400">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {!isMentalHealth && (
        <a
          href="tel:102"
          className="fixed bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-2xl bg-rose-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-rose-500/30 transition-colors hover:bg-rose-600 active:scale-[0.98] sm:w-auto"
        >
          <Phone className="h-5 w-5" />
          {t.callEmergencyFull} ({t.emergencyNumber})
        </a>
      )}
    </div>
  );
}
