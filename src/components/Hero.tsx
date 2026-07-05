/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HeartHandshake, 
  Map, 
  Compass, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Users, 
  Calendar, 
  MapPin, 
  FileText, 
  RefreshCw,
  PhoneCall
} from 'lucide-react';
import { staticTranslations } from '../lib/translations';

interface HeroProps {
  lang: 'zh' | 'en';
}

export default function Hero({ lang }: HeroProps) {
  const t = staticTranslations[lang];

  // Interactive Planner state
  const [category, setCategory] = useState<string>('health');
  const [urgency, setUrgency] = useState<string>('fast');
  const [destination, setDestination] = useState<string>('广东 (Guangdong)');
  const [addons, setAddons] = useState<string[]>([]);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const toggleAddon = (addon: string) => {
    if (addons.includes(addon)) {
      setAddons(addons.filter(a => a !== addon));
    } else {
      setAddons([...addons, addon]);
    }
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setIsCalculated(true);
    }, 800);
  };

  const handleReset = () => {
    setCategory('health');
    setUrgency('fast');
    setDestination('广东 (Guangdong)');
    setAddons([]);
    setIsCalculated(false);
  };

  return (
    <section className="relative min-h-screen bg-slate-50 flex items-center pt-8 pb-20 overflow-hidden" id="hero">
      {/* Background graphic accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-radial-[circle_at_top_right,_var(--tw-gradient-stops)] from-[#00D2FF] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-5 bg-radial-[circle_at_bottom_left,_var(--tw-gradient-stops)] from-[#B39D82] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left column: Brand message & Trust indices */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[#002855]/5 px-3 py-1.5 rounded-full border border-[#002855]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#B39D82]" />
              <span className="text-xs font-bold text-[#002855] tracking-wide uppercase">
                {t.heroTag}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                <span className="block text-sm sm:text-base font-semibold tracking-widest text-[#B39D82] uppercase mb-3">
                  {t.brandHeaderTitle}
                </span>
                <span className="block text-[#002855] bg-gradient-to-r from-[#002855] via-[#00529B] to-[#002855] bg-clip-text text-transparent">
                  {t.brandSlogan}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#475569] max-w-xl leading-relaxed font-normal">
                {t.brandSubtitle}
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-[#002855] hover:bg-[#00529B] shadow-md hover:shadow-xl transition-all duration-200"
              >
                {t.startPlanning}
              </a>
              <a 
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-[#002855] border-2 border-[#002855]/20 hover:border-[#002855] hover:bg-[#002855]/5 transition-all duration-200"
              >
                {t.navServices}
              </a>
            </div>

            {/* Institutional stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-[#002855]">1,200+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1">{t.activeClients}</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-[#002855]">99.8%</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1">{t.satisfactionRate}</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-[#002855]">100%</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1">{t.expertEscort}</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-[#002855]">380+</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1">{t.rootsVerified}</div>
              </div>
            </div>
          </div>

          {/* Right column: Interactive Premium Planner Widget */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden relative" id="interactive-planner">
              
              {/* Header */}
              <div className="bg-gradient-to-r from-[#002855] to-[#00529B] text-white p-5 sm:p-6">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#CBD5E1] tracking-wider uppercase mb-1">
                  <Compass className="w-4 h-4 text-[#B39D82]" />
                  <span>{t.plannerTitle}</span>
                </div>
                <h3 className="text-lg font-bold tracking-tight">
                  {t.plannerSubtitle}
                </h3>
              </div>

              {/* Main Container */}
              <div className="p-5 sm:p-6 space-y-5">
                <AnimatePresence mode="wait">
                  {!isCalculated ? (
                    <form onSubmit={handleCalculate} className="space-y-4">
                      {/* Service Category Selection */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase">
                          {t.selectServiceType}
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            type="button"
                            onClick={() => setCategory('health')}
                            className={`p-2.5 rounded-lg border text-center transition-all duration-200 flex flex-col items-center justify-center space-y-1.5 ${
                              category === 'health' 
                                ? 'border-[#002855] bg-[#002855]/5 text-[#002855] font-semibold' 
                                : 'border-slate-200 hover:border-slate-300 bg-[#FAFBFC] text-slate-600'
                            }`}
                          >
                            <HeartHandshake className="w-4 h-4" />
                            <span className="text-[10px] leading-tight">{lang === 'zh' ? '回国体检' : 'Health'}</span>
                          </button>
                          
                          <button
                            type="button"
                            onClick={() => setCategory('travel')}
                            className={`p-2.5 rounded-lg border text-center transition-all duration-200 flex flex-col items-center justify-center space-y-1.5 ${
                              category === 'travel' 
                                ? 'border-[#002855] bg-[#002855]/5 text-[#002855] font-semibold' 
                                : 'border-slate-200 hover:border-slate-300 bg-[#FAFBFC] text-slate-600'
                            }`}
                          >
                            <Map className="w-4 h-4" />
                            <span className="text-[10px] leading-tight">{lang === 'zh' ? '家庭定制游' : 'Travel'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setCategory('roots')}
                            className={`p-2.5 rounded-lg border text-center transition-all duration-200 flex flex-col items-center justify-center space-y-1.5 ${
                              category === 'roots' 
                                ? 'border-[#002855] bg-[#002855]/5 text-[#002855] font-semibold' 
                                : 'border-slate-200 hover:border-slate-300 bg-[#FAFBFC] text-slate-600'
                            }`}
                          >
                            <Compass className="w-4 h-4" />
                            <span className="text-[10px] leading-tight">{lang === 'zh' ? '文化寻根' : 'Roots'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Urgency/Timeline Selection */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase">
                          {t.selectUrgency}
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setUrgency('fast')}
                            className={`py-2 px-3 rounded-lg border text-xs text-center transition-all duration-200 ${
                              urgency === 'fast'
                                ? 'border-[#002855] bg-[#002855]/5 text-[#002855] font-semibold'
                                : 'border-slate-200 bg-[#FAFBFC] text-slate-600'
                            }`}
                          >
                            {lang === 'zh' ? '近期急需 (48h内对接)' : 'Immediate (Within 48h)'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setUrgency('plan')}
                            className={`py-2 px-3 rounded-lg border text-xs text-center transition-all duration-200 ${
                              urgency === 'plan'
                                ? 'border-[#002855] bg-[#002855]/5 text-[#002855] font-semibold'
                                : 'border-slate-200 bg-[#FAFBFC] text-slate-600'
                            }`}
                          >
                            {lang === 'zh' ? '规划未来 (配合假期)' : 'Future Vacation Planner'}
                          </button>
                        </div>
                      </div>

                      {/* Destination Picker */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase flex justify-between items-center">
                          <span>{t.selectDestination}</span>
                          <span className="text-[9px] text-[#B39D82] font-semibold font-mono tracking-normal normal-case">
                            {lang === 'zh' ? '※ 拒绝普通土特产代理' : '※ Pure Custom Service Only'}
                          </span>
                        </label>
                        <select
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          className="w-full text-xs py-2.5 px-3 rounded-lg border border-slate-200 bg-[#FAFBFC] text-slate-700 font-medium focus:border-[#002855] outline-none"
                        >
                          <option value="广东 (Guangdong)">{lang === 'zh' ? '广东 (珠三角及潮汕侨乡)' : 'Guangdong Province'}</option>
                          <option value="福建 (Fujian)">{lang === 'zh' ? '福建 (闽南祖籍与岩茶文化源地)' : 'Fujian Province'}</option>
                          <option value="云南 (Yunnan)">{lang === 'zh' ? '云南 (滇南高原与多民族非遗体验)' : 'Yunnan Province'}</option>
                          <option value="四川 (Sichuan)">{lang === 'zh' ? '四川 (巴蜀山水与大熊猫保护科考)' : 'Sichuan Province'}</option>
                          <option value="新疆 (Xinjiang)">{lang === 'zh' ? '新疆 (西域人文历史与壮丽丝路)' : 'Xinjiang Region'}</option>
                          <option value="青海 (Qinghai)">{lang === 'zh' ? '青海 (高原净土生态与多代慢行)' : 'Qinghai Province'}</option>
                          <option value="浙江 (Zhejiang)">{lang === 'zh' ? '浙江 (江南精致水乡与宗祠寻根)' : 'Zhejiang Province'}</option>
                          <option value="奥克兰 (Auckland)">{lang === 'zh' ? '奥克兰总部 (新西兰纯净高奢定制 · 不售土产品)' : 'Auckland (Pure Luxury Travel - No Native Products)'}</option>
                        </select>
                      </div>

                      {/* Upgrades Checkbox List */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-700 tracking-wider uppercase">
                          {t.additionalNeeds}
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { id: 'bilingual', label: '中英双语顾问', labelEn: 'Bilingual Advisor' },
                            { id: 'medical', label: '1对1专业医护', labelEn: 'Private Nurse Escort' },
                            { id: 'documentary', label: '随行纪录片拍摄', labelEn: 'Homecoming Film Crew' },
                            { id: 'access', label: '轮椅/无障碍特检', labelEn: 'Barrier-free Mapping' }
                          ].map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => toggleAddon(item.id)}
                              className={`py-1.5 px-2.5 rounded-lg border text-[11px] text-left transition-all duration-200 flex items-center space-x-2 ${
                                addons.includes(item.id)
                                  ? 'border-[#B39D82] bg-[#B39D82]/5 text-[#002855] font-semibold'
                                  : 'border-slate-100 bg-slate-50/50 text-slate-500 hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-3 h-3 rounded flex items-center justify-center border ${
                                addons.includes(item.id) 
                                  ? 'border-[#B39D82] bg-[#B39D82] text-white' 
                                  : 'border-slate-300 bg-white'
                              }`}>
                                {addons.includes(item.id) && <span className="text-[8px] font-black">✓</span>}
                              </div>
                              <span className="truncate">{lang === 'zh' ? item.label : item.labelEn}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Calculation Action */}
                      <button
                        type="submit"
                        disabled={isCalculating}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#002855] to-[#00529B] text-white text-xs font-bold tracking-wider uppercase shadow-md shadow-[#002855]/10 hover:shadow-xl hover:translate-y-[-1px] transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        {isCalculating ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>{lang === 'zh' ? '正在匹配专业团队...' : 'Optimizing resources...'}</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 text-[#B39D82]" />
                            <span>{t.generatePlan}</span>
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    /* Planner Results State */
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <div className="bg-[#FAFBFC] border border-[#CBD5E1] rounded-xl p-4 space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                          <span className="text-[11px] font-bold text-[#B39D82] uppercase tracking-wider">
                            {t.plannerResultTitle}
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black bg-[#002855]/10 text-[#002855]">
                            CONFIRMED
                          </span>
                        </div>

                        {/* Custom Dynamic Content */}
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2.5">
                            <MapPin className="w-4 h-4 text-[#002855] mt-0.5 shrink-0" />
                            <div>
                              <div className="text-[11px] font-bold text-slate-500 uppercase">{lang === 'zh' ? '目标服务区' : 'OPERATIONAL SECTOR'}</div>
                              <div className="text-xs font-semibold text-slate-800">{destination}</div>
                            </div>
                          </div>

                          <div className="flex items-start space-x-2.5">
                            <FileText className="w-4 h-4 text-[#002855] mt-0.5 shrink-0" />
                            <div className="text-xs text-slate-600 leading-relaxed">
                              {category === 'health' && t.parentCareText}
                              {category === 'travel' && t.familyTravelText}
                              {category === 'roots' && t.rootsSeekingText}
                            </div>
                          </div>

                          <div className="flex items-start space-x-2.5">
                            <Calendar className="w-4 h-4 text-[#002855] mt-0.5 shrink-0" />
                            <div>
                              <div className="text-[11px] font-bold text-slate-500 uppercase">{lang === 'zh' ? '时效响应' : 'TIMELINE STRATEGY'}</div>
                              <div className="text-xs font-semibold text-slate-800" dangerouslySetInnerHTML={{ __html: urgency === 'fast' ? t.urgencyText1 : t.urgencyText2 }} />
                            </div>
                          </div>
                        </div>

                        {/* Selected addons pill list */}
                        {addons.length > 0 && (
                          <div className="border-t border-slate-200 pt-3">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-1.5">{lang === 'zh' ? '已选附加特权' : 'EXCLUSIVE PRIVILEGES SELECTED'}</div>
                            <div className="flex flex-wrap gap-1">
                              {addons.map(addon => (
                                <span key={addon} className="px-2 py-0.5 text-[9px] font-semibold text-[#002855] bg-[#002855]/5 border border-[#002855]/10 rounded-full">
                                  {addon === 'bilingual' && (lang === 'zh' ? '中英双语顾问' : 'Bilingual Support')}
                                  {addon === 'medical' && (lang === 'zh' ? '1对1专业医护' : 'Clinical Nurse Escort')}
                                  {addon === 'documentary' && (lang === 'zh' ? '随行纪录片' : 'Custom Film Crew')}
                                  {addon === 'access' && (lang === 'zh' ? '无障碍查勘' : 'Accessibility Mapping')}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* High-end Brand Commitment Pledge */}
                        <div className="border-t border-dashed border-slate-200 pt-3">
                          <div className="bg-amber-50 border border-amber-100 rounded-lg p-2.5 flex items-start space-x-2">
                            <span className="text-amber-600 font-bold text-xs shrink-0 mt-0.5">⚠️</span>
                            <div>
                              <div className="text-[10px] font-black text-amber-800 uppercase tracking-wide">
                                {lang === 'zh' ? 'WT 纯净定制承诺 (WT Luxury Commitment)' : 'WT LUXURY COMMITMENT'}
                              </div>
                              <div className="text-[9px] text-amber-700 leading-normal mt-0.5">
                                {lang === 'zh' 
                                  ? '本司专注于尊贵人文体验与医学陪护。严正声明：我们不从事任何地方土特产品、大路货伴手礼或普通代购百货的购销代理。' 
                                  : 'We strictly focus on elite cultural custom tours and medical care. We do NOT trade, supply or procure mass-market local specialty products or souvenirs.'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="space-y-2">
                        <a
                          href="#contact"
                          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#002855] to-[#00529B] text-white text-xs font-bold tracking-wider uppercase shadow-md text-center flex items-center justify-center space-x-2 hover:opacity-95 transition-opacity"
                        >
                          <PhoneCall className="w-4 h-4 text-[#B39D82]" />
                          <span>{t.submitInterest}</span>
                        </a>

                        <button
                          type="button"
                          onClick={handleReset}
                          className="w-full py-2.5 rounded-lg border border-slate-200 text-[11px] font-semibold text-slate-500 hover:bg-slate-50 transition-colors flex items-center justify-center space-x-1"
                        >
                          <RefreshCw className="w-3 h-3" />
                          <span>{t.resetPlanner}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Decorative clean divider */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
