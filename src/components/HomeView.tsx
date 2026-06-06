import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  ArrowRight, 
  TrendingUp, 
  ShieldAlert, 
  Building2, 
  Coins, 
  MessageSquare,
  Sparkles,
  ChevronRight,
  Calculator,
  UserCheck,
  Presentation
} from 'lucide-react';
import { FOUNDER_BIO, INVESTOR_OPTIONS } from '../data';
import logoImg from '../assets/images/water_logo_1779663340138.png';

interface HomeViewProps {
  onNavigate: (tab: 'products' | 'sponsor' | 'contact' | 'deck') => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [investAmt, setInvestAmt] = useState<number>(150000);
  const [showBioDetails, setShowBioDetails] = useState<boolean>(false);

  // Calculated metrics
  const affiliateCommission = Math.floor(investAmt * 0.4); // 40%
  const sharesEstimate = Math.floor(investAmt / 1.5); // Arbitrary formula representing high value returns

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Header Card */}
      <div className="relative overflow-hidden rounded-3xl p-6 md:p-8 cosmic-card cosmic-card-glow border border-cyan-500/10">
        <div className="absolute top-0 right-0 w-64 h-64 cosmic-orb-purple -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 cosmic-orb-cyan -ml-24 -mb-24 pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                GLOBAL PORTFOLIO SEED ROUND ACTIVE
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Water Suite <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400">Enterprises</span>
              </h1>
              
              <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed font-light font-sans">
                An investment-first social technology ecosystem solving global labor, education, accessibility, and celebration friction. Facilitating humanity`s transition to progress — <span className="text-cyan-300 font-medium font-mono">Elevation to Eden</span>.
              </p>
            </div>

            <div className="shrink-0 flex justify-center self-center md:self-auto">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-cyan-500/35 bg-slate-950 shadow-2xl p-1.5 shrink-0 flex items-center justify-center">
                  <img 
                    src={logoImg} 
                    alt="Water Enterprises Fluid Quantum Logo" 
                    className="w-full h-full object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800/60">
            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase font-mono tracking-wider">Suite Target</span>
              <p className="text-xl font-bold text-white font-mono">{INVESTOR_OPTIONS.seedRoundGoal}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase font-mono tracking-wider">Committed Capital</span>
              <p className="text-xl font-bold text-emerald-400 font-mono">{INVESTOR_OPTIONS.currentRaised}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase font-mono tracking-wider">Committed Partners</span>
              <p className="text-xl font-bold text-cyan-300 font-mono">{INVESTOR_OPTIONS.investorsCount} Global</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase font-mono tracking-wider">Min. Commitment</span>
              <p className="text-xl font-bold text-purple-400 font-mono">{INVESTOR_OPTIONS.minCommitment}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <button 
              id="cta-home-explore"
              onClick={() => onNavigate('products')}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium px-5 py-3 rounded-xl transition shadow-lg shadow-indigo-950/50 cursor-pointer text-xs uppercase tracking-wider font-mono font-bold"
            >
              Explore 9 Products
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button 
              id="cta-home-deck"
              onClick={() => onNavigate('deck')}
              className="flex items-center gap-2 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 px-5 py-3 rounded-xl transition bg-cyan-950/20 hover:bg-cyan-950/40 backdrop-blur cursor-pointer text-xs uppercase tracking-wider font-mono font-bold"
            >
              <Presentation className="w-3.5 h-3.5 text-cyan-400" />
              Interactive Pitch Deck
            </button>
            <button 
              id="cta-home-invest"
              onClick={() => onNavigate('sponsor')}
              className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 px-5 py-3 rounded-xl transition bg-slate-900/40 hover:bg-slate-900/70 backdrop-blur cursor-pointer text-xs uppercase tracking-wider font-mono"
            >
              Liquid Sponsor Portal
            </button>
          </div>
        </div>
      </div>

      {/* Trust & Integrity Alert Banner */}
      <div className="bg-amber-950/20 border border-amber-500/20 rounded-2xl p-4 flex gap-4 items-start">
        <ShieldAlert className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-sm font-semibold text-amber-300 uppercase tracking-wider font-mono">High-Trust Integrity Notice</h4>
          <p className="text-xs text-amber-200/80 leading-relaxed font-mono">
            To guard against fraudulent intermediaries and project sabotage, all active financial contributions must be directed exclusively through official channels personally verified under John Victor. Support our shared space directly.
          </p>
        </div>
      </div>

      {/* Main Grid: Vision Definition & Affiliate Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Interactive Investment / Affiliate Yield Calculator */}
        <div className="space-y-6 cosmic-card rounded-3xl p-6 border border-slate-800/80">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono">Affiliate & Equity Estimator</h2>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Every partner has direct access to the Stellarium Affiliate Program, rendering a <span className="text-emerald-400 font-bold">40% direct cash commission</span> on any funding referred to the Water Suite. Slide below to simulate your return or direct investment yield: this program is for the Stellarium Foundation which builds the Water Suite of products.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex justify-between items-center bg-slate-950/50 p-3 rounded-xl border border-slate-800/50">
              <span className="text-xs text-slate-300 font-mono uppercase">Capital Allocated:</span>
              <span className="text-lg font-bold text-cyan-400 font-mono">${investAmt.toLocaleString()} USD</span>
            </div>

            <input 
              id="calculator-slider"
              type="range" 
              min="25000" 
              max="1000000" 
              step="25000"
              value={investAmt} 
              onChange={(e) => setInvestAmt(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>$25K (Min)</span>
              <span>$500K</span>
              <span>$1.0M</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-mono">40% Affiliate Reward</span>
              <p className="text-lg font-bold text-emerald-400 font-mono">${affiliateCommission.toLocaleString()}</p>
              <p className="text-[9px] text-slate-500">Paid out instantly upon confirmation of funds.</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-mono">Water Suite Shares</span>
              <p className="text-lg font-bold text-purple-400 font-mono">{sharesEstimate.toLocaleString()} units</p>
              <p className="text-[9px] text-slate-500">Subject to board equity allotment terms.</p>
            </div>
          </div>

          <div className="bg-slate-950/40 p-4 rounded-2xl border border-slate-800/40 space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Unlocked Strategic Benefits</h4>
            <ul className="text-[11px] text-slate-400 space-y-1 list-disc list-inside">
              <li>Mansion Residency: Access to our physical shared innovation hub.</li>
              <li>Cast-In-Person privileges with founder John Victor.</li>
              <li>Custom enterprise support from our digital AI Lawyer agent.</li>
            </ul>
          </div>
          <button 
            id="simulate-pitch-cta"
            onClick={() => onNavigate('contact')}
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 cursor-pointer"
          >
            Submit Proposal with this Allocation
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Visionary Framework (Elevation to Eden) */}
        <div className="space-y-6 cosmic-card rounded-3xl p-6 border border-slate-800/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-indigo-400" />
              <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono">Elevation To Eden Framework</h2>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              We stand at the pivot point of history: For the first time, the means of abundance—food, shelter, medicine, and social Liquidity—can be decoupled from the toil of human hands. 
            </p>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              By deploying specialized electromechanical agents, autonomous digital companies, and VR teleoperated bionic hardware, the Water Suite systematically transforms human effort.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-cyan-950/50 text-cyan-400 shrink-0">
                  <Coins className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-200">Abundance of Goods</h4>
                  <p className="text-[11px] text-slate-400">Zero material scarcity through robot-led manufacturing and cheap energy production.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-indigo-950/50 text-indigo-400 shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-200">Autonomous Ecosystems</h4>
                  <p className="text-[11px] text-slate-400">Symbiotic multi-agent systems designed as complete, self-sustaining businesses.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 border border-indigo-500/10 p-4 rounded-2xl flex items-center justify-between gap-4 mt-6">
            <div className="space-y-1">
              <p className="text-xs font-medium text-slate-200">Ready to examine the full scope?</p>
              <p className="text-[10px] text-slate-400">See specifications, technical architecture metrics, and statuses.</p>
            </div>
            <button 
              id="go-to-projects-button"
              onClick={() => onNavigate('products')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-medium whitespace-nowrap cursor-pointer transition"
            >
              See Products
            </button>
          </div>
        </div>
      </div>

      {/* Foundational Principles (In the middle of the page) */}
      <div className="space-y-4 pt-4">
        <div className="text-center md:text-left space-y-1">
          <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest block">FOUNDATIONAL COVENANT</span>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider font-mono">The Seven Covenant Principles of Stellarium</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 space-y-2">
            <span className="text-cyan-400 font-bold text-sm block">∆ Principle I</span>
            <p className="text-slate-300 text-xs font-light leading-relaxed">Each individual possesses the innate ability to thrive on their own interests and pursuits.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 space-y-2">
            <span className="text-cyan-400 font-bold text-sm block">∆ Principle II</span>
            <p className="text-slate-300 text-xs font-light leading-relaxed">Wealth is above all the biggest and most important metric, therefore generate wealth.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 space-y-2">
            <span className="text-cyan-400 font-bold text-sm block">∆ Principle III</span>
            <p className="text-slate-300 text-xs font-light leading-relaxed">The duty of every one is to be a peacemaker; peace and wealth walk in one accord.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 space-y-2">
            <span className="text-cyan-400 font-bold text-sm block">∆ Principle IV</span>
            <p className="text-slate-300 text-xs font-light leading-relaxed font-mono">War is anti-wealth, conflict is anti-peace.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 space-y-2">
            <span className="text-cyan-400 font-bold text-sm block">∆ Principle V</span>
            <p className="text-slate-300 text-xs font-light leading-relaxed">Improving and serving people creates wealth.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 space-y-2">
            <span className="text-cyan-400 font-bold text-sm block">∆ Principle VI</span>
            <p className="text-slate-300 text-xs font-light leading-relaxed">Human creativity and ingenuity drive innovation.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 lg:col-span-3 space-y-2">
            <span className="text-emerald-400 font-bold text-sm block">∆ The Universal Law</span>
            <p className="text-slate-200 text-xs font-light leading-relaxed italic">"Do Good, Make Money, Have Fun." — An uncompromising lifestyle of value, connection, and societal prosperity.</p>
          </div>
        </div>
      </div>

      {/* Founder Biography & Wisdom Laws */}
      <div className="cosmic-card rounded-2xl border border-slate-800/80 p-6 space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800/60 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white text-lg shadow-md shadow-indigo-900/30">
              JV
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{FOUNDER_BIO.name}</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-mono">{FOUNDER_BIO.title}</p>
            </div>
          </div>
          <button 
            id="toggle-bio-button"
            onClick={() => setShowBioDetails(!showBioDetails)}
            className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono uppercase tracking-wider cursor-pointer"
          >
            {showBioDetails ? 'Hide Masterclass Profile' : 'View Masterclass Profile'}
            <ChevronRight className={`w-4 h-4 transition-transform ${showBioDetails ? 'rotate-90' : ''}`} />
          </button>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed font-light">
          "{FOUNDER_BIO.anointing}"
        </p>

        <AnimatePresence>
          {showBioDetails && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden space-y-4"
            >
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-900 space-y-2 text-slate-300 text-xs font-light leading-relaxed">
                <p>{FOUNDER_BIO.about}</p>
                <p className="pt-2 font-mono text-cyan-300 text-[10px]">
                  * Core Philosophy: "Every system can be better if we align the underlying incentives correctly."
                </p>
              </div>

              {/* The Three Laws */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
                {FOUNDER_BIO.principles.map((p, idx) => (
                  <div key={idx} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/80 space-y-1">
                    <h5 className="font-bold text-white uppercase tracking-wider flex items-center gap-1">
                      <span className="text-cyan-400">∆</span> {p.title}
                    </h5>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{p.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
