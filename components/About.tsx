import React from 'react';
import { Section } from './Section';

interface AboutProps {
  content: string;
  id: string;
  title: string;
}

const About: React.FC<AboutProps> = ({ content, id, title }) => {
  return (
    <Section number="01" title={title} id={id}>
      <p className="text-slate-400 leading-relaxed">
        {content}
      </p>
    </Section>
  );
};

export default About;