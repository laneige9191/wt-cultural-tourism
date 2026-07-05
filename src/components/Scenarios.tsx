/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Landmark, MapPin, Calendar, Clock, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { caseScenarios, staticTranslations } from '../lib/translations';

interface ScenariosProps {
  lang: 'zh' | 'en';
}

export default function Scenarios({ lang }: ScenariosProps) {
  const t = staticTranslations[lang];
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [showTimeline, setShowTimeline] = useState<boolean>(false);

  const activeCase = caseScenarios[activeCaseIndex];

  const handleCaseChange = (index: number) => {
    setActiveCaseIndex(index);
    setShowTimeline(false); // Reset timeline visibility when case changes
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100" id="cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1 bg-[#002855]/5 px-3 py-1 rounded-full border border-[#002855]/10">
            <Quote className="w-3.5 h-3.5 text-[#B39D82]" />
            <span className="text-[11px] font-bold text-[#002855] tracking-widest uppercase">
              {lang === 'zh' ? '真实案例场景' : 'CASE SCENARIOS'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.casesTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            {t.casesSubtitle}
          </p>
        </div>

        {/* Case Navigation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto mb-12">
          {caseScenarios.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleCaseChange(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 relative ${
                activeCaseIndex === idx
                  ? 'border-[#002855] bg-[#002855]/5 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
              id={`case-tab-${idx}`}
            >
              <div className="text-[10px] font-bold text-[#B39D82] uppercase mb-1">
                {lang === 'zh' ? item.category : item.categoryEn}
              </div>
              <h4 className={`text-xs sm:text-sm font-bold truncate ${activeCaseIndex === idx ? 'text-[#002855]' : 'text-slate-800'}`}>
                {lang === 'zh' ? item.client : item.clientEn}
              </h4>
            </button>
          ))}
        </div>

        {/* Active Case Narrative Block */}
        <div className="max-w-5xl mx-auto bg-[#FAFBFC] border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-lg space-y-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-200/65">
            <div className="space-y-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-black tracking-wider bg-[#B39D82]/10 text-[#002855] uppercase">
                {lang === 'zh' ? activeCase.category : activeCase.categoryEn}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#002855] leading-snug">
                {lang === 'zh' ? activeCase.title : activeCase.titleEn}
              </h3>
            </div>

            {/* Micro details */}
            <div className="flex flex-wrap sm:flex-col gap-2 sm:items-end text-xs text-slate-500 font-medium font-mono shrink-0">
              <div className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-[#002855]" />
                <span>{t.caseLocation} <strong className="text-slate-800 font-semibold">{activeCase.location}</strong></span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-[#002855]" />
                <span>{t.caseClient} <strong className="text-slate-800 font-semibold">{lang === 'zh' ? activeCase.client : activeCase.clientEn}</strong></span>
              </div>
            </div>
          </div>

          {/* Emotional Narrative Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal whitespace-pre-line">
                {lang === 'zh' ? activeCase.story : activeCase.storyEn}
              </p>
              
              {/* Highlight Block Quote */}
              <div className="bg-white border-l-4 border-l-[#B39D82] rounded-r-xl p-5 shadow-sm mt-6">
                <p className="text-xs sm:text-sm italic font-bold text-[#002855]">
                  {lang === 'zh' ? activeCase.highlight : activeCase.highlightEn}
                </p>
                <div className="flex items-center space-x-1 mt-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#B39D82] text-[#B39D82]" />
                  ))}
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider ml-1">Verified Client Feedbacks</span>
                </div>
              </div>
            </div>

            {/* Illustration Graphic Area */}
            <div className="lg:col-span-4 bg-white border border-slate-200 p-3 rounded-2xl shadow-md">
              <img 
                src={
                  activeCase.id === 'case-1' 
                    ? '/src/assets/images/medical_care_1783234731686.jpg' 
                    : activeCase.id === 'case-2'
                    ? '/src/assets/images/family_travel_1783234758115.jpg'
                    : '/src/assets/images/roots_seeking_1783234742816.jpg'
                } 
                alt="Case Scenario Illustration" 
                referrerPolicy="no-referrer"
                className="w-full h-[220px] object-cover rounded-xl"
              />
            </div>

          </div>

          {/* Collapsible Hourly Timeline Widget */}
          <div className="border-t border-slate-200/80 pt-6">
            <button
              onClick={() => setShowTimeline(!showTimeline)}
              className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#002855] hover:text-[#00529B] mx-auto py-2 px-4 rounded-lg hover:bg-[#002855]/5 transition-colors"
              id="case-timeline-toggle-btn"
            >
              <span>{showTimeline ? t.caseHideTimeline : t.caseShowTimeline}</span>
              {showTimeline ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            <AnimatePresence>
              {showTimeline && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-6"
                >
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-inner space-y-6">
                    <h4 className="text-xs font-bold text-[#B39D82] uppercase tracking-wider text-center">
                      WT VIP WHITE-GLOVE DEPLOYMENT JOURNAL
                    </h4>
                    
                    {/* Time line sequence */}
                    <div className="relative border-l border-slate-200 pl-6 space-y-6 ml-4">
                      {activeCase.timeline.map((item, index) => (
                        <div key={index} className="relative">
                          {/* Node Icon */}
                          <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-white border-2 border-[#002855] flex items-center justify-center">
                            <Clock className="w-2 h-2 text-[#002855]" />
                          </div>
                          
                          <div className="space-y-1">
                            <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-black tracking-wide bg-[#002855]/10 text-[#002855]">
                              {lang === 'zh' ? item.stage : item.stageEn}
                            </span>
                            <p className="text-xs sm:text-sm font-semibold text-slate-800">
                              {lang === 'zh' ? item.desc : item.descEn}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
