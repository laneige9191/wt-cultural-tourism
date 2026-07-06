/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import AudienceSection from './components/AudienceSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import CaseStoriesSection from './components/CaseStoriesSection';
import ContactSection from './components/ContactSection';
import ProductPage from './components/ProductPage';
import SiteFooter from './components/SiteFooter';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const isProductPage = currentPath === '/product';

  return (
    <div className="min-h-screen bg-slate-50 text-[#1E293B] antialiased selection:bg-[#002855]/10 selection:text-[#002855]">
      {/* 1. Header Navigation */}
      <SiteHeader lang={lang} setLang={setLang} />

      {isProductPage ? (
        <ProductPage />
      ) : (
        <main>
          {/* 2. Hero screen & quick pathfinder */}
          <HeroSection lang={lang} />

          {/* 3. Brand capabilities */}
          <TrustSection lang={lang} />

          {/* 4. Target Customer Profiles */}
          <AudienceSection lang={lang} />

          {/* 5. Detailed Core Portfolios */}
          <ServicesSection lang={lang} />

          {/* 6. Custom five-star workflow */}
          <ProcessSection lang={lang} />

          {/* 7. Emotional real-world case scenarios */}
          <CaseStoriesSection lang={lang} />

          {/* 8. Premium Appointment Consult Intake Form */}
          <ContactSection lang={lang} />
        </main>
      )}

      {/* 9. Footnote institutional footer */}
      <SiteFooter lang={lang} />
    </div>
  );
}
