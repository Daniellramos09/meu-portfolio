import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';

const PROFILE_HIGHLIGHTS = [
  {
    label: 'Localização',
    value: 'Belém · Zona Leste de São Paulo, SP',
  },
  {
    label: 'Graduação Atual',
    value: 'Análise e Desenvolvimento de Sistemas (3º sem)',
  },
  {
    label: 'Comunidade & Liderança',
    value: 'Google Student Ambassador 2026 & Fundador da Comunidade Impulsa',
  },
  {
    label: 'Idiomas',
    value: 'Português (Nativo) · Inglês (Intermediário) · Espanhol (Básico)',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <SpotlightCard
      as="article"
      rounded="3xl"
      className="p-6 sm:p-8 flex flex-col justify-between gap-5 h-full w-full max-w-full"
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
            Identidade &amp; Propósito
          </p>
          <h2
            id="sobre-heading"
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
            Sobre Mim
          </h2>
        </div>

        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#F4F6FA',
            margin: 0,
          }}
        >
          Sou <strong>Daniel Expedito</strong>, AI Engineer &amp; Backend Developer (20 anos, Zona
          Leste de SP). Curso a graduação em{' '}
          <strong>Análise e Desenvolvimento de Sistemas</strong>, sou formado pela{' '}
          <strong>Etec</strong> e pelo <strong>Instituto PROA</strong>, e atuo como{' '}
          <strong>Google Student Ambassador 2026</strong>.
        </p>
      </div>

      <div className="pt-4 border-t border-white/[0.08]">
        <dl className="divide-y divide-white/[0.08] m-0">
          {PROFILE_HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="py-2.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5"
            >
              <dt
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#F4F6FA',
                }}
              >
                {item.label}
              </dt>
              <dd
                className="m-0 sm:text-right"
                style={{
                  fontSize: '14px',
                  color: '#A6B0C0',
                }}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SpotlightCard>
  );
};
