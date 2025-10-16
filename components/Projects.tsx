import React from 'react';
import type { ProjectItem } from '../types';

interface SectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ number, title, children }) => (
    <section id={title.toLowerCase()} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label={title}>
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{title}</h2>
    </div>
     <div className="lg:hidden flex items-center mb-6">
      <h2 className="text-2xl font-bold text-slate-200 flex items-baseline whitespace-nowrap">
          <span className="text-cyan-400 font-mono text-xl mr-3">{number}.</span>
          {title}
      </h2>
      <div className="ml-4 h-px w-full bg-slate-700"></div>
    </div>
    {children}
  </section>
);


interface ProjectsProps {
  projects: ProjectItem[];
  onProjectSelect: (project: ProjectItem) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onProjectSelect }) => {
  return (
    <Section number="03" title="Projects">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <li key={index} className="group relative transition-shadow duration-300 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10">
            <button 
              onClick={() => onProjectSelect(project)} 
              className="w-full h-full text-left"
              aria-label={`View details for ${project.name}`}
            >
              <div className="relative overflow-hidden rounded-md">
                <img 
                  src={project.thumbnail} 
                  alt={`${project.name} thumbnail`} 
                  className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="font-bold text-lg text-slate-200 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Projects;