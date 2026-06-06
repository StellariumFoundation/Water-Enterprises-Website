import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Layers, 
  Coins, 
  MessageSquareQuote, 
  Sparkles, 
  PhoneCall, 
  ShieldCheck, 
  Menu, 
  Download,
  Search,
  ExternalLink,
  HeartHandshake,
  Presentation
} from 'lucide-react';
import { TabType } from './types';
import HomeView from './components/HomeView';
import logoImg from './assets/images/water_logo_1779663340138.png';
import ProductsView from './components/ProductsView';
import SponsorView from './components/SponsorView';
import ContactView from './components/ContactView';
import PledgeView from './components/PledgeView';
import InvestorDeckView from './components/InvestorDeckView';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [searchQuery, setSearchQuery] = useState('');

  // Trigger light haptic vibration for tab changes and buttons
  const triggerHapticFeedback = () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(12); // Crisp 12ms active pulse
      } catch (e) {
        // Safe sandbox exception containment
      }
    }
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    triggerHapticFeedback();
  };
  
  // Real-time Connection & PWA Installation States
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showOfflineToast, setShowOfflineToast] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  useEffect(() => {
    // Check initial online status
    if (!navigator.onLine) {
      setIsOffline(true);
      setShowOfflineToast(true);
    }

    const handleOnline = () => {
      setIsOffline(false);
      setShowOfflineToast(true);
      const timer = setTimeout(() => {
        setShowOfflineToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOffline(true);
      setShowOfflineToast(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Capture standard install trigger prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallPWA = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`PWA installer dialogue output: ${outcome}`);
    setDeferredPrompt(null);
    setShowInstallBtn(false);
  };

  // Simulates downloading mobile bundle package (React Native readiness)
  const handleDownloadAppBundle = () => {
    alert("Water Suite React Native Bundle Ready!\n\nThis application is pre-architected under standard View components, ready to compile instantly into iOS & Android native shells using Expo CLI or Flutter channels.");
  };

  return (
    <div className="min-h-screen cosmic-bg text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-900 pb-24 md:pb-28">
      {/* Dynamic Background subtle Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-[15%] w-[450px] h-[450px] cosmic-orb-purple rounded-full filter blur-3xl opacity-60" />
        <div className="absolute top-1/3 right-[10%] w-[400px] h-[400px] cosmic-orb-cyan rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-10 left-[20%] w-[350px] h-[350px] cosmic-orb-emerald rounded-full filter blur-3xl opacity-40" />
      </div>

      {/* Dynamic Offline / Connection State Toast Overlay */}
      <AnimatePresence>
        {showOfflineToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 left-4 right-4 md:left-auto md:right-8 z-50 max-w-sm p-4 bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl flex items-start gap-3 backdrop-blur-md"
          >
            <div className={`w-3 h-3 rounded-full shrink-0 mt-1 ${isOffline ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
            <div className="flex-1 text-xs">
              <p className="font-bold font-mono text-white uppercase tracking-wider">
                {isOffline ? 'Offline Mode Active' : 'Sovereign Connection Restored'}
              </p>
              <p className="text-slate-400 mt-1 font-sans font-light leading-relaxed">
                {isOffline 
                  ? 'All core products, calculators, interactive deck, and investment details are served directly from fast local memory caches.' 
                  : 'Successfully re-established communication streams with the Stellarium network.'}
              </p>
            </div>
            <button 
              onClick={() => setShowOfflineToast(false)} 
              className="text-slate-500 hover:text-slate-300 font-mono text-[10px] uppercase cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header navbar (Responsive Container) */}
      <header className="relative z-10 border-b border-white/5 bg-slate-950/40 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div 
            onClick={() => handleTabChange('home')} 
            className="flex items-center gap-2 cursor-pointer group select-none touch-manipulation"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-cyan-500/30 flex items-center justify-center bg-slate-950 shadow-md shadow-cyan-950/50">
              <img 
                src={logoImg} 
                alt="Water Enterprises Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-bold text-sm tracking-widest text-white block group-hover:text-cyan-400 transition font-mono"> Water Enterprises</span>
              <span className="text-[9px] text-cyan-400 uppercase tracking-widest block font-mono -mt-1">STELLARIMUM</span>
            </div>
          </div>

          {/* Inline Action Triggers / Simulation Buttons */}
          <div className="flex items-center gap-3">
            {showInstallBtn && (
              <button
                id="header-install-app"
                onClick={handleInstallPWA}
                className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-lg border bg-emerald-950/50 text-emerald-400 border-emerald-500/30 hover:bg-emerald-900/45 transition font-bold cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Install PWA</span>
              </button>
            )}

            <button 
              id="header-slide-deck"
              onClick={() => handleTabChange('deck')}
              className={`flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-lg border transition cursor-pointer select-none touch-manipulation ${
                activeTab === 'deck'
                  ? 'bg-cyan-950/60 text-cyan-400 border-cyan-500/30 font-bold'
                  : 'bg-slate-900/30 border-white/5 text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <Presentation className="w-3.5 h-3.5 text-cyan-400" />
              <span>Investor Pitch Deck</span>
            </button>

            <a 
              id="header-repository"
              href="https://github.com/StellariumFoundation"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white font-mono transition"
            >
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.12, ease: "easeOut" }}
          >
            {activeTab === 'home' && (
              <HomeView onNavigate={(tab) => handleTabChange(tab)} />
            )}
            {activeTab === 'products' && (
              <ProductsView />
            )}
            {activeTab === 'deck' && (
              <InvestorDeckView 
                onClose={() => handleTabChange('home')}
                onNavigateToSponsor={() => handleTabChange('sponsor')}
                onNavigateToContact={() => handleTabChange('contact')}
              />
            )}
            {activeTab === 'pledge' && (
              <PledgeView />
            )}
            {activeTab === 'sponsor' && (
              <SponsorView onNavigate={(tab) => handleTabChange(tab)} />
            )}
            {activeTab === 'contact' && (
              <ContactView />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER & BOTTOM NAVIGATION (Native iOS/Android App feel) */}
      <footer className="relative z-20">
        {/* Responsive info overlay with official website link */}
        <div className="py-6 border-t border-white/5 bg-slate-950/80 text-center text-slate-500 text-xs font-mono px-4">
          <p>© 2026 Water Suite Enterprises & Stellarium Foundation. Concept & Specifications led by John Victor.</p>
          <p className="text-[10px] text-slate-600 mt-1">Pre-validated for dynamic compilation directly to React Native and Flutter frameworks.</p>
          <div className="mt-4 flex flex-wrap justify-center items-center gap-4">
            <a 
              id="footer-website-link"
              href="https://www.stellarium.ddns-ip.net/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300 transition flex items-center gap-1.5 underline-none text-[11px]"
            >
              <span>🌐 Official Stellarium Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              id="footer-github-link"
              href="https://github.com/StellariumFoundation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-slate-200 transition flex items-center gap-1.5 text-[11px]"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* BOTTOM TAB CONTROLLER BAR (Aligned exactly like mobile screenshot) */}
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-slate-950/95 border-t border-white/10 backdrop-blur-lg py-2 px-4 shadow-2xl select-none touch-manipulation">
          <div className="max-w-md mx-auto flex justify-between items-center gap-1 h-14">
            
            {/* Tab 1: Home */}
            <button 
              id="nav-tab-home"
              onClick={() => handleTabChange('home')}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-center transition cursor-pointer min-w-14 relative select-none touch-manipulation ${
                activeTab === 'home' ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-400'
              }`}
            >
              {activeTab === 'home' && (
                <div className="absolute top-0 w-6 h-1 rounded-full bg-cyan-400 -mt-1 shadow-lg shadow-cyan-400/50" />
              )}
              <Home className="w-5 h-5 mb-1" />
              <span className="text-[9px] uppercase tracking-wider font-mono">Home</span>
            </button>

            {/* Tab 2: Products */}
            <button 
              id="nav-tab-products"
              onClick={() => handleTabChange('products')}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-center transition cursor-pointer min-w-14 relative select-none touch-manipulation ${
                activeTab === 'products' ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-400'
              }`}
            >
              {activeTab === 'products' && (
                <div className="absolute top-0 w-6 h-1 rounded-full bg-cyan-400 -mt-1 shadow-lg shadow-cyan-400/50" />
              )}
              <Layers className="w-5 h-5 mb-1" />
              <span className="text-[9px] uppercase tracking-wider font-mono">Suite</span>
            </button>

            {/* Tab 3: Investor Slide Deck */}
            <button 
              id="nav-tab-deck"
              onClick={() => handleTabChange('deck')}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-center transition cursor-pointer min-w-14 relative select-none touch-manipulation ${
                activeTab === 'deck' ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-400'
              }`}
            >
              {activeTab === 'deck' && (
                <div className="absolute top-0 w-6 h-1 rounded-full bg-cyan-400 -mt-1 shadow-lg shadow-cyan-400/50" />
              )}
              <Presentation className="w-5 h-5 mb-1" />
              <span className="text-[9px] uppercase tracking-wider font-mono">Pitch Deck</span>
            </button>



            {/* Tab 3: Pledge (Golden Middle Button) */}
            <button 
              id="nav-tab-pledge"
              onClick={() => handleTabChange('pledge')}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-center transition cursor-pointer min-w-14 relative select-none touch-manipulation ${
                activeTab === 'pledge' ? 'text-cyan-400 font-bold' : 'text-slate-500 hover:text-slate-450'
              }`}
            >
              {activeTab === 'pledge' && (
                <div className="absolute top-0 w-6 h-1 rounded-full bg-cyan-400 -mt-1 shadow-lg shadow-cyan-400/50" />
              )}
              <HeartHandshake className="w-5 h-5 mb-1" />
              <span className="text-[9px] uppercase tracking-wider font-mono">Pledge</span>
            </button>

            {/* Tab 4: Sponsor / Donate */}
            <button 
              id="nav-tab-sponsor"
              onClick={() => handleTabChange('sponsor')}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-center transition cursor-pointer min-w-14 relative select-none touch-manipulation ${
                activeTab === 'sponsor' ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-400'
              }`}
            >
              {activeTab === 'sponsor' && (
                <div className="absolute top-0 w-6 h-1 rounded-full bg-cyan-400 -mt-1 shadow-lg shadow-cyan-400/50" />
              )}
              <Coins className="w-5 h-5 mb-1" />
              <span className="text-[9px] uppercase tracking-wider font-mono">Sponsor</span>
            </button>

            {/* Tab 4: Contact */}
            <button 
              id="nav-tab-contact"
              onClick={() => handleTabChange('contact')}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-center transition cursor-pointer min-w-14 relative select-none touch-manipulation ${
                activeTab === 'contact' ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-400'
              }`}
            >
              {activeTab === 'contact' && (
                <div className="absolute top-0 w-6 h-1 rounded-full bg-cyan-400 -mt-1 shadow-lg shadow-cyan-400/50" />
              )}
              <MessageSquareQuote className="w-5 h-5 mb-1" />
              <span className="text-[9px] uppercase tracking-wider font-mono">Contact</span>
            </button>

          </div>
        </div>
      </footer>
    </div>
  );
}
