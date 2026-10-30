import React, { useEffect, useState } from 'react';
import {
  ChevronDown,
  ExternalLink,
  Eye,
  Image as ImageIcon,
  Maximize2,
  Play,
  Sparkles,
  X,
} from 'lucide-react';
import {
  ProjectInteractiveVisual,
  type InteractiveVisualKind,
} from './projects/ProjectInteractiveVisual';
import { SpotlightCard } from './ui/SpotlightCard';
import { GitHubIcon, TechBadge } from './ui/TechBadge';
import { Reveal } from './ui/Reveal';

export interface CaptureItem {
  src: string;
  alt: string;
  caption: string;
  label: string;
  type?: 'image' | 'video';
}

type ProjectCategory = 'dados' | 'software' | 'comunidade';

export interface RefinedProject {
  id: string;
  name: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: string;
  description: string;
  whatItIs: string;
  technologies: string[];
  contribution?: string;
  githubUrl?: string;
  liveLabel?: string;
  logo?: {
    src: string;
    alt: string;
  };
  visualType: 'captures' | 'interactive';
  captures?: CaptureItem[];
  interactiveKind?: InteractiveVisualKind;
  futureAssetFolder?: string;
}

const PROJECTS: RefinedProject[] = [
  {
    id: 'fonosync',
    name: 'FonoSync',
    category: 'software',
    categoryLabel: 'Engenharia Backend, Cloud & IA Aplicada à Fonoaudiologia',
    status: 'Em desenvolvimento · API & Plataforma Clínica com IA',
    description:
      'Sistema full-stack com arquitetura backend em Java/Spring Boot e estudo de Inteligência Artificial para análise fonética, prontuário eletrônico e triagem infantil.',
    whatItIs:
      'Arquitetura backend estruturada em Java 17 e Spring Boot integrada a estudo de Inteligência Artificial para apoio à observação fonética em crianças de 0 a 6 anos. Une prontuário eletrônico, gestão de pacientes, agenda, evolução clínica, relatórios e conformidade LGPD com controles nativos de acessibilidade (WCAG) e armazenamento em nuvem OCI.',
    technologies: [
      'Java 21',
      'Spring Boot',
      'IA Generativa',
      'PostgreSQL',
      'Oracle Cloud (OCI)',
      'Docker',
      'React',
      'Tailwind CSS',
    ],
    contribution:
      'Arquitetura e desenvolvimento da API backend em Java 17 e Spring Boot (FonosyncAPI), modelagem relacional no PostgreSQL, integração de fluxos assistidos por IA (FonoBot / análise fonética) e infraestrutura OCI/Docker.',
    githubUrl: 'https://github.com/Daniellramos09/FonosyncAPI',
    liveLabel: 'Ampliar Capturas Clínicas',
    logo: {
      src: '/assets/logos/fonosync-logo.png',
      alt: 'Logotipo FonoSync',
    },
    visualType: 'captures',
    captures: [
      {
        label: 'Gestão Clínica de Pacientes',
        src: '/assets/projects/fonosync/fonosync-tela-pacientes.png',
        alt: 'Tela de gestão de pacientes do FonoSync com busca, filtros, assistente FonoBot e botão de acessibilidade.',
        caption:
          'Tela de gestão de pacientes da área profissional com filtros clínicos, FonoBot e barra de acessibilidade.',
        type: 'image',
      },
      {
        label: 'Mosaico Completo do Sistema',
        src: '/assets/projects/fonosync/fonosync-mosaico-telas.png',
        alt: 'Conjunto de telas do FonoSync incluindo login, dashboard com menu de acessibilidade, agenda, acompanhamento, relatórios e configurações de LGPD.',
        caption:
          'Fluxo completo do FonoSync: login, dashboard acessível, agenda, evolução clínica, relatórios e LGPD.',
        type: 'image',
      },
    ],
  },
  {
    id: 'floravel',
    name: 'Florável',
    category: 'software',
    categoryLabel: 'Engenharia Backend Java, Triagem Inteligente & Saúde Materna',
    status: 'Em desenvolvimento · Projeto Instituto PROA',
    description:
      'Plataforma web com backend Java/Spring Boot e triagem assistida por IA para conectar mães no pós-parto a psicólogos a custo social e redes de acolhimento.',
    whatItIs:
      'Concebido na formação de Desenvolvimento Web em Java do Instituto PROA. Combina engenharia backend em Java 17 e Spring Boot com banco relacional MySQL, escala automatizada de rastreio emocional no puerpério, recomendação inteligente de conteúdos (Puerpério, Sono do Bebê, Rede de Apoio, Vínculo e Autocuidado) e agendamento de rodas de conversa.',
    technologies: [
      'Java 21',
      'Spring Boot',
      'IA Generativa',
      'MySQL',
      'APIs REST',
      'React',
      'Tailwind CSS',
      'Figma',
    ],
    contribution:
      'Estruturação da arquitetura backend e API REST em Java/Spring Boot com persistência MySQL, lógica de triagem e recomendação inteligente, além do desenvolvimento full-stack em React e Tailwind CSS.',
    githubUrl: 'https://github.com/Daniellramos09',
    liveLabel: 'Explorar Telas & Vídeo Demo',
    logo: {
      src: '/assets/logos/floravel-logo.png',
      alt: 'Logotipo Florável',
    },
    visualType: 'captures',
    captures: [
      {
        label: 'Painel Inicial (Olá, Mariana!)',
        src: '/assets/projects/floravel/floravel-tela-01-inicio.png',
        alt: 'Tela inicial da plataforma Florável com saudação Olá Mariana, Sua saúde mental importa, pilares de Apoio Psicológico, Conteúdo Confiável e Comunidade Acolhedora.',
        caption:
          'Tela inicial da plataforma com acesso rápido a psicólogos parceiros, conteúdos e comunidade acolhedora.',
        type: 'image',
      },
      {
        label: 'Vídeo Demo em Movimento',
        src: '/assets/projects/floravel/floravel-demo-hero.mp4',
        alt: 'Gravação em vídeo da tela inicial da Florável com animação suave de pétalas na seção principal.',
        caption:
          'Gravação real da interface da Florável demonstrando a fluidez visual e o acolhimento no Hero.',
        type: 'video',
      },
      {
        label: 'Biblioteca & Destaque da Semana',
        src: '/assets/projects/floravel/floravel-tela-02-biblioteca-destaque.png',
        alt: 'Tela de Conteúdos e Biblioteca da Florável destacando o artigo O mito da Mãe Perfeita e filtros por categorias.',
        caption:
          'Seção Conteúdos e Biblioteca com busca integrada, filtros temáticos e leitura em destaque.',
        type: 'image',
      },
      {
        label: 'Artigos por Tema (Puerpério & Sono)',
        src: '/assets/projects/floravel/floravel-tela-03-biblioteca-artigos.png',
        alt: 'Grade de artigos da biblioteca Florável sobre Baby Blues, Sono do Bebê, Rede de Apoio, Vínculo e Autocuidado.',
        caption:
          'Curadoria de artigos com tempo de leitura estimado sobre Puerpério, Sono do Bebê, Rede de Apoio e Autocuidado.',
        type: 'image',
      },
      {
        label: 'Rodas de Conversa Ao Vivo',
        src: '/assets/projects/floravel/floravel-tela-04-rodas-conversa.png',
        alt: 'Seção de Rodas de Conversa da Florável com encontros online mediados por especialistas e botões de inscrição.',
        caption:
          'Agendamento de Rodas de Conversa online em pequenos grupos mediados por psicólogas perinatais.',
        type: 'image',
      },
      {
        label: 'Landing Page Institucional',
        src: '/assets/projects/floravel/floravel-landing-page.png',
        alt: 'Landing page institucional completa da Florável.',
        caption: 'Visão panorâmica da página institucional da Florável.',
        type: 'image',
      },
    ],
  },
  {
    id: 'botnexus',
    name: 'BotNexus Carreira',
    category: 'software',
    categoryLabel: 'Automação de Curadoria & Disparos no Discord · Cloud OCI',
    status: 'Em produção · Oracle Cloud (OCI)',
    description:
      'Sistema automatizado em produção que executa curadoria inteligente e dispara vagas, certificações, eventos e tarefas open source no Discord.',
    whatItIs:
      'Construído em Java 17 com Spring Boot e PostgreSQL hospedado na Oracle Cloud Infrastructure (OCI). Executa pipelines agendados de automação, curadoria de oportunidades, filtragem de duplicidades e disparos automáticos em canais temáticos do Discord para democratizar o acesso a vagas e eventos.',
    technologies: [
      'Java 21',
      'Spring Boot',
      'Bots Discord',
      'Automação',
      'PostgreSQL',
      'Oracle Cloud (OCI)',
      'APIs REST',
      'Git',
    ],
    contribution:
      'Arquitetura backend, motor de automação e agendamento de disparos via Discord API, modelagem do banco de dados PostgreSQL para controle de duplicidades e deploy em produção na Oracle Cloud.',
    githubUrl: 'https://github.com/Daniellramos09/Bot-Discord-Vagas',
    liveLabel: 'Interagir com Simulador Live',
    visualType: 'interactive',
    interactiveKind: 'botnexus',
    futureAssetFolder: 'public/assets/projects/botnexus/',
  },
  {
    id: 'finai',
    name: 'FinAI — Plataforma de Análise Financeira',
    category: 'dados',
    categoryLabel: 'Engenharia de Dados, BI & IA Generativa',
    status: 'Projeto de Dados & IA · Em construção',
    description:
      'Plataforma analítica educacional com dados financeiros simulados, cobrindo ingestão, tratamento, armazenamento relacional, consultas SQL e dashboards com IA Generativa.',
    whatItIs:
      'Estrutura um fluxo completo de dados: scripts em Python e Pandas higienizam transações financeiras simuladas, persistem os dados em PostgreSQL para consultas analíticas em SQL e conectam os resultados ao Excel e Power BI, utilizando IA Generativa para sintetizar indicadores e variações de orçamento.',
    technologies: [
      'Python',
      'Pandas',
      'SQL',
      'PostgreSQL',
      'Excel',
      'Power BI',
      'IA Generativa',
    ],
    contribution:
      'Desenvolvimento do pipeline de ingestão e limpeza em Python/Pandas, modelagem SQL no PostgreSQL, construção de KPIs financeiros no Excel/Power BI e integração de prompts analíticos com IA Generativa.',
    githubUrl: 'https://github.com/Daniellramos09',
    liveLabel: 'Explorar Dashboard Interativo',
    visualType: 'interactive',
    interactiveKind: 'finai',
    futureAssetFolder: 'public/assets/projects/finai/',
  },
  {
    id: 'finance-dashboard',
    name: 'Finance Dashboard — Indicadores Financeiros',
    category: 'dados',
    categoryLabel: 'Business Intelligence, Power Query & Modelagem DAX',
    status: 'Projeto de BI · Em construção',
    description:
      'Análise de receitas, despesas e transações, com tratamento de dados no Power Query, tabelas dinâmicas no Excel, medidas DAX e filtros interativos no Power BI.',
    whatItIs:
      'Painel gerencial voltado ao acompanhamento de saúde financeira, margem operacional e centros de custo. Combina higienização e padronização de planilhas em Excel via Power Query, modelagem dimensional e criação de medidas DAX no Power BI para comparações temporais e drill-down.',
    technologies: [
      'Excel',
      'Power Query',
      'Power BI',
      'DAX',
    ],
    contribution:
      'Tratamento e transformação de dados (ETL no Excel e Power Query), escrita de medidas DAX, definição de KPIs de receita/despesa e design de relatórios interativos no Power BI.',
    githubUrl: 'https://github.com/Daniellramos09',
    liveLabel: 'Testar Filtros & Medidas DAX',
    visualType: 'interactive',
    interactiveKind: 'finance-dashboard',
    futureAssetFolder: 'public/assets/projects/finance-dashboard/',
  },
  {
    id: 'fraudguard',
    name: 'FraudGuard — Detecção Experimental de Anomalias',
    category: 'dados',
    categoryLabel: 'Ciência de Dados, SQL & Machine Learning',
    status: 'Projeto Experimental · Em construção',
    description:
      'Projeto experimental com dados financeiros simulados para análise exploratória de transações e identificação introdutória de anomalias.',
    whatItIs:
      'Aplica análise estatística e algoritmos introdutórios do Scikit-learn (como Isolation Forest) sobre uma base simulada de movimentações financeiras em Python, Pandas e SQL, identificando transações fora do padrão de horário, frequência ou valor e exibindo os desvios em painel analítico no Power BI.',
    technologies: [
      'Python',
      'Pandas',
      'SQL',
      'Scikit-learn',
      'Power BI',
    ],
    contribution:
      'Exploração e engenharia de atributos em Python/Pandas e SQL, experimentação de detecção de outliers com Scikit-learn e visualização de escores de risco no Power BI.',
    githubUrl: 'https://github.com/Daniellramos09',
    liveLabel: 'Inspecionar Detector de Anomalias',
    visualType: 'interactive',
    interactiveKind: 'fraudguard',
    futureAssetFolder: 'public/assets/projects/fraudguard/',
  },
  {
    id: 'herois-da-harmonia',
    name: 'Heróis da Harmonia',
    category: 'comunidade',
    categoryLabel: 'Engenharia de Jogos 2D & Educação Ambiental',
    status: 'Concluído em dezembro de 2024 · Nota Máxima no TCC (Etec)',
    description:
      'Jogo educativo de plataforma 2D desenvolvido em equipe como TCC na Etec Ferraz de Vasconcelos e aprovado com nota máxima pela banca avaliadora.',
    whatItIs:
      'Uma banda de rock enfrenta uma organização autoritária que retira as cores e a vitalidade do planeta. A narrativa trabalha educação ambiental e resistência criativa por meio de fases interativas construídas na Godot Engine.',
    technologies: [
      'Godot Engine',
      'GDScript',
      'POO',
      'Git',
    ],
    contribution:
      'Atuação direta na programação, aplicação de lógica, orientação a objetos (POO), física 2D e implementação das mecânicas de jogo.',
    githubUrl: 'https://github.com/Daniellramos09/Herois-da-Harmonia',
    liveLabel: 'Ver Telemetria & Cena Godot',
    visualType: 'interactive',
    interactiveKind: 'herois-godot',
    futureAssetFolder: 'public/assets/projects/herois-da-harmonia/',
  },
  {
    id: 'impulsa',
    name: 'Impulsa.',
    category: 'comunidade',
    categoryLabel: 'Liderança Comunitária & Inclusão Tech',
    status: 'Comunidade ativa · Zona Leste de SP',
    description:
      'Comunidade que leva vagas, certificações, hackathons, eventos e projetos open source a jovens de ONGs e periferias.',
    whatItIs:
      'Opera ativamente conectando estudantes a oportunidades reais no ecossistema de tecnologia, trabalhando em sinergia com a automação do BotNexus Carreira e com plano de evolução para plataforma web própria.',
    technologies: [
      'Git',
      'React',
      'Automação',
    ],
    githubUrl: 'https://github.com/Daniellramos09',
    liveLabel: 'Ampliar Identidade Visual',
    visualType: 'captures',
    captures: [
      {
        label: 'Identidade Oficial',
        src: '/assets/logos/impulsa-logo-completo.jpg',
        alt: 'Logotipo completo da comunidade Impulsa.',
        caption: 'Identidade visual oficial da iniciativa comunitária Impulsa.',
        type: 'image',
      },
      {
        label: 'Símbolo Conceitual',
        src: '/assets/logos/impulsa-icone.jpg',
        alt: 'Ícone da Impulsa unindo raízes comunitárias e anéis de órbita tecnológica.',
        caption: 'Símbolo que une raízes periféricas à propulsão tecnológica.',
        type: 'image',
      },
    ],
  },
];

interface ProjectCardProps {
  project: RefinedProject;
  onOpenLightbox: (project: RefinedProject, capture?: CaptureItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenLightbox }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [frameMode, setFrameMode] = useState<'interactive' | 'frame-slot'>('interactive');

  const currentCapture = project.captures?.[selectedIdx] ?? project.captures?.[0];

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleHeaderKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <SpotlightCard
      as="article"
      id={`projeto-${project.id}`}
      aria-labelledby={`titulo-${project.id}`}
      rounded="3xl"
      className="group w-full max-w-full min-w-0 p-5 sm:p-7 flex flex-col transition-all duration-500 ease-in-out"
    >
      {/* CABEÇALHO DO CARTÃO (ESTADO FECHADO / THUMBNAIL INTERATIVO) */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-controls={`detalhes-${project.id}`}
        onClick={handleToggle}
        onKeyDown={handleHeaderKeyDown}
        className="w-full flex flex-col gap-4 cursor-pointer select-none text-left focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            {project.logo && (
              <div
                className="w-11 h-11 shrink-0 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-sm"
                style={{ width: '44px', height: '44px' }}
              >
                <img
                  src={project.logo.src}
                  alt={project.logo.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            )}
            <div className="min-w-0">
              <span className="inline-block text-xs font-semibold text-[#4F8CFF] mb-1">
                {project.categoryLabel}
              </span>
              <h3
                id={`titulo-${project.id}`}
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(1.35rem, 2.4vw, 1.75rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  color: '#F4F6FA',
                  margin: 0,
                }}
              >
                {project.name}
              </h3>
            </div>
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

        {/* Subtítulo / resumo curto da solução */}
        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.55,
            color: '#A6B0C0',
            margin: 0,
          }}
        >
          {project.description}
        </p>

        {/* Linha de tags pequenas das tecnologias-chave */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} size="sm" />
          ))}
        </div>
      </div>

      {/* ESTADO EXPANDIDO (REVELAÇÃO PROGRESSIVA: ARQUITETURA, PAINÉIS E LINKS) */}
      <div
        id={`detalhes-${project.id}`}
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded
            ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-white/[0.08]'
            : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden flex flex-col gap-6">
          {/* 1. O que é e como funciona & Minha Atuação Técnica */}
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-4 flex flex-col gap-1.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4F8CFF] m-0">
                O que é e como funciona
              </h4>
              <p className="text-sm leading-relaxed text-[#A6B0C0] m-0">
                {project.whatItIs}
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-4 flex flex-col gap-1.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5CC2B2] m-0">
                Minha Atuação Técnica
              </h4>
              <p className="text-sm leading-relaxed text-[#A6B0C0] m-0">
                {project.contribution ??
                  'Desenvolvimento da arquitetura, implementação técnica e evolução contínua da plataforma.'}
              </p>
            </div>
          </div>

          {/* 2. Painéis / Imagens / Simuladores do Projeto */}
          <div className="w-full flex flex-col gap-3">
            <div className="w-full rounded-2xl overflow-hidden border border-white/[0.1] bg-[#07090e] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)]">
              {/* Barra superior do painel */}
              <div className="px-3.5 py-2.5 border-b border-white/[0.08] bg-[#0d1017]/90 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" aria-hidden="true" />
                  <span className="ml-2 text-xs font-medium text-[#A6B0C0] truncate max-w-[200px] sm:max-w-[280px]">
                    {project.name} —{' '}
                    {project.visualType === 'captures' && currentCapture
                      ? currentCapture.label
                      : frameMode === 'interactive'
                      ? 'Simulação Interativa Ao Vivo'
                      : 'Moldura 16:9 para Capturas'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {project.visualType === 'interactive' && (
                    <div
                      className="inline-flex items-center rounded-lg border border-white/10 bg-black/40 p-0.5"
                      role="group"
                      aria-label={`Modo de visualização de ${project.name}`}
                    >
                      <button
                        type="button"
                        onClick={() => setFrameMode('interactive')}
                        className={`px-2 py-1 rounded-md text-[11px] font-medium cursor-pointer transition-all duration-200 ${
                          frameMode === 'interactive'
                            ? 'bg-[#4F8CFF] text-[#07090e] font-semibold'
                            : 'text-[#A6B0C0] hover:text-white'
                        }`}
                      >
                        Preview Ao Vivo
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrameMode('frame-slot')}
                        className={`px-2 py-1 rounded-md text-[11px] font-medium cursor-pointer transition-all duration-200 ${
                          frameMode === 'frame-slot'
                            ? 'bg-[#4F8CFF] text-[#07090e] font-semibold'
                            : 'text-[#A6B0C0] hover:text-white'
                        }`}
                      >
                        Moldura 16:9
                      </button>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => onOpenLightbox(project, currentCapture)}
                    aria-label={`Ampliar visualização de ${project.name} em tela cheia`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-white/15 bg-white/[0.04] hover:bg-[#4F8CFF]/20 hover:border-[#4F8CFF]/60 text-xs font-medium text-[#F4F6FA] cursor-pointer transition-all duration-300 ease-out"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#4F8CFF]" aria-hidden="true" />
                    <span>Tela Cheia</span>
                  </button>
                </div>
              </div>

              {/* Visor de Capturas */}
              {project.visualType === 'captures' && currentCapture && (
                <div className="relative w-full aspect-[16/9] bg-[#07090e] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(project, currentCapture)}
                    aria-label={`Ampliar captura de tela de ${project.name}: ${currentCapture.label}`}
                    className="block w-full h-full p-0 bg-transparent border-0 cursor-zoom-in text-left focus-visible:outline-2 focus-visible:outline-[#4F8CFF]"
                  >
                    {currentCapture.type === 'video' ? (
                      <video
                        key={currentCapture.src}
                        src={currentCapture.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <img
                        key={currentCapture.src}
                        src={currentCapture.src}
                        alt={currentCapture.alt}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    )}
                  </button>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/75 to-transparent pt-8 pb-3 px-4 flex items-end justify-between gap-3">
                    <p className="text-xs text-[#E5E9F0] font-medium m-0 drop-shadow">
                      {currentCapture.caption}
                    </p>
                  </div>
                </div>
              )}

              {/* Visor Interativo */}
              {project.visualType === 'interactive' &&
                frameMode === 'interactive' &&
                project.interactiveKind && (
                  <div className="relative w-full overflow-hidden">
                    <ProjectInteractiveVisual kind={project.interactiveKind} />
                  </div>
                )}

              {project.visualType === 'interactive' && frameMode === 'frame-slot' && (
                <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-[#0b0f19] via-[#07090e] to-[#111626] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                  <div className="max-w-md rounded-2xl border border-dashed border-[#4F8CFF]/40 bg-white/[0.02] p-6 flex flex-col items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#4F8CFF]/15 border border-[#4F8CFF]/40 flex items-center justify-center text-[#4F8CFF]">
                      <ImageIcon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h4
                      style={{
                        fontFamily: "'Space Grotesk', system-ui, sans-serif",
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#F4F6FA',
                        margin: 0,
                      }}
                    >
                      Moldura 16:9 pronta para capturas de {project.name}
                    </h4>
                    <p className="text-xs text-[#A6B0C0] m-0 leading-relaxed">
                      Pasta esperada:{' '}
                      <code className="px-1.5 py-0.5 rounded bg-white/10 text-[#F4F6FA]">
                        {project.futureAssetFolder ?? `public/assets/projects/${project.id}/`}
                      </code>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Miniaturas de Capturas */}
            {project.captures && project.captures.length > 1 && (
              <div
                className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-1"
                role="group"
                aria-label={`Selecionar tela de ${project.name}`}
              >
                {project.captures.map((cap, idx) => {
                  const active = selectedIdx === idx;
                  return (
                    <button
                      key={cap.src}
                      type="button"
                      onClick={() => setSelectedIdx(idx)}
                      aria-pressed={active}
                      className={`group/thumb relative rounded-xl overflow-hidden border text-left p-0 cursor-pointer transition-all duration-300 ease-out ${
                        active
                          ? 'border-[#4F8CFF] ring-2 ring-[#4F8CFF]/40 scale-[1.02]'
                          : 'border-white/10 opacity-75 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <div className="aspect-[16/10] w-full bg-[#07090e] overflow-hidden relative">
                        {cap.type === 'video' ? (
                          <>
                            <video
                              src={cap.src}
                              muted
                              playsInline
                              className="w-full h-full object-cover object-top"
                            />
                            <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                              <Play className="w-4 h-4 text-white fill-white" aria-hidden="true" />
                            </span>
                          </>
                        ) : (
                          <img
                            src={cap.src}
                            alt={cap.alt}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="px-2 py-1 bg-[#0d1017] border-t border-white/[0.06]">
                        <span className="block truncate text-[11px] font-medium text-[#F4F6FA]">
                          {cap.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 3. Botões de Call to Action (Ver no GitHub, Explorar, etc.) */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenLightbox(project, currentCapture)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#4F8CFF] hover:bg-[#3b7bef] text-[#07090e] font-semibold text-sm cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] shadow-[0_8px_24px_-6px_rgba(79,140,255,0.5)]"
              >
                <Eye className="w-4 h-4" aria-hidden="true" />
                <span>{project.liveLabel ?? 'Explorar Projeto'}</span>
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-[#F4F6FA] font-medium text-sm no-underline transition-all duration-300 ease-out hover:scale-[1.02]"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>Ver no GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
                </a>
              )}
            </div>

            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-[#A6B0C0]">
              {project.status}
            </span>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

interface ProjectsSectionProps {
  projectIds?: string[];
  sectionTitle?: string;
  sectionSubtitle?: string;
  sectionBadge?: string;
  hideFilters?: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projectIds,
  sectionTitle = 'Projetos em Destaque',
  sectionSubtitle = 'Clique em qualquer cartão abaixo para expandir a arquitetura técnica, visualizar os painéis interativos e acessar os repositórios.',
  sectionBadge = 'Portfólio Técnico & Showcase Visual',
}) => {
  const [lightbox, setLightbox] = useState<{
    project: RefinedProject;
    capture?: CaptureItem;
  } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightbox]);

  const filteredProjects = projectIds
    ? projectIds
        .map((id) => PROJECTS.find((p) => p.id === id))
        .filter((p): p is RefinedProject => Boolean(p))
    : PROJECTS;

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="relative bg-[#0a0a0c] text-[#F4F6FA] border-b border-white/[0.07] ambient-section-glow"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        paddingLeft: 'clamp(1.25rem, 5vw, 4rem)',
        paddingRight: 'clamp(1.25rem, 5vw, 4rem)',
      }}
    >
      <div className="mx-auto w-full max-w-[1240px] py-[clamp(3rem,6vw,5.5rem)]">
        {/* Cabeçalho da seção */}
        <Reveal>
          <header className="pb-[clamp(2rem,4vw,3rem)] border-b border-white/[0.08] flex flex-col gap-4">
            <div className="max-w-[72ch]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4F8CFF]/30 bg-[#4F8CFF]/10 text-[#4F8CFF] text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{sectionBadge}</span>
              </div>
              <h2
                id="projetos-heading"
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                  lineHeight: 1.06,
                  letterSpacing: '-0.03em',
                  color: '#F4F6FA',
                  margin: 0,
                }}
              >
                {sectionTitle}
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '17px',
                  lineHeight: 1.65,
                  color: '#A6B0C0',
                  marginTop: '0.875rem',
                }}
              >
                {sectionSubtitle}
              </p>
            </div>
          </header>
        </Reveal>

        {/* Layout Bento Box (CSS Grid: grid grid-cols-1 md:grid-cols-2 gap-6) */}
        <div className="pt-[clamp(2.5rem,5vw,4rem)] w-full max-w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenLightbox={(proj, cap) =>
                setLightbox({
                  project: proj,
                  capture: cap,
                })
              }
            />
          ))}
        </div>
      </div>

      {/* Modal / Lightbox em Tela Cheia para Fotos, Vídeos e Simuladores */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada de ${lightbox.project.name}`}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="max-w-6xl w-full rounded-3xl border border-white/15 bg-[#0d1017] overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between gap-4">
              <div>
                <p className="text-base font-semibold text-white m-0">
                  {lightbox.project.name}
                  {lightbox.capture ? ` — ${lightbox.capture.label}` : ' — Preview Interativo'}
                </p>
                {lightbox.capture && (
                  <p className="text-xs text-[#A6B0C0] m-0 mt-0.5">{lightbox.capture.caption}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Fechar visualização ampliada"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-white/15 bg-white/[0.05] hover:bg-white/[0.12] text-sm text-white cursor-pointer transition-all"
              >
                <X className="w-4 h-4" aria-hidden="true" />
                <span>Fechar (Esc)</span>
              </button>
            </div>

            <div className="p-4 sm:p-6 bg-[#07090e] overflow-auto flex-1 flex items-center justify-center">
              {lightbox.capture ? (
                lightbox.capture.type === 'video' ? (
                  <video
                    src={lightbox.capture.src}
                    controls
                    autoPlay
                    loop
                    className="max-w-full max-h-[75vh] rounded-xl border border-white/10"
                  />
                ) : (
                  <img
                    src={lightbox.capture.src}
                    alt={lightbox.capture.alt}
                    className="max-w-full max-h-[75vh] w-auto h-auto rounded-xl border border-white/10 object-contain"
                  />
                )
              ) : lightbox.project.interactiveKind ? (
                <div className="w-full">
                  <ProjectInteractiveVisual kind={lightbox.project.interactiveKind} />
                </div>
              ) : null}
            </div>

            {lightbox.project.captures && lightbox.project.captures.length > 1 && (
              <div className="px-6 py-3 border-t border-white/10 bg-[#0d1017] flex flex-wrap items-center gap-2">
                {lightbox.project.captures.map((cap) => {
                  const active = lightbox.capture?.src === cap.src;
                  return (
                    <button
                      key={cap.src}
                      type="button"
                      onClick={() => setLightbox({ project: lightbox.project, capture: cap })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                        active
                          ? 'bg-[#4F8CFF] text-[#07090e] font-semibold'
                          : 'bg-white/[0.04] text-[#A6B0C0] hover:text-white'
                      }`}
                    >
                      {cap.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
