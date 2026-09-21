import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  Github,
  Send,
  Twitter,
  Mail,
  ArrowRight,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { userProfile } from '../data/portfolioData';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const subtitles = lang === 'fa' ? userProfile.subtitlesFa : userProfile.subtitlesEn;

  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [subtitles.length]);

  const ArrowIcon = lang === 'fa' ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 w-full text-center">
        
        {/* Avatar with subtle clean border */}
        <div className="mb-6 inline-block relative group">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden p-1 bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 shadow-md">
            <img
              src="/avatar.jpg"
              alt="Matin Tatar"
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {/* Status badge dot */}
          <div
            className="absolute bottom-1 right-2 sm:right-3 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-950"
            title="Available"
          />
        </div>

        {/* Minimal Available Pill */}
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {lang === 'fa' ? 'در دسترس برای پروژه‌های نرم‌افزاری و وب' : 'Available for software & web projects'}
          </span>
        </div>

        {/* Name Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
          {lang === 'fa' ? userProfile.nameFa : userProfile.nameEn}
        </h1>

        {/* Dynamic Rotating Subtitle */}
        <div className="h-8 sm:h-9 flex items-center justify-center mb-6">
          <span className="text-base sm:text-lg font-medium text-cyan-600 dark:text-cyan-400 font-mono transition-all duration-300">
            {subtitles[subtitleIndex]}
          </span>
        </div>

        {/* Simple & Clean Intro */}
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
          {lang === 'fa' ? userProfile.bioFa : userProfile.bioEn}
        </p>

        {/* Action Buttons & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
          <a
            href="#projects"
            id="hero-projects-btn"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-medium text-xs sm:text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <span>{lang === 'fa' ? 'مشاهده پروژه‌ها' : 'View Projects'}</span>
            <ArrowIcon className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            id="hero-contact-btn"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm hover:border-slate-400 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{lang === 'fa' ? 'ارتباط مستقیم' : 'Get in Touch'}</span>
          </a>
        </div>

        {/* Minimal Social Links */}
        <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
          <a
            href={userProfile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={userProfile.socials.telegram}
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="p-2 rounded-lg hover:text-sky-500 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            <Send className="w-4 h-4" />
          </a>
          <a
            href={userProfile.socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="p-2 rounded-lg hover:text-sky-500 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={userProfile.socials.email}
            aria-label="Email"
            className="p-2 rounded-lg hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
