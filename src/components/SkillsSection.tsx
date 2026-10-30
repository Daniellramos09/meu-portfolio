import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { TechBadge } from './ui/TechBadge';

const CORE_STACK_ITEMS = [
  {
    name: 'Python',
    icon: 'https://skillicons.dev/icons?i=python',
    focus: 'IA Generativa, Automação, ETL & Engenharia de Dados',
    stack: ['Pandas', 'NumPy', 'Automação'],
  },
  {
    name: 'Java 21',
    icon: 'https://skillicons.dev/icons?i=java',
    focus: 'Arquitetura Backend Escalável, APIs REST & Bots',
    stack: ['Spring Boot', 'APIs REST', 'Bots Discord'],
  },
  {
    name: 'SQL',
    icon: 'https://skillicons.dev/icons?i=postgres',
    focus: 'Modelagem Relacional, Consultas Analíticas & Persistência',
    stack: ['PostgreSQL', 'MySQL', 'Oracle Cloud (OCI)'],
  },
  {
    name: 'JavaScript',
    icon: 'https://skillicons.dev/icons?i=js',
    focus: 'Base para Web/Frontend, Interfaces Componentizadas & UX',
    stack: ['React', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
];

const ECOSYSTEM_CATEGORIES = [
  {
    label: 'Cloud, DevOps & Versionamento',
    tools: ['Docker', 'Git', 'GitHub', 'Oracle Cloud (OCI)', 'AWS', 'Linux'],
  },
  {
    label: 'Business Intelligence & Analytics',
    tools: ['Power BI', 'DAX', 'Power Query', 'Excel', 'ETL'],
  },
  {
    label: 'Engenharia, Games & Produto',
    tools: ['Godot Engine', 'Figma', 'Scrum', 'IA Generativa'],
  },
];

export const SkillsSection: React.FC = () => {
  const [showFullEcosystem, setShowFullEcosystem] = useState(false);

  return (
    <SpotlightCard
      as="article"
      rounded="3xl"
      className="p-6 sm:p-8 flex flex-col justify-between gap-5 h-full w-full max-w-full transition-all duration-500 ease-in-out"
    >
      <div className="flex flex-col gap-4">
        <div>
          <p
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: '#4F8CFF',
              marginBottom: '0.35rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Core Stack
          </p>
          <h2
            id="competencias-heading"
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(1.65rem, 3vw, 2.25rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#F4F6FA',
              margin: 0,
            }}
          >
            Stack Tecnológica &amp; Ecossistema
          </h2>
        </div>

        <div className="divide-y divide-white/[0.08]">
          {CORE_STACK_ITEMS.map((lang) => (
            <div
              key={lang.name}
              className="py-3.5 first:pt-1 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3.5">
                <img
                  src={lang.icon}
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain rounded-[9px] shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: '17px',
                      color: '#F4F6FA',
                      margin: 0,
                    }}
                  >
                    {lang.name}
                  </h3>
                  <p className="text-xs text-[#A6B0C0] m-0 mt-0.5">{lang.focus}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:justify-end">
                {lang.stack.map((tech) => (
                  <TechBadge key={tech} name={tech} size="sm" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progressive Disclosure: Ecossistema Completo */}
        <div
          id="ecossistema-completo-panel"
          className={`grid transition-all duration-500 ease-in-out ${
            showFullEcosystem
              ? 'grid-rows-[1fr] opacity-100 pt-4 border-t border-white/[0.08]'
              : 'grid-rows-[0fr] opacity-0 pt-0 border-t-0 pointer-events-none'
          }`}
        >
          <div className="overflow-hidden flex flex-col gap-4">
            {ECOSYSTEM_CATEGORIES.map((group) => (
              <div key={group.label} className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A6B0C0]">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <TechBadge key={tool} name={tool} size="sm" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-white/[0.08]">
        <button
          type="button"
          aria-expanded={showFullEcosystem}
          aria-controls="ecossistema-completo-panel"
          onClick={() => setShowFullEcosystem((prev) => !prev)}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/12 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#4F8CFF]/50 text-sm font-semibold text-[#F4F6FA] cursor-pointer transition-all duration-300 ease-out"
        >
          <span>
            {showFullEcosystem ? 'Ocultar ecossistema completo' : 'Ver ecossistema completo'}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#4F8CFF] transition-transform duration-500 ease-in-out ${
              showFullEcosystem ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </div>
    </SpotlightCard>
  );
};
