import { useLanguage } from '@/i18n/LanguageContext';
import { Info, ShieldCheck, AlertTriangle, User } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-4">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
            <Info className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-bold text-slate-800">{t.about}</h1>
        </div>

        <p className="text-sm leading-relaxed text-slate-600">{t.aboutDesc}</p>

        <div className="mt-6 rounded-2xl bg-teal-50 p-5 ring-1 ring-teal-100">
          <div className="mb-3 flex items-center gap-2">
            <User className="h-5 w-5 text-teal-600" />
            <h2 className="text-base font-bold text-teal-800">{t.aboutCreator}</h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">{t.aboutCreatorBio}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{t.aboutCreatorBio2}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{t.aboutCreatorBio3}</p>
        </div>

        <div className="mt-6 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-200">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <h2 className="text-base font-bold text-amber-800">{t.aboutImportantNotice}</h2>
          </div>
          <p className="text-sm leading-relaxed text-amber-900">{t.aboutNoticeText}</p>
          <p className="mt-3 text-sm leading-relaxed text-amber-900">{t.aboutNoticeText2}</p>
          <p className="mt-3 text-sm leading-relaxed text-amber-900">{t.aboutNoticeText3}</p>
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-teal-50 p-4 ring-1 ring-teal-100">
          <ShieldCheck className="h-5 w-5 flex-shrink-0 text-teal-600" />
          <p className="text-sm font-medium text-teal-700">{t.savedOffline}</p>
        </div>
      </div>
    </div>
  );
}
