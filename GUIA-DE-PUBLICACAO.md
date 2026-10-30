# Guia de Publicação e Manutenção — Portfólio Daniel Expedito

Este portfólio foi desenvolvido com **React 19, Vite, TypeScript, Tailwind CSS 4, Three.js, vgpu (AeroShards) e Lenis Smooth Scroll**.

---

## 1. Estrutura de Seções e Componentes

1. **Rolagem Suave (`src/components/SmoothScroll.tsx`)**:
   - Implementada com **Lenis** (`lenis`), proporcionando deslizamento fluido ao rolar para cima ou para baixo e ao clicar em links de navegação (`#atuacao`, `#projetos`, `#trajetoria`, `#sobre`, `#competencias`, `#contato`), além de barra de progresso no topo.
2. **Primeira Tela (`src/components/Navbar.tsx` + `src/components/HeroSection.tsx`)**:
   - Cabeçalho com links diretos e Hero com o **Protótipo A (`field` — Campo de pontos ondulante)** em Three.js.
3. **Indicadores & Quatro Frentes de Atuação (`src/components/HighlightsSection.tsx`)**:
   - Faixa de indicadores (`08 Projetos`, `06 Certificações`, `2026 Google Student Ambassador`, `Nota 10 TCC Etec`) e 4 pilares técnicos (*Dados & BI*, *Engenharia de Software & Automação*, *Cloud & Infraestrutura*, *Governança de TI & Processos*).
4. **Experimento Interativo AeroShards (`src/components/AeroShardsSection.tsx` + `src/components/AeroShards.tsx`)**:
   - Integração do componente **AeroShards** (`implementação.md` / ReactBits) com shaders WebGPU (`vgpu`) e fallback automático em Canvas 3D, permitindo alternar paletas, geometria (`full`, `center`, `right`), material (`glass`, `chrome`) e marcadores (`plus`, `dots`), além de reação ao cursor, pulso ao clicar e aglomeração ao segurar.
5. **Seção de Projetos (`src/components/ProjectsSection.tsx` + `src/components/projects/ProjectInteractiveVisual.tsx`)**:
   - Filtro por categoria (`Todos (8)`, `Dados, BI & IA (3)`, `Software, Cloud & Automação (3)`, `Jogos & Comunidade (2)`).
   - **8 projetos completos**:
     - **BotNexus Carreira** (`Java 17, Spring Boot, PostgreSQL, Oracle Cloud, Automação`) — com painel interativo de canais do Discord e link do GitHub.
     - **FinAI — Plataforma de Análise Financeira** (`Python, Pandas, SQL, PostgreSQL, Excel, Power BI, IA Generativa`) — com simulação interativa de pipeline e gráfico financeiro.
     - **Finance Dashboard — Indicadores Financeiros** (`Excel, Power Query, Power BI, DAX`) — com filtro trimestral/anual e medidas DAX.
     - **FraudGuard — Detecção Experimental de Anomalias** (`Python, Pandas, SQL, Scikit-learn, Power BI`) — com monitor interativo de transações e Isolation Forest.
     - **FonoSync** — capturas reais com lightbox e link do repositório `FonosyncAPI`.
     - **Florável** — 3 capturas reais com lightbox.
     - **Heróis da Harmonia** — simulação interativa de restauração cromática Godot 2D e link do GitHub.
     - **Impulsa.** — identidade visual oficial com lightbox.
6. **Experiência, Formação Acadêmica & Certificações (`src/components/TrajectorySection.tsx`)**:
   - **Experiência**: *Jovem Aprendiz — Neobpo (03/2025 – 08/2025)*, *Google Student Ambassador 2026* e *Voluntariado (Projeto Se Ligue, APAE e Impulsa)*.
   - **Formação**: *Fatec Ferraz de Vasconcelos (ADS — 2º semestre diurno com grade curricular atual)*, *Instituto PROA (PROPROFISSÃO Java)* e *Etec Ferraz de Vasconcelos (Jogos Digitais — concluído em dez/2024 com nota máxima)*.
   - **6 Certificações**: *Oracle Cloud Infrastructure 2025 Certified Foundations Associate*, *AWS Cloud Quest: Cloud Practitioner*, *SQL Certificate (HackerRank)*, *Java Certificate (HackerRank)*, *Python Essentials 1 (Cisco)* e *Instituto PROA*.
7. **Sobre, Competências Técnicas & Contato (`AboutSection.tsx`, `SkillsSection.tsx`, `ContactSection.tsx`)**:
   - Dados reais de contato (`danielexpeditospr2@gmail.com`, WhatsApp `(11) 95916-6966`, localização `Belém, São Paulo - SP`) e download direto das versões do currículo em PDF em `public/curriculo/`.

---

## 2. Comandos de Desenvolvimento e Build

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Gerar versão de produção
npm run build
```
