/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { services, staticTranslations } from '../lib/translations';

interface CoreFeaturesProps {
  lang: 'zh' | 'en';
}

export default function CoreFeatures({ lang }: CoreFeaturesProps) {
  const t = staticTranslations[lang];

  return (
    <section className="py-24 bg-white border-t border-slate-100" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-1 bg-[#002855]/5 px-3 py-1 rounded-full border border-[#002855]/10">
            <Compass className="w-3.5 h-3.5 text-[#B39D82]" />
            <span className="text-[11px] font-bold text-[#002855] tracking-widest uppercase">
              {lang === 'zh' ? '核心服务板块' : 'CORE PORTFOLIOS'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.featuresTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            {t.featuresSubtitle}
          </p>
        </div>

        {/* Services Showcase - Alternating Layout */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                id={`service-row-${service.id}`}
              >
                {/* Image Area */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl group">
                    <img 
                      src={service.image} 
                      alt={lang === 'zh' ? service.title : service.titleEn}
                      referrerPolicy="no-referrer"
                      className="w-full h-[300px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Corner overlay badge */}
                    <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-sm border border-white/20 px-3.5 py-1 rounded text-[11px] font-bold text-white tracking-widest uppercase">
                      {lang === 'zh' ? `板块 0${index + 1}` : `SECTION 0${index + 1}`}
                    </div>

                    {/* Accent gradient layer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/20 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Content Area */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-3">
                    <div className="inline-block text-[#B39D82] font-semibold text-xs sm:text-sm uppercase tracking-wider font-mono">
                      {lang === 'zh' ? service.subtitle : service.subtitleEn}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {lang === 'zh' ? service.title : service.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                      {lang === 'zh' ? service.description : service.descriptionEn}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 pt-2">
                    {(lang === 'zh' ? service.features : service.featuresEn).map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        <CheckCircle2 className="w-4 h-4 text-[#B39D82] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Context Action Button */}
                  <div className="pt-4">
                    <a 
                      href="#contact"
                      className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-[#002855] hover:text-[#00529B] group"
                    >
                      <span>{lang === 'zh' ? '预约定制此专属方案' : 'Consult on this portfolio'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
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
