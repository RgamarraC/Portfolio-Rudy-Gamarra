import React, { useState } from 'react';
import type { ExperienceItem } from '../types';
import { useTranslation } from 'react-i18next';

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


interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];

  return (
    <Section number="02" title="Experience">
      {/* no traducir el title de cada seccion */}
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:w-1/4 px-4">
          <ul className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-slate-700">
            {experiences.map((exp, index) => (
              <li key={index} className="md:w-full">
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`p-3 text-left w-full text-sm whitespace-nowrap transition-colors duration-300 ${index === activeIndex
                      ? 'bg-slate-800/50 text-cyan-300'
                      : 'hover:bg-slate-800/50 hover:text-cyan-300'
                    }`}
                >
                  {exp.company}
                </button>
                <div className={`relative -top-0.5 md:left-0 md:top-auto md:-left-0.5 md:w-0.5 h-0.5 md:h-auto w-full bg-cyan-300 transition-transform duration-300 ${activeIndex === index ? 'scale-x-100 md:scale-y-100' : 'scale-x-0 md:scale-y-0'} md:origin-top origin-left`}></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-3/4 px-4 mt-6 md:mt-0">
          <h3 className="text-lg font-bold text-slate-200">
            <span>{activeExperience.title}</span>
            <span className="text-cyan-300"> @ {activeExperience.company}</span>
          </h3>
          <p className="text-sm text-slate-400 mt-1 mb-4 font-mono uppercase tracking-wide">{activeExperience.period}</p>
          <ul className="space-y-3 text-slate-400 text-sm">
            {activeExperience.description.map((item, i) => (
              <li key={i} className="flex">
                <span className="text-cyan-400 mr-2 shrink-0">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Experience;