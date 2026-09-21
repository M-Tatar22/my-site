export type Language = 'fa' | 'en';
export type Theme = 'dark' | 'light';

export interface NavItem {
  id: string;
  labelFa: string;
  labelEn: string;
  href: string;
}

export interface SkillItem {
  name: string;
  nameFa: string;
  descriptionFa: string;
  descriptionEn: string;
  iconName: string;
  category: 'core' | 'ai' | 'tools';
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  titleFa: string;
  titleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface UserProfile {
  nameFa: string;
  nameEn: string;
  titleFa: string;
  titleEn: string;
  subtitlesFa: string[];
  subtitlesEn: string[];
  bioFa: string;
  bioEn: string;
  email: string;
  locationFa: string;
  locationEn: string;
  socials: {
    github: string;
    telegram: string;
    twitter: string;
    email: string;
  };
}
