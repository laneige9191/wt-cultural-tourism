/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Customers from './components/Customers';
import CoreFeatures from './components/CoreFeatures';
import Workflow from './components/Workflow';
import Scenarios from './components/Scenarios';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  return (
    <div className="min-h-screen bg-slate-50 text-[#1E293B] antialiased selection:bg-[#002855]/10 selection:text-[#002855]">
      {/* 1. Header Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      <main>
        {/* 2. Hero Screen & Quick Pathfinder */}
        <Hero lang={lang} />

        {/* 3. Brand Capabilities */}
        <Capabilities lang={lang} />

        {/* 4. Target Customer Profiles */}
        <Customers lang={lang} />

        {/* 5. Detailed Core Portfolios */}
        <CoreFeatures lang={lang} />

        {/* 6. Custom Five-Star Workflow */}
        <Workflow lang={lang} />

        {/* 7. Emotional Real-World Case Scenarios */}
        <Scenarios lang={lang} />

        {/* 8. Premium Appointment Consult Intake Form */}
        <ContactForm lang={lang} />
      </main>

      {/* 9. Footnote Institutional Footer */}
      <Footer lang={lang} />
    </div>
  );
}
