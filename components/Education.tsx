import React from 'react';
import type { EducationItem } from '../types';

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


interface EducationProps {
  educationHistory: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educationHistory }) => {
  return (
    <Section number="05" title="Education">
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