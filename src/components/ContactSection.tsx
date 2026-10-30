import React, { useState } from 'react';
import { Copy, Check, ExternalLink, FileText, Mail, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { SpotlightCard } from './ui/SpotlightCard';
import { GitHubIcon, LinkedInIcon } from './ui/TechBadge';
import { Reveal } from './ui/Reveal';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      window.location.href = `mailto:${PROFILE_DATA.email}`;
    }
  };

  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="relative bg-[#0a0a0c] text-[#F4F6FA] border-b border-white/[0.07] ambient-section-glow"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        paddingLeft: 'clamp(1.25rem, 5vw, 4rem)',
        paddingRight: 'clamp(1.25rem, 5vw, 4rem)',
        paddingTop: 'clamp(4.5rem, 8vw, 7.5rem)',
        paddingBottom: 'clamp(4.5rem, 8vw, 7.5rem)',
      }}
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-8 items-start">
          {/* Coluna Esquerda */}
          <Reveal className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#4F8CFF',
                  marginBottom: '0.5rem',
                }}
              >
                Disponível para Estágio & Projetos
              </p>
              <h2
                id="contato-heading"
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.025em',
                  color: '#F4F6FA',
                  margin: 0,
                }}
              >
                Vamos conversar.
              </h2>
            </div>

            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.6,
                color: '#A6B0C0',
                maxWidth: '54ch',
                margin: 0,
              }}
            >
              Busco oportunidade de estágio em{' '}
              <strong className="text-[#F4F6FA]">
                Dados, BI, Automação, Cloud, Infraestrutura, Governança de TI ou Desenvolvimento de
                Software
              </strong>
              , além de colaborar em projetos reais.
            </p>

            {/* Canais diretos em SpotlightCard */}
            <div className="flex flex-col gap-3.5 pt-2">
              <SpotlightCard rounded="2xl" className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#4F8CFF]/15 border border-[#4F8CFF]/30 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#4F8CFF] shrink-0" aria-hidden="true" />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: '#A6B0C0', margin: 0 }}>E-mail direto</p>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className="underline underline-offset-4 text-[#F4F6FA] hover:text-[#4F8CFF] transition-colors duration-300"
                      style={{ fontSize: '16px', fontWeight: 600 }}
                    >
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/15 bg-white/[0.04] text-[#F4F6FA] hover:border-[#4F8CFF] hover:bg-[#4F8CFF]/15 cursor-pointer transition-all duration-300 ease-out"
                  style={{ fontSize: '14px' }}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#5CC2B2]" aria-hidden="true" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#A6B0C0]" aria-hidden="true" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
                <span className="sr-only" aria-live="polite">
                  {copied ? 'Endereço de e-mail copiado para a área de transferência.' : ''}
                </span>
              </SpotlightCard>

              <SpotlightCard rounded="2xl" className="p-4 sm:p-5 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#A855F7]/15 border border-[#A855F7]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#A855F7]" aria-hidden="true" />
                </div>
                <div>
                  <p style={{ fontSize: '13px', color: '#A6B0C0', margin: 0 }}>Localização</p>
                  <p style={{ fontSize: '16px', fontWeight: 600, color: '#F4F6FA', margin: 0 }}>
                    Belém, Zona Leste de São Paulo — SP
                  </p>
                </div>
              </SpotlightCard>
            </div>
          </Reveal>

          {/* Coluna Direita: Versões de Currículo & Redes */}
          <Reveal className="lg:col-start-8 lg:col-span-5" delayMs={120}>
            <SpotlightCard rounded="3xl" className="p-6 sm:p-8 flex flex-col gap-6">
              <div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: '22px',
                    lineHeight: 1.25,
                    color: '#F4F6FA',
                    margin: 0,
                  }}
                >
                  Currículo em PDF
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.55, color: '#A6B0C0', margin: '0.35rem 0 0 0' }}>
                  Baixe a versão do currículo alinhada à vaga ou área técnica de interesse:
                </p>
              </div>

              <div className="flex flex-col gap-3.5">
                <a
                  href="/curriculo/Daniel-Expedito-Curriculo-Dados-TI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#4F8CFF]/60 transition-all duration-300 ease-out hover:-translate-y-0.5 flex items-center justify-between gap-3 no-underline"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#4F8CFF] shrink-0" aria-hidden="true" />
                    <div>
                      <p style={{ fontSize: '15px', fontWeight: 600, color: '#F4F6FA', margin: 0 }}>
                        Currículo — Dados, BI, IA & Governança
                      </p>
                      <p style={{ fontSize: '13px', color: '#A6B0C0', margin: '0.15rem 0 0 0' }}>
                        Python, SQL, Power BI, Excel, Scrum e Processos (PDF)
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#4F8CFF] shrink-0" aria-hidden="true" />
                </a>

                <a
                  href="/curriculo/Daniel-Expedito-Curriculo-Cloud-Dev.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#5CC2B2]/60 transition-all duration-300 ease-out hover:-translate-y-0.5 flex items-center justify-between gap-3 no-underline"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#5CC2B2] shrink-0" aria-hidden="true" />
                    <div>
                      <p style={{ fontSize: '15px', fontWeight: 600, color: '#F4F6FA', margin: 0 }}>
                        Currículo — Cloud, Infraestrutura & Dev Java
                      </p>
                      <p style={{ fontSize: '13px', color: '#A6B0C0', margin: '0.15rem 0 0 0' }}>
                        OCI, AWS, Linux, Docker, Redes, Java 21 e Spring Boot (PDF)
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#5CC2B2] shrink-0" aria-hidden="true" />
                </a>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#4F8CFF]/50 text-[#F4F6FA] text-sm font-semibold no-underline transition-all duration-300 ease-out"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#4F8CFF]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-[#F4F6FA] text-sm font-semibold no-underline transition-all duration-300 ease-out"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub (@Daniellramos09)</span>
                </a>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
