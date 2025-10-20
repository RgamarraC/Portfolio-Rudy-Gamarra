import type { ContactInfo, SkillCategory, ExperienceItem, EducationItem, AchievementItem, NavLink, ProjectItem } from './types';

export const contact: ContactInfo = {
  email: 'rudy.gamarra.g@gmail.com',
  phone: '+51 922095018',
  linkedin: 'https://www.linkedin.com/in/rudy-gamarra-condor/',
  github: 'https://github.com/RgamarraC',
};

export const navLinks = (t: (key: string) => string): NavLink[] => [
  { id: 'about', name: t('nav.about') },
  { id: 'experience', name: t('nav.experience') },
  { id: 'projects', name: t('nav.projects') },
  { id: 'skills', name: t('nav.skills') },
  { id: 'education', name: t('nav.education') },
  { id: 'achievements', name: t('nav.achievements') },
];