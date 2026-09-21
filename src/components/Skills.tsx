import React from 'react';
import {
  Code2,
  FileCode,
  Layers,
  Layout,
  Globe,
  Bot,
  Cpu,
  GitBranch,
  Github,
  Terminal,
  Palette
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { Language } from '../types';

interface SkillsProps {
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const getIcon = (iconName: string) => {
    const iconClass = "w-4 h-4 text-cyan-600 dark:text-cyan-400";
    switch (iconName) {
      case 'Code2':
        return <Code2 className={iconClass} />;
      case 'FileCode':
        return <FileCode className={iconClass} />;
      case 'Layers':
        return <Layers className={iconClass} />;
      case 'Layout':
        return <Layout className={iconClass} />;
      case 'Globe':
        return <Globe className={iconClass} />;
      case 'Bot':
        return <Bot className={iconClass} />;
      case 'Cpu':
        return <Cpu className={iconClass} />;
      case 'GitBranch':
        return <GitBranch className={iconClass} />;
      case 'Github':
        return <Github className={iconClass} />;
      case 'Terminal':
        return <Terminal className={iconClass} />;
      case 'Palette':
        return <Palette className={iconClass} />;
      default:
        return <Code2 className={iconClass} />;
    }
  };

  const coreSkills = skillsData.filter((s) => s.category === 'core');
  const aiSkills = skillsData.filter((s) => s.category === 'ai');
  const toolSkills = skillsData.filter((s) => s.category === 'tools');

  const categories = [
    {
      titleFa: 'برنامه‌نویسی و وب',
      titleEn: 'Core & Web Stack',
      items: coreSkills,
    },
    {
      titleFa: 'فناوری‌های هوش مصنوعی',
      titleEn: 'AI & Systems',
      items: aiSkills,
    },
    {
      titleFa: 'ابزارها و جریان کاری',
      titleEn: 'Tools & Workflow',
      items: toolSkills,
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {lang === 'fa' ? 'مهارت‌ها و فناوری‌ها' : 'Skills & Technologies'}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {lang === 'fa'
              ? 'مجموعه ابزارها و زبان‌هایی که در توسعه نرم‌افزار و طراحی محصول به کار می‌گیرم.'
              : 'Tools and technologies I use to build fast web solutions and intelligent workflows.'}
          </p>
        </div>

        {/* 3 Streamlined Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-xs"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                {lang === 'fa' ? cat.titleFa : cat.titleEn}
              </h3>
              
              <div className="space-y-3">
                {cat.items.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3 group">
                    <div className="mt-0.5 p-1 rounded-md bg-slate-100 dark:bg-slate-800 shrink-0">
                      {getIcon(skill.iconName)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {lang === 'fa' ? skill.nameFa : skill.name}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                        {lang === 'fa' ? skill.descriptionFa : skill.descriptionEn}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
