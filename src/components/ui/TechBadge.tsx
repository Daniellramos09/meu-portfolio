import React from 'react';

interface TechBadgeProps {
  name: string;
  size?: 'sm' | 'md';
}

const SKILLICON_MAP: Record<string, string> = {
  html: 'https://skillicons.dev/icons?i=html',
  html5: 'https://skillicons.dev/icons?i=html',
  css: 'https://skillicons.dev/icons?i=css',
  css3: 'https://skillicons.dev/icons?i=css',
  javascript: 'https://skillicons.dev/icons?i=js',
  react: 'https://skillicons.dev/icons?i=react',
  vite: 'https://skillicons.dev/icons?i=vite',
  'tailwind css': 'https://skillicons.dev/icons?i=tailwind',
  tailwind: 'https://skillicons.dev/icons?i=tailwind',
  'node.js': 'https://skillicons.dev/icons?i=nodejs',
  java: 'https://skillicons.dev/icons?i=java',
  'java 17': 'https://skillicons.dev/icons?i=java',
  'java 21': 'https://skillicons.dev/icons?i=java',
  'spring boot': 'https://skillicons.dev/icons?i=spring',
  spring: 'https://skillicons.dev/icons?i=spring',
  python: 'https://skillicons.dev/icons?i=python',
  postgresql: 'https://skillicons.dev/icons?i=postgres',
  postgres: 'https://skillicons.dev/icons?i=postgres',
  mysql: 'https://skillicons.dev/icons?i=mysql',
  docker: 'https://skillicons.dev/icons?i=docker',
  aws: 'https://skillicons.dev/icons?i=aws',
  'aws cloud': 'https://skillicons.dev/icons?i=aws',
  linux: 'https://skillicons.dev/icons?i=linux',
  git: 'https://skillicons.dev/icons?i=git',
  github: 'https://skillicons.dev/icons?i=github',
  'godot engine': 'https://skillicons.dev/icons?i=godot',
  godot: 'https://skillicons.dev/icons?i=godot',
  gdscript: 'https://skillicons.dev/icons?i=godot',
  figma: 'https://skillicons.dev/icons?i=figma',
  discord: 'https://skillicons.dev/icons?i=discord',
  'discord api': 'https://skillicons.dev/icons?i=discord',
  'bots discord': 'https://skillicons.dev/icons?i=discord',
  'oracle cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',
  'oracle cloud (oci)': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',
  'oracle cloud infrastructure (oci)': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',
  'oci object storage': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',
  pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
  numpy: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
};

export function renderInlineTechSvg(key: string): React.ReactNode {
  const k = key.toLowerCase();

  // Power BI / DAX / Power Query official-style gold analytics bars SVG
  if (k.includes('power bi') || k.includes('dax') || k.includes('power query')) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-hidden="true">
        <rect x="3" y="12" width="4.5" height="9" rx="1.2" fill="#F2C811" opacity="0.7" />
        <rect x="9.75" y="7.5" width="4.5" height="13.5" rx="1.2" fill="#F2C811" opacity="0.88" />
        <rect x="16.5" y="3" width="4.5" height="18" rx="1.2" fill="#F2C811" />
      </svg>
    );
  }

  // Excel / Tabelas Dinâmicas official-style emerald spreadsheet SVG
  if (k.includes('excel') || k.includes('tabela')) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#107C41" />
        <path
          d="M8 8L12 16M12 8L8 16M14.5 9H18M14.5 12H18M14.5 15H18"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // SQL / ETL / Database cylinder SVG
  if (k === 'sql' || k.includes('etl') || k.includes('dados') || k.includes('csv')) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="3" fill="#38BDF8" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="1.7" />
        <path d="M5 6V12C5 13.66 8.13 15 12 15C15.87 15 19 13.66 19 12V6" stroke="#38BDF8" strokeWidth="1.7" />
        <path d="M5 12V18C5 19.66 8.13 21 12 21C15.87 21 19 19.66 19 18V12" stroke="#38BDF8" strokeWidth="1.7" />
      </svg>
    );
  }

  // IA Generativa / Prompt Engineering / Automação sparkle SVG
  if (k.includes('ia') || k.includes('prompt') || k.includes('automa')) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-hidden="true">
        <path
          d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
          fill="#A855F7"
          fillOpacity="0.3"
          stroke="#C084FC"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Default tech node icon
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="#4F8CFF" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.5" fill="#4F8CFF" />
    </svg>
  );
}

export const GitHubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const TechBadge: React.FC<TechBadgeProps> = ({ name, size = 'sm' }) => {
  const normalized = name.trim().toLowerCase();
  const iconUrl = SKILLICON_MAP[normalized];

  const paddingClass = size === 'md' ? 'px-3.5 py-1.5 text-[14px]' : 'px-3 py-1 text-[14px]';

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] text-[#F4F6FA] font-medium transition-all duration-300 ease-out hover:border-[#A855F7]/50 hover:bg-white/[0.08] hover:scale-[1.03] ${paddingClass}`}
    >
      {iconUrl ? (
        <img
          src={iconUrl}
          alt=""
          aria-hidden="true"
          className="w-4 h-4 object-contain shrink-0 rounded-[3px]"
          loading="lazy"
        />
      ) : (
        renderInlineTechSvg(normalized)
      )}
      <span>{name}</span>
    </span>
  );
};
