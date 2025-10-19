import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import LanguageSelector from './components/LanguageSelector';
import './src/i18n';
import { darkTheme } from './src/styles/theme';
import { GlobalStyle } from './src/styles/globalStyles';
import { ProjectItem } from './types';
import {
  aboutData, achievements, contact,
  education, experiences, skills,
  shortAbout, navLinks, projects
} from './constants';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const sections = navLinks(t).map((link) => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -70% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);


  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle theme={darkTheme} />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
            <div className="relative">
              <div className="absolute right-0 top-0 z-10">
                <LanguageSelector />
              </div>
              <Header
                name="Rudy Gamarra Condor"
                title={t('about.profession')}
                shortAbout={shortAbout}
                contact={contact}
                navLinks={navLinks(t)}
                activeSection={activeSection}
              />
            </div>
          </header>

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
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </ThemeProvider>
  );
};

export default App;