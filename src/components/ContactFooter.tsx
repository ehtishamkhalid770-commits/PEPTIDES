import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Send, Instagram, MessageCircle, AlertOctagon, HelpCircle, Mail, User, CheckCircle } from "lucide-react";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Research Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    
    // Simulate premium submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "Research Inquiry", message: "" });
    }, 1500);
  };

  return (
    <footer
      id="contact-section"
      className="relative bg-brand-dark pt-24 pb-12 border-t border-white/5 overflow-hidden"
    >
      {/* Background neon accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split Layout: Contact Form & Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-white/5 text-left">
          
          {/* Left Column: Socials, Call-to-action & Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-brand-cyan uppercase">
                  IMMEDIATE CONNECTION
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mb-4">
                WRITE TO US TODAY
              </h3>
              <p className="text-brand-cyan text-lg sm:text-xl font-display font-bold tracking-wider uppercase mb-6 text-glow-cyan">
                VISIBLE RESULTS IN WEEKS
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                Do you have questions about reconstitution protocols, dosing, or shipping? Contact our priority support channel directly.
              </p>
            </div>

            {/* Social handles list */}
            <div className="space-y-4">
              {/* WhatsApp Connection */}
              <a
                href="https://wa.me/15133549941?text=Hola%20VSC%20Peptides,%20me%20interesa%20adquirir%20péptidos%20de%20investigación"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-brand-box/40 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                    Sales WhatsApp
                  </span>
                  <span className="text-md sm:text-lg font-mono font-bold text-white group-hover:text-emerald-400 transition-colors">
                    +1 (513) 354-9941
                  </span>
                </div>
              </a>

              {/* Instagram Handle */}
              <a
                href="https://instagram.com/VSC.PEPTIDES"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-brand-box/40 border border-white/5 hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                    Official Instagram
                  </span>
                  <span className="text-md sm:text-lg font-mono font-bold text-white group-hover:text-brand-cyan transition-colors">
                    @VSC.PEPTIDES
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact/Order Form */}
          <div className="lg:col-span-7 bg-brand-box/40 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative">
            <h4 className="text-xl font-display font-black text-white uppercase tracking-wider mb-2">
              Scientific Inquiry Form
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Complete your laboratory details to receive a formal quotation or answer questions immediately.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col text-left">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand-cyan" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Dr. Alexander Smith"
                    className="px-4 py-3 rounded-xl bg-brand-dark/60 border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col text-left">
                  <label className="text-xs font-mono font-bold text-slate-400 uppercase mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alexander@laboratory.com"
                    className="px-4 py-3 rounded-xl bg-brand-dark/60 border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-brand-cyan" />
                  Inquiry Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="px-4 py-3 rounded-xl bg-brand-dark/60 border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors appearance-none cursor-pointer"
                >
                  <option value="Research Inquiry">Research Inquiry</option>
                  <option value="Purchase Order / Shipping">Purchase Order / Shipping</option>
                  <option value="Dosing Support">Dosing Support</option>
                  <option value="Purity / Batch Verification">Purity / Batch Verification</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">
                  Message or Order Description
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail the peptide you wish to quote or your technical question..."
                  className="px-4 py-3 rounded-xl bg-brand-dark/60 border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors resize-none"
                />
              </div>

              {/* Submit Buttons / Feedback messages */}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-brand-dark font-display font-black text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_4px_15px_rgba(6,182,212,0.2)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.5)] hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-55"
                >
                  {status === "loading" ? (
                    <span>SENDING INQUIRY...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4 text-brand-dark" />
                    </>
                  )}
                </button>

                {/* Feedback notifications */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-3 text-left"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-mono font-bold text-emerald-400 block uppercase">
                          MESSAGE SENT SUCCESSFULLY!
                        </span>
                        <p className="text-xs text-slate-300 mt-0.5">
                          We will contact you shortly. You can also expedite your response by writing directly to our sales WhatsApp.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center gap-3 text-left"
                    >
                      <AlertOctagon className="w-5 h-5 text-rose-400 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-mono font-bold text-rose-400 block uppercase">
                          VALIDATION ERROR
                        </span>
                        <p className="text-xs text-slate-300 mt-0.5">
                          Please complete all fields marked as required before submitting.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>

        </div>

        {/* Legal Disclaimers & Copyrights row */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Disclaimer text */}
          <div className="flex items-center gap-3 bg-brand-box/30 border border-white/5 rounded-2xl px-5 py-3 max-w-xl">
            <AlertOctagon className="w-5 h-5 text-brand-cyan flex-shrink-0" />
            <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed font-mono uppercase tracking-wider">
              <span className="text-brand-cyan font-bold">RESEARCH USE ONLY</span> - THESE COMPOUNDS ARE DESTINED EXCLUSIVELY FOR SCIENTIFIC RESEARCH AND LABORATORY USE ONLY. NOT FOR HUMAN, CLINICAL, OR VETERINARY USE.
            </p>
          </div>

          {/* Socials & Legal details */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="text-xs text-slate-500 font-sans">
              © 2024 VSC PEPTIDES. All rights reserved.
            </span>
            <span className="text-[10px] font-mono text-slate-600">
              Developed under strict biosafety guidelines.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
