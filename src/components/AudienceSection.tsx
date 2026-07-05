/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, XCircle, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import { audienceContent, customerProfiles, staticTranslations } from '../content/content';

interface AudienceSectionProps {
  lang: 'zh' | 'en';
}

export default function AudienceSection({ lang }: AudienceSectionProps) {
  const t = staticTranslations[lang];
  const [activeTab, setActiveTab] = useState<string>('elite-professional');

  const activeProfile = customerProfiles.find(p => p.id === activeTab) || customerProfiles[0];

  return (
    <section className="py-24 bg-[#FAFBFC] border-t border-slate-100" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1 bg-[#002855]/5 px-3 py-1 rounded-full border border-[#002855]/10">
            <Users className="w-3.5 h-3.5 text-[#B39D82]" />
            <span className="text-[11px] font-bold text-[#002855] tracking-widest uppercase">
              {t.navClients}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.clientsTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            {t.clientsSubtitle}
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-2 mb-12 p-1.5 bg-slate-100 rounded-xl max-w-4xl mx-auto">
          {customerProfiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => setActiveTab(profile.id)}
              className={`flex-1 py-3.5 px-4 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 relative ${
                activeTab === profile.id
                  ? 'bg-white text-[#002855] shadow-md border-b-2 border-b-[#B39D82]'
                  : 'text-slate-600 hover:text-[#002855] hover:bg-white/50'
              }`}
              id={`client-tab-${profile.id}`}
            >
              <span className="relative z-10 block text-center">
                {lang === 'zh' ? profile.title : profile.titleEn}
              </span>
              <span className="absolute top-2 right-2 px-1.5 py-0.5 text-[8px] font-extrabold uppercase rounded-full bg-[#B39D82]/10 text-[#002855]">
                {lang === 'zh' ? profile.tag : profile.tagEn}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content Layout with Animations */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              
              {/* Left Column: Quote & Persona Definition */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#031E3F] to-[#002855] text-white p-8 sm:p-10 flex flex-col justify-between relative">
                <div className="absolute top-4 right-4 text-[#B39D82]/10 pointer-events-none">
                  <Quote className="w-32 h-32" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center space-x-1.5 bg-[#B39D82]/20 text-[#B39D82] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-[#B39D82]/30">
                    <Sparkles className="w-3 h-3" />
                    <span>{audienceContent.personaLabel}</span>
                  </div>

                  <p className="text-sm sm:text-base italic font-medium leading-relaxed text-slate-100">
                    {lang === 'zh' ? activeProfile.quote : activeProfile.quoteEn}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10 mt-8 relative z-10">
                  <h4 className="text-sm font-bold text-[#B39D82] tracking-wider uppercase">
                    {lang === 'zh' ? activeProfile.title : activeProfile.titleEn}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    {lang === 'zh' ? activeProfile.description : activeProfile.descriptionEn}
                  </p>
                </div>
              </div>

              {/* Right Column: Comparative Problem vs Solution Layout */}
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-8 bg-white">
                
                {/* Pain Points Section */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-bold text-rose-600 uppercase tracking-widest">
                    <XCircle className="w-4 h-4 shrink-0" />
                    <span>{t.painPointLabel}</span>
                  </div>
                  <ul className="space-y-3">
                    {(lang === 'zh' ? activeProfile.painPoints : activeProfile.painPointsEn).map((point, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Separator line */}
                <div className="h-px bg-slate-100" />

                {/* Solutions Section */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{t.solutionLabel}</span>
                  </div>
                  <ul className="space-y-3">
                    {(lang === 'zh' ? activeProfile.solutions : activeProfile.solutionsEn).map((sol, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
