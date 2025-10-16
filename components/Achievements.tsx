import React from 'react';
import type { AchievementItem } from '../types';

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


interface AchievementsProps {
  achievements: AchievementItem[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <Section number="06" title="Achievements">
      <div className="space-y-4 group/list">
        {achievements.map((ach, index) => (
          <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:col-span-2 mt-1">
              <svg className="w-6 h-6 text-cyan-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="z-10 sm:col-span-6">
                <p className="font-medium leading-snug text-slate-200">{ach.description}</p>
                {ach.source && <p className="text-sm text-slate-500 mt-1">{ach.source}</p>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;