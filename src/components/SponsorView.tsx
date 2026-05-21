import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';
import { 
  HeartHandshake, 
  Coins, 
  ShieldCheck, 
  Copy, 
  Check, 
  Building2, 
  TrendingUp, 
  UserCheck, 
  Activity, 
  HelpCircle,
  QrCode,
  Globe,
  ExternalLink,
  Lock,
  CreditCard,
  Wallet,
  ArrowRight
} from 'lucide-react';

interface BankDetails {
  name: string;
  symbol: string;
  beneficiary: string;
  account: string;
  swift: string;
  bankName: string;
  bankAddress: string;
  region: string;
}

const GLOBAL_FIAT_BANKS: Record<string, BankDetails> = {
  'EUR-LOCAL': {
    name: 'Euro (Local SEPA)',
    symbol: 'EUR (€)',
    beneficiary: 'Eliabe Matos Da Silva',
    account: 'LT93 3250 0324 1949 5535',
    swift: 'REVOLT21',
    bankName: 'Revolut Bank UAB',
    bankAddress: 'Konstitucijos ave. 21B, 08130, Vilnius, Lithuania',
    region: 'Europe (SEPA Zone)'
  },
  'EUR-INT': {
    name: 'Euro (International)',
    symbol: 'EUR Global (€)',
    beneficiary: 'Eliabe Matos Da Silva',
    account: '6120621849',
    swift: 'REVOSGS2',
    bankName: 'Revolut Technologies Singapore Pte. Ltd',
    bankAddress: '6 Battery Road, Floor 6-01, 049909, Singapore, Singapore',
    region: 'Global / International'
  },
  'CHF': {
    name: 'Swiss Franc',
    symbol: 'CHF (Fr.)',
    beneficiary: 'Eliabe Matos Da Silva',
    account: '6120621849',
    swift: 'REVOSGS2',
    bankName: 'Revolut Technologies Singapore Pte. Ltd',
    bankAddress: '6 Battery Road, Floor 6-01, 049909, Singapore, Singapore',
    region: 'Switzerland / Global'
  },
  'GBP': {
    name: 'British Pound Sterling',
    symbol: 'GBP (£)',
    beneficiary: 'Eliabe Matos Da Silva',
    account: '6120621849',
    swift: 'REVOSGS2',
    bankName: 'Revolut Technologies Singapore Pte. Ltd',
    bankAddress: '6 Battery Road, Floor 6-01, 049909, Singapore, Singapore',
    region: 'United Kingdom / Global'
  },
  'HKD': {
    name: 'Hong Kong Dollar',
    symbol: 'HKD (HK$)',
    beneficiary: 'Eliabe Matos Da Silva',
    account: '6120621849',
    swift: 'REVOSGS2',
    bankName: 'Revolut Technologies Singapore Pte. Ltd',
    bankAddress: '6 Battery Road, Floor 6-01, 049909, Singapore, Singapore',
    region: 'Hong Kong / Asia'
  },
  'AED': {
    name: 'UAE Dirham',
    symbol: 'AED (Dhs)',
    beneficiary: 'Eliabe Matos Da Silva',
    account: '6120621849',
    swift: 'REVOSGS2',
    bankName: 'Revolut Technologies Singapore Pte. Ltd',
    bankAddress: '6 Battery Road, Floor 6-01, 049909, Singapore, Singapore',
    region: 'United Arab Emirates'
  },
  'ILS': {
    name: 'Israeli New Shekel',
    symbol: 'ILS (₪)',
    beneficiary: 'Eliabe Matos Da Silva',
    account: '6120621849',
    swift: 'REVOSGS2',
    bankName: 'Revolut Technologies Singapore Pte. Ltd',
    bankAddress: '6 Battery Road, Floor 6-01, 049909, Singapore, Singapore',
    region: 'Israel / Middle East'
  },
  'JPY': {
    name: 'Japanese Yen',
    symbol: 'JPY (¥)',
    beneficiary: 'Eliabe Matos Da Silva',
    account: '6120621849',
    swift: 'REVOSGS2',
    bankName: 'Revolut Technologies Singapore Pte. Ltd',
    bankAddress: '6 Battery Road, Floor 6-01, 049909, Singapore, Singapore',
    region: 'Japan / AsiaPacific'
  },
  'PLN': {
    name: 'Polish Zloty',
    symbol: 'PLN (zł)',
    beneficiary: 'Eliabe Matos Da Silva',
    account: '6120621849',
    swift: 'REVOSGS2',
    bankName: 'Revolut Technologies Singapore Pte. Ltd',
    bankAddress: '6 Battery Road, Floor 6-01, 049909, Singapore, Singapore',
    region: 'Poland / Eastern Europe'
  }
};

interface SponsorViewProps {
  onNavigate?: (tab: 'home' | 'products' | 'pledge' | 'sponsor' | 'contact') => void;
}

export default function SponsorView({ onNavigate }: SponsorViewProps) {
  const [pledgeSector, setPledgeSector] = useState('Stellarium Mansion');
  const [pledgeAmt, setPledgeAmt] = useState<number>(50000);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [pledgeConfirmed, setPledgeConfirmed] = useState<boolean>(false);
  const [genHash, setGenHash] = useState<string>('');
  const [activeFiatTab, setActiveFiatTab] = useState<string>('EUR-LOCAL');

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
    doc.text('INVESTMENT PLEDGE BOOK', 140, 17);
    doc.setFontSize(8);
    doc.text('STATUS: VERIFIED COVENANT', 140, 22);

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
    doc.text('This document certifies a proud commitment to the Stellarium Foundation ecosystem. Your resources are earmarked directly to resolve global education, labor autonomy, and technical friction through the Water suite of projects.', 16, y + 12, { maxWidth: 178 });

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

    // Section 3: Alternates & Cryto
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
    let rHash = 'STELLAR-PLG-';
    for (let i = 0; i < 16; i++) {
      rHash += chars[Math.floor(Math.random() * chars.length)];
    }
    setGenHash(rHash);
    setPledgeConfirmed(true);

    // Automatically trigger gorgeous PDF generation and download
    try {
      generatePrettyPDF(rHash, pledgeSector, pledgeAmt);
    } catch (err) {
      console.error('Failed to auto-generate PDF', err);
    }
  };

  const activeBank = GLOBAL_FIAT_BANKS[activeFiatTab];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Intro pitch */}
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest block font-medium">Stellarium Foundation</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase font-sans">Ecosystem Investment & Financial Pathways</h2>
        <p className="text-slate-400 text-xs md:text-sm font-light">
          Verify and utilize our official, verified offshore vaults, international multi-currency networks, global fintech bridges, and anonymous cryptographic channels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Core Bank Transfer & Multiple Currencies (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Section 1: HNW Primary Cayman USD Vault */}
          <div className="cosmic-card rounded-2xl p-6 border border-slate-800/80 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-cyan-400" />
                <h3 className="font-mono text-sm md:text-base font-bold text-white uppercase tracking-wider">Primary Offshore USD Bank Vault</h3>
              </div>
              <span className="text-[9px] bg-cyan-950/50 text-cyan-400 px-2.5 py-0.5 rounded border border-cyan-500/30 font-mono font-medium">USD SECURED</span>
            </div>

            <p className="text-xs text-slate-305 leading-relaxed font-light">
              Ideal for large-scale institutional funding, venture commitments, or direct wire routing into our primary secure offshore placement vault.
            </p>

            <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-900 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                
                {/* Main Account details */}
                <div className="space-y-2">
                  <div className="text-[10px] text-cyan-400 font-bold uppercase border-b border-slate-800/50 pb-1">Beneficiary Account</div>
                  <div className="space-y-1 text-slate-300 text-[11px]">
                    <p><span className="text-slate-500">Holder:</span> <strong className="text-white">ELIABE MATOS DA SILVA</strong></p>
                    <p><span className="text-slate-500">Account:</span> <strong className="text-amber-400 select-all">1009519676</strong></p>
                    <p><span className="text-slate-500">Bank:</span> <strong className="text-slate-200">BANCO C6 S.A. CAYMAN BRANCH</strong></p>
                    <p><span className="text-slate-500">SWIFT/BIC:</span> <strong className="text-cyan-300 select-all">CSIXKYKY</strong></p>
                    <p><span className="text-slate-500">Country:</span> <span className="text-slate-400">Cayman Islands</span></p>
                    <p><span className="text-slate-500">Currency:</span> <span className="text-emerald-400">USD ($)</span></p>
                  </div>
                </div>

                {/* Intermediary Bank details */}
                <div className="space-y-2">
                  <div className="text-[10px] text-indigo-400 font-bold uppercase border-b border-slate-800/50 pb-1">Intermediary Bank Routing</div>
                  <div className="space-y-1 text-slate-300 text-[11px]">
                    <p><span className="text-slate-500">Bank:</span> <strong className="text-slate-200">JP Morgan Chase Bank, NA</strong></p>
                    <p><span className="text-slate-500">SWIFT/BIC:</span> <strong className="text-indigo-300 select-all">CHASUS33</strong></p>
                    <p><span className="text-slate-500">Location:</span> <span className="text-slate-400">United States</span></p>
                    <p className="text-[9px] text-slate-500 italic mt-1 font-sans leading-normal">
                      * Wire instructions must reference the intermediary routing for proper settlement.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action copy panel */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-900">
                <button 
                  id="copy-c6-beneficiary"
                  onClick={() => triggerCopy('ELIABE MATOS DA SILVA, Acct: 1009519676, BANCO C6 S.A. CAYMAN BRANCH, SWIFT: CSIXKYKY, Intermediary: JP Morgan Chase Bank, NA, SWIFT: CHASUS33', 'c6usd')}
                  className="bg-slate-900 hover:bg-slate-850 border border-slate-800 text-[10px] text-cyan-400 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-mono cursor-pointer transition"
                >
                  {copiedText === 'c6usd' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedText === 'c6usd' ? 'Copied Full C6 Details' : 'Copy Vault Credentials'}
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Interactive Global Multi-Currency Routing Engine */}
          <div className="cosmic-card rounded-2xl p-6 border border-slate-800/80 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-400" />
                <h3 className="font-mono text-sm md:text-base font-bold text-white uppercase tracking-wider">Global Multi-Currency Settlements</h3>
              </div>
              <span className="text-[9px] bg-indigo-950/50 text-indigo-400 px-2.5 py-0.5 rounded border border-indigo-500/30 font-mono font-medium">REVOLT SECURE</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light">
              We accept international wires across multiple fiat denominations. Select a currency below to display the respective account routing credentials:
            </p>

            {/* Currency selector tabs/chips */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950/80 border border-slate-900 rounded-xl">
              {Object.entries(GLOBAL_FIAT_BANKS).map(([key, item]) => (
                <button
                  key={key}
                  id={`tab-currency-${key}`}
                  onClick={() => setActiveFiatTab(key)}
                  className={`px-2.5 py-1.5 rounded-lg text-[10px] font-mono tracking-wider transition cursor-pointer text-center flex-1 min-w-[75px] ${
                    activeFiatTab === key 
                      ? 'bg-gradient-to-r from-cyan-950 to-indigo-950 border border-cyan-500/30 text-white font-bold shadow-inner' 
                      : 'hover:bg-slate-900 text-slate-400 border border-transparent'
                  }`}
                >
                  {item.symbol.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Selected currency details card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFiatTab}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="bg-slate-950/50 border border-slate-900 p-4 rounded-xl space-y-3 text-xs"
              >
                <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                  <span className="font-mono text-[11px] text-cyan-300 font-bold uppercase tracking-wide">
                    {activeBank.name} Routing Details
                  </span>
                  <span className="text-[9px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded font-mono border border-slate-800">
                    {activeBank.region}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px] text-slate-300 leading-relaxed">
                  <div className="space-y-1">
                    <p><span className="text-slate-505 block text-[9px] uppercase tracking-wider text-slate-500">Beneficiary Holder</span> <strong className="text-white text-xs">{activeBank.beneficiary}</strong></p>
                    <p className="pt-1">
                      <span className="text-slate-505 block text-[9px] uppercase tracking-wider text-slate-500">
                        {activeFiatTab === 'EUR-LOCAL' ? 'IBAN Address' : 'Account Number'}
                      </span> 
                      <strong className="text-amber-400 select-all tracking-wider text-xs">{activeBank.account}</strong>
                    </p>
                    <p className="pt-1"><span className="text-slate-505 block text-[9px] uppercase tracking-wider text-slate-500">BIC / SWIFT Code</span> <strong className="text-cyan-300 select-all">{activeBank.swift}</strong></p>
                  </div>

                  <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-900 pt-2 sm:pt-0 sm:pl-3">
                    <p><span className="text-slate-505 block text-[9px] uppercase tracking-wider text-slate-500">Bank Institution</span> <strong className="text-slate-200">{activeBank.bankName}</strong></p>
                    <p className="pt-1"><span className="text-slate-505 block text-[9px] uppercase tracking-wider text-slate-500">Institution Address</span> <span className="text-slate-400 text-[10px] block leading-tight">{activeBank.bankAddress}</span></p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-slate-900 bg-slate-950/40 p-2 rounded-lg">
                  <button 
                    id="copy-global-bank-btn"
                    onClick={() => triggerCopy(`Denomination: ${activeBank.name}, Beneficiary: ${activeBank.beneficiary}, Acc/IBAN: ${activeBank.account}, SWIFT: ${activeBank.swift}, Bank: ${activeBank.bankName}, Address: ${activeBank.bankAddress}`, `gbk-${activeFiatTab}`)}
                    className="text-[10px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-mono cursor-pointer"
                  >
                    {copiedText === `gbk-${activeFiatTab}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedText === `gbk-${activeFiatTab}` ? 'Copied to Clipboard' : `Copy ${activeFiatTab} Instructions`}
                  </button>
                  <span className="text-[8px] text-slate-500 font-mono tracking-wide">ECOSYSTEM ROUTE</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Section 3: Absolute Privacy & Dynamic Crypto Portals */}
          <div className="cosmic-card rounded-2xl p-6 border border-slate-800/80 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-orange-400" />
                <h3 className="font-mono text-sm md:text-base font-bold text-white uppercase tracking-wider">Confidential Cryptographic Networks</h3>
              </div>
              <span className="text-[9px] bg-orange-950/40 text-orange-400 px-2 py-0.5 rounded border border-orange-500/20 font-mono">FULLY ENCRYPTED</span>
            </div>

            <p className="text-xs text-slate-300 font-light leading-relaxed">
              For complete financial privacy and untraceable support, transfer directly to our secure Monero ledger or leverage our cross-chain instant swap anonymous gateway.
            </p>

            {/* Monero Core Card */}
            <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-900 space-y-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-[10px] text-orange-400 uppercase tracking-widest font-mono font-bold">Monero (XMR) Anonymous Address</span>
                <span className="text-[9px] bg-slate-900 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                  ★ PRIMARY ESCROW
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="p-1.5 bg-white rounded shrink-0 hidden sm:block">
                  <QrCode className="w-12 h-12 text-slate-900" />
                </div>
                <div className="space-y-1.5 flex-grow text-xs w-full">
                  <div className="p-2 bg-slate-900 border border-slate-850 rounded font-mono text-[9px] text-orange-300 break-all select-all leading-normal">
                    44u8KhinKQ4SgpxwS5jq3cJBMWVsWnMHaGMqYp8abTw3iAJW5izBm9V7uoNVcXAeWS6UqUzVdrn2qAtH4Epd5RkoDJxtRaL
                  </div>
                  <div className="flex justify-between items-center pt-0.5">
                    <button 
                      id="copy-xmr-verified"
                      onClick={() => triggerCopy('44u8KhinKQ4SgpxwS5jq3cJBMWVsWnMHaGMqYp8abTw3iAJW5izBm9V7uoNVcXAeWS6UqUzVdrn2qAtH4Epd5RkoDJxtRaL', 'primary-xmr')}
                      className="text-[10px] text-orange-400 hover:text-orange-300 flex items-center gap-1 font-mono cursor-pointer"
                    >
                      {copiedText === 'primary-xmr' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedText === 'primary-xmr' ? 'Monero Address Copied' : 'Copy XMR Key'}
                    </button>
                    <span className="text-[8px] text-slate-500 font-mono">SECURE INTEGRATION</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Any Cryptocurrency Gateway Section */}
            <div className="bg-gradient-to-br from-indigo-950/20 to-slate-950 border border-indigo-900/40 p-4 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-cyan-400 font-mono uppercase tracking-wider font-bold">Any Crypto Network (Cross-Chain Swap)</span>
                <span className="text-[9px] bg-slate-900 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-500/20 font-mono">DYNAMIC COVENANT</span>
              </div>
              <p className="text-xs text-slate-350 leading-relaxed">
                Want to spend Bitcoin (BTC), Ethereum (ETH), USDC, USDT or other assets? Our certified instant-swap gateway automatically converts inputs directly to our secure Monero storage ledger without revealing transaction identities.
              </p>
              
              <div className="pt-1.5">
                <a 
                  id="trocador-anonpay-gateway"
                  href="https://trocador.app/en/anonpay/?ticker_to=xmr&network_to=Mainnet&address=44u8KhinKQ4SgpxwS5jq3cJBMWVsWnMHaGMqYp8abTw3iAJW5izBm9V7uoNVcXAeWS6UqUzVdrn2qAtH4Epd5RkoDJxtRaL&donation=True&amount=600.0&name=Stellarium+Foundation+&description=Donation+Checkout&email=stellar.foundation.us@gmail.com&ticker_from=usdc&network_from=ERC20&bgcolor="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 hover:bg-slate-850 hover:border-cyan-500/30 text-white py-2 px-3.5 border border-slate-800 rounded-xl flex items-center justify-between transition group cursor-pointer text-xs font-mono"
                >
                  <span className="text-slate-300 flex items-center gap-2">
                    <Wallet className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition" />
                    Launch Trocador AnonPay Portal (USDC/USDT ERC20 default)
                  </span>
                  <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition text-[10px]">
                    Open Portal <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Section 4: Alternative Fiat & Social Funding (PayPal, PIX, Patreon) */}
          <div className="cosmic-card rounded-2xl p-6 border border-slate-800/80 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <h3 className="font-mono text-sm md:text-base font-bold text-white uppercase tracking-wider">Alternative Fiat, PIX & Patron Spaces</h3>
            </div>

            <p className="text-xs text-slate-300 font-light leading-relaxed">
              If physical currencies, instant bank transfer aliases, or subscription sponsor channels are preferred, utilize the profiles certified below:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              {/* PayPal */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 space-y-2">
                <span className="text-[10px] text-slate-450 uppercase tracking-wider block text-slate-400">★ PayPal Direct ID</span>
                <p className="text-slate-200 select-all font-semibold">stellar.foundation.us@gmail.com</p>
                <div className="flex justify-between items-center pt-1 border-t border-slate-900">
                  <button 
                    id="copy-paypal-new"
                    onClick={() => triggerCopy('stellar.foundation.us@gmail.com', 'paypal-new')}
                    className="text-[10px] text-cyan-400 hover:underline cursor-pointer"
                  >
                    {copiedText === 'paypal-new' ? 'Email Copied' : 'Copy PayPal ID'}
                  </button>
                  <span className="text-[9px] text-slate-500">GLOBAL</span>
                </div>
              </div>

              {/* BRL PIX */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 space-y-2">
                <span className="text-[10px] text-slate-450 uppercase tracking-wider block text-slate-400">★ Brazilian Real (PIX Channel)</span>
                <p className="text-slate-200 select-all font-semibold">stellar.foundation.us@gmail.com</p>
                <div className="flex justify-between items-center pt-1 border-t border-slate-900">
                  <button 
                    id="copy-pix-new"
                    onClick={() => triggerCopy('stellar.foundation.us@gmail.com', 'pix-new')}
                    className="text-[10px] text-cyan-400 hover:underline cursor-pointer"
                  >
                    {copiedText === 'pix-new' ? 'PIX Key Copied' : 'Copy PIX Key'}
                  </button>
                  <span className="text-[9px] text-slate-500">BRAZIL</span>
                </div>
              </div>
            </div>

            {/* Patreon Support Banner */}
            <div className="bg-indigo-950/10 border border-indigo-900/30 p-4 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-indigo-400 font-mono uppercase tracking-wider font-bold">Patreon Community Support</span>
                <span className="text-[9px] bg-indigo-950 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-500/20 font-mono">SUBSCRIBE</span>
              </div>
              <p className="text-[11px] text-slate-350 font-light leading-relaxed">
                Gain tier-specific access to the Stellarium Literature, exclusive ecosystem reports, and development releases. Join us on Patreon:
              </p>
              <div className="pt-1">
                <a 
                  id="patreon-community-link"
                  href="https://www.patreon.com/join/StellariumFoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 hover:bg-slate-850 hover:border-indigo-500/30 text-white py-2 px-3.5 border border-slate-800 rounded-xl flex items-center justify-between transition group cursor-pointer text-xs font-mono"
                >
                  <span className="text-slate-300 flex items-center gap-2">
                    <UserCheck className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-115 transition" />
                    Join official Stellarium Foundation Patreon
                  </span>
                  <span className="text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition text-[10px]">
                    Open Patreon <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Golden Covenant Seal & Pledge Navigation (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="cosmic-card rounded-2xl p-6 border border-slate-800/80 space-y-6 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <HeartHandshake className="w-5 h-5 text-cyan-400" />
                <h3 className="font-mono text-base font-bold text-white uppercase tracking-wider">Golden Covenant</h3>
              </div>

              <div className="text-center py-4 space-y-3">
                <span className="text-4xl block">💫</span>
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400">Official Seal</div>
                <h4 className="text-sm font-bold text-slate-200">STELLARIUM ECOSYSTEM COVENANT</h4>
              </div>

              <p className="text-xs text-slate-350 leading-relaxed font-light">
                To formally pledge capital, configure allocations, and download an official certified **Pledge Slip PDF** containing all world bank clearing coordinates, please proceed to our new dedicated custom workspace:
              </p>

              <div className="p-4 rounded-xl bg-cyan-950/10 border border-cyan-500/10 text-[11px] text-slate-350 leading-relaxed font-mono">
                <span className="text-cyan-400 block font-bold uppercase mb-1">Covenant Objectives:</span>
                • Fund the Plot of the Global Consciousness<br />
                • Support the Water Suite (9 core systems)<br />
                • Lock down direct equity discussions with CEO
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/40">
              <button
                id="navigate-to-pledger"
                onClick={() => onNavigate?.('pledge')}
                className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-mono uppercase font-black tracking-widest py-3.5 rounded-xl transition cursor-pointer shadow-lg shadow-indigo-950/50 flex items-center justify-center gap-2 text-xs"
              >
                Open Custom Pledge Builder <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
