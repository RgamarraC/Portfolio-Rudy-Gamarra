export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level?: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  location: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface AchievementItem {
  description: string;
  source: string;
}

export interface NavLink {
  id: string;
  name: string;
}

export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  thumbnail: string;
  media: MediaItem[];
}