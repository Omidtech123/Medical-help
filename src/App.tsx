import { useState, useMemo } from 'react';
import { LanguageProvider, useLanguage } from '@/i18n/LanguageContext';
import { Header, MenuDrawer } from '@/components/Header';
import { EmergencyCard } from '@/components/EmergencyCard';
import { EmergencyDetail } from '@/components/EmergencyDetail';
import { OfflineSharing } from '@/components/OfflineSharing';
import { About } from '@/components/About';
import { emergencies, emergencyOrder } from '@/data/emergencies';
import { emergenciesFa } from '@/data/emergenciesFa';
import { searchEmergencies } from '@/utils/search';
import type { Category } from '@/data/types';
import { Search, WifiOff, X, LifeBuoy } from 'lucide-react';

type View = 'home' | 'detail' | 'offline-sharing' | 'about';

const categoryOrder: Category[] = ['critical', 'urgent', 'guidance', 'mental-health'];

function CategorySection({ category, onOpen }: { category: Category; onOpen: (id: string) => void }) {
  const { lang, t } = useLanguage();
  const ids = emergencyOrder.filter((id) => emergencies[id].category === category);

  const labels: Record<Category, { title: string; desc: string; color: string }> = {
    critical: { title: t.critical, desc: t.criticalDesc, color: 'text-rose-600' },
    urgent: { title: t.urgent, desc: t.urgentDesc, color: 'text-amber-600' },
    guidance: { title: t.guidance, desc: t.guidanceDesc, color: 'text-teal-600' },
    'mental-health': { title: t.mentalHealth, desc: t.mentalHealthDesc, color: 'text-violet-600' },
  };

  const label = labels[category];

  return (
    <section className="mb-8">
      <div className="mb-4">
        <h2 className={`text-lg font-bold ${label.color}`}>{label.title}</h2>
        <p className="text-sm text-slate-400">{label.desc}</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {ids.map((id) => (
          <EmergencyCard key={id} id={id} onClick={() => onOpen(id)} />
        ))}
      </div>
    </section>
  );
}

function AppContent() {
  const { lang, t } = useLanguage();
  const [view, setView] = useState<View>('home');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  const searchResults = useMemo(() => {
    if (!search.trim()) return null;
    return searchEmergencies(search);
  }, [search]);

  const isSearching = search.trim().length > 0;

  const openDetail = (id: string) => {
    setSelectedId(id);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = (v: 'home' | 'offline-sharing' | 'about') => {
    setView(v);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setView('home');
    setSelectedId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-teal-50/30">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={navigate} />

      <main className="py-4">
        {view === 'home' && (
          <div className="mx-auto max-w-2xl px-4">
            <div className="mb-6 mt-2 text-center">
              <h1 className="text-2xl font-bold text-slate-800">{t.appName}</h1>
              <p className="mt-1 text-sm text-slate-500">{t.appTagline}</p>
            </div>

            <div className="mb-6 relative">
              <Search className="absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4 h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full rounded-2xl border-0 bg-white py-3.5 ltr:pl-12 rtl:pr-12 ltr:pr-12 rtl:pl-12 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200 transition-shadow focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              {isSearching && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-slate-500 transition-colors hover:bg-slate-300"
                  aria-label={t.clearSearch}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {isSearching ? (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500">
                    {searchResults?.length ?? 0} {t.showingResults}
                  </p>
                </div>
                {searchResults && searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {searchResults.map((id) => (
                      <EmergencyCard key={id} id={id} onClick={() => openDetail(id)} />
                    ))}
                  </div>
                ) : (
                  <p className="py-12 text-center text-slate-400">{t.noResults}</p>
                )}
              </div>
            ) : (
              <>
                {categoryOrder.map((cat) => (
                  <CategorySection key={cat} category={cat} onOpen={openDetail} />
                ))}

                <div className="mb-8 rounded-2xl bg-violet-50 p-4 ring-1 ring-violet-100">
                  <div className="flex items-start gap-3">
                    <LifeBuoy className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-500" />
                    <p className="text-sm font-medium text-violet-700">{t.mentalHealthNote}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 rounded-2xl bg-white/60 p-4 text-center ring-1 ring-slate-100">
                  <WifiOff className="h-4 w-4 text-teal-500" />
                  <p className="text-xs font-medium text-slate-500">{t.tapAnytime}</p>
                </div>
              </>
            )}
          </div>
        )}

        {view === 'detail' && selectedId && (
          <EmergencyDetail id={selectedId} onBack={goHome} />
        )}

        {view === 'offline-sharing' && <OfflineSharing />}
        {view === 'about' && <About />}
      </main>

      <footer className="border-t border-slate-100 py-6 text-center">
        <p className="text-xs text-slate-400">{t.notAMedicalProfessional}</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
