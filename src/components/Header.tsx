import { useLanguage } from '@/i18n/LanguageContext';
import { Globe, Menu, X, Phone } from 'lucide-react';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full bg-white/80 p-1 shadow-sm ring-1 ring-slate-200 backdrop-blur">
      <Globe className="mx-1 h-4 w-4 text-slate-400" />
      <button
        onClick={() => setLang('en')}
        className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
          lang === 'en'
            ? 'bg-teal-500 text-white'
            : 'text-slate-500 hover:text-slate-700'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('fa')}
        className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
          lang === 'fa'
            ? 'bg-teal-500 text-white'
            : 'text-slate-500 hover:text-slate-700'
        }`}
      >
        دری
      </button>
    </div>
  );
}

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-sky-500 text-white shadow-sm">
            <span className="text-lg font-bold">+</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-slate-800">{t.appName}</p>
            <p className="text-xs leading-tight text-slate-400">{t.appTagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a
            href="tel:102"
            className="flex h-10 items-center gap-1.5 rounded-full bg-rose-500 px-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-rose-600 active:scale-[0.98]"
            aria-label={t.callEmergencyFull}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{t.emergencyNumber}</span>
          </a>
          <button
            onClick={onMenuClick}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-slate-50"
            aria-label={t.menu}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (view: 'home' | 'offline-sharing' | 'about') => void;
}

export function MenuDrawer({ open, onClose, onNavigate }: MenuDrawerProps) {
  const { t, dir } = useLanguage();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} z-50 h-full w-80 max-w-[85vw] transform bg-white shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : dir === 'rtl' ? '-translate-x-full' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 p-4">
          <h2 className="text-lg font-bold text-slate-800">{t.menu}</h2>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
            aria-label={t.close}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4">
          <button
            onClick={() => onNavigate('home')}
            className="mb-2 flex w-full items-center gap-3 rounded-2xl p-3 text-start font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <span className="text-lg">🏠</span>
            </span>
            {t.home}
          </button>
          <button
            onClick={() => onNavigate('offline-sharing')}
            className="mb-2 flex w-full items-center gap-3 rounded-2xl p-3 text-start font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
              <span className="text-lg">📱</span>
            </span>
            {t.offlineSharing}
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="mb-2 flex w-full items-center gap-3 rounded-2xl p-3 text-start font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600">
              <span className="text-lg">ℹ️</span>
            </span>
            {t.about}
          </button>
        </nav>
        <div className="px-4">
          <div className="rounded-2xl bg-teal-50 p-4 text-center ring-1 ring-teal-100">
            <p className="text-sm font-semibold text-teal-700">{t.offlineReady}</p>
            <p className="mt-1 text-xs text-teal-600">{t.offlineReadyDesc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
