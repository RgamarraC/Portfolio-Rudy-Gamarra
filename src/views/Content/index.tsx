import React from 'react';
import { useTranslation } from 'react-i18next';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import {
  EducationItem,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  AchievementItem
} from '@/types';

interface ContentProps {
  setSelectedProject: (project: any) => void;
}

const Content: React.FC<ContentProps> = ({
  setSelectedProject,
}) => {
  const { t } = useTranslation();
  const experiences = t('experience.position', { returnObjects: true }) as ExperienceItem[];
  const education = t('education.studies', { returnObjects: true }) as EducationItem[];
  const skillsData = t('skills.list', { returnObjects: true }) as SkillCategory[];
  const achievementsData = t('achievements.list', { returnObjects: true }) as AchievementItem[];
  const projects = t('projects.list', { returnObjects: true }) as ProjectItem[];

  return (
    <main id="content" className="pt-24 lg:w-7/12 lg:py-24">
      <About
        id="about"
        title={t('nav.about')}
        content={t('about.description')}
      />
      <Experience
        id="experience"
        title={t('nav.experience')}
        experiences={experiences}
      />
      <Projects
        id="projects"
        title={t('nav.projects')}
        projects={projects}
        onProjectSelect={setSelectedProject}
      />
      <Skills
        id="skills"
        title={t('nav.skills')}
        skills={skillsData}
      />
      <Education
        id="education"
        title={t('nav.education')}
        educationHistory={education}
      />
      <Achievements
        id="achievements"
        title={t('nav.achievements')}
        achievements={achievementsData}
      />
    </main>
  )
}

export default Content;