import { ArrowDownRight, FileText } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { OrbitalAvatar } from './OrbitalAvatar';
import { GitHubIcon } from './ui/TechBadge';
import './hero/hero.css';

interface HeroSectionProps {
  onExploreProjects?: () => void;
}

export function HeroSection({ onExploreProjects }: HeroSectionProps) {
  return (
    <section
      id="topo"
      aria-labelledby="hero-titulo"
      className="relative min-h-[78svh] w-full overflow-hidden bg-[#0a0a0c] ambient-section-glow flex items-center border-b border-white/[0.07]"
    >
      {/* Gradiente radial estático e leve para profundidade visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 68% 72% at 24% 48%, rgba(10, 10, 12, 0.84) 0%, rgba(10, 10, 12, 0.48) 55%, rgba(10, 10, 12, 0.08) 100%), linear-gradient(to bottom, rgba(10, 10, 12, 0.25) 0%, transparent 25%, transparent 74%, #0a0a0c 100%)',
        }}
      />

      {/* Conteúdo principal */}
      <div
        className="relative z-10 w-full mx-auto max-w-[1240px] py-14 sm:py-20 lg:py-28"
        style={{
          paddingLeft: 'clamp(1.25rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.25rem, 5vw, 4rem)',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          {/* Coluna Esquerda: Badge, H1, Copywriting Direto e Botões de Ação */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start gap-6">
            {/* Tag de Disponibilidade */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md">
              <span className="text-sm leading-none" aria-hidden="true">
                🟢
              </span>
              <span style={{ fontSize: '14px', fontWeight: 500, color: '#F4F6FA' }}>
                Disponível para novos desafios
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h1
                id="hero-titulo"
                className="hero__title m-0"
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(2.35rem, 6vw, 4.75rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: '#F4F6FA',
                  textShadow: '0 12px 40px rgba(0, 0, 0, 0.65)',
                }}
              >
                Daniel Expedito
              </h1>
              <p
                className="m-0 font-medium text-[#4F8CFF]"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
              >
                AI Engineer &amp; Backend Developer · Graduação em Análise e Desenvolvimento de Sistemas · Google Student Ambassador 2026
              </p>
            </div>

            <p
              className="hero__subtitle m-0 max-w-[56ch]"
              style={{
                fontSize: 'clamp(1.0625rem, 0.95rem + 0.4vw, 1.25rem)',
                lineHeight: 1.6,
                color: '#A6B0C0',
              }}
            >
              Construindo soluções escaláveis, automatizando processos com IA e estruturando dados para resolver problemas reais.
            </p>

            {/* Ações (Call to Action) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projetos"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#4F8CFF] text-[#0a0a0c] font-semibold text-[16px] no-underline shadow-[0_0_28px_rgba(79,140,255,0.4)] transition-all duration-300 ease-out hover:bg-[#6BA0FF] hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(168,85,247,0.5)]"
              >
                <span>Ver projetos</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/12 bg-white/[0.04] backdrop-blur-md text-[#F4F6FA] font-medium text-[15px] no-underline transition-all duration-300 ease-out hover:border-[#A855F7]/60 hover:bg-white/[0.09] hover:scale-[1.03]"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE_DATA.resume.publicPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/12 bg-white/[0.04] backdrop-blur-md text-[#A6B0C0] hover:text-[#F4F6FA] font-medium text-[15px] no-underline transition-all duration-300 ease-out hover:border-[#4F8CFF]/60 hover:bg-white/[0.09] hover:scale-[1.03]"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>Currículo PDF</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Componente OrbitalAvatar (Sistema Solar / Anéis de Órbita em CSS Puro) */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end pt-4 lg:pt-0 w-full max-w-full overflow-visible">
            <OrbitalAvatar />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
