import React from 'react';
import type { SkillCategory } from '../types';

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


interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section number="04" title="Skills">
      <div className="space-y-8">
        {skills.map((category) => (
          <div key={category.category}>
            <h3 className="font-bold text-slate-200 mb-3">{category.category}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center">
                  <span className="text-cyan-400 mr-2 text-lg">▹</span>
                  <span className="text-slate-300 text-sm">
                    {skill.name}
                    {skill.level && <span className="text-slate-500 ml-1.5 text-xs">({skill.level})</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;