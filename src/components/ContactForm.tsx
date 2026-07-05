/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Users, Calendar, Sparkles, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { staticTranslations } from '../lib/translations';
import WeChatQRCode from './WeChatQRCode';

interface ContactFormProps {
  lang: 'zh' | 'en';
}

export default function ContactForm({ lang }: ContactFormProps) {
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
                  {lang === 'zh' ? '新西兰总部受托保障' : 'NZ LAW COMPLIANT'}
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
                  <h4 className="text-xs sm:text-sm font-bold text-white">{lang === 'zh' ? '24小时极速响应' : '24-Hour Active Response'}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{lang === 'zh' ? '新西兰奥克兰总部与中国办事处无缝对接，首问责任制' : 'Seamless dual coordination by Auckland HQ and domestic offices'}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-5 h-5 rounded-full bg-[#B39D82]/20 border border-[#B39D82]/40 flex items-center justify-center shrink-0 text-[#B39D82] mt-0.5 text-xs">✓</div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#B39D82]">{lang === 'zh' ? '1对1资深定制顾问' : 'Personal Custom Director'}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{lang === 'zh' ? '指派十年以上高端文旅或外事医疗背景项目总监提供服务' : 'Senior project manager with 10+ years ex-diplomatic or medical consulting experience'}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-5 h-5 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center shrink-0 text-[#00D2FF] mt-0.5 text-xs">✓</div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#00D2FF]">{lang === 'zh' ? '保密协议(NDA)护航' : 'High-Spec Privacy Compliance'}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{lang === 'zh' ? '严格遵守新西兰信息法及NDA，对家庭成员隐私进行绝密守护' : 'Compliant with NZ Information Act & NDA to safeguard medical and family details'}</p>
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
                          placeholder={lang === 'zh' ? '例如：张先生' : 'e.g., Prof. Zhang'}
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
                          placeholder="WeChat ID / WhatsApp / Telegram"
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
                          placeholder="name@domain.com"
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
                          placeholder="+64 21 000 0000"
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
                        <option value="health">{lang === 'zh' ? '回国深度体检与医院绿色通道陪护' : 'Homecoming Health Checkup & Escort'}</option>
                        <option value="travel">{lang === 'zh' ? '多代同堂高端定制慢旅行 (中/新两地)' : 'Custom Multi-Generational Travel'}</option>
                        <option value="roots">{lang === 'zh' ? '华裔新生代谱系学术考证与返乡寻根' : 'Roots-Seeking & Ancestral Heritage Search'}</option>
                        <option value="multi">{lang === 'zh' ? '多项联合定制服务规划' : 'Comprehensive Joint Custom Portfolios'}</option>
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
                        placeholder={lang === 'zh' ? '例：我定居在奥克兰，父母在广州天河区。母亲有轻微糖尿病，希望预约三甲医院的心血管筛查，需要双语体检报告，预计今年10月回国探亲...' : 'e.g., Based in Wellington, parents in Hangzhou. Seeking medical checkups with custom mobility mapping...'}
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
                        <div className="text-[#B39D82] font-bold uppercase">{lang === 'zh' ? '受理号' : 'TICKET ID'}</div>
                        <div className="text-white">WT-NZ-2026-{Math.floor(Math.random() * 90000) + 10000}</div>
                      </div>
                      <div>
                        <div className="text-[#B39D82] font-bold uppercase">{lang === 'zh' ? '时区归属' : 'INTAKE ZONE'}</div>
                        <div className="text-white">Auckland / Wellington</div>
                      </div>
                    </div>

                    <div className="pt-2 text-[10px] text-slate-400 font-medium">
                      {lang === 'zh' ? '安全加密连接 · 新西兰国家信息安全标准' : 'SECURE SSL PIPELINE · COMPLIANT WITH APY-ACT'}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right column: WeChat QR Code & Contact card */}
          <div className="lg:col-span-3">
            <WeChatQRCode lang={lang} />
          </div>

        </div>
      </div>
    </section>
  );
}
