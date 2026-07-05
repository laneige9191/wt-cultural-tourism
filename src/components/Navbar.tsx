/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Globe, ShieldCheck, Mail, PhoneCall } from 'lucide-react';
import { staticTranslations } from '../lib/translations';
import WTLogo from './WTLogo';

interface NavbarProps {
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const t = staticTranslations[lang];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm transition-all duration-300">
      {/* Top micro-bar for institutional branding */}
      <div className="bg-[#002855] text-white text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-[11px] sm:text-xs text-[#CBD5E1]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B39D82]" />
              <span>新西兰商业注册认证 / NZ Registered Entity: #11783234</span>
            </span>
          </div>
          <div className="flex items-center space-x-4 text-[11px] sm:text-xs text-[#CBD5E1]">
            <span className="flex items-center space-x-1">
              <PhoneCall className="w-3 h-3 text-[#B39D82]" />
              <span>+64 (09) 889-1888 (Auckland HQ)</span>
            </span>
            <span className="hidden md:flex items-center space-x-1">
              <Mail className="w-3 h-3 text-[#B39D82]" />
              <span>1282380800@qq.com</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Elegant representation of WT NZ Logo */}
          <a href="#" className="hover:opacity-90 transition-opacity" id="logo-link">
            <WTLogo className="w-12 h-12" lang={lang} />
          </a>

          {/* Nav links for desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-[#475569] hover:text-[#002855] transition-colors">{t.navServices}</a>
            <a href="#capabilities" className="text-sm font-medium text-[#475569] hover:text-[#002855] transition-colors">{t.navCapabilities}</a>
            <a href="#clients" className="text-sm font-medium text-[#475569] hover:text-[#002855] transition-colors">{t.navClients}</a>
            <a href="#workflow" className="text-sm font-medium text-[#475569] hover:text-[#002855] transition-colors">{t.navWorkflow}</a>
            <a href="#cases" className="text-sm font-medium text-[#475569] hover:text-[#002855] transition-colors">{t.navCases}</a>
            <a href="#contact" className="text-sm font-medium text-[#475569] hover:text-[#002855] transition-colors">{t.navContact}</a>
          </div>

          {/* Right side actions (Language & CTA button) */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher Button */}
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[#CBD5E1] hover:border-[#002855] hover:bg-[#F8FAFC] text-xs font-semibold text-[#334155] transition-all duration-200"
              title="切换语言 / Toggle Language"
              id="lang-toggle-btn"
            >
              <Globe className="w-3.5 h-3.5 text-[#002855]" />
              <span>{lang === 'zh' ? 'EN' : '繁/简'}</span>
            </button>

            {/* Premium CTA Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center px-4.5 py-2.5 rounded-lg text-xs font-bold tracking-wide text-white bg-[#002855] hover:bg-[#00529B] active:bg-[#031E3F] shadow-md shadow-[#002855]/10 hover:shadow-lg transition-all duration-200"
              id="nav-cta-btn"
            >
              {t.ctaContactBtn}
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
