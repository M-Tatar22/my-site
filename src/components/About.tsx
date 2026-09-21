import React from 'react';
import { Code2, Cpu, Sparkles, Terminal } from 'lucide-react';
import { userProfile } from '../data/portfolioData';
import { Language } from '../types';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const pillars = [
    {
      titleFa: 'توسعه وب مدرن',
      titleEn: 'Modern Web Development',
      descFa: 'طراحی رابط‌های کاربری سریع، مینیمال و واکنش‌گرا با ری‌اکت، نکست‌جی‌اس و تیلویند.',
      descEn: 'Building fast, responsive, and minimalist interfaces using React, Next.js, and Tailwind CSS.',
      icon: Code2,
    },
    {
      titleFa: 'اسکریپت‌نویسی و اتوماسیون',
      titleEn: 'Scripting & Automation',
      descFa: 'توسعه برنامه‌ها و اسکریپت‌های پایتون برای پردازش داده‌ها و بهینه‌سازی کارهای روزمره.',
      descEn: 'Developing Python scripts to parse data, connect APIs, and automate repetitive workflows.',
      icon: Terminal,
    },
    {
      titleFa: 'هوش مصنوعی کاربردی',
      titleEn: 'Applied AI & Tools',
      descFa: 'به‌کارگیری مدل‌های زبانی (LLM)، پرامپتینگ دقیق و سامانه‌های جستجوی معنایی و بازیابی اسناد.',
      descEn: 'Leveraging LLMs, structured prompting, and semantic retrieval for intelligent utilities.',
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {lang === 'fa' ? 'درباره من' : 'About Me'}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {lang === 'fa'
              ? 'توسعه‌دهنده‌ای علاقه‌مند به خلق محصولات وب باکیفیت، بهینه‌سازی و سادگی در طراحی.'
              : 'A developer driven by thoughtful design, clean architecture, and building practical software solutions.'}
          </p>
        </div>

        {/* 3 Clean Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                id={`pillar-card-${idx}`}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-cyan-500/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                  {lang === 'fa' ? pillar.titleFa : pillar.titleEn}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {lang === 'fa' ? pillar.descFa : pillar.descEn}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
