import { UserProfile, NavItem, SkillItem, ProjectItem } from '../types';

export const userProfile: UserProfile = {
  nameFa: 'متین تاتار',
  nameEn: 'Matin Tatar',
  titleFa: 'توسعه‌دهنده وب و نرم‌افزار | علاقه‌مند به هوش مصنوعی',
  titleEn: 'Software Developer & AI Enthusiast',
  subtitlesFa: [
    'توسعه‌دهنده پایتون و جاوا اسکریپت',
    'طراح و سازنده رابط‌های کاربری وب مدرن',
    'پژوهشگر کاربردهای LLM و ابزارهای هوشمند'
  ],
  subtitlesEn: [
    'Python & JavaScript Developer',
    'Modern Web UI & Front-end Creator',
    'LLM & Applied AI Explorer'
  ],
  bioFa: 'توسعه‌دهنده نرم‌افزار و وب با تمرکز بر کدنویسی تمیز، ساخت رابط‌های کاربری سریع و مدرن و پیاده‌سازی راه‌حل‌های هوش مصنوعی کاربردی. علاقه‌مند به یادگیری مستمر، حل مسئله و خلق ابزارهای دیجیتال با کیفیت.',
  bioEn: 'Software and web developer focused on writing clean, maintainable code, crafting fast and responsive user experiences, and exploring practical AI integrations. Passionate about continuous learning and building reliable digital solutions.',
  email: 'matintatar01@gmail.com',
  locationFa: 'ایران',
  locationEn: 'Iran',
  socials: {
    github: 'https://github.com/M-Tatar22',
    telegram: 'https://t.me/M_Tatar22',
    twitter: 'https://x.com/M_Tatar22',
    email: 'mailto:matintatar01@gmail.com'
  }
};

export const navItems: NavItem[] = [
  { id: 'about', labelFa: 'درباره من', labelEn: 'About', href: '#about' },
  { id: 'skills', labelFa: 'مهارت‌ها', labelEn: 'Skills', href: '#skills' },
  { id: 'projects', labelFa: 'پروژه‌ها', labelEn: 'Projects', href: '#projects' },
  { id: 'contact', labelFa: 'تماس', labelEn: 'Contact', href: '#contact' },
];

export const skillsData: SkillItem[] = [
  // Core Languages & Web
  {
    name: 'Python',
    nameFa: 'پایتون',
    descriptionFa: 'اسکریپت‌نویسی، پردازش داده و تعامل با API',
    descriptionEn: 'Scripting, data handling & API integrations',
    iconName: 'Code2',
    category: 'core',
    highlight: true,
  },
  {
    name: 'JavaScript / ES6+',
    nameFa: 'جاوا اسکریپت',
    descriptionFa: 'فرانت‌اند مدرن، تعاملات وب و منطق کلاینت',
    descriptionEn: 'Modern front-end logic & dynamic UI interactions',
    iconName: 'FileCode',
    category: 'core',
    highlight: true,
  },
  {
    name: 'React & Next.js',
    nameFa: 'ری‌اکت و نکست‌جی‌اس',
    descriptionFa: 'ساخت وب‌اپلیکیشن‌های سریع و کامپوننت‌محور',
    descriptionEn: 'Building fast, component-driven web applications',
    iconName: 'Layers',
    category: 'core',
    highlight: true,
  },
  {
    name: 'Tailwind CSS',
    nameFa: 'تیلویند سی‌اس‌اس',
    descriptionFa: 'طراحی واکنش‌گرا، تم‌های مدرن و استایلینگ بهینه',
    descriptionEn: 'Responsive layouts, modern theming & clean styles',
    iconName: 'Layout',
    category: 'core',
  },
  {
    name: 'HTML5 & CSS3',
    nameFa: 'HTML5 و CSS3',
    descriptionFa: 'ساختار استاندارد وب و دسترسی‌پذیری مناسب',
    descriptionEn: 'Semantic markup, accessibility & responsive design',
    iconName: 'Globe',
    category: 'core',
  },

  // AI & Systems
  {
    name: 'LLM & Prompting',
    nameFa: 'مدل‌های زبانی و مهندسی پرامپت',
    descriptionFa: 'طراحی دستورات هوشمند، اتصال مدل‌ها و پردازش متنی',
    descriptionEn: 'Context design, model integrations & text processing',
    iconName: 'Bot',
    category: 'ai',
    highlight: true,
  },
  {
    name: 'RAG & Semantic Search',
    nameFa: 'RAG و جستجوی معنایی',
    descriptionFa: 'بازیابی اسناد، پایگاه‌های برداری و امبدینگ',
    descriptionEn: 'Vector embeddings, semantic retrieval & QA flows',
    iconName: 'Cpu',
    category: 'ai',
  },
  {
    name: 'LangChain & Agents',
    nameFa: 'فریم‌ورک‌های LangChain و ایجنت‌ها',
    descriptionFa: 'زنجیره‌های تصمیم‌گیری و خودکارسازی وظایف هوشمند',
    descriptionEn: 'Orchestrating agent workflows & chained reasoning',
    iconName: 'GitBranch',
    category: 'ai',
  },

  // Tools & Workflow
  {
    name: 'Git & GitHub',
    nameFa: 'گیت و گیت‌هاب',
    descriptionFa: 'کنترل نسخه، مدیریت مخازن و انتشار پروژه‌ها',
    descriptionEn: 'Version control, repository management & releases',
    iconName: 'Github',
    category: 'tools',
  },
  {
    name: 'Linux & Command Line',
    nameFa: 'لینوکس و ترمینال',
    descriptionFa: 'اسکریپت‌نویسی شل و دستورات پایه‌ای محیط کاربری',
    descriptionEn: 'Bash scripting & developer CLI productivity',
    iconName: 'Terminal',
    category: 'tools',
  },
  {
    name: 'UI/UX & Design Basics',
    nameFa: 'مبانی طراحی رابط و تجربه کاربری',
    descriptionFa: 'چیدمان مینیمال، تایپوگرافی اصولی و سلسله‌مراتب بصری',
    descriptionEn: 'Minimalist layouts, typography & visual hierarchy',
    iconName: 'Palette',
    category: 'tools',
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'ayene-rouz',
    titleFa: 'پرتال اینترنتی آیینه روز',
    titleEn: 'Ayene Rouz Web Portal',
    descriptionFa: 'پایگاه رسانه‌ای و محتوایی مدرن با طراحی واکنش‌گرا، چیدمان بهینه، لود سریع و رابط کاربری چشم‌نواز.',
    descriptionEn: 'A modern digital content portal with responsive design, high performance, clean typography, and seamless browsing experience.',
    image: '/ayene-rouz.jpg',
    tags: ['Next.js / React', 'Tailwind CSS', 'Vercel Deployment', 'Responsive UI'],
    liveUrl: 'https://ayene-rouz.vercel.app/',
    githubUrl: 'https://github.com/M-Tatar22',
    featured: true,
  },
  {
    id: 'ai-rag-agent',
    titleFa: 'دستیار هوشمند تحلیل اسناد و RAG',
    titleEn: 'AI Document Search & RAG Assistant',
    descriptionFa: 'سامانه پرسش‌وپاسخ و بازیابی هوشمند از میان اسناد با استفاده از پایتون، لنگ‌چین و مدل‌های زبانی نوین.',
    descriptionEn: 'Document question-answering tool powered by Python, LangChain, and vector embeddings for contextual semantic retrieval.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'LangChain', 'RAG Pipeline', 'LLMs'],
    githubUrl: 'https://github.com/M-Tatar22',
    featured: true,
  },
  {
    id: 'automation-tools',
    titleFa: 'ابزارهای اتوماسیون پایتون و پردازش داده',
    titleEn: 'Python Automation & Data Scripts',
    descriptionFa: 'مجموعه اسکریپت‌های کاربردی جهت استخراج و مرتب‌سازی داده‌ها، تولید فایل‌های ساختاریافته و حذف کارهای تکراری.',
    descriptionEn: 'Utility automation scripts designed to process datasets, parse files, and automate routine technical workflows.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Automation', 'Data Parsing', 'CLI'],
    githubUrl: 'https://github.com/M-Tatar22',
    featured: false,
  }
];
