import React from 'react';
import type { ContactInfo, NavLink } from '../types';
import { EmailIcon, GitHubIcon, LinkedInIcon, PhoneIcon } from './Icons';

interface HeaderProps {
  name: string;
  title: string;
  shortAbout: string;
  contact: ContactInfo;
  navLinks: NavLink[];
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, shortAbout, contact, navLinks, activeSection }) => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">{name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          {shortAbout}
        </p>
      </div>

      <nav className="nav hidden lg:block" aria-label="In-page jump links">
        <ul className="mt-16 w-max">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                className="group flex items-center py-3" 
                href={`#${link.id}`}
              >
                <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${activeSection === link.id ? 'w-16 bg-slate-200' : ''}`}></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === link.id ? 'text-slate-200' : ''}`}>
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 flex items-center" aria-label="Social media">
        <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="mr-5 text-slate-400 hover:text-slate-200 transition-colors duration-300">
          <GitHubIcon className="h-6 w-6" />
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="mr-5 text-slate-400 hover:text-slate-200 transition-colors duration-300">
          <LinkedInIcon className="h-6 w-6" />
        </a>
        <a href={`mailto:${contact.email}`} aria-label="Email" className="mr-5 text-slate-400 hover:text-slate-200 transition-colors duration-300">
          <EmailIcon className="h-6 w-6" />
        </a>
        <a href={`tel:${contact.phone}`} aria-label="Phone" className="text-slate-400 hover:text-slate-200 transition-colors duration-300">
          <PhoneIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Header;