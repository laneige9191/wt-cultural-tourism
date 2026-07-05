/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Settings, CheckSquare, Compass, Shield, Award, HelpCircle } from 'lucide-react';
import { staticTranslations } from '../lib/translations';

interface WorkflowProps {
  lang: 'zh' | 'en';
}

export default function Workflow({ lang }: WorkflowProps) {
  const t = staticTranslations[lang];
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps = [
    {
      id: 1,
      title: t.step1,
      desc: t.step1Desc,
      icon: Compass,
      checklist: lang === 'zh' 
        ? ['注册海外专属管家账户', '专属Zoom视频需求分析会', '收集病历、行程偏好、寻根地名等'] 
        : ['Create global account', 'Dedicated Zoom video intake session', 'Consolidate medical, travel or clan records']
    },
    {
      id: 2,
      title: t.step2,
      desc: t.step2Desc,
      icon: Settings,
      checklist: lang === 'zh'
        ? ['全科顾问定制专属筛查表', '历史学者开展老村志比对与迁徙路线论证', '慢节奏商务游轮及无障碍路线草图']
        : ['GPs custom checkup schedules', 'Historians analyze local archives & map ancestral path', 'Slow itineraries & wheelchair layouts drafted']
    },
    {
      id: 3,
      title: t.step3,
      desc: t.step3Desc,
      icon: Shield,
      checklist: lang === 'zh'
        ? ['护士对接三甲医院专属号源与特需门诊', '高级管家对入住酒店开展无障碍现场踩点', '文献小组取得地方侨联及家乡长辈对接']
        : ['Nurse reserves specialized clinical slots', 'Auditor checks hotel wheelchair ramps', 'Genealogists secure local liaison with village council']
    },
    {
      id: 4,
      title: t.step4,
      desc: t.step4Desc,
      icon: Award,
      checklist: lang === 'zh'
        ? ['尊贵商务座驾全程点对点陪同接送', '心血管/全科护士全程随身提供临床照看', '家乡宗祠开大门隆重拜谒与跟拍记录']
        : ['Point-to-point chauffeured executive MPVs', 'Bilingual nurse accompanies elder continuously', 'Dignified clan worship ceremony filmed by professionals']
    },
    {
      id: 5,
      title: t.step5,
      desc: t.step5Desc,
      icon: CheckSquare,
      checklist: lang === 'zh'
        ? ['中英双语医疗汇总及用药跟踪档案', '家族寻根手账、宗谱与高清纪录片交付', '加入长期年度尊荣关怀网络']
        : ['Bilingual clinical digests & drug tracker', 'Genealogy book, custom album & HD video delivered', 'Enrolled into annual premium companion care plan']
    }
  ];

  return (
    <section className="py-24 bg-[#FAFBFC] border-t border-slate-100" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-1 bg-[#002855]/5 px-3 py-1 rounded-full border border-[#002855]/10">
            <Settings className="w-3.5 h-3.5 text-[#B39D82]" />
            <span className="text-[11px] font-bold text-[#002855] tracking-widest uppercase">
              {lang === 'zh' ? '尊享定制流程' : 'HOW IT WORKS'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.workflowTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            {t.workflowSubtitle}
          </p>
        </div>

        {/* Dynamic Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Timeline Selector */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = selectedStep === index;
              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedStep(index)}
                  className={`w-full text-left p-4.5 rounded-xl border transition-all duration-300 flex items-start space-x-4 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#031E3F] to-[#002855] text-white border-[#002855] shadow-lg'
                      : 'bg-white text-slate-700 border-slate-200/85 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                  id={`workflow-step-btn-${index}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-black ${
                    isActive ? 'bg-[#B39D82] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    0{step.id}
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className={`text-xs sm:text-sm font-bold tracking-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-[11px] sm:text-xs line-clamp-1 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                      {step.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Checklists Content */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 space-y-6">
              
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <span className="text-3xl font-mono font-black text-[#B39D82]">
                  0{steps[selectedStep].id}
                </span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {steps[selectedStep].title}
                  </h4>
                  <p className="text-xs text-[#B39D82] font-semibold uppercase tracking-wider font-mono">
                    {lang === 'zh' ? 'WT 白手套品质标准' : 'WT ROYAL COMPLIANCE STEP'}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {steps[selectedStep].desc}
              </p>

              {/* Sub Checklist Panel */}
              <div className="space-y-4 pt-2">
                <h5 className="text-xs font-bold text-[#002855] tracking-wider uppercase">
                  {lang === 'zh' ? '核心任务与成果交付物 :' : 'CORE MILESTONES & OUTPUTS :'}
                </h5>
                <ul className="grid grid-cols-1 md:grid-cols-1 gap-3">
                  {steps[selectedStep].checklist.map((item, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center space-x-3 bg-[#FAFBFC] border border-slate-200/50 rounded-lg p-3 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#002855]/5 border border-[#002855]/10 flex items-center justify-center text-xs font-bold text-[#002855]">
                        ✓
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
