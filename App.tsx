import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import { aboutData, achievements, contact, education, experiences, skills, shortAbout, navLinks, projects } from './constants';
import { ProjectItem } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.id));

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
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
            <Header
              name="Rudy Gamarra Condor"
              title="Senior Simulator & Video Game Developer"
              shortAbout={shortAbout}
              contact={contact}
              navLinks={navLinks}
              activeSection={activeSection}
            />
          </header>

          <main id="content" className="pt-24 lg:w-7/12 lg:py-24">
            <About content={aboutData} />
            <Experience experiences={experiences} />
            <Projects projects={projects} onProjectSelect={setSelectedProject} />
            <Skills skills={skills} />
            <Education educationHistory={education} />
            <Achievements achievements={achievements} />            
          </main>
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default App;