import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

interface SatelliteItem {
  id: string;
  label: string;
  positionClass: string;
  iconSrc: string;
}

const SATELLITES: SatelliteItem[] = [
  {
    id: 'java-21',
    label: 'Java 21',
    positionClass: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
    iconSrc: 'https://skillicons.dev/icons?i=java',
  },
  {
    id: 'python',
    label: 'Python',
    positionClass: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2',
    iconSrc: 'https://skillicons.dev/icons?i=python',
  },
  {
    id: 'postgresql',
    label: 'PostgreSQL',
    positionClass: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
    iconSrc: 'https://skillicons.dev/icons?i=postgres',
  },
  {
    id: 'oracle-oci',
    label: 'Oracle Cloud (OCI)',
    positionClass: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',
  },
];

export const OrbitalAvatar: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center p-10 sm:p-14 md:p-16 max-w-full select-none mx-auto">
      {/* Container proporcional base do Avatar Central */}
      <div className="relative flex items-center justify-center w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64">
        {/* Glow estático atrás do planeta central */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 rounded-full bg-blue-500/20 blur-2xl"
        />

        {/* Anel Orbital Interno Sutil (114% do avatar) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute w-[114%] h-[114%] rounded-full border border-white/10"
        />

        {/* 2. Anel Principal de Órbita (130% do avatar · Rotação lenta de 50s) */}
        <div
          className=" absolute z-20 w-[130%] h-[130%] rounded-full border border-dashed border-gray-600/50 pointer-events-none animate-[spin_50s_linear_infinite] animate-orbit-ring"
        >
          {/* 3. Os Satélites (Ferramentas da Stack) com Reverse Spin de 50s + Hover Tátil */}
          {SATELLITES.map((sat) => (
            <div
              key={sat.id}
              className={`absolute ${sat.positionClass} pointer-events-auto`}
            >
              <div className="animate-[spin_50s_linear_infinite_reverse] animate-orbit-satellite">
                <div
                  title={sat.label}
                  aria-label={sat.label}
                  className="w-11 h-11 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.65)] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-125 hover:border-blue-400/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  <img
                    src={sat.iconSrc}
                    alt={sat.label}
                    width={28}
                    height={28}
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain rounded-[4px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 1. O Centro (O Planeta: Foto de Perfil Protagonista) */}
        <div className="relative z-10 w-full h-full rounded-full p-1.5 border border-white/15 bg-white/[0.04] backdrop-blur-sm shadow-[0_0_60px_-15px_rgba(59,130,246,0.3)]">
          <div className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-[#151A24]">
            <img
              src={PROFILE_DATA.photo.src}
              alt={PROFILE_DATA.photo.alt}
              className="block w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrbitalAvatar;
