import React, { useEffect, useRef } from 'react';
import type { ProjectItem } from '../types';
import { CloseIcon, LinkIcon } from './Icons';
import { Carrousel } from './Carrousel';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    // Use timeout to prevent closing on the same click that opened the modal
    setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-4xl min-h-[30vh] max-h-[150vh] flex flex-col animate-slide-up"
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-700 shrink-0">
          <h2 id="project-modal-title" className="text-xl font-bold text-slate-200">{project.name}</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-cyan-300 transition-colors duration-300"
            aria-label="Close project details"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>



        <div className="p-6 overflow-y-auto flex-1">
          <Carrousel
            projectName={project.name}
            projectMedia={project.media}
          />
          <div className="mb-4 mt-4">
            <p className="text-slate-400 leading-relaxed">{project.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <ul className="flex flex-wrap" aria-label="Technologies used:">
              {project.technologies.map(tech => (
                <li key={tech} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">{tech}</div>
                </li>
              ))}
            </ul>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors duration-300 mt-2"
                aria-label={`${project.name} (opens in a new tab)`}
              >
                <LinkIcon className="w-5 h-5" />
                <span>View Project</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ProjectModal;
