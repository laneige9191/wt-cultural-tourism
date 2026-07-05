/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Users, Calendar, Sparkles, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { contactSectionContent, staticTranslations } from '../content/content';
import WeChatContactCard from './WeChatContactCard';

interface ContactSectionProps {
  lang: 'zh' | 'en';
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const t = staticTranslations[lang];

  // Form states
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [wechat, setWechat] = useState<string>('');
  const [category, setCategory] = useState<string>('health');
  const [details, setDetails] = useState<string>('');
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium transmission to New Zealand HQ
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section className="py-24 bg-[#031E3F] text-white relative overflow-hidden" id="contact">
      {/* Background visual graphics */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {/* Soft abstract rings representing global connectivity */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left column: Institutional guarantees */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#B39D82]" />
                <span className="text-xs font-bold text-[#CBD5E1] tracking-widest uppercase">
                  {contactSectionContent.eyebrow[lang]}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {t.consultTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {t.consultSubtitle}
              </p>
            </div>

            {/* Credibility checkpoints */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start space-x-3.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5 text-xs">✓</div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">{contactSectionContent.guarantees[0].title[lang]}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{contactSectionContent.guarantees[0].desc[lang]}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-5 h-5 rounded-full bg-[#B39D82]/20 border border-[#B39D82]/40 flex items-center justify-center shrink-0 text-[#B39D82] mt-0.5 text-xs">✓</div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#B39D82]">{contactSectionContent.guarantees[1].title[lang]}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{contactSectionContent.guarantees[1].desc[lang]}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-5 h-5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center shrink-0 text-[#00D2FF] mt-0.5 text-xs">✓</div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#00D2FF]">{contactSectionContent.guarantees[2].title[lang]}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{contactSectionContent.guarantees[2].desc[lang]}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle column: Interactive form/success block */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5" id="consultation-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">{t.inputName}</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={contactSectionContent.placeholders.name[lang]}
                          className="w-full text-xs py-3 px-4 rounded-lg bg-white/5 border border-white/15 focus:border-[#B39D82] focus:bg-white/10 text-white placeholder-slate-500 outline-none transition-all duration-200"
                        />
                      </div>

                      {/* WeChat / Messenger input */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">{t.inputWechat}</label>
                        <input
                          type="text"
                          required
                          value={wechat}
                          onChange={(e) => setWechat(e.target.value)}
                          placeholder={contactSectionContent.placeholders.messenger}
                          className="w-full text-xs py-3 px-4 rounded-lg bg-white/5 border border-white/15 focus:border-[#B39D82] focus:bg-white/10 text-white placeholder-slate-500 outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">{t.inputEmail}</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={contactSectionContent.placeholders.email}
                          className="w-full text-xs py-3 px-4 rounded-lg bg-white/5 border border-white/15 focus:border-[#B39D82] focus:bg-white/10 text-white placeholder-slate-500 outline-none transition-all duration-200"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">{t.inputPhone}</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={contactSectionContent.placeholders.phone}
                          className="w-full text-xs py-3 px-4 rounded-lg bg-white/5 border border-white/15 focus:border-[#B39D82] focus:bg-white/10 text-white placeholder-slate-500 outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Category input */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">{t.inputCategory}</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full text-xs py-3 px-4 rounded-lg bg-[#031E3F] border border-white/15 focus:border-[#B39D82] text-white outline-none transition-all duration-200"
                      >
                        {contactSectionContent.categories.map((item) => (
                          <option key={item.value} value={item.value}>{item.label[lang]}</option>
                        ))}
                      </select>
                    </div>

                    {/* Details input */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">{t.inputDetails}</label>
                      <textarea
                        rows={4}
                        required
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder={contactSectionContent.placeholders.details[lang]}
                        className="w-full text-xs py-3 px-4 rounded-lg bg-white/5 border border-white/15 focus:border-[#B39D82] focus:bg-white/10 text-white placeholder-slate-500 outline-none transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submission button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4.5 rounded-xl bg-gradient-to-r from-[#B39D82] to-[#c7b39b] hover:from-[#c7b39b] hover:to-[#B39D82] text-slate-900 text-xs font-black tracking-widest uppercase transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-black/40 hover:translate-y-[-1px] active:translate-y-[1px] flex items-center justify-center space-x-2"
                        id="submit-consult-btn"
                      >
                        <Send className="w-4 h-4 shrink-0" />
                        <span>{isSubmitting ? t.submitting : t.submitBtn}</span>
                      </button>
                    </div>

                    <p className="text-[10px] text-slate-400 leading-normal text-center pt-2">
                      {t.formNotice}
                    </p>
                  </form>
                ) : (
                  /* Success State styled like a physical luxury certificate letter */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-4 border-2 border-dashed border-[#B39D82]/50 rounded-xl bg-[#002855]/40 text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-tr from-[#B39D82] to-[#E5BA73] text-slate-900 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#B39D82] tracking-wide uppercase">
                        {t.formSuccessTitle}
                      </h3>
                      <p className="text-xs text-slate-200 font-semibold max-w-md mx-auto leading-relaxed">
                        {t.formSuccessDesc}
                      </p>
                    </div>

                    {/* Visual metadata detailing response guarantees */}
                    <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto pt-4 border-t border-white/10 text-left text-[10px] sm:text-xs font-semibold text-slate-300 font-mono">
                      <div>
                        <div className="text-[#B39D82] font-bold uppercase">{contactSectionContent.successMeta.ticketId[lang]}</div>
                        <div className="text-white">WT-NZ-2026-{Math.floor(Math.random() * 90000) + 10000}</div>
                      </div>
                      <div>
                        <div className="text-[#B39D82] font-bold uppercase">{contactSectionContent.successMeta.intakeZone[lang]}</div>
                        <div className="text-white">{contactSectionContent.successMeta.intakeValue}</div>
                      </div>
                    </div>

                    <div className="pt-2 text-[10px] text-slate-400 font-medium">
                      {contactSectionContent.successMeta.securityLine[lang]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right column: WeChat QR Code & Contact card */}
          <div className="lg:col-span-3">
            <WeChatContactCard lang={lang} />
          </div>

        </div>
      </div>
    </section>
  );
}
