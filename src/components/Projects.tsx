import React from 'react';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Language } from '../types';

interface ProjectsProps {
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const featuredProject = projectsData.find((p) => p.id === 'ayene-rouz') || projectsData[0];
  const otherProjects = projectsData.filter((p) => p.id !== 'ayene-rouz');

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {lang === 'fa' ? 'پروژه‌های منتخب' : 'Featured Projects'}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {lang === 'fa'
              ? 'نمونه‌هایی از طراحی وب زنده، ابزارهای پایتون و سیستم‌های هوشمند.'
              : 'Selected production web applications and developer tools.'}
          </p>
        </div>

        {/* Highlighted Featured Project: Ayene Rouz */}
        <div className="mb-8">
          <div className="rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs hover:border-cyan-500/40 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Image preview */}
              <div className="md:col-span-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 aspect-video relative group">
                <img
                  src={featuredProject.image}
                  alt={lang === 'fa' ? featuredProject.titleFa : featuredProject.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-medium flex items-center gap-1 backdrop-blur-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{lang === 'fa' ? 'زنده' : 'Live'}</span>
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-6 flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'fa' ? 'پروژه وب شاخص' : 'Featured Web Project'}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {lang === 'fa' ? featuredProject.titleFa : featuredProject.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {lang === 'fa' ? featuredProject.descriptionFa : featuredProject.descriptionEn}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {featuredProject.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3">
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-white font-medium text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>{lang === 'fa' ? 'مشاهده وب‌سایت' : 'Visit Website'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-cyan-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {lang === 'fa' ? project.titleFa : project.titleEn}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  {lang === 'fa' ? project.descriptionFa : project.descriptionEn}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{lang === 'fa' ? 'مشاهده در گیت‌هاب' : 'View on GitHub'}</span>
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
