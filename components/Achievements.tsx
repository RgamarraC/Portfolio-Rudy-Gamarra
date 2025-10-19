import React from 'react';
import type { AchievementItem } from '../types';
import { Section } from './Section';
interface AchievementsProps {
  achievements: AchievementItem[];
  id: string;
  title: string;
}

const Achievements: React.FC<AchievementsProps> = ({ achievements, id, title }) => {
  return (
    <Section number="06" id={id} title={title}>
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