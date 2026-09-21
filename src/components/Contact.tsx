import React, { useState } from 'react';
import {
  Mail,
  Send,
  Github,
  Twitter,
  Check,
  Copy,
  ArrowUpRight
} from 'lucide-react';
import { userProfile } from '../data/portfolioData';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${userProfile.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  const channels = [
    {
      name: 'Email',
      value: userProfile.email,
      href: `mailto:${userProfile.email}`,
      icon: Mail,
      isEmail: true,
    },
    {
      name: 'Telegram',
      value: '@M_Tatar22',
      href: userProfile.socials.telegram,
      icon: Send,
    },
    {
      name: 'GitHub',
      value: 'github.com/M-Tatar22',
      href: userProfile.socials.github,
      icon: Github,
    },
    {
      name: 'Twitter / X',
      value: '@M_Tatar22',
      href: userProfile.socials.twitter,
      icon: Twitter,
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {lang === 'fa' ? 'تماس با من' : 'Get in Touch'}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {lang === 'fa'
              ? 'برای گفتگو پیرامون پروژه‌ها، همکاری یا هرگونه سوال می‌توانید از طریق راه‌های زیر در ارتباط باشید.'
              : 'Feel free to reach out directly via email or social platforms.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Quick Contact Links */}
          <div className="md:col-span-5 space-y-3">
            {channels.map((ch, idx) => {
              const Icon = ch.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between group hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                        {ch.name}
                      </div>
                      <a
                        href={ch.href}
                        target={ch.isEmail ? undefined : '_blank'}
                        rel="noreferrer"
                        className="text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        {ch.value}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {ch.isEmail && (
                      <button
                        onClick={handleCopyEmail}
                        title="Copy email"
                        className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    )}
                    <a
                      href={ch.href}
                      target={ch.isEmail ? undefined : '_blank'}
                      rel="noreferrer"
                      className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clean Message Form */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
            >
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {lang === 'fa' ? 'نام شما' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={lang === 'fa' ? 'نام و نام‌خانوادگی' : 'Jane Doe'}
                  className="w-full px-3.5 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {lang === 'fa' ? 'ایمیل شما' : 'Your Email'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {lang === 'fa' ? 'پیام' : 'Message'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={lang === 'fa' ? 'پیام خود را بنویسید...' : 'How can I help you?'}
                  className="w-full px-3.5 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-medium text-xs hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                {submitted ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
                    <span>{lang === 'fa' ? 'در حال باز کردن ایمیل...' : 'Opening mail client...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'fa' ? 'ارسال پیام' : 'Send Message'}</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
