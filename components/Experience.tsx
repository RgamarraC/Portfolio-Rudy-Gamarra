import React, { useState } from 'react';
import type { ExperienceItem } from '../types';
import { Section } from './Section';
import { ContainerListExperience } from './styled';
interface ExperienceProps {
  experiences: ExperienceItem[];
  id: string;
  title: string;
}

const Experience: React.FC<ExperienceProps> = ({ experiences, id, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];

  return (
    <Section number="02" title={title} id={id}>
      <div className="flex flex-col md:flex-row -mx-4">
        <ContainerListExperience className="md:w-1/4 px-4">
          <ul className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-slate-700">
            {experiences.map((exp, index) => (
              <li key={index} className="md:w-full">
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`p-3 text-left w-full whitespace-nowrap lg:w-[200px] lg:whitespace-normal text-sm transition-colors duration-300 ${index === activeIndex
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
        </ContainerListExperience>

        <div className="md:w-3/4 px-4 mt-6 md:mt-0 pl-8 md:pl-[100px]">
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