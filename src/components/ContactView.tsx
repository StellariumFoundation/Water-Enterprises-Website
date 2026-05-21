import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Check, 
  Sparkles, 
  Globe, 
  UserCheck, 
  ShieldCheck, 
  HelpCircle,
  Building 
} from 'lucide-react';
import { FOUNDER_BIO } from '../data';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    commitment: '$50,000 - $150,050', // placeholder or chosen default
    category: 'Venture Equity Investment',
    whatsapp: '',
    message: ''
  });

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [submissionCode, setSubmissionCode] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [sendingStatus, setSendingStatus] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const executeSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setErrorMessage('');
    setSendingStatus('Securing encrypted channel...');

    // Generate certified proposal citation hash
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pCode = 'STELLAR-PRP-';
    for (let i = 0; i < 12; i++) {
      pCode += chars[Math.floor(Math.random() * chars.length)];
    }
    setSubmissionCode(pCode);

    try {
      // Small delays for premium retro security feel
      await new Promise(resolve => setTimeout(resolve, 800));
      setSendingStatus('Encrypting pitch parameters...');
      await new Promise(resolve => setTimeout(resolve, 600));
      setSendingStatus('Broadcasting through StaticForms Gateway...');

      const formattedMessage = `STELLARIUM SUITE SECURE TRANS-PITCH [${pCode}]
========================================
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company || 'N/A'}
- WhatsApp/Telegram: ${formData.whatsapp || 'N/A'}
- Category: ${formData.category}
- Capital Allocation: ${formData.commitment}

Message Pitch Content:
----------------------------------------
${formData.message}
========================================`;

      const response = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
        },
        body: JSON.stringify({
          apiKey: "sf_0491b9b3fbb2f4f489b6a319",
          name: formData.name,
          email: formData.email,
          message: formattedMessage,
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setIsSubmitSuccessful(true);
      } else {
        setErrorMessage(data.message || 'Transmitter gateway server rejected the bundle.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Direct transmission failed. You can still use the "Send Direct Email Now" code fallback.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase font-sans">Venture Inquiries & In-Person Casting</h2>
        <p className="text-slate-400 text-xs md:text-sm font-light">
          Connect directly with Chief Architect John Victor. Pitch strategic partnerships, submit investments, or request listing in the "Cast In Person" communal residency stream.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Contact Info & Casting Context (5 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="cosmic-card rounded-2xl p-6 border border-slate-800/80 space-y-6">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">Direct Verified Directory</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-950/40 text-cyan-400 flex items-center justify-center border border-slate-850">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-slate-500 block font-mono uppercase">Venture Inquiries</span>
                  <a href="mailto:stellar.foundation.us@gmail.com" className="text-slate-200 hover:text-cyan-400 font-mono transition">stellar.foundation.us@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-950/40 text-indigo-400 flex items-center justify-center border border-slate-850">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-slate-500 block font-mono uppercase">Direct CEO Courier</span>
                  <a href="mailto:stellar.0org@gmail.com" className="text-slate-200 hover:text-indigo-400 font-mono transition">stellar.0org@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-950/40 text-emerald-400 flex items-center justify-center border border-slate-850">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-slate-500 block font-mono uppercase">Contact Telephone</span>
                  <a href="tel:+558198392658" className="text-slate-200 hover:text-emerald-400 font-mono transition">+5581993953560</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-950/40 text-amber-400 flex items-center justify-center border border-slate-850">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-slate-500 block font-mono uppercase">Mansion Registry Location</span>
                  <span className="text-slate-200 font-mono">Pernambuco, Brazil & Switzerland</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cast in Person contextual note */}
          <div className="cosmic-card rounded-2xl p-6 border border-slate-800/80 bg-slate-900/10 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">The "Cast In Person" Invitation</h4>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-light">
              Forget long-distance Zoom calls. The Stellarium operates as an active in-person content, lifestyle, and diplomacy accelerator. 
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed font-light">
              Under John Victor, prospective stakeholders can apply to reside directly in our high-end shared mansion, co-developing high-yield assets side-by-side. List "Cast In Person" as proposal category below.
            </p>
          </div>
        </div>

        {/* Right: Message Form (7 Cols) */}
        <div className="lg:col-span-8">
          <div className="cosmic-card rounded-2xl p-6 border border-slate-800/80 h-full">
            <AnimatePresence mode="wait">
              {!isSubmitSuccessful ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={executeSendMessage} 
                  className="space-y-4 text-xs"
                >
                  <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">Submit Encrypted Proposal</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Your Name / Agent Title</label>
                      <input 
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500 text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">E-mail Address</label>
                      <input 
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@firm.com"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Company / Affiliation</label>
                      <input 
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Venture Fund LP"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500 text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Direct Telegram / WhatsApp No.</label>
                      <input 
                        id="contact-whatsapp"
                        type="text"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        placeholder="e.g. +1 555-0199"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Proposal Category</label>
                      <select 
                        id="contact-category"
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs font-mono"
                      >
                        <option>Venture Equity Investment</option>
                        <option>Direct Joint Venture Program</option>
                        <option>Philanthropic Donation Audit</option>
                        <option>"Cast In Person" Residency Admission</option>
                        <option>Affiliate Agent Registration</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Target Capital Allocation</label>
                      <select 
                        id="contact-commitment"
                        value={formData.commitment}
                        onChange={(e) => setFormData({...formData, commitment: e.target.value})}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs font-mono"
                      >
                        <option>$25,000 - $100,000 USD</option>
                        <option>$100,000 - $500,000 USD</option>
                        <option>$500,000 - $1,500,000 USD</option>
                        <option>Over $1.5M Strategic Funding</option>
                        <option>Non-capital / Co-Development Expertise</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1 font-light">
                    <label className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Detailed Proposal / Vibe Check Pitch</label>
                    <textarea 
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Outline how your expertise or investment aligns with the Water Suite goals..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500 text-xs font-sans leading-normal"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-red-950/30 border border-red-500/20 text-red-400 font-mono text-[11px] rounded-xl text-center">
                      ⚠ {errorMessage}
                    </div>
                  )}

                  {isSending && (
                    <div className="flex items-center justify-center gap-2 py-1 text-cyan-400 font-mono text-[11px] animate-pulse bg-cyan-950/20 border border-cyan-500/10 rounded-xl p-3">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                      <span>{sendingStatus}</span>
                    </div>
                  )}

                  <button 
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-mono uppercase tracking-wider py-3.5 rounded-xl cursor-pointer font-semibold shadow-lg shadow-cyan-950/20 flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? 'Broadcasting...' : 'Transmit Secured Pitch'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="proposal-submitted"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-8 font-mono text-xs"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                    ✔
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">Proposal Compiled Successfully</h4>
                    <p className="text-slate-400 leading-relaxed font-light">
                      Your pitch code has been generated. Since this is a client workspace application, click below to physically **transmit this message to John Victor's direct email** with all values pre-loaded!
                    </p>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-left space-y-1.5 leading-relaxed">
                    <p className="border-b border-slate-800 pb-1.5"><strong className="text-slate-500">TRANSMIT CODE:</strong> <span className="text-cyan-400 font-bold">{submissionCode}</span></p>
                    <p><strong className="text-slate-500">PITCHER:</strong> <span className="text-slate-200">{formData.name}</span></p>
                    <p><strong className="text-slate-500">CATEGORY:</strong> <span className="text-slate-200">{formData.category}</span></p>
                    <p><strong className="text-slate-500">ALLOCATION:</strong> <span className="text-emerald-400">{formData.commitment}</span></p>
                  </div>

                  <p className="text-[11px] text-slate-300 font-sans leading-normal bg-slate-950/50 p-4 rounded-xl border border-slate-900 text-left">
                    ✨ <strong className="text-cyan-400 font-mono">Immediate Direct Link:</strong> Clicking the button below opens your default mail application (such as Outlook, Mail, or Gmail) with the subject and body perfectly written for you, ready to send with one click!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a 
                      id="contact-mailto-action"
                      href={`mailto:stellar.0org@gmail.com?subject=Stellarium%20Proposal%20[${submissionCode}]&body=Hi%20John%20Victor,%0D%0A%0D%0AI%20am%20submitting%20a%20proposal%20via%20the%20Stellarium%20Suite.%0D%0A%0D%0A-%20Name:%20${encodeURIComponent(formData.name)}%0D%0A-%20Email:%20${encodeURIComponent(formData.email)}%0D%0A-%20Company:%20${encodeURIComponent(formData.company || 'N/A')}%0D%0A-%20WhatsApp/Telegram:%20${encodeURIComponent(formData.whatsapp || 'N/A')}%0D%0A-%20Category:%20${encodeURIComponent(formData.category)}%0D%0A-%20Allocation:%20${encodeURIComponent(formData.commitment)}%0D%0A%0D%0APitch%20Message:%0D%0A${encodeURIComponent(formData.message)}`}
                      className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-mono uppercase tracking-wider py-3 px-6 rounded-xl cursor-pointer font-bold shadow-lg shadow-emerald-950/20 flex items-center justify-center gap-2 transition"
                    >
                      ✉ Send Direct Email Now
                    </a>

                    <button 
                      id="pitch-reset-button"
                      onClick={() => {
                        setIsSubmitSuccessful(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          commitment: '$50,000 - $150,000',
                          category: 'Venture Equity Investment',
                          whatsapp: '',
                          message: ''
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl cursor-pointer font-mono uppercase transition text-center"
                    >
                      Draft New Pitch
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
