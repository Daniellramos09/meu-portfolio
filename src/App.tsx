import { useState } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TrajectorySection } from './components/TrajectorySection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const TABS = [
  'Resumo',
  '⚙️ Backend & AI',
  '🤖 Automação',
  '📊 Dados & BI',
  '🎮 Games',
  '💼 Trajetória',
] as const;

export function App() {
  const [activeTab, setActiveTab] = useState('Resumo');

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0c] text-[#F4F6FA]">
      <SmoothScroll />
      <Navbar onSelectTab={(tab) => setActiveTab(tab)} />

      <HeroSection onExploreProjects={() => setActiveTab('⚙️ Backend & AI')} />

      {/* Barra de Navegação Dinâmica de Nichos (Tabs / Pills) */}
      <div
        className="sticky top-16 z-30 w-full border-b border-white/[0.08] bg-[#0a0a0c]/85 backdrop-blur-xl"
        style={{
          paddingLeft: 'clamp(1.25rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.25rem, 5vw, 4rem)',
        }}
      >
        <div className="mx-auto w-full max-w-[1240px] py-3.5">
          <div
            role="tablist"
            aria-label="Navegação por nichos de atuação"
            className="w-full max-w-full flex overflow-x-auto whitespace-nowrap scrollbar-hide touch-pan-x gap-4 items-center"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full border text-sm cursor-pointer transition-all duration-300 ease-out shrink-0 ${
                    isActive
                      ? 'bg-[#4F8CFF]/15 border-[#4F8CFF]/70 text-white font-semibold shadow-[0_0_25px_rgba(79,140,255,0.25)]'
                      : 'bg-white/[0.02] border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Container Principal de Renderização Condicional com Transição de Estado */}
      <main id="conteudo-principal" className="flex-1 w-full max-w-full overflow-x-hidden">
        <div
          key={activeTab}
          className="transition-opacity duration-300 ease-in-out opacity-100 tab-content-fade"
        >
          {activeTab === 'Resumo' && (
            <>
              <section
                id="resumo-geral"
                aria-label="Resumo geral e stack tecnológica"
                className="relative bg-[#0a0a0c] text-[#F4F6FA] border-b border-white/[0.07] ambient-section-glow"
                style={{
                  paddingLeft: 'clamp(1.25rem, 5vw, 4rem)',
                  paddingRight: 'clamp(1.25rem, 5vw, 4rem)',
                  paddingTop: 'clamp(3rem, 6vw, 5rem)',
                  paddingBottom: 'clamp(3rem, 6vw, 5rem)',
                }}
              >
                <div className="mx-auto w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-6 w-full max-w-full">
                    <AboutSection />
                  </div>
                  <div className="lg:col-span-6 w-full max-w-full">
                    <SkillsSection />
                  </div>
                </div>
              </section>
              <ContactSection />
            </>
          )}

          {activeTab === '⚙️ Backend & AI' && (
            <ProjectsSection
              projectIds={['fonosync', 'floravel']}
              sectionBadge="Nicho · Engenharia Backend & Inteligência Artificial"
              sectionTitle="Backend & AI"
              sectionSubtitle="Arquitetura backend em Java 21 e Spring Boot integrada à Inteligência Artificial nos projetos FonoSync e Florável. Clique em qualquer cartão para expandir a arquitetura, telas e links."
            />
          )}

          {activeTab === '🤖 Automação' && (
            <ProjectsSection
              projectIds={['botnexus']}
              sectionBadge="Nicho · Automação em Produção"
              sectionTitle="Automação & Bots"
              sectionSubtitle="Automação de curadoria e disparos em tempo real no Discord com o BotNexus Carreira em produção na Oracle Cloud (OCI)."
            />
          )}

          {activeTab === '📊 Dados & BI' && (
            <ProjectsSection
              projectIds={['finai', 'finance-dashboard', 'fraudguard']}
              sectionBadge="Nicho · Engenharia de Dados, BI & Machine Learning"
              sectionTitle="Dados & Business Intelligence"
              sectionSubtitle="Pipelines de ingestão em Python/Pandas, consultas SQL, modelagem DAX no Power BI e detecção experimental de anomalias com FinAI, Finance Dashboard e FraudGuard."
            />
          )}

          {activeTab === '🎮 Games' && (
            <ProjectsSection
              projectIds={['herois-da-harmonia']}
              sectionBadge="Nicho · Desenvolvimento de Jogos 2D"
              sectionTitle="Games & Engenharia Interativa"
              sectionSubtitle="Projeto Heróis da Harmonia desenvolvido na Godot Engine com GDScript, programação orientada a objetos (POO) e física 2D."
            />
          )}

          {activeTab === '💼 Trajetória' && <TrajectorySection />}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
