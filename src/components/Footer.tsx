import React from 'react';
import { Download, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './ui/TechBadge';

export const Footer: React.FC = () => {
  return (
    <footer
      className="sticky bottom-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-t border-white/10 text-[#F4F6FA]"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        paddingLeft: 'clamp(1.25rem, 5vw, 4rem)',
        paddingRight: 'clamp(1.25rem, 5vw, 4rem)',
      }}
    >
      <div className="mx-auto w-full max-w-[1240px] pt-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] flex flex-col sm:flex-row items-center justify-between gap-3.5">
        {/* Identificação compacta à esquerda */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span
            className="inline-block w-2 h-2 rounded-full bg-emerald-400 shrink-0"
            aria-hidden="true"
          />
          <p className="text-sm text-[#A6B0C0] m-0">
            <strong className="text-[#F4F6FA] font-semibold">Daniel Expedito</strong> · AI Engineer &amp; Backend Developer
          </p>
        </div>

        {/* Canais diretos com ícones + Botão CTA Primário "Download Currículo" */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5">
          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Daniel Expedito"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] hover:border-[#4F8CFF]/50 text-xs sm:text-sm font-medium text-[#F4F6FA] no-underline transition-all duration-300 ease-out"
          >
            <LinkedInIcon className="w-4 h-4 text-[#4F8CFF]" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PROFILE_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Daniel Expedito"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/30 text-xs sm:text-sm font-medium text-[#F4F6FA] no-underline transition-all duration-300 ease-out"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${PROFILE_DATA.email}`}
            aria-label="Enviar e-mail para Daniel Expedito"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] hover:border-[#4F8CFF]/50 text-xs sm:text-sm font-medium text-[#F4F6FA] no-underline transition-all duration-300 ease-out"
          >
            <Mail className="w-4 h-4 text-[#4F8CFF]" aria-hidden="true" />
            <span>E-mail</span>
          </a>

          <a
            href={PROFILE_DATA.resume.publicPath}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold no-underline shadow-[0_0_24px_rgba(37,99,235,0.45)] transition-all duration-300 ease-out hover:scale-[1.02]"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>Download Currículo</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
