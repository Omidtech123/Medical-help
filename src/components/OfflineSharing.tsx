import { useLanguage } from '@/i18n/LanguageContext';
import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { WifiOff, Share2 } from 'lucide-react';

export function OfflineSharing() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const url = window.location.origin + window.location.pathname;
      QRCode.toCanvas(canvasRef.current, url, {
        width: 256,
        margin: 2,
        color: {
          dark: '#0f766e',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'H',
      }).catch(() => {});
    }
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-4">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
            <Share2 className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">{t.offlineSharing}</h1>
            <p className="text-sm text-slate-500">{t.scanToDownload}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-teal-50 to-sky-50 p-6 ring-1 ring-teal-100">
          <canvas ref={canvasRef} className="rounded-2xl bg-white p-3 shadow-sm" />
          <p className="text-center text-sm leading-relaxed text-slate-600">
            {t.offlineSharingDesc}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-teal-50 p-4 ring-1 ring-teal-100">
          <WifiOff className="h-5 w-5 flex-shrink-0 text-teal-600" />
          <p className="text-sm font-medium text-teal-700">{t.offlineReadyDesc}</p>
        </div>
      </div>
    </div>
  );
}
