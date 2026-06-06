import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  TrendingUp, 
  Cpu, 
  Coins, 
  Layers, 
  ShieldCheck, 
  HelpCircle,
  Clock,
  ArrowRight,
  ExternalLink,
  Sliders,
  DollarSign,
  HeartHandshake,
  CheckCircle,
  Building,
  GraduationCap,
  Download
} from 'lucide-react';
import { INVESTOR_OPTIONS, FOUNDER_BIO, WATER_PRODUCTS } from '../data';

interface InvestorDeckViewProps {
  onClose?: () => void;
  onNavigateToSponsor?: () => void;
  onNavigateToContact?: () => void;
}

export default function InvestorDeckView({ 
  onClose, 
  onNavigateToSponsor, 
  onNavigateToContact 
}: InvestorDeckViewProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [autoPlayProgress, setAutoPlayProgress] = useState<number>(0);
  
  // Interactive Slide 2 States (Problem Explorer)
  const [activeProblemId, setActiveProblemId] = useState<number>(0);

  // Interactive Slide 4 States (Revenue / Valuation Growth Simulator)
  const [enterpriseUsers, setEnterpriseUsers] = useState<number>(2500); // Active Companies hiring AI employees
  const [avgAgentCount, setAvgAgentCount] = useState<number>(8); // Average agents per company
  const [licenseFee, setLicenseFee] = useState<number>(150); // Monthly fee per agent ($)
  
  // Slide 6 States (Capital Allocation Highlights)
  const [hoveredAllocation, setHoveredAllocation] = useState<number | null>(null);

  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

  // Programmatic high-contrast PDF generation mapping
  const downloadPdfDeck = async () => {
    setIsGeneratingPdf(true);
    try {
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const drawSlideBackground = (idx: number) => {
        // bg-slate-950 color: RGB (2, 6, 23)
        doc.setFillColor(2, 6, 23); 
        doc.rect(0, 0, 297, 210, 'F');
        
        // Circular ambient vectors mapping
        doc.setDrawColor(34, 211, 238); // cyan with opacity via jsPDF parameters
        doc.setLineWidth(0.1);
        doc.circle(148, 105, 90);
        doc.circle(148, 105, 50);

        // Header watermark line and details
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(148, 163, 184); // slate-400
        doc.text('STELLARIUM FOUNDATION PRIVATE LEDGER ROUNDS', 15, 12);
        
        // Page footer lines and stamp
        doc.setDrawColor(255, 255, 255);
        doc.line(15, 195, 282, 195);
        
        doc.setFont('Helvetica', 'bold');
        doc.text(`SLIDE ${idx < 10 ? '0' + idx : idx} / 12`, 15, 201);
        doc.setFont('Helvetica', 'normal');
        doc.text('WATER SUITE ENTERPRISES © 2026 // PRIVATE KEYNOTE ARCHITECTS', 50, 201);
      };

      // -------------------------------------------------------------
      // PAGE 1: COVER BLUEPRINT
      // -------------------------------------------------------------
      drawSlideBackground(1);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(34, 211, 238); // Cyan
      doc.setFontSize(11);
      doc.text('OFFICIAL PRIVATE SEED INVESTMENT BLUEPRINT', 15, 45);

      doc.setFontSize(54);
      doc.setTextColor(255, 255, 255);
      doc.text('WATER SUITE', 15, 75);

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(16);
      doc.setTextColor(203, 213, 225); // slate-300
      doc.text('An integrated, high-yield digital and hardware ecosystem resolving shortages,', 15, 90);
      doc.text('administrative waste, and societal isolation.', 15, 98);

      // Offer Box
      doc.setFillColor(15, 23, 42); // bg-slate-900
      doc.setDrawColor(129, 140, 248); // indigo-450 border
      doc.rect(15, 115, 200, 42);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      doc.text('LAUNCH PORTFOLIO STATUS: OPEN FOR INVESTMENT partners', 20, 124);

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(226, 232, 240); // slate-200
      const descLine1 = 'The Stellarium Foundation presents 9 interconnected core products targeting critical global';
      const descLine2 = 'market sectors. Real high recurring margins paired with an instant 40% referral commission.';
      doc.text(descLine1, 20, 134);
      doc.text(descLine2, 20, 140);

      // Metadata callouts
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(34, 211, 238);
      doc.text('FOUNDING EXECUTIVE ARCHITECT: John Victor', 15, 175);
      doc.text('SEED TARGET CAPITAL ROUND: ' + INVESTOR_OPTIONS.seedRoundGoal, 15, 181);


      // -------------------------------------------------------------
      // PAGE 2: THE PROBLEM EXPLORER
      // -------------------------------------------------------------
      doc.addPage();
      drawSlideBackground(2);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(244, 63, 94); // rose-500
      doc.text('SLIDE 02 // SECTOR FRICTION AT LARGE', 15, 30);

      doc.setFontSize(24);
      doc.setTextColor(255, 255, 255);
      doc.text('Sovereign Gaps & Global Friction', 15, 42);

      // Render 4 Problems
      let yOffset = 55;
      PROBLEMS_LIST.forEach((p, idx) => {
        // Draw card background
        doc.setFillColor(15, 23, 42); // slate-900
        doc.setDrawColor(255, 255, 255);
        doc.rect(15, yOffset, 267, 28, 'F');

        // Draw index and title
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(244, 63, 94); // Rose
        doc.text(`0${idx + 1}`, 20, yOffset + 12);
        
        doc.setTextColor(255, 255, 255);
        doc.text(p.title.toUpperCase(), 32, yOffset + 12);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(148, 163, 184); // slate-400
        doc.text(p.desc, 32, yOffset + 18, { maxWidth: 140 });

        // Solution block to the right
        doc.setFillColor(15, 23, 42); // green-950/20 alternative
        doc.rect(182, yOffset + 3, 95, 22);

        doc.setFont('Helvetica', 'bold');
        doc.setTextColor(52, 211, 153); // Emerald
        doc.text('WATER SOLUTION RESOLUTION:', 186, yOffset + 9);
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(209, 213, 219);
        doc.text(p.relevance, 186, yOffset + 14, { maxWidth: 88 });

        yOffset += 32;
      });


      // -------------------------------------------------------------
      // PAGE 3: SYNERGISTIC FLYWHEEL LOOP
      // -------------------------------------------------------------
      doc.addPage();
      drawSlideBackground(3);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(34, 211, 238); // Cyan
      doc.text('SLIDE 03 // SYNERGETIC MATRIX FLYWHEEL', 15, 30);

      doc.setFontSize(24);
      doc.setTextColor(255, 255, 255);
      doc.text('An Unbroken Ecosystem Loop', 15, 42);

      // Core loops grids
      const grids = [
        { title: '01. WATER AI CORE', text: 'Routes structural workflow requests and optimizes cognitive task processes.' },
        { title: '02. SPECIALIZED SWARMS', text: 'Water Company manages autonomous hierarchies of AI employees working 24/7.' },
        { title: '03. ROBOTIC LABOR', text: 'Water Robotics handles physical humanoid mobile devices using real VR.' },
        { title: '04. CIVIL SPACE GOVERN', text: 'Water Gov, Classroom, and Party bind digital services, games and study.' }
      ];

      grids.forEach((grid, idx) => {
        const xPos = 15 + (idx * 66);
        doc.setFillColor(15, 23, 42); // slate-900
        doc.rect(xPos, 55, 62, 75, 'F');

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(34, 211, 238); // Cyan
        doc.text(grid.title, xPos + 5, 68);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(203, 213, 225);
        doc.text(grid.text, xPos + 5, 78, { maxWidth: 52 });
      });

      // Bottom hypothesis card
      doc.setFillColor(15, 23, 42);
      doc.rect(15, 142, 267, 34, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(34, 211, 238);
      doc.text('CORE SUSTAINED MARGIN HYPOTHESIS', 22, 151);
      
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(226, 232, 240);
      const hypothesisText = 'By caching and recycling edge device computing vectors globally via "Water AI Fluid" mesh nodes, the internal resource costs of powering our heavy automated company agent swarms converges precisely to zero over infinite financial horizons. High yields are shared with GPU-seeder partners.';
      doc.text(hypothesisText, 22, 158, { maxWidth: 252 });


      // -------------------------------------------------------------
      // PAGE 4: ECONOMIC GROWTH SIMULATION
      // -------------------------------------------------------------
      doc.addPage();
      drawSlideBackground(4);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(52, 211, 153); // Emerald
      doc.text('SLIDE 04 // THE SYSTEMS ECONOMETRICS', 15, 30);

      doc.setFontSize(24);
      doc.setTextColor(255, 255, 255);
      doc.text('Interactive Scalability & Revenues', 15, 42);

      // Draw Sliders Values block to Left
      doc.setFillColor(15, 23, 42);
      doc.rect(15, 55, 120, 115, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(255, 255, 255);
      doc.text('CURRENT PARAMETER INPUTS', 22, 67);

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(148, 163, 184);
      
      doc.text('Registered Enterprise Clients:', 22, 83);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(34, 211, 238); // Cyan
      doc.text(`${enterpriseUsers.toLocaleString()} Companies`, 22, 89);

      doc.setFont('Helvetica', 'normal');
      doc.setTextColor(148, 163, 184);
      doc.text('Average Hired Agents / Client:', 22, 105);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(129, 140, 248); // Indigo
      doc.text(`${avgAgentCount} specialized swarms`, 22, 111);

      doc.setFont('Helvetica', 'normal');
      doc.setTextColor(148, 163, 184);
      doc.text('Monthly License Operating Fee:', 22, 127);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(52, 211, 153); // Emerald
      doc.text(`$${licenseFee} USD / month`, 22, 133);

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text('* Values represent active user parameter', 22, 150);
      doc.text('  adjusted during high console review.', 22, 154);

      // Draw outputs blocks to Right
      doc.setFillColor(15, 23, 42);
      doc.rect(142, 55, 140, 115, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(255, 255, 255);
      doc.text('LIVE CALCULATED PERFORMANCE PROJECTIONS', 149, 67);

      // MRR Row
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(148, 163, 184);
      doc.text('Simulated Monthly SaaS Income (MRR):', 149, 85);
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(34, 211, 238);
      doc.text(`$${calculatedMonthlyLicenseRevenue.toLocaleString()} USD`, 149, 93);

      // ARR Row
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(148, 163, 184);
      doc.text('Target Annual Run-rate Target (ARR):', 149, 112);
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(52, 211, 153);
      doc.text(`$${calculatedAnnualRevenue.toLocaleString()} USD`, 149, 120);

      // Valuation Row
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(148, 163, 184);
      doc.text('Exit Valuation multiple baseline (12x):', 149, 139);
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(18);
      doc.setTextColor(168, 85, 247); // Violet
      doc.text(`$${simulatedValuation.toLocaleString()} USD`, 149, 148);


      // -------------------------------------------------------------
      // PAGE 5: PRODUCTS ROADMAP & STAGE GATES
      // -------------------------------------------------------------
      doc.addPage();
      drawSlideBackground(5);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(34, 211, 238); // Cyan
      doc.text('SLIDE 05 // ECOSYSTEM DEVELOPMENT ROADMAP', 15, 30);

      doc.setFontSize(24);
      doc.setTextColor(255, 255, 255);
      doc.text('Ecosystem Milestones & Stage Gates', 15, 42);

      const roadmapPhases = [
        { title: 'Q1-Q2 2026: SECURED INFRASTRUCTURE', desc: 'Roll out Alpha modules of Water AI Core prompt routing engine, deploy closed private testing of Water AI Fluid computing mesh, and open sovereign seed capital escrow registries.' },
        { title: 'Q3-Q4 2026: HARDWARE & BASE OPERATIONS', desc: 'Secure the physical Stellarium HQ and Mansion properties, assemble the first physical pilot cohort of rugged Water Robotics humanoid chassis, and establish private server racks.' },
        { title: 'Q1-Q2 2027: ENTERPRISE & SAAS EXPANSION', desc: 'Launch commercial SaaS modules for Water Company autonomous workforces, secure initial state school test licenses for Water Classroom, and initiate pilot testing for Water Gov.' },
        { title: 'Q3-Q4 2027: SOVEREIGN PLURALITY RELEASE', desc: 'Unlock Water Party connection and RSVPs globally, activate dynamic yield sharing payouts, and launch the unified estate balance ledger for all round sponsors.' }
      ];

      roadmapPhases.forEach((phase, idx) => {
        const yOffsetVal = 55 + (idx * 31);
        doc.setFillColor(15, 23, 42);
        doc.rect(15, yOffsetVal, 267, 26, 'F');

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(34, 211, 238); // Cyan
        doc.text(phase.title, 20, yOffsetVal + 8);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(203, 213, 225);
        doc.text(phase.desc, 20, yOffsetVal + 14, { maxWidth: 257 });
      });


      // -------------------------------------------------------------
      // PAGE 6: HARDWARE LABOR LAYER (WATER ROBOTICS FOCUS)
      // -------------------------------------------------------------
      doc.addPage();
      drawSlideBackground(6);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(244, 63, 94); // Rose
      doc.text('SLIDE 06 // WATER ROBOTICS LABOR CORE', 15, 30);

      doc.setFontSize(24);
      doc.setTextColor(255, 255, 255);
      doc.text('VR-Teleoperated Bipedal Humanoid Robotics', 15, 42);

      // Left stats box
      doc.setFillColor(15, 23, 42);
      doc.rect(15, 55, 110, 120, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(255, 255, 255);
      doc.text('HARDWARE METRICS DEEP-DIVE', 22, 68);

      const robMetrics = [
        { name: 'MECHANICAL ACTION LATENCY:', val: '<15ms Real-Time WebRTC' },
        { name: 'CHASSIS LIFETIME LIMIT:', val: '8-10 Hours Hot-swap Batteries' },
        { name: 'BIONIC LIFTING THRESHOLD:', val: '50kg Continuous Ergonomic Duty' },
        { name: 'OPERATOR STATION COVERAGE:', val: 'Sovereign Remote Mesh Desks' }
      ];

      robMetrics.forEach((m, idx) => {
        const yLine = 82 + (idx * 21);
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(148, 163, 184);
        doc.text(m.name, 22, yLine);
        doc.setFont('Helvetica', 'bold');
        doc.setTextColor(244, 63, 94);
        doc.text(m.val, 22, yLine + 5);
      });

      // Right Descriptive Panel
      doc.setFillColor(15, 23, 42);
      doc.rect(132, 55, 150, 120, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(34, 211, 238);
      doc.text('SOVEREIGN INDUSTRIAL VALUE POSITION', 138, 68);

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(226, 232, 240);
      const robDesc1 = 'Water Robotics bypasses immigration friction and local labor scarcity by physically positioning rugged bipedal humanoid frames in resource sectors (mining, fabrication, dangerous assembly) and allowing surplus off-site global developers to teleoperate them with high-fidelity VR headsets.';
      const robDesc2 = 'Sponsors of specific regional robotic fleets receive a direct hourly platform lease return settled directly on the estate ledger. This yields immediate liquid cash flows backed by tangible physical infrastructure assets, fully protected against global fiat inflation.';
      doc.text(robDesc1, 138, 78, { maxWidth: 138 });
      doc.text(robDesc2, 138, 123, { maxWidth: 138 });


      // -------------------------------------------------------------
      // PAGE 7: DECENTRALIZED COMPUTE GRID (WATER AI FLUID FOCUS)
      // -------------------------------------------------------------
      doc.addPage();
      drawSlideBackground(7);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(168, 85, 247); // Violet
      doc.text('SLIDE 07 // DECENTRALIZED COGNITIVE COMPUTATIONAL MESH', 15, 30);

      doc.setFontSize(24);
      doc.setTextColor(255, 255, 255);
      doc.text('Water AI Fluid Decoded Compute Node Seeding', 15, 42);

      // Left Column
      doc.setFillColor(15, 23, 42);
      doc.rect(15, 55, 110, 120, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(34, 211, 238);
      doc.text('COMPUTATIONAL SEED METRICS', 22, 68);

      const compMetrics = [
        { name: 'TARGET COMPUTE INFERENCE DISCOUNT:', val: 'Up to 60% vs Hyperscale Clouds' },
        { name: 'CONTRIBUTOR PREFERENTIAL APRS:', val: 'Up to 32% Handout Returns' },
        { name: 'CORE ROUTER NODE ENCRYPTION:', val: 'Sovereign Secure Containment' },
        { name: 'NETWORK EQUILIBRIUM COGNITION:', val: 'Decentralized P2P Token-mesh' }
      ];

      compMetrics.forEach((m, idx) => {
        const yLine = 82 + (idx * 21);
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(148, 163, 184);
        doc.text(m.name, 22, yLine);
        doc.setFont('Helvetica', 'bold');
        doc.setTextColor(168, 85, 247);
        doc.text(m.val, 22, yLine + 5);
      });

      // Right Column
      doc.setFillColor(15, 23, 42);
      doc.rect(132, 55, 150, 120, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(52, 211, 153);
      doc.text('SECTOR COGNITIVE DEMOCRATIZATION', 138, 68);

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(226, 232, 240);
      const compDesc1 = 'Water AI Fluid operates as a torrent-inspired decentralized broker, pooling idle processing cycles from edge devices globally. By splitting complex inference pipelines and caching RAG variables locally, we slash cognitive labor delivery bills to record lows.';
      const compDesc2 = 'Sponsors contributing hardware clusters or staking computing token-mesh pools receive immediate payouts from our autonomous Enterprise customers (vetted corporate agent swarms) who rent this secure compute 24/7. Results are settled directly in our real-estate ledgers.';
      doc.text(compDesc1, 138, 78, { maxWidth: 138 });
      doc.text(compDesc2, 138, 123, { maxWidth: 138 });


      // -------------------------------------------------------------
      // PAGE 8: CIVIC & CONNECTED SOCIAL LAYER
      // -------------------------------------------------------------
      doc.addPage();
      drawSlideBackground(8);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(52, 211, 153); // Emerald
      doc.text('SLIDE 08 // COMMUNITY CIVIC COOPERATION MATRIX', 15, 30);

      doc.setFontSize(24);
      doc.setTextColor(255, 255, 255);
      doc.text('Water Party, Water Classroom & Water Gov', 15, 42);

      const civicGrids = [
        {
          title: 'WATER PARTY connected social hubs',
          desc: 'Implements the "Slot & Match" protocol to combat social isolation. By coordinating group pools, vetting guest histories, and sponsoring real celebrations at our Mansion hubs, we forge lasting professional community alliances.'
        },
        {
          title: 'WATER CLASSROOM educational schools',
          desc: 'Completely democratizes K-12 and university study. Provides voice-guided AI tutorials, gamified badges, proctored exams, and student collaboration lounges to grant tier-1 learning options to every child globally at zero cost.'
        },
        {
          title: 'WATER GOV regulatory decanting rails',
          desc: 'Debureaucratizes state interactions using natural language. Automates public forms, facilitates instant 5-click LLC expansions, and processes citizen permit applications securely, saving up to 85% of municipal budgets.'
        }
      ];

      civicGrids.forEach((c, idx) => {
        const xPos = 15 + (idx * 89);
        doc.setFillColor(15, 23, 42);
        doc.rect(xPos, 55, 84, 120, 'F');

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(34, 211, 238); // Cyan
        doc.text(c.title.toUpperCase(), xPos + 5, 68, { maxWidth: 74 });

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(203, 213, 225);
        doc.text(c.desc, xPos + 5, 83, { maxWidth: 74 });
      });


      // -------------------------------------------------------------
      // PAGE 9: FINANCIAL YIELD MECHANICS & ROI
      // -------------------------------------------------------------
      doc.addPage();
      drawSlideBackground(9);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(52, 211, 153); // Emerald
      doc.text('SLIDE 09 // PORTFOLIO FINANCIAL MECHANICAL YIELD & ROI', 15, 30);

      doc.setFontSize(24);
      doc.setTextColor(255, 255, 255);
      doc.text('Strategic Returns, Dividends & Payback Milestones', 15, 42);

      // Left Column: ROI Metric Callouts
      doc.setFillColor(15, 23, 42); // slate-900
      doc.rect(15, 55, 110, 120, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(34, 211, 238); // Cyan
      doc.text('PRIMARY RETURNS INDICATORS', 22, 68);

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(148, 163, 184);
      doc.text('Target Multiple (Projected ROI):', 22, 82);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text(INVESTOR_OPTIONS.estimatedRoiMultiplier, 22, 88);

      doc.setFont('Helvetica', 'normal');
      doc.setTextColor(148, 163, 184);
      doc.text('Contractual Payback Duration:', 22, 104);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(52, 211, 153); // Emerald
      doc.text(INVESTOR_OPTIONS.paybackDuration, 22, 110);

      doc.setFont('Helvetica', 'normal');
      doc.setTextColor(148, 163, 184);
      doc.text('Sponsor Yield Returns Base APR:', 22, 126);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(168, 85, 247); // Violet
      doc.text(INVESTOR_OPTIONS.averageSponsorApr, 22, 132);

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text('* Returns backed by direct physical escrow,', 22, 150);
      doc.text('  recurring SaaS flows, and buyout events.', 22, 154);

      // Right Column: Return Channels
      INVESTOR_OPTIONS.returnChannels.forEach((chan: any, idx: number) => {
        const yOffsetVal = 55 + (idx * 40);
        doc.setFillColor(15, 23, 42);
        doc.rect(132, yOffsetVal, 150, 36, 'F');

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(34, 211, 238); // Cyan
        doc.text(`${idx + 1}. ${chan.title.toUpperCase()}`, 138, yOffsetVal + 10);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(203, 213, 225);
        doc.text(chan.desc, 138, yOffsetVal + 17, { maxWidth: 138 });
      });


      // -------------------------------------------------------------
      // PAGE 10: SYSTEM STEWARDSHIP & ARCHITECT
      // -------------------------------------------------------------
      doc.addPage();
      drawSlideBackground(10);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(34, 211, 238); // Cyan
      doc.text('SLIDE 10 // SYSTEM STEWARDSHIP DECISIONS', 15, 30);

      doc.setFontSize(24);
      doc.setTextColor(255, 255, 255);
      doc.text('First-Principles Ultimate Altruism', 15, 42);

      // Founder Details left
      doc.setFillColor(15, 23, 42); // slate-900
      doc.rect(15, 55, 105, 120, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(34, 211, 238);
      doc.text('FOUNDING ARCHITECT BIO', 22, 68);

      doc.setFontSize(12);
      doc.setTextColor(255, 255, 255);
      doc.text('JOHN VICTOR', 22, 78);
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(148, 163, 184);
      doc.text('Founder & Chief Systems Engineer', 22, 83);

      doc.setFontSize(8);
      doc.setTextColor(203, 213, 225);
      doc.text(FOUNDER_BIO.about, 22, 93, { maxWidth: 91 });

      // Core Strategic Principles Right
      const principles = [
        { name: 'I. DO GOOD', text: 'Providing staple decentralized physical assets and AI diagnostic parameters to sovereign citizenries to ensure global dignity.' },
        { name: 'II. MAKE MONEY', text: 'Ensuring pristine rewards flow transparently to round partners, contributors, computational mesh seed nodes, and affiliate referrers.' },
        { name: 'III. HAVE FUN', text: 'Promoting actual organic physical socialization, matches, and celebrative gatherings to release corporate labor back into pure creativity.' }
      ];

      principles.forEach((pr, idx) => {
        const yOffsetVal = 55 + (idx * 40);
        doc.setFillColor(15, 23, 42);
        doc.rect(126, yOffsetVal, 156, 36, 'F');

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(129, 140, 248);
        doc.text(pr.name, 132, yOffsetVal + 10);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(203, 213, 225);
        doc.text(pr.text, 132, yOffsetVal + 17, { maxWidth: 144 });
      });


      // -------------------------------------------------------------
      // PAGE 11: OFFERING TERMS & ALLOCATIONS
      // -------------------------------------------------------------
      doc.addPage();
      drawSlideBackground(11);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(168, 85, 247); // Violet
      doc.text('SLIDE 11 // PORTFOLIO OFFERING TERMS', 15, 30);

      doc.setFontSize(24);
      doc.setTextColor(255, 255, 255);
      doc.text('Investment Mechanics & Escrow', 15, 42);

      // Allocations Left
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(255, 255, 255);
      doc.text('SEED CAPITAL ALLOCATIONS', 15, 60);

      let allocY = 70;
      INVESTOR_OPTIONS.allocations.forEach((a, idx) => {
        doc.setFillColor(15, 23, 42); // slate-900
        doc.rect(15, allocY, 145, 22, 'F');

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(255, 255, 255);
        doc.text(a.name, 20, allocY + 8);
        doc.setTextColor(168, 85, 247);
        doc.text(`${a.percentage}%`, 147, allocY + 8);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(148, 163, 184);
        doc.text(a.desc, 20, allocY + 14, { maxWidth: 135 });

        allocY += 26;
      });

      // Stats Box right
      doc.setFillColor(15, 23, 42);
      doc.rect(170, 55, 112, 120, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(255, 255, 255);
      doc.text('OFFERING SUMMARY DIRECTIVES', 177, 68);

      const summaries = [
        { label: 'SEED ROUND TARGET:', val: INVESTOR_OPTIONS.seedRoundGoal },
        { label: 'CURRENT COMMITTED FUNDING:', val: INVESTOR_OPTIONS.currentRaised },
        { label: 'MINIMUM SAFE ALLOCATION:', val: INVESTOR_OPTIONS.minCommitment },
        { label: 'REFERRAL BONUS DIVIDENDS:', val: '40% Instant Commissions' }
      ];

      doc.setFontSize(9);
      summaries.forEach((sum, idx) => {
        const yLine = 84 + (idx * 16);
        doc.setFont('Helvetica', 'normal');
        doc.setTextColor(148, 163, 184);
        doc.text(sum.label, 177, yLine);
        
        doc.setFont('Helvetica', 'bold');
        doc.setTextColor(52, 211, 153); // Emerald
        doc.text(sum.val, 177, yLine + 5);
      });

      // Bottom lock message
      doc.setFillColor(30, 41, 59);
      doc.rect(177, 147, 98, 20, 'F');
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(203, 213, 225);
      doc.text('Protected under strict sovereign custody', 181, 154);
      doc.text('and secured legal escrow governance.', 181, 159);


      // -------------------------------------------------------------
      // PAGE 12: CALL TO ACTION / COMMITMENT
      // -------------------------------------------------------------
      doc.addPage();
      drawSlideBackground(12);

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(52, 211, 153); // Emerald
      doc.text('SLIDE 12 // DIRECT ENVELOPE CORRELATION', 15, 30);

      doc.setFontSize(24);
      doc.setTextColor(255, 255, 255);
      doc.text('Secure Strategic Registration Matrix', 15, 42);

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(11);
      doc.setTextColor(203, 213, 225);
      doc.text('Take your legitimate seat as an operational partner of the Water Suite.', 15, 58);
      doc.text('Deliver your formal capital allocation proposal securely directly in our secure matrix.', 15, 64);

      // 2 Actions cards
      doc.setFillColor(15, 23, 42);
      doc.rect(15, 78, 126, 85, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(34, 211, 238);
      doc.text('METHOD A // ENCRYPTED LETTER_PITCH', 22, 92);
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(148, 163, 184);
      doc.text('Write name, contact email, WhatsApp or Telegram and type of investment directly inside the secure contact gateway console on this application.', 22, 101, { maxWidth: 110 });
      doc.setTextColor(255, 255, 255);
      doc.text('✓ Auto-generates certified block hashes', 22, 125);
      doc.text('✓ Handed directly to chief engineer Victor', 22, 131);
      doc.text('✓ Instant submission confirmation token', 22, 137);

      // Method B card
      doc.setFillColor(15, 23, 42);
      doc.rect(152, 78, 130, 85, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(168, 85, 247);
      doc.text('METHOD B // SPOT SPONSOR ROUNDS', 159, 92);
      doc.setFont('Helvetica', 'normal');
      doc.setTextColor(148, 163, 184);
      doc.text('Direct micro-transmition sponsorship allocations. Backing specific product lines and receiving native developer priority credits instantly.', 159, 101, { maxWidth: 114 });
      doc.setTextColor(255, 255, 255);
      doc.text('✓ Supports dynamic live payment simulators', 159, 125);
      doc.text('✓ Activates native affiliate commissions', 159, 131);
      doc.text('✓ Immediate digital ledger updates', 159, 137);

      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text('* Transmissions directly from our console route past third party trackers, bypassing commercial spam networks.', 15, 182);

      // Save PDF file
      doc.save('Water_Suite_Investor_Pitch_Deck.pdf');
    } catch (err) {
      console.error('PDF Generation Failure:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };


  const slidesCount = 12;
  const slideDuration = 8000; // 8 seconds per slide when auto-playing

  // Auto-advance logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (isPlaying) {
      const startTime = Date.now();
      
      progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const pct = Math.min((elapsed / slideDuration) * 100, 100);
        setAutoPlayProgress(pct);
      }, 50);

      interval = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slidesCount);
        setAutoPlayProgress(0);
      }, slideDuration);
    } else {
      setAutoPlayProgress(0);
    }

    return () => {
      clearTimeout(interval);
      clearInterval(progressInterval);
    };
  }, [isPlaying, currentSlide]);

  const handleNext = () => {
    setIsPlaying(false);
    setAutoPlayProgress(0);
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setAutoPlayProgress(0);
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const handleSelectSlide = (index: number) => {
    setIsPlaying(false);
    setAutoPlayProgress(0);
    setCurrentSlide(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Economic Projections calculation
  const calculatedMonthlyLicenseRevenue = enterpriseUsers * avgAgentCount * licenseFee;
  const calculatedAnnualRevenue = calculatedMonthlyLicenseRevenue * 12;
  const simulatedValuationMultiplier = 12; // SaaS multiplier
  const simulatedValuation = calculatedAnnualRevenue * simulatedValuationMultiplier;

  // Problems List for Slide 2
  const PROBLEMS_LIST = [
    {
      title: "Global Skilled Labor Black hole",
      sub: "Infrastructure and heavy labor gaps stall essential global projects.",
      desc: "Developed countries face severe deficits in extraction, fabrication, and basic site operations. Meanwhile, surplus global intelligence is locked out due to geographic constraints and Visa friction.",
      relevance: "Water Robotics resolves this with ultra low-latency WebRTC streams, enabling remote VR teleoperation from sovereign zones instantly.",
      icon: Cpu,
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Corporate Drag & Red Tape",
      sub: "Billion-dollar firms drown under massive operational administrative overhead.",
      desc: "Companies spend 42% of total capital on internal administration, redundant updates, and billing disputes instead of creating customer value.",
      relevance: "Water Company structures autonomous hierarchies of collaborating Python agents operating 24/7 via synchronized queue structures.",
      icon: Building,
      color: "from-indigo-400 to-purple-500"
    },
    {
      title: "Social Fragmentation / Isolation crisis",
      sub: "The loneliness epidemic actively dilutes human health and collaborative power.",
      desc: "Current algorithmic feeds thrive on persistent outrage loops, designed to sustain maximum screentime and isolate users physically or locally.",
      relevance: "Water Party implements the physical Slot & Match protocol, vetting matches instantly for offline community celebration.",
      icon: Sparkles,
      color: "from-pink-400 to-rose-500"
    },
    {
      title: "Prohibitive Compute Monopoly",
      sub: "Enormous server fees exclude small businesses from the cognitive revolution.",
      desc: "Inference pipelines are fully controlled by three sovereign cloud giants, squeezing corporate margins and censoring micro-ventures.",
      relevance: "Water AI Fluid provides a decentralized BitTorrent-style mesh utilizing global idle hardware, reducing inference bills.",
      icon: Coins,
      color: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <div className="bg-slate-950/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col h-full animate-fade-in">
      
      {/* Deck Header bar with Controls */}
      <div className="border-b border-white/5 bg-slate-950/70 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
            STELLARIUM DECK INTERACTIVE V1.1
          </span>
        </div>

        {/* Master Slide List (Dotted Indicator) */}
        <div className="hidden sm:flex items-center gap-2">
          {Array.from({ length: slidesCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelectSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === i 
                  ? 'w-7 bg-cyan-400' 
                  : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
              title={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={downloadPdfDeck}
            disabled={isGeneratingPdf}
            className="flex items-center gap-1.5 px-3 py-1 bg-cyan-950/60 hover:bg-cyan-900 text-cyan-400 hover:text-cyan-300 rounded-lg text-xs font-mono border border-cyan-500/30 transition cursor-pointer disabled:opacity-50"
            title="Download full slide deck in PDF format"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isGeneratingPdf ? 'Generating...' : 'Download PDF'}</span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="px-3 py-1 bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white rounded-lg text-xs font-mono border border-slate-800 transition cursor-pointer"
            >
              ← Back to Web Console
            </button>
          )}
        </div>
      </div>

      {/* Main Slide Panel viewport height */}
      <div className="p-6 md:p-10 flex-grow relative overflow-y-auto min-h-[480px] md:min-h-[550px] flex flex-col justify-between">
        
        {/* Dynamic Background visual aids */}
        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-cyan-500/10 rounded-full animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] border border-indigo-500/5 rounded-full" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10 flex-grow flex flex-col justify-center"
          >
            {/* ================= SLIDE 1: COVER SLIDE ================= */}
            {currentSlide === 0 && (
              <div className="space-y-6 text-center max-w-3xl mx-auto py-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono mx-auto">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  Official Private Seed Investment Blueprint
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight font-mono uppercase">
                  Water <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400">Suite</span>
                </h1>
                
                <p className="text-slate-300 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                  An integrated, high-yield digital and hardware ecosystem resolving structural shortages, administrative waste, and societal isolation.
                </p>

                <div className="border border-indigo-500/10 bg-indigo-950/20 rounded-2xl p-4 max-w-lg mx-auto font-mono text-left text-xs leading-relaxed space-y-2 text-indigo-300-80">
                  <div className="flex justify-between border-b border-indigo-500/10 pb-1.5 font-bold">
                    <span>LAUNCH PORTFOLIO STATUS:</span>
                    <span className="text-emerald-400 font-mono uppercase">Open for Partners</span>
                  </div>
                  <p className="font-light">
                    The Stellarium Foundation presents 9 interconnected core products targeting critical global market sectors. High recurring margins paired with an instant <strong className="text-white">40% referral commission program</strong>.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button 
                    onClick={handleNext}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-mono uppercase tracking-wider rounded-xl transition duration-150 flex items-center gap-2 cursor-pointer text-xs font-bold shadow-lg shadow-indigo-950/30"
                  >
                    Start Presentation <ChevronRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={togglePlay}
                    className="px-4 py-3 bg-slate-900 hover:bg-slate-850 text-slate-300 rounded-xl transition text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer border border-slate-800"
                  >
                    {isPlaying ? <><Pause className="w-3.5 h-3.5" /> Stop Auto Play</> : <><Play className="w-3.5 h-3.5" /> Slide Auto Play</>}
                  </button>
                  <button 
                    onClick={downloadPdfDeck}
                    disabled={isGeneratingPdf}
                    className="px-4 py-3 bg-cyan-950/40 hover:bg-cyan-950/80 text-cyan-300 hover:text-cyan-200 rounded-xl transition text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer border border-cyan-500/20 disabled:opacity-50"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    {isGeneratingPdf ? 'Generating PDF...' : 'Download PDF Deck'}
                  </button>
                </div>
              </div>
            )}

            {/* ================= SLIDE 2: THE PROBLEM EXPLORER ================= */}
            {currentSlide === 1 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs text-rose-400 font-mono uppercase tracking-widest block">SLIDE 02 // SECTOR FRICTION</span>
                  <h2 className="text-2xl md:text-3xl font-mono font-bold text-white uppercase tracking-wider">
                    Sovereign Gaps & Global Friction
                  </h2>
                  <p className="text-slate-400 text-xs md:text-sm font-light">
                    Humanity's potential is leaking through four severe structural bottlenecks. Select a bottleneck to examine how we resolve it:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">
                  {/* Problem Buttons */}
                  <div className="md:col-span-5 space-y-2.5">
                    {PROBLEMS_LIST.map((p, idx) => {
                      const ProblemIcon = p.icon;
                      const isActive = activeProblemId === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveProblemId(idx)}
                          className={`w-full text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex gap-3 items-center ${
                            isActive 
                              ? 'bg-slate-900 border-rose-500/30 text-white shadow-md' 
                              : 'bg-slate-950/50 border-white/5 text-slate-400 hover:bg-slate-900/60'
                          }`}
                        >
                          <div className={`p-2 rounded-lg bg-slate-950/80 border ${isActive ? 'text-rose-400 border-rose-500/20' : 'text-slate-500 border-white/5'}`}>
                            <ProblemIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-mono font-bold uppercase tracking-wide">{p.title}</p>
                            <p className="text-[10px] text-slate-500 line-clamp-1">{p.sub}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Dynamic Solution Explanation panel */}
                  <div className="md:col-span-7 bg-slate-900/70 p-5 rounded-2xl border border-slate-800/80 space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-800/60">
                      <div className={`p-3 rounded-xl bg-gradient-to-tr ${PROBLEMS_LIST[activeProblemId].color} text-slate-900 font-bold`}>
                        {React.createElement(PROBLEMS_LIST[activeProblemId].icon, { className: "w-5 h-5" })}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                          {PROBLEMS_LIST[activeProblemId].title}
                        </h4>
                        <span className="text-[10px] text-indigo-400 font-mono block">ROOT CAUSE STRUCTURAL ANALYSIS</span>
                      </div>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div>
                        <span className="text-slate-500 uppercase text-[10px] block">Downstream Damage Statement:</span>
                        <p className="text-slate-300 leading-relaxed font-light">
                          {PROBLEMS_LIST[activeProblemId].desc}
                        </p>
                      </div>

                      <div className="p-3.5 bg-emerald-950/20 border border-emerald-500/20 rounded-xl">
                        <span className="text-emerald-400 uppercase text-[10px] font-bold block mb-1">
                          ✓ The Water Suite Solution:
                        </span>
                        <p className="text-slate-200 leading-relaxed font-light text-[11px]">
                          {PROBLEMS_LIST[activeProblemId].relevance}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= SLIDE 3: SYNERGISTIC LOOP ================= */}
            {currentSlide === 2 && (
              <div className="space-y-6">
                <div className="space-y-1 text-center">
                  <span className="text-xs text-cyan-400 font-mono uppercase tracking-widest block">SLIDE 03 // SYNERGETIC MATRIX</span>
                  <h2 className="text-2xl md:text-3xl font-mono font-bold text-white uppercase tracking-wider">
                    An Unbroken Flywheel
                  </h2>
                  <p className="text-slate-400 text-xs md:text-sm font-light max-w-2xl mx-auto">
                    The Water Suite is not a series of disparate apps. Each product represents a symbiotic link, feeding capital, processing power, and sovereign reputation into the other.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2 text-center group hover:bg-slate-900 transition">
                    <div className="w-10 h-10 rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mx-auto text-sm font-bold font-mono">
                      01
                    </div>
                    <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wide">Water AI Core</h4>
                    <p className="text-[10px] text-slate-400 font-light">Routes queries and optimizes execution workflows across the entire Suite.</p>
                  </div>

                  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2 text-center group hover:bg-slate-900 transition">
                    <div className="w-10 h-10 rounded-full bg-indigo-950/50 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mx-auto text-sm font-bold font-mono">
                      02
                    </div>
                    <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wide font-medium">Autonomous Workforce</h4>
                    <p className="text-[10px] text-slate-400 font-light">Water Company manages swarms of AI agents generating high SaaS cash flow.</p>
                  </div>

                  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2 text-center group hover:bg-slate-900 transition">
                    <div className="w-10 h-10 rounded-full bg-emerald-950/50 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto text-sm font-bold font-mono">
                      03
                    </div>
                    <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wide">Real Robotics</h4>
                    <p className="text-[10px] text-slate-400 font-light">Water Robotics coordinates VR physical teleoperation, providing local hardware nodes.</p>
                  </div>

                  <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2 text-center group hover:bg-slate-900 transition">
                    <div className="w-10 h-10 rounded-full bg-purple-950/50 text-purple-400 border border-purple-500/20 flex items-center justify-center mx-auto text-sm font-bold font-mono">
                      04
                    </div>
                    <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wide">Sovereign Space</h4>
                    <p className="text-[10px] text-slate-400 font-light">Water Gov, Classroom & Party bind citizens together in rich offline hubs.</p>
                  </div>
                </div>

                <div className="bg-slate-950/55 p-4 rounded-xl border border-slate-800/80 text-xs leading-normal max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 items-center">
                  <div className="p-2.5 rounded-lg bg-cyan-950/40 text-cyan-400 font-bold shrink-0">
                    💡 HYPOTHESIS
                  </div>
                  <p className="text-slate-300 font-light text-center sm:text-left font-mono text-[10.5px]">
                    By recycling decentralized compute resources via <strong className="text-cyan-300">Water AI Fluid</strong>, the internal cost of running our massive corporate swarms converges to zero over infinite horizons.
                  </p>
                </div>
              </div>
            )}

            {/* ================= SLIDE 4: REVENUE GENERATION / VALUATION GROWTH SIMULATOR ================= */}
            {currentSlide === 3 && (
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-white/5 pb-2">
                  <div>
                    <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest block">SLIDE 04 // THE METRICS ENGINE</span>
                    <h2 className="text-2xl font-mono font-bold text-white uppercase tracking-wider">
                      Interactive Scale Simulator
                    </h2>
                  </div>
                  <div className="text-[10px] font-mono bg-emerald-950/40 text-emerald-400 px-2 py-0.5 border border-emerald-500/20 rounded-md">
                    LIVE CALCULATION
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                  {/* Interactive Inputs */}
                  <div className="md:col-span-5 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
                      <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                      Adjust Expansion Scenarios
                    </h4>

                    {/* Param 1 */}
                    <div className="space-y-1.5 font-mono text-xs">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400 uppercase">Registered Enterprise clients:</span>
                        <strong className="text-cyan-400">{enterpriseUsers.toLocaleString()} firms</strong>
                      </div>
                      <input 
                        type="range"
                        min="500"
                        max="20000"
                        step="500"
                        value={enterpriseUsers}
                        onChange={(e) => setEnterpriseUsers(Number(e.target.value))}
                        className="w-full accent-cyan-400"
                      />
                    </div>

                    {/* Param 2 */}
                    <div className="space-y-1.5 font-mono text-xs">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400 uppercase">Average hired agents / company:</span>
                        <strong className="text-indigo-400">{avgAgentCount} specialized swarms</strong>
                      </div>
                      <input 
                        type="range"
                        min="2"
                        max="25"
                        step="1"
                        value={avgAgentCount}
                        onChange={(e) => setAvgAgentCount(Number(e.target.value))}
                        className="w-full accent-indigo-400"
                      />
                    </div>

                    {/* Param 3 */}
                    <div className="space-y-1.5 font-mono text-xs">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400 uppercase">Agent monthly operating fee:</span>
                        <strong className="text-emerald-400">${licenseFee} / month</strong>
                      </div>
                      <input 
                        type="range"
                        min="50"
                        max="500"
                        step="25"
                        value={licenseFee}
                        onChange={(e) => setLicenseFee(Number(e.target.value))}
                        className="w-full accent-emerald-400"
                      />
                    </div>
                  </div>

                  {/* Calculator Output */}
                  <div className="md:col-span-7 bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wide border-b border-slate-800 pb-2">
                       Simulated Revenue & Capital Projections
                    </h4>

                    {/* KPI Display */}
                    <div className="grid grid-cols-2 gap-3 font-mono">
                      <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-900 space-y-0.5">
                        <span className="text-[10px] text-slate-500 uppercase">Monthly SaaS Flow (MRR)</span>
                        <p className="text-xl font-bold font-mono text-cyan-400">${calculatedMonthlyLicenseRevenue.toLocaleString()}</p>
                      </div>
                      <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-900 space-y-0.5">
                        <span className="text-[10px] text-slate-500 uppercase">Run-rate Annual Earnings</span>
                        <p className="text-xl font-bold font-mono text-emerald-400">${calculatedAnnualRevenue.toLocaleString()}</p>
                      </div>
                    </div>

                    {/* Animated Valuation projections bar */}
                    <div className="p-4 bg-slate-950/30 border border-indigo-500/10 rounded-xl space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-300">Simulated Valuation (12x multiple):</span>
                        <strong className="text-purple-400">${simulatedValuation.toLocaleString()} USD</strong>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-800">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min((simulatedValuation / 100000000) * 100, 100)}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                        <span>$50M Val</span>
                        <span>$150M Val</span>
                        <span>$300M+ Val</span>
                      </div>
                    </div>

                    <p className="text-slate-500 text-[10px] leading-relaxed font-light italic text-center">
                      * Calculation simulated exclusive of referral dividends, tokenized GPU payouts via Water AI Fluid, or hardware leasing programs from Water Robotics. Simulated based on SaaS licensing matrices.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ================= SLIDE 5: PROJECTS ROADMAP & RELEASE STAGE GATES ================= */}
            {currentSlide === 4 && (
              <div className="space-y-6">
                <div className="space-y-1 text-center">
                  <span className="text-xs text-cyan-400 font-mono uppercase tracking-widest block font-bold">SLIDE 05 // SYSTEM MILESTONES ROADMAP</span>
                  <h2 className="text-2xl md:text-3xl font-mono font-bold text-white uppercase tracking-wider">
                    Ecosystem Roadmap & Stage Gates
                  </h2>
                  <p className="text-slate-400 text-xs md:text-sm font-light max-w-2xl mx-auto">
                    The strategic rollout schedule for our interconnected software, mechanical robotics, and offline civic assets.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                  {[
                    { phase: "Q1-Q2 2026", title: "Secured Infrastructure", desc: "Roll out Alpha modules of Water AI Core prompt routing engine, deploy closed private testing of Water AI Fluid computing mesh, and open sovereign seed capital escrow registries.", color: "border-cyan-500/20 text-cyan-400" },
                    { phase: "Q3-Q4 2026", title: "Hardware & Base Operations", desc: "Secure the physical Stellarium HQ and Mansion properties, assemble the first physical pilot cohort of rugged Water Robotics humanoid chassis, and establish private server racks.", color: "border-rose-500/20 text-rose-400" },
                    { phase: "Q1-Q2 2027", title: "Enterprise Expansion", desc: "Launch commercial SaaS modules for Water Company autonomous workforces, secure initial state school test licenses for Water Classroom, and initiate pilot testing for Water Gov.", color: "border-indigo-500/20 text-indigo-400" },
                    { phase: "Q3-Q4 2027", title: "Sovereign Lyra Payout", desc: "Unlock Water Party connection and RSVPs globally, activate dynamic yield sharing payouts, and launch the unified estate balance ledger for all round sponsors.", color: "border-emerald-500/20 text-emerald-400" }
                  ].map((p, idx) => (
                    <div key={idx} className={`p-4 bg-slate-900/40 border ${p.color} rounded-xl space-y-2 relative overflow-hidden flex flex-col justify-between h-48`}>
                      <div>
                        <div className="text-xs font-mono font-bold tracking-widest uppercase mb-1">{p.phase}</div>
                        <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wide">{p.title}</h4>
                      </div>
                      <p className="text-[10px] text-slate-400 font-light leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ================= SLIDE 6: HARDWARE & MECHANICAL LABOR (ROBOTICS) ================= */}
            {currentSlide === 5 && (
              <div className="space-y-6">
                <div className="space-y-1 text-center">
                  <span className="text-xs text-rose-400 font-mono uppercase tracking-widest block font-bold">SLIDE 06 // BIONIC MECHANICAL LABOR</span>
                  <h2 className="text-2xl md:text-3xl font-mono font-bold text-white uppercase tracking-wider">
                    VR Teleoperated Humanoid Robotics
                  </h2>
                  <p className="text-slate-400 text-xs md:text-sm font-light max-w-2xl mx-auto">
                    Water Robotics bypasses domestic labor scarcity on resource sites using global VR-teleoperated bipedal humanoid rigs.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 items-center">
                  <div className="md:col-span-5 bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-3.5">
                    <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-1.5 flex justify-between">
                      <span>Humanoid Performance Metrics</span>
                      <span className="text-rose-400">HARDWARE CORE</span>
                    </h4>
                    <div className="space-y-3 text-xs font-mono">
                      {[
                        { label: "Action Delivery Latency:", val: "< 15ms via WebRTC Data" },
                        { label: "Chassis Flight Limit:", val: "8-10h continuous load hot-swaps" },
                        { label: "Bionic Lifting Threshold:", val: "50kg continuous duty limits" },
                        { label: "Active Remote Operators:", val: "Sovereign global mesh desks" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-slate-950/40 p-2.5 rounded-lg border border-slate-900">
                          <span className="text-slate-400 uppercase text-[9px]">{item.label}</span>
                          <strong className="text-rose-400">{item.val}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-7 bg-slate-900/30 p-5 rounded-2xl border border-white/5 space-y-4">
                    <h3 className="text-sm font-mono font-bold text-indigo-400 uppercase">Sovereign Asset & Payout Model</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      Firms secure physical, bipedal mechanical chassis deployed directly in localized sectors (mining, automated packaging/sorting, and dangerous site cleanups) where native immigration or worker sourcing presents high legal friction. 
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-light font-sans">
                      Sponsors financing specific localized robotic fleets receive direct platform lease payout dividends settled directly in real-time onto our estate balance ledger. Immediate, asset-backed liquid income hedge against fiat inflation.
                    </p>
                    <div className="p-3 bg-rose-950/10 border border-rose-500/20 rounded-xl flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse shrink-0" />
                      <span className="text-[10px] text-rose-300 font-mono uppercase">100% physically backed by bionic materials, mining claims, & raw silicon.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= SLIDE 7: DECENTRALIZED COMPUTATION (WATER AI FLUID) ================= */}
            {currentSlide === 6 && (
              <div className="space-y-6">
                <div className="space-y-1 text-center">
                  <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-bold">SLIDE 07 // DECOUPLING THE SERVER MONOPOLY</span>
                  <h2 className="text-2xl md:text-3xl font-mono font-bold text-white uppercase tracking-wider">
                    Water AI Fluid Computing Mesh
                  </h2>
                  <p className="text-slate-400 text-xs md:text-sm font-light max-w-2xl mx-auto">
                    Decentralizing cognitive workload routing across a global P2P torrent-inspired seeder node mesh.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 items-center">
                  <div className="md:col-span-7 bg-slate-900/30 p-5 rounded-2xl border border-white/5 space-y-4">
                    <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase">Compute Optimization Economics</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-light font-sans">
                      Instead of pooling all user prompts into centralized multi-billion-dollar hyperscaler server racks, Water AI Fluid splits and compiles RAG variables, weights, and inference steps locally across idle nodes.
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-light font-sans">
                      By allowing active users and physical seeders to host lightweight container sandboxes, we establish a robust cognitive mesh that provides sovereign, censorship-resistant AI operations globally with up to <strong className="text-cyan-400">60% compute discount index</strong>.
                    </p>
                    <div className="p-3.5 bg-cyan-950/20 border border-cyan-500/20 rounded-xl font-mono text-[10.5px] text-cyan-200">
                      ⚡ SEED NODE INCENTIVE: Node contributors receive 32% preferred physical estate ledger token allocation yields based on system utilization metrics.
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-3.5">
                    <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-1.5 flex justify-between">
                      <span>Compute Mesh KPIs</span>
                      <span className="text-purple-400">FLUID SEEDING</span>
                    </h4>
                    <div className="space-y-3 text-xs font-mono">
                      {[
                        { label: "Traditional Compute Cost:", val: "$0.015 / 1k Tokens Avg" },
                        { label: "Fluid Mesh Target Cost:", val: "$0.006 / 1k Tokens Avg" },
                        { label: "Node Hosting Preferred APR:", val: "Up to 32% Yields" },
                        { label: "Safety Security Margin:", val: "Encrypted Sandboxed Contain" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-slate-950/40 p-2.5 rounded-lg border border-slate-900">
                          <span className="text-slate-400 uppercase text-[9px]">{item.label}</span>
                          <strong className="text-purple-400 font-bold">{item.val}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= SLIDE 8: CIVIC & CONNECTED SOCIAL LAYER ================= */}
            {currentSlide === 7 && (
              <div className="space-y-6">
                <div className="space-y-1 text-center">
                  <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest block font-bold">SLIDE 08 // THE CONNECTIVE CIVIL SYSTEM</span>
                  <h2 className="text-2xl md:text-3xl font-mono font-bold text-white uppercase tracking-wider">
                    Sovereign Civic Integration Matrix
                  </h2>
                  <p className="text-slate-400 text-xs md:text-sm font-light max-w-2xl mx-auto">
                    Binding active operators, educational platforms, and regulatory machinery into an elegant, friction-free civic matrix.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {[
                    { title: "WATER PARTY social hubs", desc: "Combating social fragmentation with the physical 'Slot & Match' RSVP protocol. Connects vetted local professionals globally at our physical Stellarium Mansion HQ.", badge: "Connected Space", color: "from-cyan-500/20 to-blue-500/5 hover:border-cyan-500/30", text_color: "text-cyan-400" },
                    { title: "WATER CLASSROOM education portals", desc: "Equipping public state schools and children globally with 24/7 personal, voice-guided tutor swarms, gamified badges, and collaboratively proctored exam lounges.", badge: "Classroom Platform", color: "from-indigo-500/20 to-purple-500/5 hover:border-indigo-500/30", text_color: "text-indigo-400" },
                    { title: "WATER GOV decanting tools", desc: "Automating state red tape using NLP. Bypasses bureaucratic forms with 5-click business creations, and automatically verifies municipal zoning permits securely.", badge: "Decanting Machinery", color: "from-emerald-500/20 to-teal-500/5 hover:border-emerald-500/30", text_color: "text-emerald-400" }
                  ].map((cell, idx) => (
                    <div key={idx} className={`p-4 bg-slate-900/30 border border-white/5 rounded-2xl flex flex-col justify-between h-56 transition-all duration-200 cursor-pointer bg-gradient-to-b ${cell.color}`}>
                      <div>
                        <span className={`text-[9px] font-mono uppercase tracking-widest bg-slate-950/80 px-2 py-0.5 border border-white/5 rounded-full ${cell.text_color}`}>
                          {cell.badge}
                        </span>
                        <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wide mt-3">{cell.title}</h4>
                      </div>
                      <p className="text-[10px] text-slate-300 font-light leading-relaxed font-sans">{cell.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ================= SLIDE 9: FINANCIAL YIELD MECHANICS & ROI ================= */}
            {currentSlide === 8 && (
              <div className="space-y-6">
                <div className="space-y-1 text-center">
                  <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest block font-bold">SLIDE 09 // PORTFOLIO YIELD & ROI</span>
                  <h2 className="text-2xl md:text-3xl font-mono font-bold text-white uppercase tracking-wider">
                    Financial Yield Mechanics & Sponsor ROI
                  </h2>
                  <p className="text-slate-400 text-xs md:text-sm font-light max-w-2xl mx-auto">
                    Direct transparency regarding capital multipliers, payback windows, and dynamic yield streams generated from our cross-platform ecosystem.
                  </p>
                </div>

                {/* Return stats grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-900/50 border border-emerald-500/10 rounded-2xl text-center space-y-1">
                    <span className="text-[10px] text-slate-500 font-mono uppercase block">Target exit multiplier</span>
                    <div className="text-xl md:text-2xl font-bold font-mono text-emerald-400">{INVESTOR_OPTIONS.estimatedRoiMultiplier}</div>
                    <p className="text-[10px] text-slate-400 font-light font-sans">Based on conservative 12x SaaS multiple projections.</p>
                  </div>

                  <div className="p-4 bg-slate-900/50 border border-cyan-500/10 rounded-2xl text-center space-y-1">
                    <span className="text-[10px] text-slate-500 font-mono uppercase block">targeted payback range</span>
                    <div className="text-xl md:text-2xl font-bold font-mono text-cyan-400">{INVESTOR_OPTIONS.paybackDuration}</div>
                    <p className="text-[10px] text-slate-400 font-light font-sans">Contractually facilitated via Senior SaaS Cashflow tiers.</p>
                  </div>

                  <div className="p-4 bg-slate-900/50 border border-purple-500/10 rounded-2xl text-center space-y-1">
                    <span className="text-[10px] text-slate-500 font-mono uppercase block">sponsor preferential APR</span>
                    <div className="text-xl md:text-2xl font-bold font-mono text-purple-400">{INVESTOR_OPTIONS.averageSponsorApr}</div>
                    <p className="text-[10px] text-slate-400 font-light font-sans">Direct physical asset yields settled quarterly.</p>
                  </div>
                </div>

                {/* Returns channels and dynamic timeline */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-1">
                  
                  {/* Channels Left */}
                  <div className="lg:col-span-6 space-y-2">
                    <h4 className="text-[11px] font-mono font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-1 flex justify-between">
                      <span>Primacy Returns Engines</span>
                      <span className="text-emerald-400">Yield Channels</span>
                    </h4>

                    <div className="space-y-2">
                      {INVESTOR_OPTIONS.returnChannels.map((c, i) => (
                        <div key={i} className="p-3 bg-slate-900/30 border border-white/5 rounded-xl space-y-1 hover:border-emerald-500/30 transition duration-150">
                          <div className="flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-xs font-bold">0{i+1}.</span>
                            <strong className="text-slate-200 font-mono text-xs uppercase">{c.title}</strong>
                          </div>
                          <p className="text-[10px] text-slate-400 leading-relaxed font-light">{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Stages Timeline Right */}
                  <div className="lg:col-span-6 space-y-2">
                    <h4 className="text-[11px] font-mono font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-1 flex justify-between">
                      <span>Execution Milestones</span>
                      <span className="text-cyan-400">Capital Use Phases</span>
                    </h4>

                    <div className="space-y-2">
                      {INVESTOR_OPTIONS.useOfFundsPhases.map((phase, i) => (
                        <div key={i} className="p-3 bg-slate-900/30 border border-white/5 rounded-xl space-y-1 hover:border-cyan-500/30 transition duration-150 relative overflow-hidden">
                          <div className="absolute right-0 top-0 text-[32px] font-mono font-bold text-slate-800/20 pointer-events-none select-none">
                            {i + 1}
                          </div>
                          <strong className="text-slate-200 font-mono text-xs block text-cyan-400 font-bold">{phase.phase}</strong>
                          <p className="text-[10px] text-slate-400 leading-normal font-light">{phase.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Small footer note */}
                <div className="text-center">
                  <p className="text-[10px] text-slate-500 italic max-w-xl mx-auto font-mono">
                    * All seed allocations are validated under strict legal escrow and backed by the Stellarium Foundation reserve ledger to ensure capital recovery.
                  </p>
                </div>
              </div>
            )}

            {/* ================= SLIDE 10: ALTRUISTIC STEWARDSHIP & ARCHITECT ================= */}
            {currentSlide === 9 && (
              <div className="space-y-6">
                <div className="space-y-1 text-center">
                  <span className="text-xs text-cyan-400 font-mono uppercase tracking-widest block font-bold">SLIDE 10 // SYSTEM STEWARDSHIP</span>
                  <h2 className="text-2xl md:text-3xl font-mono font-bold text-white uppercase tracking-wider">
                    First-Principles Altruism
                  </h2>
                  <p className="text-slate-400 text-xs md:text-sm font-light max-w-2xl mx-auto">
                    Water Suite is built out of absolute corporate transparency and pristine management alignment under John Victor. No hidden motives—only clear technical efficiency.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl space-y-3 font-mono">
                    <div className="text-cyan-400 text-lg font-bold font-bold uppercase">I. Do Good</div>
                    <p className="text-[11px] text-slate-400 leading-normal font-light font-sans">
                      Providing staple resources (AI education, decentralized health indicators) to global citizenries for free or native cost, bridging societal inequality globally.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl space-y-3 font-mono">
                    <div className="text-indigo-400 text-lg font-bold font-bold uppercase">II. Make Money</div>
                    <p className="text-[11px] text-slate-400 leading-normal font-light font-sans">
                      Operating high-yield automated portfolios. Rewarding investors, affiliate referrers, and computing seed contributors with pristine capital.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl space-y-3 font-mono">
                    <div className="text-emerald-400 text-lg font-bold font-bold uppercase">III. Have Fun</div>
                    <p className="text-[11px] text-slate-400 leading-normal font-light font-sans">
                      Fostering uninhibited physical connection. Transitioning society away from dull administrative jobs into beautiful celebrations and creative milestones.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 border border-white/5 rounded-xl text-center">
                  <span className="text-slate-500 font-mono uppercase text-[10px] block mb-1">
                    Universal Framework Target Implementation
                  </span>
                  <p className="text-slate-300 font-sans text-xs md:text-sm max-w-2xl mx-auto font-light">
                    "Pre-validated for instant compilation directly to React Native and Flutter frameworks, maximizing code reusability across all mobile paradigms."
                  </p>
                </div>
              </div>
            )}

            {/* ================= SLIDE 11: OFFERING TERMS & ALLOCATION ================= */}
            {currentSlide === 10 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs text-purple-400 font-mono uppercase tracking-widest block font-bold">SLIDE 11 // PORTFOLIO OFFERING</span>
                  <h2 className="text-2xl md:text-3xl font-mono font-bold text-white uppercase tracking-wider">
                    Offering Terms & Escrow
                  </h2>
                  <p className="text-slate-400 text-xs md:text-sm">
                    We are closing the active $7M Seed Offering. Here is the exact allocation strategy for the incoming capital:
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2 items-center">
                  
                  {/* Allocation Percent bar graph */}
                  <div className="lg:col-span-7 space-y-3">
                    <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
                      <Sliders className="w-3.5 h-3.5 text-purple-400" />
                      Hover to Expand Capital Allocations
                    </h4>

                    <div className="space-y-2">
                      {INVESTOR_OPTIONS.allocations.map((a, idx) => (
                        <div 
                           key={idx}
                           onMouseEnter={() => setHoveredAllocation(idx)}
                           onMouseLeave={() => setHoveredAllocation(null)}
                           className={`p-3 rounded-xl border font-mono text-xs transition duration-150 cursor-pointer ${
                            hoveredAllocation === idx 
                              ? 'bg-purple-950/20 border-purple-500/30' 
                              : 'bg-slate-900/40 border-white/5'
                           }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-slate-200 font-bold uppercase">{a.name}</span>
                            <span className="text-purple-400 font-bold">{a.percentage}%</span>
                          </div>
                          <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                            <div 
                              className="bg-purple-500 h-full rounded-full transition-all duration-300" 
                              style={{ width: `${a.percentage}%` }}
                            />
                          </div>
                          
                          {hoveredAllocation === idx && (
                            <motion.p 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="text-[10px] text-slate-400 leading-normal mt-2 pt-1 border-t border-slate-800/60 font-sans font-light"
                            >
                              {a.desc}
                            </motion.p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Seed Investment Card details */}
                  <div className="lg:col-span-5 bg-gradient-to-tr from-cyan-950/30 to-indigo-950/30 p-5 border border-indigo-500/20 rounded-2xl space-y-4">
                    <h4 className="text-xs font-bold text-slate-100 uppercase font-mono tracking-widest text-center border-b border-indigo-550/15 pb-2">
                      Offering Summary
                    </h4>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center text-[11px] border-b border-slate-800 pb-1">
                        <span className="text-slate-400">ROUND TARGET:</span>
                        <strong className="text-white bg-slate-900 px-2 py-0.5 rounded">{INVESTOR_OPTIONS.seedRoundGoal}</strong>
                      </div>
                      <div className="flex justify-between items-center text-[11px] border-b border-slate-800 pb-1">
                        <span className="text-slate-400">COMMITTED PRE-SEED:</span>
                        <strong className="text-emerald-400">{INVESTOR_OPTIONS.currentRaised}</strong>
                      </div>
                      <div className="flex justify-between items-center text-[11px] border-b border-slate-800 pb-1">
                        <span className="text-slate-400">MIN. ALLOCATION:</span>
                        <strong className="text-white">{INVESTOR_OPTIONS.minCommitment}</strong>
                      </div>
                      <div className="flex justify-between items-center text-[11px] border-b border-slate-800 pb-1">
                        <span className="text-slate-400">REFERRAL BONUS:</span>
                        <strong className="text-emerald-400 font-bold">40% Instant Commission</strong>
                      </div>
                    </div>

                    <div className="p-3 bg-indigo-950/20 border border-indigo-500/20 rounded-xl text-center font-mono">
                      <span className="text-indigo-400 uppercase font-mono text-[9px] block font-bold">SECURE ESCROW PROTECTION</span>
                      <p className="text-[10px] text-slate-300 font-light leading-relaxed mt-1 font-sans font-sans">
                        All allocations reside inside a validated legal structural shield. Verified personally under John Victor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= SLIDE 12: CALL TO ACTION / REGISTRY ================= */}
            {currentSlide === 11 && (
              <div className="space-y-6 text-center max-w-2xl mx-auto py-2">
                <div className="w-16 h-16 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
                  ✔
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest block font-bold">SLIDE 12 // EMPOWER YOUR WEALTH</span>
                  <h2 className="text-3xl font-mono font-bold text-white uppercase tracking-wider">
                    Commit Allocation Now
                  </h2>
                  <p className="text-slate-400 text-xs md:text-sm font-light">
                    Take your place as a sovereign partner of Water Suite. Choose your connection method below to physically deliver your commitment proposal directly to founder John Victor:
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                  {onNavigateToContact && (
                    <button
                      onClick={onNavigateToContact}
                      className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-550 text-white font-mono uppercase tracking-wider text-xs font-bold rounded-xl transition duration-150 cursor-pointer shadow-lg shadow-indigo-950/30 flex items-center justify-center gap-2"
                    >
                      ✉ Formulate Secured Proposal Pitch
                    </button>
                  )}
                  {onNavigateToSponsor && (
                    <button
                      onClick={onNavigateToSponsor}
                      className="px-6 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-200 bg-slate-900/60 font-mono uppercase tracking-wider text-xs rounded-xl cursor-pointer transition flex items-center justify-center gap-2"
                    >
                      💰 Liquid Sponsor Options
                    </button>
                  )}
                </div>

                <p className="text-[10px] text-slate-500 font-mono italic">
                  * Dynamic direct messaging pipelines on our Contact Screen bypass all secondary intermediary corporate nodes, dropping securely in Chief Architect John Victor's direct mailbox.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Presentation Slide Progress gauge bar */}
        <div className="mt-8 border-t border-white/5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-2 bg-slate-900 hover:bg-slate-850 rounded-xl text-slate-400 hover:text-white transition cursor-pointer border border-slate-800"
              title="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs font-mono text-slate-500">
              <span className="text-slate-300 font-bold">{currentSlide + 1}</span> / {slidesCount}
            </div>
            <button
              onClick={handleNext}
              className="p-2 bg-slate-900 hover:bg-slate-850 rounded-xl text-slate-400 hover:text-white transition cursor-pointer border border-slate-800"
              title="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Autoplay progress bar indicator */}
          {isPlaying && (
            <div className="w-40 bg-slate-900 h-1 rounded-full overflow-hidden border border-slate-800/80">
              <div 
                className="bg-cyan-400 h-full transition-all"
                style={{ width: `${autoPlayProgress}%`, transitionDuration: '50ms' }}
              />
            </div>
          )}

          <div className="text-[10px] text-slate-500 font-mono">
            ESTATE KEYNOTE PRESENTATION // WATER SUITE ENTERPRISES © 2026
          </div>
        </div>

      </div>

    </div>
  );
}
