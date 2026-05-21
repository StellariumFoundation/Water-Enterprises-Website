import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Building2, 
  Sparkles, 
  Cpu, 
  GraduationCap, 
  FileText, 
  TrendingUp, 
  Activity, 
  UserCheck, 
  Lock, 
  ArrowRight,
  ShieldCheck, 
  HelpCircle,
  Users,
  DollarSign,
  Play,
  ExternalLink,
  Youtube,
  Tv
} from 'lucide-react';
import { WATER_PRODUCTS } from '../data';
import { WaterProduct } from '../types';

// Dynamic brand icon mapping
function getProductIcon(name: string) {
  const cn = "w-5 h-5";
  switch (name) {
    case 'Brain': return <Brain className={`${cn} text-cyan-400`} />;
    case 'Building2': return <Building2 className={`${cn} text-indigo-455`} />;
    case 'Sparkles': return <Sparkles className={`${cn} text-pink-400`} />;
    case 'Cpu': return <Cpu className={`${cn} text-emerald-450`} />;
    case 'GraduationCap': return <GraduationCap className={`${cn} text-purple-400`} />;
    case 'FileText': return <FileText className={`${cn} text-amber-400`} />;
    case 'TrendingUp': return <TrendingUp className={`${cn} text-rose-450`} />;
    case 'Activity': return <Activity className={`${cn} text-cyan-500`} />;
    case 'UserCheck': return <UserCheck className={`${cn} text-teal-400`} />;
    default: return <HelpCircle className={`${cn} text-slate-400`} />;
  }
}

// Maps products to high-fidelity embeds from the Stellarium Foundation ecosystem YouTube channel
function getProductVideoEmbed(id: string): { embedUrl: string; title: string; desc: string } {
  switch (id) {
    case 'water-ai':
      return {
        embedUrl: 'https://www.youtube.com/embed/bqFep-M9lGU',
        title: 'Water AI Presentation',
        desc: 'Official technical presentation of the Water AI cognitive orchestrator, intelligent ensemble routing, and autonomous agent coordination.'
      };
    case 'water-company':
      return {
        embedUrl: 'https://www.youtube.com/embed/2402A7KTNEM',
        title: 'Water Company Presentation',
        desc: 'Detailed walkthrough of the digital workforce operating system, collaborative multi-agent hierarchies, and Python/RabbitMQ swarms.'
      };
    case 'water-party':
      return {
        embedUrl: 'https://www.youtube.com/embed/Sa1dXoArjEo',
        title: 'Water Party Platform',
        desc: 'Interactive showcase of the curated celebration protocol designed to foster real-world social connection and eradicate isolation.'
      };
    case 'water-robotics':
      return {
        embedUrl: 'https://www.youtube.com/embed/ZQ11OXDZvUQ',
        title: 'Water Robotics Presentation',
        desc: 'VR-teleoperation system demonstration enabling seamless manual labor execution in heavy industries with ultra-low latency streams.'
      };
    case 'water-classroom':
      return {
        embedUrl: 'https://www.youtube.com/embed/OaWhWBB0OCE',
        title: 'Water Classroom Presentation',
        desc: 'Exploring the customized virtual curriculum builder, interactive gamified lectures, and 24/7 localized AI voice teachers.'
      };
    case 'water-gov':
      return {
        embedUrl: 'https://www.youtube.com/embed/Oo2-8NT6wiQ',
        title: 'Water Gov Presentation',
        desc: 'Official preview of the decentralized Sovereign digital citizen helper designed to clear bureaucratic blockages globally.'
      };
    case 'water-economics':
      return {
        embedUrl: 'https://www.youtube.com/embed/jaxlhPEMTm8',
        title: 'Water Economics Blueprint',
        desc: 'Macroeconomic simulations and systemic policy feedback models built to validate financial paradigms empirically.'
      };
    case 'water-ai-fluid':
      return {
        embedUrl: 'https://www.youtube.com/embed/1KEom398rsg',
        title: 'Water AI Fluid',
        desc: 'A peek into the decentralized peer-to-peer compute grid built to democratize high-power GPU resources for micro-businesses.'
      };
    case 'water-coach':
      return {
        embedUrl: 'https://www.youtube.com/embed/cky0Z9AVIn0',
        title: 'Stellarium Coach',
        desc: 'Productivity companion and focus loop strategist engineered directly on-device to maximize professional and educational output.'
      };
    default:
      return {
        embedUrl: 'https://www.youtube.com/embed/JAMCTIpx6s0',
        title: 'The Stellarium Society Presentation',
        desc: 'Keynote overview of the synergistic digital and physical utilities of the Water Suite led by founder John Victor.'
      };
  }
}

export default function ProductsView() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Refined Header Section */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono uppercase tracking-widest">
          <Youtube className="w-3.5 h-3.5 text-rose-500" />
          Official Channel Connected
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
          The "Water" Product Portfolio
        </h2>
        
        <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed max-w-2xl mx-auto">
          Explore John Victor's core synergistic physical, digital, and social automation platforms. Click on any product below to unlock detailed technical architectures, business models, and embedded video presentations from our official YouTube channel.
        </p>

        <div className="pt-2">
          <a
            href="http://www.youtube.com/@StellariumFoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800/80 border border-slate-800 text-xs text-white font-mono transition cursor-pointer"
          >
            <Youtube className="w-4 h-4 text-red-500" />
            <span>Visit @StellariumFoundation YouTube</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>
      </div>

      {/* Grid of the 9 Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WATER_PRODUCTS.map((prod) => {
          const isSelected = selectedProduct === prod.id;
          const videoData = getProductVideoEmbed(prod.id);
          
          return (
            <div 
              key={prod.id}
              className={`cosmic-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                isSelected 
                  ? 'ring-2 ring-cyan-500/50 border-cyan-500/30 shadow-2xl shadow-cyan-950/20 col-span-1 md:col-span-2 lg:col-span-3 bg-slate-950/70' 
                  : 'hover:border-slate-700/60 border-slate-800/80 cursor-pointer hover:bg-slate-900/30'
              }`}
              onClick={() => {
                if (!isSelected) {
                  setSelectedProduct(prod.id);
                }
              }}
            >
              {/* Product Card Content Area */}
              <div className="p-5 md:p-6 space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center shadow">
                      {getProductIcon(prod.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base md:text-lg flex items-center gap-2">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-light">{prod.tagline}</p>
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] uppercase font-mono tracking-wider font-semibold border ${
                      prod.status === 'Prototype' 
                        ? 'bg-emerald-950/30 text-emerald-400 border-emerald-500/20' 
                        : 'bg-indigo-950/30 text-indigo-400 border-indigo-500/20'
                    }`}>
                      {prod.status}
                    </span>
                    {!isSelected && (
                      <span className="text-[10px] text-cyan-400 group-hover:underline font-mono uppercase tracking-wider flex items-center gap-0.5">
                        Expand Media & Spec <ArrowRight className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                  {prod.vision}
                </p>

                {/* Funding Goal Progress bar */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/50">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-slate-500">Seed Commitment:</span>
                    <span className="text-white">{prod.fundingRaised} / <span className="text-cyan-400">{prod.fundingGoal}</span></span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-1 border border-slate-850">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-1 rounded-full" 
                      style={{ 
                        width: `${Math.min(100, (parseFloat(prod.fundingRaised.replace(/[^0-9.]/g, '')) / parseFloat(prod.fundingGoal.replace(/[^0-9.]/g, ''))) * 100)}%` 
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Expanded Details Section */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-slate-800/80 bg-slate-950/60 overflow-hidden"
                  >
                    <div className="p-6 md:p-8 space-y-8">
                      {/* Technical specifications and architecture split */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        
                        {/* Left column: Problem / Solution and Core Features */}
                        <div className="space-y-5 text-xs">
                          <div className="space-y-1.5 bg-slate-900/40 p-4 rounded-xl border border-slate-900 leading-normal">
                            <h5 className="font-bold text-slate-200 uppercase tracking-wider font-mono text-[10px]">The Challenge Resolved</h5>
                            <p className="text-slate-400 font-light leading-relaxed">{prod.problem}</p>
                          </div>

                          <div className="space-y-1.5 bg-slate-900/40 p-4 rounded-xl border border-slate-900 leading-normal">
                            <h5 className="font-bold text-cyan-400 uppercase tracking-wider font-mono text-[10px]">The "Water" Solution</h5>
                            <p className="text-slate-300 font-light leading-relaxed">{prod.solution}</p>
                          </div>

                          <div className="space-y-2.5">
                            <h5 className="font-bold text-white uppercase tracking-wider font-mono text-[10px]">Core Highlights & Operations</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {prod.keyFeatures.map((feat, i) => (
                                <div key={i} className="flex items-center gap-2 p-2.5 bg-slate-900/30 rounded-lg text-slate-300 font-light border border-slate-850">
                                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                  <span>{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right column: Specs, Business model, and Social Utility */}
                        <div className="space-y-5 text-xs font-light">
                          <div className="border border-slate-800/60 p-4 rounded-xl space-y-3">
                            <h5 className="font-bold text-white uppercase tracking-wider font-mono text-[10px]">Technical Architecture Metrics</h5>
                            <div className="grid grid-cols-2 gap-3 font-mono text-[10.5px]">
                              {Object.entries(prod.techArchitecture).map(([k, v]) => (
                                <div key={k} className="p-2.5 bg-slate-900/50 rounded border border-slate-850">
                                  <span className="text-slate-500 uppercase block text-[8px] tracking-wider">{k}:</span>
                                  <span className="text-slate-200">{v}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-1.5 p-4 rounded-xl bg-slate-900/20 border border-slate-850">
                            <h5 className="font-bold text-slate-200 uppercase tracking-wider font-mono text-[10px]">Strategic Business Value Model</h5>
                            <p className="text-slate-400 leading-relaxed font-mono text-[11px]">{prod.businessModel}</p>
                          </div>

                          <div className="space-y-1.5 bg-indigo-950/10 p-4 rounded-xl border border-indigo-500/10">
                            <h5 className="font-bold text-indigo-400 uppercase tracking-wider font-mono text-[10px]">Macro Societal Utility</h5>
                            <p className="text-slate-300 leading-relaxed">{prod.societalBenefit}</p>
                          </div>
                        </div>
                      </div>

                      {/* YouTube Video Integration Frame — Adding requested files from Youtube */}
                      <div className="pt-6 border-t border-slate-800/60 space-y-4">
                        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 md:p-6 space-y-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="space-y-1">
                              <span className="text-[9px] text-rose-450 font-mono uppercase tracking-widest flex items-center gap-1 font-bold">
                                <Tv className="w-3.5 h-3.5 text-rose-500" />
                                Interactive Videocraft Embed
                              </span>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                                  {videoData.title}
                                </h4>
                              </div>
                            </div>

                            <a 
                              href="http://www.youtube.com/@StellariumFoundation"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-red-400 hover:text-red-300 font-mono uppercase tracking-wider flex items-center gap-1 self-start sm:self-center font-bold"
                            >
                              <Youtube className="w-4 h-4 text-red-500" /> Visit Channel
                            </a>
                          </div>

                          <p className="text-slate-400 text-xs font-light max-w-2xl leading-relaxed">
                            {videoData.desc} Watch the live technical explanation of the Stellarium architecture directly from our broadcast repository:
                          </p>

                          {/* Beautiful responsive video iframe */}
                          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800/80 bg-slate-900/60 shadow-inner">
                            <iframe 
                              className="absolute inset-0 w-full h-full"
                              src={videoData.embedUrl}
                              title={videoData.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </div>

                      {/* Detail Footer controls */}
                      <div className="flex justify-between items-center gap-4 pt-4 border-t border-slate-800/60">
                        <p className="text-[10px] text-slate-500 font-mono">
                          * Reference spec files for `{prod.id}` are compiled inside Stellarium.
                        </p>
                        <button 
                          id={`minimize-${prod.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProduct(null);
                          }}
                          className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-mono uppercase tracking-wider text-xs cursor-pointer border border-slate-800"
                        >
                          Minimize Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
