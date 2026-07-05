/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Landmark, Heart, Award, Star, Library } from 'lucide-react';
import { staticTranslations, trustContent } from '../content/content';

interface TrustSectionProps {
  lang: 'zh' | 'en';
}

export default function TrustSection({ lang }: TrustSectionProps) {
  const t = staticTranslations[lang];

  const capabilityItems = [
    {
      icon: ShieldCheck,
      title: t.cap1Title,
      desc: t.cap1Desc,
      tag: trustContent.tags[0][lang],
      accent: 'border-l-4 border-l-[#002855]'
    },
    {
      icon: Landmark,
      title: t.cap2Title,
      desc: t.cap2Desc,
      tag: trustContent.tags[1][lang],
      accent: 'border-l-4 border-l-[#B39D82]'
    },
    {
      icon: Library,
      title: t.cap3Title,
      desc: t.cap3Desc,
      tag: trustContent.tags[2][lang],
      accent: 'border-l-4 border-l-[#00D2FF]'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1 bg-[#002855]/5 px-3 py-1 rounded-full border border-[#002855]/10">
            <Award className="w-3.5 h-3.5 text-[#B39D82]" />
            <span className="text-[11px] font-bold text-[#002855] tracking-widest uppercase">
              {trustContent.eyebrow[lang]}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.capabilitiesTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            {t.capabilitiesSubtitle}
          </p>
        </div>

        {/* TrustSection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilityItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className={`bg-[#FAFBFC] rounded-xl p-6 sm:p-8 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden ${item.accent}`}
                id={`cap-card-${index}`}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-5 bg-radial-[circle_at_top_right,_var(--tw-gradient-stops)] from-[#00D2FF] via-transparent to-transparent group-hover:scale-150 transition-transform duration-300" />
                
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm group-hover:bg-[#002855] group-hover:border-[#002855] group-hover:text-white transition-all duration-300 text-[#002855]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {/* Custom Tag */}
                    <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase bg-slate-100 px-2.5 py-1 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#002855] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Rating / trust stars badge for fine detail */}
                  <div className="flex items-center space-x-1.5 pt-2 border-t border-slate-100">
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#B39D82] text-[#B39D82]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">
                      {trustContent.auditLabel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
