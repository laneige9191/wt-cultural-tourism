import React, { useState } from 'react';
import { Mail, Phone, Check, Copy, MessageSquare, ExternalLink } from 'lucide-react';

interface WeChatQRCodeProps {
  lang: 'zh' | 'en';
}

export default function WeChatQRCode({ lang }: WeChatQRCodeProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const contactEmail = '1282380800@qq.com';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div 
      className="bg-white text-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group transition-all duration-300 hover:shadow-emerald-500/10 hover:border-emerald-500/20"
      id="wechat-contact-card"
    >
      {/* Decorative Top Accent */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-[#07C160]" />

      {/* Title */}
      <div className="flex items-center space-x-2 text-[#07C160] font-bold text-sm tracking-wide mb-4">
        <MessageSquare className="w-4 h-4 fill-[#07C160]" />
        <span>{lang === 'zh' ? '微信扫码 · 即刻对接' : 'WECHAT OFFICIAL CHAT'}</span>
      </div>

      {/* QR Code Container */}
      <div className="bg-slate-50 p-4.5 rounded-xl border border-slate-100 relative group-hover:scale-[1.02] transition-transform duration-300">
        {/* WeChat QR Code SVG with high precision details */}
        <svg 
          className="w-48 h-48 sm:w-52 sm:h-52 bg-white p-2 rounded-lg" 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
          id="qr-code-vector"
        >
          {/* Position detection markers */}
          {/* Top-Left */}
          <rect x="5" y="5" width="22" height="22" fill="#0c0d0e" rx="1" />
          <rect x="9" y="9" width="14" height="14" fill="white" rx="0.5" />
          <rect x="12" y="12" width="8" height="8" fill="#07C160" rx="0.5" />
          
          {/* Top-Right */}
          <rect x="73" y="5" width="22" height="22" fill="#0c0d0e" rx="1" />
          <rect x="77" y="9" width="14" height="14" fill="white" rx="0.5" />
          <rect x="80" y="80" width="8" height="8" fill="#07C160" rx="0.5" transform="translate(160, -72) rotate(90)" />

          {/* Bottom-Left */}
          <rect x="5" y="73" width="22" height="22" fill="#0c0d0e" rx="1" />
          <rect x="9" y="77" width="14" height="14" fill="white" rx="0.5" />
          <rect x="12" y="80" width="8" height="8" fill="#07C160" rx="0.5" />

          {/* Precision simulated QR code matrix pattern blocks */}
          <g fill="#1a1a1a" opacity="0.95">
            {/* Column 1-5 patterns */}
            <rect x="32" y="5" width="6" height="4" />
            <rect x="42" y="5" width="8" height="2" />
            <rect x="55" y="5" width="4" height="6" />
            <rect x="63" y="7" width="6" height="4" />
            <rect x="32" y="12" width="4" height="8" />
            <rect x="40" y="15" width="8" height="4" />
            <rect x="52" y="15" width="6" height="4" />
            <rect x="62" y="15" width="4" height="4" />
            
            {/* Center rows around WeChat logo placeholder */}
            <rect x="5" y="32" width="6" height="4" />
            <rect x="15" y="32" width="4" height="8" />
            <rect x="23" y="32" width="8" height="4" />
            <rect x="69" y="32" width="6" height="6" />
            <rect x="79" y="32" width="16" height="4" />
            <rect x="5" y="42" width="12" height="4" />
            <rect x="21" y="42" width="8" height="4" />
            <rect x="71" y="42" width="10" height="4" />
            <rect x="85" y="42" width="10" height="6" />

            {/* Bottom patterns */}
            <rect x="32" y="55" width="8" height="6" />
            <rect x="44" y="55" width="12" height="4" />
            <rect x="60" y="55" width="6" height="8" />
            <rect x="32" y="65" width="4" height="12" />
            <rect x="40" y="65" width="12" height="4" />
            <rect x="56" y="65" width="4" height="4" />
            <rect x="64" y="65" width="12" height="4" />
            <rect x="80" y="65" width="15" height="4" />
            <rect x="32" y="81" width="10" height="4" />
            <rect x="46" y="81" width="8" height="4" />
            <rect x="58" y="81" width="4" height="14" />
            <rect x="66" y="81" width="12" height="4" />
            <rect x="82" y="81" width="4" height="8" />
            <rect x="32" y="89" width="6" height="6" />
            <rect x="42" y="89" width="12" height="4" />
            <rect x="66" y="89" width="8" height="6" />
            <rect x="78" y="89" width="12" height="4" />
          </g>

          {/* WeChat Green Bubble Logo in the center */}
          <g transform="translate(39, 39)">
            <rect x="0" y="0" width="22" height="22" rx="5" fill="#07C160" stroke="white" strokeWidth="2.5" />
            {/* Dual chatting bubbles silhouette */}
            {/* Bubble 1 (Larger) */}
            <path d="M5 11C5 8.2 7.2 6 10 6C12.8 6 15 8.2 15 11C15 13.8 12.8 16 10 16C9.1 16 8.2 15.8 7.5 15.3L5 16.5L5.5 14C5.2 13.1 5 12.1 5 11Z" fill="white" />
            {/* Bubble 2 (Smaller) */}
            <path d="M11 13.5C11 12.1 12.1 11 13.5 11C14.9 11 16 12.1 16 13.5C16 14.9 14.9 16 13.5 16C13 16 12.5 15.8 12.1 15.5L10.5 16.2L10.8 14.8C10.9 14.4 11 14 11 13.5Z" fill="#07C160" />
            {/* Eyes of Bubble 1 */}
            <circle cx="8.5" cy="10" r="0.7" fill="#07C160" />
            <circle cx="11.5" cy="10" r="0.7" fill="#07C160" />
            {/* Eyes of Bubble 2 */}
            <circle cx="12.7" cy="13" r="0.5" fill="white" />
            <circle cx="14.3" cy="13" r="0.5" fill="white" />
          </g>
        </svg>

        {/* Dynamic scanning guideline text overlay */}
        <div className="absolute inset-0 bg-[#07C160]/0 group-hover:bg-[#07C160]/5 rounded-xl transition-all duration-300 pointer-events-none" />
      </div>

      {/* Legend text from WeChat UI */}
      <span className="text-[11px] font-bold text-[#07C160] mt-4 font-sans tracking-wide">
        {lang === 'zh' ? '扫二维码，添加我为朋友' : 'Scan to Add Me as Friend'}
      </span>
      <span className="text-[9px] text-slate-400 mt-0.5">
        {lang === 'zh' ? '微信客服号：WT-NZ-CONCIERGE' : 'WeChat ID: WT-NZ-CONCIERGE'}
      </span>

      {/* Official Email Copy Board */}
      <div className="w-full border-t border-slate-100 mt-6 pt-5 space-y-3.5 text-left text-xs text-slate-600">
        <div className="flex items-center justify-between">
          <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">
            {lang === 'zh' ? '官方联系人邮箱' : 'CONTACT EMAIL'}
          </span>
          <button 
            onClick={copyEmailToClipboard}
            className="flex items-center space-x-1 text-[#002855] hover:text-[#00529B] font-bold text-[10px] uppercase transition-colors"
            title="Copy Email"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3 h-3 text-emerald-500" />
                <span className="text-emerald-500">{lang === 'zh' ? '已复制' : 'COPIED'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>{lang === 'zh' ? '复制' : 'COPY'}</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center space-x-2 bg-slate-50 border border-slate-100 py-2.5 px-3 rounded-lg group-hover:bg-slate-100/50 transition-colors">
          <Mail className="w-3.5 h-3.5 text-[#002855] shrink-0" />
          <span className="font-mono text-xs text-slate-800 font-bold tracking-tight select-all">
            {contactEmail}
          </span>
        </div>

        {/* Phones list */}
        <div className="space-y-2 pt-1.5">
          <div className="flex items-center space-x-2 text-[11px] font-medium text-slate-700">
            <Phone className="w-3.5 h-3.5 text-[#B39D82] shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 font-bold block leading-none">{lang === 'zh' ? '新西兰奥克兰总部' : 'Auckland HQ Phone'}</span>
              <span className="font-mono font-semibold">+64 (09) 889-1888</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-[11px] font-medium text-slate-700">
            <Phone className="w-3.5 h-3.5 text-[#B39D82] shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 font-bold block leading-none">{lang === 'zh' ? '中国南方办事处' : 'China Hub Phone'}</span>
              <span className="font-mono font-semibold">+86 (755) 8898-1212</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
