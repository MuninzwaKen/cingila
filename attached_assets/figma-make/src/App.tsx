import { useState } from 'react';
import { WebWireframe } from './components/WebWireframe';
import { MobileWireframe } from './components/MobileWireframe';
import { Monitor, Smartphone } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<'web' | 'mobile'>('web');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-white mb-2">Cingila: Your Property Management AI Assistant</h1>
          <p className="text-slate-400 mb-6">Web & Mobile Wireframes</p>
          
          <div className="inline-flex gap-2 bg-slate-800/50 p-1 rounded-lg border border-slate-700">
            <button
              onClick={() => setView('web')}
              className={`px-6 py-2 rounded-md flex items-center gap-2 transition-all ${
                view === 'web'
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              Web App
            </button>
            <button
              onClick={() => setView('mobile')}
              className={`px-6 py-2 rounded-md flex items-center gap-2 transition-all ${
                view === 'mobile'
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile App
            </button>
          </div>
        </div>

        {view === 'web' ? <WebWireframe /> : <MobileWireframe />}
      </div>
    </div>
  );
}
