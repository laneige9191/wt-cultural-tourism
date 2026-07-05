/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Landmark, Shield, HelpCircle, Mail, Phone, ExternalLink } from 'lucide-react';
import { staticTranslations } from '../lib/translations';
import WTLogo from './WTLogo';

interface FooterProps {
  lang: 'zh' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  const t = staticTranslations[lang];

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-16 border-t border-slate-800" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-4 space-y-4">
            <div className="hover:opacity-90 transition-opacity">
              <WTLogo className="w-10 h-10" lightTheme={true} lang={lang} />
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              {lang === 'zh' 
                ? '新西兰注册公司：WT NEW ZEALAND CULTURAL EXCHANGE & TOURISM LIMITED，致力于架设连接全球华裔新生代、海外华人至亲与大美神州的信任桥梁。'
                : 'Registered in NZ: WT NEW ZEALAND CULTURAL EXCHANGE & TOURISM LIMITED. Dedicated to engineering absolute trust and bridging cross-generational care between global diaspora and China.'
              }
            </p>
            <div className="flex items-center space-x-3 text-[10px] text-[#B39D82] font-semibold uppercase tracking-wider">
              <span className="flex items-center space-x-1">
                <Shield className="w-3.5 h-3.5" />
                <span>NZ TOURISM CERTIFIED</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              {lang === 'zh' ? '服务地图' : 'DIRECTORY'}
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-white transition-colors">{t.navServices}</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">{t.navCapabilities}</a></li>
              <li><a href="#clients" className="hover:text-white transition-colors">{t.navClients}</a></li>
              <li><a href="#workflow" className="hover:text-white transition-colors">{t.navWorkflow}</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">{t.navCases}</a></li>
            </ul>
          </div>

          {/* Column 3: Regional Hubs */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              {lang === 'zh' ? '全球接待中心与联络方式' : 'GLOBAL HUBS & CONTACT'}
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] leading-relaxed">
              <div className="space-y-1">
                <div className="text-white font-bold">{lang === 'zh' ? '奥克兰总部 (HQ)' : 'Auckland HQ'}</div>
                <div className="text-slate-400">Level 18, PwC Tower, 15 Customs Street West, Auckland 1010</div>
                <div className="text-[#B39D82] font-semibold">+64 (09) 889-1888</div>
              </div>

              <div className="space-y-1">
                <div className="text-white font-bold">{lang === 'zh' ? '中国南方办事处' : 'Southern China Hub'}</div>
                <div className="text-slate-400">深圳市福田区深南大道 2008 号中国凤凰大厦</div>
                <div className="text-[#B39D82] font-semibold">+86 (755) 8898-1212</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2 text-[11px]">
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#B39D82]" />
                <span className="font-bold text-slate-400">{lang === 'zh' ? '客服邮箱：' : 'Email: '}</span>
                <span className="font-mono text-white select-all">1282380800@qq.com</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-[8px] shrink-0">W</span>
                <span className="font-bold text-slate-400">{lang === 'zh' ? '微信号：' : 'WeChat ID: '}</span>
                <span className="font-mono text-white">WT-NZ-CONCIERGE</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footnote disclaimers & copyright */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-medium">
          <div className="text-center sm:text-left space-y-1">
            <div>© {new Date().getFullYear()} WT NEW ZEALAND CULTURAL EXCHANGE & TOURISM LIMITED. All Rights Reserved.</div>
            <div>
              {lang === 'zh' 
                ? '版权所有：WT 新西兰文化交流与旅游有限公司 | 新西兰注册号：#11783234 | 粤ICP备88910234号-1'
                : 'NZ Registration No: #11783234 | Privacy & NDA Compliances Certified by NZ-Gvt Guidelines.'
              }
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-400 transition-colors flex items-center space-x-1">
              <span>{lang === 'zh' ? '保密协议条款' : 'NDA Terms'}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors flex items-center space-x-1">
              <span>{lang === 'zh' ? '医疗免责声明' : 'Medical Disclaimer'}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
