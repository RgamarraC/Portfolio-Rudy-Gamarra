import React from 'react';
import type { EducationItem } from '../types';
import { Section } from './Section';
interface EducationProps {
  educationHistory: EducationItem[];
  id: string;
  title: string;
}

const Education: React.FC<EducationProps> = ({ educationHistory, id, title }) => {
  return (
    <Section number="05" title={title} id={id}>
      <div className="space-y-4">
        {educationHistory.map((edu, index) => (
          <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
             <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">{edu.period}</header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300 text-base">
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>{edu.institution}</span>
                </div>
              </h3>
              <p className="mt-1 text-sm leading-normal text-slate-400">{edu.degree}</p>
               <p className="text-sm text-slate-500 mt-1">{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;