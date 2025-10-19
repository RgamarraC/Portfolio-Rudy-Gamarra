import React from 'react';
import { useTranslation } from 'react-i18next';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';


interface ContentProps {
  aboutData: string;
  experiences: (t: (key: string) => string) => any[];
  projects: (t: (key: string) => string) => any[];
  skills: (t: (key: string) => string) => any[];
  education: (t: (key: string) => string) => any[];
  achievements: (t: (key: string) => string) => any[];
  setSelectedProject: (project: any) => void;
}


const Content: React.FC<ContentProps> = ({
  aboutData,
  experiences,
  projects,
  skills,
  education,
  achievements,
  setSelectedProject,
}) => {
  const { t } = useTranslation();
  
  return (
    <main id="content" className="pt-24 lg:w-7/12 lg:py-24">
      <About
        id="about"
        title={t('nav.about')}
        content={aboutData}
      />
      <Experience
        id="experience"
        title={t('nav.experience')}
        experiences={experiences(t)}
      />
      <Projects
        id="projects"
        title={t('nav.projects')}
        projects={projects(t)}
        onProjectSelect={setSelectedProject}
      />
      <Skills
        id="skills"
        title={t('nav.skills')}
        skills={skills(t)}
      />
      <Education
        id="education"
        title={t('nav.education')}
        educationHistory={education(t)}
      />
      <Achievements
        id="achievements"
        title={t('nav.achievements')}
        achievements={achievements(t)}
      />
    </main>
  )
}

export default Content;