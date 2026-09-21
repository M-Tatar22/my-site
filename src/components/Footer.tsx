import React from 'react';
import { ArrowUp, Github, Send, Twitter, Mail } from 'lucide-react';
import { userProfile } from '../data/portfolioData';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-8 border-t border-slate-200 dark:border-slate-850 bg-slate-50 dark:bg-slate-950/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Name & Role */}
        <div className="text-center sm:text-start">
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
            {lang === 'fa' ? userProfile.nameFa : userProfile.nameEn}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-500 font-mono mt-0.5">
            © {new Date().getFullYear()} — All rights reserved.
          </div>
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={userProfile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={userProfile.socials.telegram}
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="p-1.5 rounded-md text-slate-500 hover:text-sky-500 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </a>
          <a
            href={userProfile.socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="p-1.5 rounded-md text-slate-500 hover:text-sky-500 transition-colors"
          >
            <Twitter className="w-3.5 h-3.5" />
          </a>
          <a
            href={userProfile.socials.email}
            aria-label="Email"
            className="p-1.5 rounded-md text-slate-500 hover:text-rose-500 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            title="Back to Top"
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer ms-1"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
