import React, { useState } from 'react';
import { Award, Briefcase, ChevronDown, GraduationCap } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { Reveal } from './ui/Reveal';

interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  badge: string;
  pitch: string;
  bullets: string[];
  tags: string[];
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'google-ambassador',
    role: 'Google Student Ambassador 2026',
    organization: 'Comunidade Nacional de Estudantes · Google',
    period: '2026 · Em atuação',
    badge: 'Liderança & IA',
    pitch: 'Liderança digital e partilha de conhecimento técnico em Inteligência Artificial.',
    bullets: [
      '🔹 Participação ativa na comunidade nacional de estudantes universitários promovida pela Google.',
      '🔹 Atuação em capacitações práticas de IA, democratizando o acesso à tecnologia.',
      '🔹 Promoção de dinâmicas de liderança para o ecossistema tecnológico.',
    ],
    tags: ['Inteligência Artificial', 'Liderança Digital', 'Comunidade Acadêmica', 'Eventos Tech'],
  },
  {
    id: 'neobpo',
    role: 'Jovem Aprendiz — Operações',
    organization: 'Neobpo',
    period: '03/2025 – 08/2025',
    badge: 'Experiência Profissional',
    pitch: 'Atuação em ambiente corporativo de alta demanda, focada na otimização de rotinas.',
    bullets: [
      '🔹 Prestei suporte num ambiente de alta pressão, garantindo comunicação assertiva.',
      '🔹 Apoiei rotinas administrativas complexas utilizando sistemas internos corporativos.',
      '🔹 Estruturei a organização de dados, garantindo o cumprimento de prazos operacionais.',
    ],
    tags: [
      'Sistemas Internos',
      'Organização de Dados',
      'Acompanhamento de Processos',
      'Alta Demanda',
      'Comunicação Assertiva',
    ],
  },
  {
    id: 'voluntariado',
    role: 'Voluntariado & Ação Comunitária (Impulsa / APAE / Gerando Falcões)',
    organization: 'Impulsa · APAE · Gerando Falcões · Projeto Se Ligue',
    period: 'Contínuo',
    badge: 'Impacto Social & Voluntariado',
    pitch: 'Articulação de projetos open source e inclusão tecnológica para a periferia.',
    bullets: [
      '🔹 Planeamento e organização de eventos comunitários no Projeto Se Ligue e na APAE.',
      "🔹 Articulação da iniciativa 'Impulsa', conectando jovens a vagas, certificações e open source.",
      '🔹 Promoção ativa de impacto social através de liderança e inclusão digital.',
    ],
    tags: [
      'Comunidade Impulsa',
      'Gerando Falcões',
      'Inclusão Social',
      'Organização de Eventos',
      'Open Source',
    ],
  },
];

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  pitch: string;
  bullets: string[];
  subjects: string[];
}

const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'ads',
    degree: 'Graduação em Análise e Desenvolvimento de Sistemas',
    institution: 'Ensino Superior Tecnológico',
    period: 'Ingresso 2º sem/2025 · Em andamento (3º semestre)',
    pitch: 'Cursando o 3º semestre da graduação tecnológica com foco em engenharia de software e dados.',
    bullets: [
      '🔹 Formação superior tecnológica com base sólida em engenharia de software e programação orientada a objetos.',
      '🔹 Aprofundamento prático em estatística aplicada, sistemas de informação, bancos de dados e governança de TI.',
    ],
    subjects: [
      'Engenharia de Software I',
      'Programação Orientada a Objetos',
      'Sistemas de Informação',
      'Estatística Aplicada',
      'Projeto Integrador II',
      'Ética e Responsabilidade Profissional',
      'Contabilidade',
      'Inglês II',
    ],
  },
  {
    id: 'proa',
    degree: 'Desenvolvimento Web em Java — Programa PROPROFISSÃO',
    institution: 'Instituto PROA',
    period: 'Formação Complementar Intensiva · Concluído',
    pitch: 'Formação intensiva em engenharia full-stack e metodologias ágeis.',
    bullets: [
      '🔹 Desenvolvimento de aplicações full-stack utilizando Java, Spring Boot, React e banco de dados relacional MySQL.',
      '🔹 Concepção e desenvolvimento em equipa do projeto integrador Floravil (Florável) sob metodologia ágil Scrum.',
    ],
    subjects: [
      'Java & Spring Boot',
      'React & Interfaces Web',
      'Modelagem SQL (MySQL)',
      'Projeto Integrador Floravil',
      'Scrum & Trabalho em Equipe',
      'Prototipação no Figma',
    ],
  },
  {
    id: 'etec',
    degree: 'Técnico em Programação de Jogos Digitais',
    institution: 'Etec Ferraz de Vasconcelos — Centro Paula Souza',
    period: 'Concluído em dezembro de 2024',
    pitch: 'Formação técnica concluída com aprovação de TCC com Nota Máxima pela banca avaliadora.',
    bullets: [
      '🔹 Desenvolvimento completo do jogo educativo de plataforma 2D "Heróis da Harmonia" como Trabalho de Conclusão de Curso (TCC).',
      '🔹 Utilização da Godot Engine e GDScript aplicando lógica de estados, programação orientada a objetos (POO) e física 2D.',
    ],
    subjects: [
      'Godot Engine & GDScript',
      'Projeto TCC: Heróis da Harmonia',
      'Programação Orientada a Objetos',
      'Lógica de Programação',
      'Física & Colisão 2D',
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle University · Certificação Oficial',
    area: 'Cloud Computing, IAM, Rede VCN, Compute, Object Storage e Segurança em Nuvem',
    badge: 'Oficial OCI 2025',
  },
  {
    title: 'AWS Cloud Quest: Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    area: 'Arquitetura em Nuvem AWS, EC2, S3, Bancos de Dados e Fundamentos de Infraestrutura',
    badge: 'AWS Cloud',
  },
  {
    title: 'SQL Certificate',
    issuer: 'HackerRank',
    area: 'Consultas relacionais, agregações, JOINs, filtragem analítica e manipulação de dados',
    badge: 'Dados & SQL',
  },
  {
    title: 'Java Certificate',
    issuer: 'HackerRank',
    area: 'Linguagem Java, orientação a objetos, estruturas de dados e resolução de problemas',
    badge: 'Backend Java',
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    area: 'Fundamentos de Python, estruturas lógicas, coleções de dados e automação de scripts',
    badge: 'Python & Dados',
  },
  {
    title: 'Desenvolvimento Web em Java — PROPROFISSÃO',
    issuer: 'Instituto PROA',
    area: 'Formação prática em engenharia de software web, APIs REST, banco de dados e projetos ágeis',
    badge: 'Full-Stack Java',
  },
];

const ExperienceAccordionCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded((prev) => !prev);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <SpotlightCard
      as="article"
      rounded="2xl"
      className="group w-full max-w-full p-6 flex flex-col transition-all duration-500 ease-in-out"
    >
      {/* Estado Recolhido (Padrão) */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-controls={`exp-panel-${item.id}`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="w-full flex flex-col gap-3 cursor-pointer select-none text-left focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded-xl"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#4F8CFF',
                }}
              >
                {item.badge} · {item.organization}
              </span>
              <span
                className="px-3 py-0.5 rounded-full border border-white/10 bg-white/[0.03]"
                style={{ fontSize: '13px', color: '#A6B0C0' }}
              >
                {item.period}
              </span>
            </div>

            <h4
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: 1.25,
                color: '#F4F6FA',
                margin: '0.15rem 0 0 0',
              }}
            >
              {item.role}
            </h4>
          </div>

          <div
            className={`w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center shrink-0 text-[#A6B0C0] group-hover:text-white group-hover:border-[#4F8CFF]/50 transition-all duration-500 ease-in-out ${
              isExpanded ? 'rotate-180 bg-[#4F8CFF]/15 border-[#4F8CFF]/60 text-[#4F8CFF]' : ''
            }`}
            aria-hidden="true"
          >
            <ChevronDown className="w-5 h-5" aria-hidden="true" />
          </div>
        </div>

        {/* Frase única de resumo (pitch) */}
        <p style={{ fontSize: '15px', lineHeight: 1.55, color: '#A6B0C0', margin: 0 }}>
          {item.pitch}
        </p>
      </div>

      {/* Estado Expandido (Revelação Progressiva) */}
      <div
        id={`exp-panel-${item.id}`}
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded
            ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-white/[0.08]'
            : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden flex flex-col gap-4">
          <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
            {item.bullets.map((bullet) => (
              <li
                key={bullet}
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: '#F4F6FA',
                }}
              >
                {bullet}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-1">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/[0.03]"
                style={{ fontSize: '13px', color: '#F4F6FA' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

const EducationAccordionCard: React.FC<{ edu: EducationItem }> = ({ edu }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded((prev) => !prev);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <SpotlightCard
      as="article"
      rounded="2xl"
      className="group w-full max-w-full p-6 flex flex-col transition-all duration-500 ease-in-out"
    >
      {/* Estado Recolhido (Padrão) */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-controls={`edu-panel-${edu.id}`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="w-full flex flex-col gap-3 cursor-pointer select-none text-left focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded-xl"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#5CC2B2' }}>
                {edu.institution}
              </span>
              <span
                className="px-3 py-0.5 rounded-full border border-white/10 bg-white/[0.03]"
                style={{ fontSize: '13px', color: '#A6B0C0' }}
              >
                {edu.period}
              </span>
            </div>

            <h4
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: 1.25,
                color: '#F4F6FA',
                margin: '0.15rem 0 0 0',
              }}
            >
              {edu.degree}
            </h4>
          </div>

          <div
            className={`w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center shrink-0 text-[#A6B0C0] group-hover:text-white group-hover:border-[#5CC2B2]/50 transition-all duration-500 ease-in-out ${
              isExpanded ? 'rotate-180 bg-[#5CC2B2]/15 border-[#5CC2B2]/60 text-[#5CC2B2]' : ''
            }`}
            aria-hidden="true"
          >
            <ChevronDown className="w-5 h-5" aria-hidden="true" />
          </div>
        </div>

        {/* Frase única de resumo (pitch) */}
        <p style={{ fontSize: '15px', lineHeight: 1.55, color: '#A6B0C0', margin: 0 }}>
          {edu.pitch}
        </p>
      </div>

      {/* Estado Expandido (Revelação Progressiva) */}
      <div
        id={`edu-panel-${edu.id}`}
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded
            ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-white/[0.08]'
            : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden flex flex-col gap-4">
          <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
            {edu.bullets.map((bullet) => (
              <li
                key={bullet}
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: '#F4F6FA',
                }}
              >
                {bullet}
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-white/[0.08]">
            <p
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#F4F6FA',
                margin: '0 0 0.5rem 0',
              }}
            >
              Disciplinas, tecnologias e projetos integradores:
            </p>
            <div className="flex flex-wrap gap-2">
              {edu.subjects.map((subj) => (
                <span
                  key={subj}
                  className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/[0.03]"
                  style={{ fontSize: '13px', color: '#A6B0C0' }}
                >
                  {subj}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export const TrajectorySection: React.FC = () => {
  return (
    <section
      id="trajetoria"
      aria-labelledby="trajetoria-heading"
      className="relative bg-[#0a0a0c] text-[#F4F6FA] border-b border-white/[0.07] ambient-section-glow"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        paddingLeft: 'clamp(1.25rem, 5vw, 4rem)',
        paddingRight: 'clamp(1.25rem, 5vw, 4rem)',
        paddingTop: 'clamp(4.5rem, 8vw, 7.5rem)',
        paddingBottom: 'clamp(4.5rem, 8vw, 7.5rem)',
      }}
    >
      <div className="mx-auto w-full max-w-[1240px] flex flex-col gap-16">
        {/* Cabeçalho */}
        <Reveal>
          <header className="pb-[clamp(2rem,4vw,3.5rem)] border-b border-white/[0.08] max-w-[68ch]">
            <p
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#4F8CFF',
                marginBottom: '0.5rem',
              }}
            >
              Currículo, Experiência &amp; Credenciais
            </p>
            <h2
              id="trajetoria-heading"
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
              Experiência, Formação e Certificações
            </h2>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.65,
                color: '#A6B0C0',
                marginTop: '0.875rem',
              }}
            >
              Clique em qualquer cartão de experiência ou formação abaixo para expandir os
              resultados alcançados, projetos desenvolvidos e tecnologias trabalhadas.
            </p>
          </header>
        </Reveal>

        {/* Bloco 1: Experiência Profissional & Liderança */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 text-[#4F8CFF]">
              <Briefcase className="w-5 h-5" aria-hidden="true" />
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Vivência Prática</span>
            </div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                lineHeight: 1.15,
                color: '#F4F6FA',
                margin: 0,
              }}
            >
              Experiência &amp; Liderança
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#A6B0C0', margin: 0 }}>
              Atuação como Google Student Ambassador 2026, experiência corporativa na Neobpo e
              liderança comunitária voluntária.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5">
            {EXPERIENCE_ITEMS.map((item, idx) => (
              <Reveal key={item.id} delayMs={idx * 70}>
                <ExperienceAccordionCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bloco 2: Formação Acadêmica */}
        <div className="pt-12 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 text-[#5CC2B2]">
              <GraduationCap className="w-5 h-5" aria-hidden="true" />
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Base Acadêmica</span>
            </div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                lineHeight: 1.15,
                color: '#F4F6FA',
                margin: 0,
              }}
            >
              Formação Acadêmica
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#A6B0C0', margin: 0 }}>
              Graduação em Análise e Desenvolvimento de Sistemas, formação intensiva em Java no
              Instituto PROA e ensino técnico concluído com nota máxima na Etec.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5">
            {EDUCATION_ITEMS.map((edu, idx) => (
              <Reveal key={edu.id} delayMs={idx * 70}>
                <EducationAccordionCard edu={edu} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bloco 3: Certificações e Formação Complementar */}
        <div
          id="certificacoes"
          className="pt-12 border-t border-white/[0.08] flex flex-col gap-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#A855F7] mb-1">
                <Award className="w-5 h-5" aria-hidden="true" />
                <span style={{ fontSize: '14px', fontWeight: 600 }}>
                  Certificações &amp; Cursos Técnicos
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  lineHeight: 1.15,
                  color: '#F4F6FA',
                  margin: 0,
                }}
              >
                Certificações e Formação Complementar
              </h3>
            </div>
            <span style={{ fontSize: '14px', color: '#A6B0C0' }}>
              Cloud (OCI &amp; AWS) · Dados (SQL &amp; Python) · Desenvolvimento (Java)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert, idx) => (
              <Reveal key={cert.title} delayMs={idx * 60}>
                <SpotlightCard
                  as="article"
                  rounded="2xl"
                  className="p-6 h-full flex flex-col justify-between gap-4"
                >
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="px-3 py-1 rounded-full border border-[#4F8CFF]/30 bg-[#4F8CFF]/10"
                        style={{ fontSize: '13px', fontWeight: 600, color: '#4F8CFF' }}
                      >
                        {cert.badge}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontFamily: "'Space Grotesk', system-ui, sans-serif",
                        fontWeight: 600,
                        fontSize: '18px',
                        lineHeight: 1.3,
                        color: '#F4F6FA',
                        margin: 0,
                      }}
                    >
                      {cert.title}
                    </h4>

                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#5CC2B2', margin: 0 }}>
                      {cert.issuer}
                    </p>
                  </div>

                  <p
                    className="pt-3 border-t border-white/[0.08]"
                    style={{ fontSize: '14px', lineHeight: 1.55, color: '#A6B0C0', margin: 0 }}
                  >
                    {cert.area}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
