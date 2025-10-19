import React from 'react'

interface SectionProps {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}

export const Section = ({
  id,
  number,
  title,
  children
}: SectionProps) => (
  <section id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label={title}>
    <div className="flex items-center mb-6">
      <h2 className="text-2xl font-bold text-slate-200 flex items-baseline whitespace-nowrap">
        <span className="text-cyan-400 font-mono text-xl mr-3">{number}.</span>
        {title}
      </h2>
      <div className="ml-4 h-px w-full bg-slate-700"></div>
    </div>
    {children}
  </section>
)
