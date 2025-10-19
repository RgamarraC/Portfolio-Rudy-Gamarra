import React from 'react';
import type { SkillCategory } from '../types';
import { Section } from './Section';

interface SkillsProps {
  skills: SkillCategory[];
  id: string;
  title: string;
}

const Skills: React.FC<SkillsProps> = ({ skills, id, title }) => {
  return (
    <Section number="04" title={title} id={id}>
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