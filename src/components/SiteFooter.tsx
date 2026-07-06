/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Mail, ExternalLink } from 'lucide-react';
import { brandContent, contactInfo, footerContent, staticTranslations } from '../content/content';
import BrandLogo from './BrandLogo';

interface SiteFooterProps {
  lang: 'zh' | 'en';
}

export default function SiteFooter({ lang }: SiteFooterProps) {
  const t = staticTranslations[lang];

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-16 border-t border-slate-800" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4 space-y-4">
            <div className="hover:opacity-90 transition-opacity">
              <BrandLogo className="w-10 h-10" lightTheme={true} lang={lang} />
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              {footerContent.brandDescription[lang]}
            </p>
            <div className="flex items-center space-x-3 text-[10px] text-[#B39D82] font-semibold uppercase tracking-wider">
              <span className="flex items-center space-x-1">
                <Shield className="w-3.5 h-3.5" />
                <span>{footerContent.certification}</span>
              </span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              {footerContent.directoryTitle[lang]}
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-white transition-colors">{t.navServices}</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">{t.navCapabilities}</a></li>
              <li><a href="#clients" className="hover:text-white transition-colors">{t.navClients}</a></li>
              <li><a href="#workflow" className="hover:text-white transition-colors">{t.navWorkflow}</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">{t.navCases}</a></li>
            </ul>
          </div>

          <div className="md:col-span-5 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              {footerContent.hubsTitle[lang]}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] leading-relaxed">
              <div className="space-y-1">
                <div className="text-white font-bold">{footerContent.aucklandHub[lang]}</div>
                <div className="text-slate-400">{contactInfo.nelsonAddress}</div>
                <div className="text-[#B39D82] font-semibold">{contactInfo.aucklandPhone}</div>
              </div>

              <div className="space-y-1">
                <div className="text-white font-bold">{footerContent.chinaHub[lang]}</div>
                <div className="text-slate-400">{contactInfo.chinaAddress}</div>
                <div className="text-[#B39D82] font-semibold">{contactInfo.chinaPhone}</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2 text-[11px]">
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#B39D82]" />
                <span className="font-bold text-slate-400">{footerContent.emailLabel[lang]}</span>
                <span className="font-mono text-white select-all">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-[8px] shrink-0">W</span>
                <span className="font-bold text-slate-400">{footerContent.wechatLabel[lang]}</span>
                <span className="font-mono text-white">{contactInfo.wechatId}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-medium">
          <div className="text-center sm:text-left space-y-1">
            <div>© {new Date().getFullYear()} {brandContent.legalName}. All Rights Reserved.</div>
            <div>{footerContent.copyrightNotice[lang]}</div>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-400 transition-colors flex items-center space-x-1">
              <span>{footerContent.ndaTerms[lang]}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors flex items-center space-x-1">
              <span>{footerContent.medicalDisclaimer[lang]}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
