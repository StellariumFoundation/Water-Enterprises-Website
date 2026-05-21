import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';
import { 
  HeartHandshake, 
  Coins, 
  ShieldCheck, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  FileDown,
  Info
} from 'lucide-react';

interface PledgeOption {
  value: string;
  label: string;
  category: 'core' | 'product' | 'consciousness';
}

const ALLOCATION_OPTIONS: PledgeOption[] = [
  // Core Sectors
  { value: 'Stellarium Mansion', label: 'Stellarium Mansion', category: 'core' },
  { value: 'Water Enterprises', label: 'Water Enterprises / Joint Venture pool', category: 'core' },
  { value: 'Enterprise Housing Pledge', label: 'Enterprise Housing Pledge (EHP)', category: 'core' },
  { value: 'Sponsorship without strings attached', label: 'Sponsorship Without Strings Attached (Altruistic Support)', category: 'core' },
  
  // Plot of Global Consciousness
  { value: 'Fund the Plot of the Global Consciousness', label: '💫 Fund the Plot of the Global Consciousness', category: 'consciousness' },

  // Water Products for direct investment
  { value: 'Water AI Platform', label: 'Water AI (AI Supermodel & AGI Orchestrator)', category: 'product' },
  { value: 'Water Company OS', label: 'Water Company (Autonomous Digital AI Workforces)', category: 'product' },
  { value: 'Water Party Protocol', label: 'Water Party (OS for Connection & Celebration)', category: 'product' },
  { value: 'Water Robotics bipedal', label: 'Water Robotics (VR-Teleoperated Rugged Humanoid Robots)', category: 'product' },
  { value: 'Water Classroom academy', label: 'Water Classroom (AI-Powered Personalized Academy)', category: 'product' },
  { value: 'Water Gov superapp', label: 'Water Gov (AI Citizen & Public Service Navigator)', category: 'product' },
  { value: 'Water Economics engine', label: 'Water Economics (AI Macroeconomic Policy Simulator)', category: 'product' },
  { value: 'Water AI Fluid mesh', label: 'Water AI Fluid (Decentralized P2P AI Compute Grid)', category: 'product' },
  { value: 'Water Coach system', label: 'Water Coach (On-Device AI Focus & Strategy Companion)', category: 'product' }
];

export default function PledgeView() {
  const [pledgeSector, setPledgeSector] = useState('Stellarium Mansion');
  const [pledgeAmt, setPledgeAmt] = useState<number>(50000);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [pledgeConfirmed, setPledgeConfirmed] = useState<boolean>(false);
  const [genHash, setGenHash] = useState<string>('');

  const triggerCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const generatePrettyPDF = (rHash: string, sector: string, amt: number) => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const primaryColor = [15, 23, 42]; // #0f172a
    const accentColor = [6, 182, 212];  // #06b6d4
    const goldColor = [217, 119, 6];    // #d97706
    const lightBgColor = [248, 250, 252]; // #f8fafc
    const textColor = [51, 65, 85];     // #334155

    // PAGE 1: Covenant Certificate
    doc.setDrawColor(226, 232, 240);
    doc.rect(5, 5, 200, 287);
    doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.rect(6, 6, 198, 285);

    // Header Background Header Bar
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(7, 7, 196, 25, 'F');

    // Header Title
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.text('STELLARIUM FOUNDATION', 12, 16);
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text('GOLDEN COVENANT - COGNITIVE WEALTH SOVEREIGNTY', 12, 21);
    doc.setTextColor(255, 255, 255);
    doc.text('OFFICIAL PLEDGE SLIP', 140, 17);
    doc.setFontSize(8);
    doc.text('STATUS: VERIFIED PLEDGE', 140, 22);

    // Certificate Box
    let y = 38;
    doc.setFillColor(lightBgColor[0], lightBgColor[1], lightBgColor[2]);
    doc.rect(12, y, 186, 45, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.rect(12, y, 186, 45);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('💫 STELLARIUM LITERATURE & TRUST ALLOCATION 💫', 16, y + 6);

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text('This document certifies a proud commitment to the Stellarium Foundation ecosystem. Your resources are earmarked directly to resolve global education, labor autonomy, and technical friction through the Water suite of projects and the plot of Global Consciousness.', 16, y + 12, { maxWidth: 178 });

    // Pledge specific variables (drawn nicely)
    doc.setFont('Helvetica', 'bold');
    doc.text('Pledge Reference ID:', 16, y + 26);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.text(rHash, 52, y + 26);

    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('Target Allocation Sector:', 16, y + 31);
    doc.setFont('Helvetica', 'normal');
    doc.text(sector, 55, y + 31);

    doc.setFont('Helvetica', 'bold');
    doc.text('Committed Fund Volume:', 16, y + 36);
    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(0, 150, 50);
    doc.text(`$${amt.toLocaleString()} USD (or fiat equivalent)`, 57, y + 36);

    // Section 2: Cayman Primary Account Box
    y += 53;
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('PRIMARY CAYMAN USD WIRE ROUTING', 12, y);
    doc.line(12, y + 2, 198, y + 2);

    y += 6;
    doc.setFontSize(8);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text('High-Net-Worth offshore wire pathway. Ensure both primary and intermediary specifications are listed.', 12, y);

    y += 4;
    doc.setFillColor(241, 245, 249);
    doc.rect(12, y, 186, 42, 'F');
    doc.setDrawColor(200, 210, 220);
    doc.rect(12, y, 186, 42);

    doc.setFont('Helvetica', 'bold');
    doc.text('BENEFICIARY BANK ACCOUNT:', 16, y + 5);
    doc.setFont('Helvetica', 'normal');
    doc.text('Account Holder:', 16, y + 11); doc.setFont('Helvetica', 'bold'); doc.text('ELIABE MATOS DA SILVA', 45, y + 11); doc.setFont('Helvetica', 'normal');
    doc.text('Account Number:', 16, y + 16); doc.setFont('Helvetica', 'bold'); doc.text('1009519676', 45, y + 16); doc.setFont('Helvetica', 'normal');
    doc.text('SWIFT/BIC Code:', 16, y + 21); doc.setFont('Helvetica', 'bold'); doc.text('CSIXKYKY', 45, y + 21); doc.setFont('Helvetica', 'normal');
    doc.text('C6 Bank Name:', 16, y + 26); doc.text('BANCO C6 S.A. CAYMAN BRANCH', 45, y + 26);
    doc.text('Bank Country:', 16, y + 31); doc.text('Cayman Islands', 45, y + 31);
    doc.text('Settling Currency:', 16, y + 36); doc.setTextColor(0, 150, 50); doc.text('US Dollars ($)', 45, y + 36); doc.setTextColor(textColor[0], textColor[1], textColor[2]);

    doc.line(112, y + 3, 112, y + 39);

    doc.setFont('Helvetica', 'bold');
    doc.text('INTERMEDIARY ROUTING VAULT:', 116, y + 5);
    doc.setFont('Helvetica', 'normal');
    doc.text('Intermediary Bank:', 116, y + 11); doc.text('JP Morgan Chase Bank, NA', 116, y + 16);
    doc.text('SWIFT Code:', 116, y + 22); doc.setFont('Helvetica', 'bold'); doc.text('CHASUS33', 116, y + 27); doc.setFont('Helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(110, 120, 135);
    doc.text('* Mention intermediate bank routing', 116, y + 33);
    doc.text('  explicitly on outer transmission.', 116, y + 36);

    // Section 3: Alternates & Crypto
    y += 50;
    doc.setFontSize(11);
    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('ELECTRONIC FIAT & SECURE SUBSCRIPTION PORTALS', 12, y);
    doc.line(12, y + 2, 198, y + 2);

    y += 6;
    doc.setFontSize(8.5);
    doc.setFillColor(lightBgColor[0], lightBgColor[1], lightBgColor[2]);
    doc.rect(12, y, 186, 25, 'F');
    doc.rect(12, y, 186, 25);

    doc.setFont('Helvetica', 'bold'); doc.text('PayPal Account:', 16, y + 6); doc.setFont('Helvetica', 'normal'); doc.text('stellar.foundation.us@gmail.com', 56, y + 6);
    doc.setFont('Helvetica', 'bold'); doc.text('Patreon Portal:', 16, y + 12); doc.setFont('Helvetica', 'normal'); doc.text('https://www.patreon.com/join/StellariumFoundation', 56, y + 12);
    doc.setFont('Helvetica', 'bold'); doc.text('BRL PIX Email:', 16, y + 18); doc.setFont('Helvetica', 'normal'); doc.text('stellar.foundation.us@gmail.com', 56, y + 18);

    // Section 4: Crypto Vaults
    y += 33;
    doc.setFontSize(11);
    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(194, 65, 12); // Orange / Amber
    doc.text('ANONYMOUS MONERO (XMR) & SECURE CRYPTO SWAP GATEWAYS', 12, y);
    doc.line(12, y + 2, 198, y + 2);

    y += 6;
    doc.setFillColor(254, 243, 199); // Amber 100 background
    doc.rect(12, y, 186, 32, 'F');
    doc.setDrawColor(245, 158, 11);
    doc.rect(12, y, 186, 32);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text('[1] VERIFIED COMPACT MONERO (XMR) ADDRESS:', 16, y + 6);
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.text('44u8KhinKQ4SgpxwS5jq3cJBMWVsWnMHaGMqYp8abTw3iAJW5izBm9V7uoNVcXAeWS6UqUzVdrn2qAtH4Epd5RkoDJxtRaL', 16, y + 12);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text('[2] ANY CRYPTOCURRENCY INSTANT-SWAP PAY (ANONPAY):', 16, y + 19);
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(7);
    doc.text('https://trocador.app/en/anonpay/?ticker_to=xmr&network_to=Mainnet&address=44u8Khin...', 16, y + 25);

    // Page 1 footer
    doc.setFont('Helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text('Page 1 of 2 - Generated via Concept Ecosystem Applet', 12, 282);
    doc.text('"Do Good, Make Money, Have Fun." - Stellarium Foundation Covenant', 114, 282);

    // PAGE 2: World Revolut Accounts
    doc.addPage();
    doc.setDrawColor(226, 232, 240);
    doc.rect(5, 5, 200, 287);
    doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.rect(6, 6, 198, 285);

    // Page 2 header
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(7, 7, 196, 22, 'F');

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(255, 255, 255);
    doc.text('STELLARIUM COVENANT — WORLD BANK ACCOUNTS', 12, 14);
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.text('COMPREHENSIVE DIRECTORY OF REGIONAL FIAT CHANNELS FOR LOW-COST SETTLEMENT', 12, 20);

    let y2 = 36;
    doc.setFontSize(8.5);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text('Stellarium provides direct local clearing or SWIFT clearing on multi-currency ports to ensure smooth, fee-optimized transfers globally. Verify coordinates carefully before queuing transactions:', 12, y2, { maxWidth: 186 });

    // Euro local SEPA Card
    y2 += 10;
    doc.setFillColor(248, 250, 252);
    doc.rect(12, y2, 186, 32, 'F');
    doc.setDrawColor(200, 215, 230);
    doc.rect(12, y2, 186, 32);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(0, 100, 180);
    doc.text('EUROPE LOCAL BANK OPTIONS (SEPA TRANSFER)', 16, y2 + 6);

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text('Beneficiary Name: ', 16, y2 + 12); doc.setFont('Helvetica', 'bold'); doc.text('Eliabe Matos Da Silva', 52, y2 + 12); doc.setFont('Helvetica', 'normal');
    doc.text('IBAN Account number: ', 16, y2 + 17); doc.setFont('Helvetica', 'bold'); doc.text('LT93 3250 0324 1949 5535', 52, y2 + 17); doc.setFont('Helvetica', 'normal');
    doc.text('SWIFT/BIC Code: ', 16, y2 + 22); doc.setFont('Helvetica', 'bold'); doc.text('REVOLT21', 52, y2 + 22); doc.setFont('Helvetica', 'normal');
    doc.text('Settling Bank Name & Address: ', 16, y2 + 27); doc.text('Revolut Bank UAB, Konstitucijos ave. 21B, 08130, Vilnius, Lithuania', 55, y2 + 27);

    // Global Hub heading
    y2 += 40;
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('ASIA-PACIFIC & INTERNATIONAL CHANNELS (SINGAPORE MULTI-CURRENCY HUB)', 12, y2);
    doc.line(12, y2 + 2, 198, y2 + 2);

    y2 += 6;
    doc.setFontSize(8);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text('All of the regional currencies below are routed directly into our unified global clearing hub in Singapore. They share identical beneficiary, account, and BIC codes:', 12, y2, { maxWidth: 186 });

    // Singapore Bank data box
    y2 += 6;
    doc.setFillColor(241, 245, 249);
    doc.rect(12, y2, 186, 26, 'F');
    doc.setDrawColor(218, 226, 235);
    doc.rect(12, y2, 186, 26);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text('Unified Recipient Bank Info:', 16, y2 + 5);

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('Beneficiary: Eliabe Matos Da Silva', 16, y2 + 11);
    doc.text('Account No:  6120621849', 16, y2 + 16);
    doc.text('SWIFT/BIC:   REVOSGS2', 16, y2 + 21);

    doc.text('Settlement Bank:  Revolut Technologies Singapore Pte. Ltd', 105, y2 + 11);
    doc.text('Bank Address:     6 Battery Road, Floor 6-01, 049909, Singapore', 105, y2 + 16);

    // Currencies list table
    y2 += 33;
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(12, y2, 186, 7, 'F');

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text('CURRENCY SYSTEM', 16, y2 + 5);
    doc.text('BENEFICIARY HOLDER', 68, y2 + 5);
    doc.text('BIC / SWIFT CODE', 115, y2 + 5);
    doc.text('ACCOUNT / VALUE', 152, y2 + 5);

    const worldCurrencies = [
      { name: 'Swiss Franc (CHF)', holder: 'Eliabe Matos Da Silva', bic: 'REVOSGS2', acc: '6120621849' },
      { name: 'Euro Int. (EUR)', holder: 'Eliabe Matos Da Silva', bic: 'REVOSGS2', acc: '6120621849' },
      { name: 'British Pound (GBP)', holder: 'Eliabe Matos Da Silva', bic: 'REVOSGS2', acc: '6120621849' },
      { name: 'Hong Kong Dollar (HKD)', holder: 'Eliabe Matos Da Silva', bic: 'REVOSGS2', acc: '6120621849' },
      { name: 'UAE Dirham (AED)', holder: 'Eliabe Matos Da Silva', bic: 'REVOSGS2', acc: '6120621849' },
      { name: 'Israeli New Shekel (ILS)', holder: 'Eliabe Matos Da Silva', bic: 'REVOSGS2', acc: '6120621849' },
      { name: 'Japanese Yen (JPY)', holder: 'Eliabe Matos Da Silva', bic: 'REVOSGS2', acc: '6120621849' },
      { name: 'Polish Zloty (PLN)', holder: 'Eliabe Matos Da Silva', bic: 'REVOSGS2', acc: '6120621849' }
    ];

    let rowY = y2 + 7;
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    worldCurrencies.forEach((item, index) => {
      if (index % 2 === 0) {
        doc.setFillColor(248, 250, 252);
        doc.rect(12, rowY, 186, 6, 'F');
      }
      doc.text(item.name, 16, rowY + 4.5);
      doc.text(item.holder, 68, rowY + 4.5);
      doc.text(item.bic, 115, rowY + 4.5);
      doc.setFont('Helvetica', 'bold');
      doc.text(item.acc, 152, rowY + 4.5);
      doc.setFont('Helvetica', 'normal');
      rowY += 6;
    });

    // Special Law stamp at bottom
    rowY += 10;
    doc.setDrawColor(226, 232, 240);
    doc.line(12, rowY, 198, rowY);

    rowY += 4;
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('UNCOMPROMISING ECOSYSTEM COVENANT LAW:', 12, rowY);
    
    doc.setFont('Helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.text('"Do Good, Make Money, Have Fun." - Promoting human autonomy across educational, spiritual, & physical realities.', 12, rowY + 4, { maxWidth: 186 });

    // Page 2 footer
    doc.setFont('Helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text('Page 2 of 2 - Generated via Concept Ecosystem Applet', 12, 282);
    doc.text('"Do Good, Make Money, Have Fun." - Stellarium Foundation Covenant', 114, 282);

    doc.save(`Stellarium_Ecosystem_Pledge_${rHash}.pdf`);
  };

  const handleCreatePledge = (e: React.FormEvent) => {
    e.preventDefault();
    const chars = '0123456789ABCDEFGPQSTWXYZ';
    let rHash = 'PLG-';
    for (let i = 0; i < 11; i++) {
      rHash += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGenHash(rHash);
    setPledgeConfirmed(true);

    try {
      generatePrettyPDF(rHash, pledgeSector, pledgeAmt);
    } catch (err) {
      console.error('Failed to auto-generate PDF', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-2">
        <div className="inline-flex p-3 rounded-full bg-cyan-950/45 border border-cyan-500/20 text-cyan-400 mb-2">
          <HeartHandshake className="w-8 h-8" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase font-sans">
          Ecosystem Custom Pledge Builder
        </h2>
        <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-light">
          Register your resource commitment in our decentralized covenant archive. Generating your pledge generates a certified high-resolution document PDF including local wire instructions for your records.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Core selector of options & sliders (7 Cols) */}
        <div className="md:col-span-7 bg-slate-950/50 rounded-2xl border border-slate-800/80 p-5 md:p-6 space-y-6">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <Coins className="w-5 h-5 text-cyan-400" />
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Configure Allocation Scheme</h3>
          </div>

          <AnimatePresence mode="wait">
            {!pledgeConfirmed ? (
              <motion.form
                key="pledge-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleCreatePledge}
                className="space-y-6"
              >
                {/* Sector select */}
                <div className="space-y-2">
                  <label htmlFor="sector-select" className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block">
                    Target Allocation Motive / Sector
                  </label>
                  <select
                    id="sector-select"
                    value={pledgeSector}
                    onChange={(e) => setPledgeSector(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-3 text-white text-xs font-mono focus:border-cyan-500 focus:outline-none"
                  >
                    <optgroup label="✨ Special Consciousness Project">
                      {ALLOCATION_OPTIONS.filter(o => o.category === 'consciousness').map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🏢 Core Ecosystem Targets">
                      {ALLOCATION_OPTIONS.filter(o => o.category === 'core').map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </optgroup>
                    <optgroup label="💧 Direct Water Product Investment Options">
                      {ALLOCATION_OPTIONS.filter(o => o.category === 'product').map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </optgroup>
                  </select>
                  <p className="text-[10px] text-slate-500 leading-normal">
                    * Earmarks resources for specific development nodes. All options roll up under Altruistic Social Capital.
                  </p>
                </div>

                {/* Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 uppercase font-mono">
                    <span>Target Pledge Level (USD Equivalent)</span>
                    <span className="text-cyan-400 font-bold text-sm bg-cyan-950/40 border border-cyan-500/10 px-2.5 py-0.5 rounded-lg">
                      ${pledgeAmt.toLocaleString()} USD
                    </span>
                  </div>

                  <input
                    id="pledge-slider"
                    type="range"
                    min="1000"
                    max="1000000"
                    step="5000"
                    value={pledgeAmt}
                    onChange={(e) => setPledgeAmt(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
                  />
                  <div className="flex justify-between items-center text-[9px] text-slate-500 font-mono">
                    <span>Min: $1,000</span>
                    <span>Mid: $500,000</span>
                    <span>Max: $1,000,000</span>
                  </div>
                </div>

                {/* Motivator Note */}
                <div className="p-4 rounded-xl bg-cyan-950/10 border border-cyan-500/10 flex gap-3 text-xs leading-relaxed text-slate-300">
                  <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p>
                    By checking standard guidelines, confirming your pledge generates an authorized **Golden Covenant Certificate PDF** detailing world clearing revolut ports, Monero anonymous vaults, and custom wire instructions.
                  </p>
                </div>

                <button
                  id="confirm-pledge-trigger"
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:scale-[1.01] active:scale-[0.99] transition text-white text-xs font-mono uppercase font-black tracking-widest cursor-pointer shadow-lg shadow-cyan-950/40"
                >
                  Confirm My Pledge
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="pledge-result"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center py-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                  ✔
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Pledge Slip Formally Registered
                  </h4>
                  <p className="text-[11px] text-emerald-400 font-medium font-mono">
                    Your Certified Ecosystem PDF downloaded successfully!
                  </p>
                </div>

                {/* Receipt card */}
                <div className="bg-slate-900 border border-slate-800/80 p-4 rounded-xl space-y-2.5 text-left text-[11px] font-mono leading-relaxed max-w-md mx-auto">
                  <div className="border-b border-white/5 pb-1.5 flex justify-between">
                    <span className="text-slate-500">PLEDGE HASH:</span>
                    <span className="text-orange-400 font-bold">{genHash}</span>
                  </div>
                  <div className="border-b border-white/5 pb-1.5 flex justify-between">
                    <span className="text-slate-500">ALLOCATION PREFERENCE:</span>
                    <span className="text-slate-200 font-medium truncate max-w-[200px]" title={pledgeSector}>
                      {pledgeSector}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">COMMITTED FUNDING:</span>
                    <span className="text-emerald-400 font-bold">${pledgeAmt.toLocaleString()} USD</span>
                  </div>
                </div>

                <div className="space-y-3 max-w-md mx-auto pt-2">
                  <button
                    id="pledge-view-reprint"
                    onClick={() => generatePrettyPDF(genHash, pledgeSector, pledgeAmt)}
                    className="w-full py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileDown className="w-4 h-4" /> Download PDF Guide Again
                  </button>

                  <div className="flex gap-2">
                    <button
                      id="pledge-view-copy"
                      onClick={() => triggerCopy(`${genHash} - ${pledgeSector} - $${pledgeAmt}`, 'copy-pledge')}
                      className="flex-1 bg-slate-800 hover:bg-slate-700 text-xs text-white py-2 rounded-lg cursor-pointer font-mono"
                    >
                      {copiedText === 'copy-pledge' ? 'Reference Copied' : 'Copy Reference'}
                    </button>
                    <button
                      id="pledge-view-another"
                      onClick={() => setPledgeConfirmed(false)}
                      className="flex-1 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 py-2 rounded-lg cursor-pointer"
                    >
                      New Allocation
                    </button>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 max-w-sm mx-auto leading-relaxed">
                  * Reach out on our contacts channel citing reference ID **{genHash}** to unlock direct access channels to CEO John Victor.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Multi-currency Clearing Directory (5 Cols preview) */}
        <div className="md:col-span-5 bg-slate-950/20 rounded-2xl border border-slate-800/40 p-5 md:p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <h4 className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider">Payments Checklist</h4>
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed font-light">
            All transaction codes listed on your generated document are fully functional. The PDF booklet contains:
          </p>

          <ul className="text-[10.5px] space-y-2.5 text-slate-300 font-mono">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✔</span>
              <span><strong>Primary Cayman USD Account:</strong> Fast offshore bank transfers via JP Morgan Chase.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✔</span>
              <span><strong>Euro SEPA Network:</strong> Local Lithuania IBAN clears standard transactions instantly.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✔</span>
              <span><strong>Singapore Multi-Currency Hub:</strong> Zero-fee routing for CHF, GBP, HKD, AED, ILS, JPY, PLN.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✔</span>
              <span><strong>Anonymous Monero (XMR):</strong> Untraceable zero-friction swap gateways.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✔</span>
              <span><strong>Digital Subscription:</strong> PayPal, Patreon support platforms, & BRL PIX keys.</span>
            </li>
          </ul>

          <div className="pt-2">
            <div className="bg-slate-900/45 p-3 rounded-xl border border-slate-800/50 text-[10px] leading-relaxed text-slate-400">
              <strong className="text-slate-200 block font-mono mb-1">PROTIP:</strong>
              When initiating payments, attach your generated reference key explicitly. This triggers real-time ledger settlement automatically!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
