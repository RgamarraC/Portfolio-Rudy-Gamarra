import React from 'react';
import type { ProjectItem } from '../types';
import { Section } from './Section';

interface ProjectsProps {
  projects: ProjectItem[];
  onProjectSelect: (project: ProjectItem) => void;
  id: string;
  title: string;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onProjectSelect, id, title }) => {
  return (
    <Section number="03" title={title} id={id}>
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