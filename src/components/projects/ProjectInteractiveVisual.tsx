import React, { useState } from 'react';
import {
  Activity,
  AlertTriangle,
  Bot,
  CheckCircle2,
  Database,
  Gamepad2,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

export type InteractiveVisualKind =
  | 'botnexus'
  | 'finai'
  | 'finance-dashboard'
  | 'fraudguard'
  | 'herois-godot';

interface Props {
  kind: InteractiveVisualKind;
}

export const ProjectInteractiveVisual: React.FC<Props> = ({ kind }) => {
  // Estados interativos por tipo de preview
  const [botChannel, setBotChannel] = useState<'vagas' | 'certificacoes' | 'opensource'>('vagas');
  const [finaiStage, setFinaiStage] = useState<number>(0);
  const [financeQuarter, setFinanceQuarter] = useState<'Q1' | 'Q2' | 'YTD'>('YTD');
  const [fraudFilter, setFraudFilter] = useState<'all' | 'flagged'>('all');
  const [worldRestored, setWorldRestored] = useState<boolean>(true);

  if (kind === 'botnexus') {
    const feeds = {
      vagas: [
        {
          tag: 'Estágio Dados & BI',
          company: 'São Paulo · Híbrido',
          stack: 'Python · SQL · Power BI · Excel',
          time: 'Disparo automático · há 12 min',
        },
        {
          tag: 'Estágio Cloud & Dev Java',
          company: 'Remoto · Brasil',
          stack: 'Java 17 · Spring Boot · OCI / AWS',
          time: 'Disparo automático · há 38 min',
        },
        {
          tag: 'Jovem Talento Tech',
          company: 'Zona Leste / SP',
          stack: 'Lógica · SQL · Metodologias Ágeis',
          time: 'Disparo automático · há 1h',
        },
      ],
      certificacoes: [
        {
          tag: 'Oracle Cloud Infrastructure 2025 Foundations',
          company: 'Trilha e Exame Oficial Gratuito',
          stack: 'Cloud · IAM · Object Storage · VCN',
          time: 'Verificado pelo coletor · Ativo',
        },
        {
          tag: 'AWS Cloud Quest: Cloud Practitioner',
          company: 'Laboratório Prático Gamificado',
          stack: 'EC2 · S3 · VPC · Bancos de Dados',
          time: 'Verificado pelo coletor · Ativo',
        },
      ],
      opensource: [
        {
          tag: 'Good First Issue #42 — Validação de Schema SQL',
          company: 'Repositório Comunitário',
          stack: 'PostgreSQL · Java · Spring Data',
          time: 'Mentoria aberta para 1º PR',
        },
        {
          tag: 'Automação de Ingestão CSV → Relatório',
          company: 'Trilha Iniciante',
          stack: 'Python · Pandas · Git Workflow',
          time: 'Mentoria aberta para 1º PR',
        },
      ],
    };

    return (
      <div className="rounded-[12px] border border-[#222938] bg-[#151A24] overflow-hidden">
        {/* Topo do painel */}
        <div className="px-5 py-4 border-b border-[#222938] bg-[#0B0D12] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Bot className="w-5 h-5 text-[#4F8CFF]" aria-hidden="true" />
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#F4F6FA' }}>
              BotNexus Carreira · Motor em Produção (OCI)
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#222938] bg-[#151A24]"
            style={{ fontSize: '14px', color: '#5CC2B2', fontWeight: 500 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#5CC2B2]" aria-hidden="true" />
            Online · Java 17 + Spring
          </span>
        </div>

        {/* Métricas do serviço */}
        <div className="grid grid-cols-3 divide-x divide-[#222938] border-b border-[#222938] bg-[#0E121B]">
          <div className="p-3.5">
            <p style={{ fontSize: '14px', color: '#A6B0C0', margin: 0 }}>Hospedagem</p>
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#F4F6FA', margin: '0.2rem 0 0 0' }}>
              Oracle Cloud (OCI)
            </p>
          </div>
          <div className="p-3.5">
            <p style={{ fontSize: '14px', color: '#A6B0C0', margin: 0 }}>Persistência</p>
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#F4F6FA', margin: '0.2rem 0 0 0' }}>
              PostgreSQL 16
            </p>
          </div>
          <div className="p-3.5">
            <p style={{ fontSize: '14px', color: '#A6B0C0', margin: 0 }}>Oportunidades/mês</p>
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#4F8CFF', margin: '0.2rem 0 0 0' }}>
              +450 distribuídas
            </p>
          </div>
        </div>

        {/* Seletor de canais do Discord */}
        <div className="p-5 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Canais automatizados do Discord">
            {(
              [
                { id: 'vagas', label: '# vagas-estagio-jr' },
                { id: 'certificacoes', label: '# certificacoes-cloud' },
                { id: 'opensource', label: '# tarefas-open-source' },
              ] as const
            ).map((ch) => {
              const active = botChannel === ch.id;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setBotChannel(ch.id)}
                  aria-pressed={active}
                  className="px-3 py-1.5 rounded-lg border cursor-pointer transition-colors"
                  style={{
                    fontSize: '14px',
                    fontWeight: active ? 600 : 400,
                    backgroundColor: active ? '#0B0D12' : 'transparent',
                    borderColor: active ? '#4F8CFF' : '#222938',
                    color: active ? '#F4F6FA' : '#A6B0C0',
                  }}
                >
                  {ch.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2.5">
            {feeds[botChannel].map((item) => (
              <div
                key={item.tag}
                className="p-3.5 rounded-lg border border-[#222938] bg-[#0B0D12] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: '#F4F6FA', margin: 0 }}>
                    {item.tag}
                  </p>
                  <p style={{ fontSize: '14px', color: '#A6B0C0', margin: '0.2rem 0 0 0' }}>
                    {item.company} · <span className="text-[#4F8CFF]">{item.stack}</span>
                  </p>
                </div>
                <span style={{ fontSize: '14px', color: '#A6B0C0' }}>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'finai') {
    const stages = [
      {
        name: '1. Ingestão & ETL (Python + Pandas)',
        metric: '52.400 transações simuladas',
        detail:
          'Padronização de datas, tratamento de valores ausentes, classificação contábil e exportação limpa para banco relacional.',
      },
      {
        name: '2. Armazenamento & SQL (PostgreSQL)',
        metric: '14 views analíticas SQL',
        detail:
          'Consultas agregadas com CTEs e Window Functions para cálculo de margem líquida, ticket médio, inadimplência e variação mensal.',
      },
      {
        name: '3. Dashboards & IA Generativa',
        metric: 'R$ 4,82M monitorados (simulado)',
        detail:
          'Indicadores no Power BI integrados a prompts estruturados de IA Generativa que sintetizam desvios orçamentários em linguagem executiva.',
      },
    ];

    const monthlyBars = [
      { month: 'Jan', rev: 72, cost: 51 },
      { month: 'Fev', rev: 78, cost: 53 },
      { month: 'Mar', rev: 74, cost: 49 },
      { month: 'Abr', rev: 85, cost: 56 },
      { month: 'Mai', rev: 91, cost: 58 },
      { month: 'Jun', rev: 96, cost: 60 },
    ];

    return (
      <div className="rounded-[12px] border border-[#222938] bg-[#151A24] overflow-hidden">
        <div className="px-5 py-4 border-b border-[#222938] bg-[#0B0D12] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <TrendingUp className="w-5 h-5 text-[#4F8CFF]" aria-hidden="true" />
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#F4F6FA' }}>
              FinAI · Pipeline Financeiro & Insights com IA
            </span>
          </div>
          <span style={{ fontSize: '14px', color: '#A6B0C0' }}>Dados simulados</span>
        </div>

        <div className="p-5 flex flex-col gap-5">
          {/* KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-lg border border-[#222938] bg-[#0B0D12]">
              <p style={{ fontSize: '14px', color: '#A6B0C0', margin: 0 }}>Receita Simulada (6M)</p>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#F4F6FA', margin: '0.2rem 0 0 0' }}>
                R$ 4,82M <span style={{ fontSize: '14px', color: '#5CC2B2' }}>+14,2%</span>
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#222938] bg-[#0B0D12]">
              <p style={{ fontSize: '14px', color: '#A6B0C0', margin: 0 }}>Margem Operacional</p>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#4F8CFF', margin: '0.2rem 0 0 0' }}>
                34,8% <span style={{ fontSize: '14px', color: '#A6B0C0' }}>meta 32%</span>
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#222938] bg-[#0B0D12]">
              <p style={{ fontSize: '14px', color: '#A6B0C0', margin: 0 }}>Registros Processados</p>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#F4F6FA', margin: '0.2rem 0 0 0' }}>
                52.400 linhas
              </p>
            </div>
          </div>

          {/* Gráfico comparativo Receita x Despesa */}
          <div className="p-4 rounded-lg border border-[#222938] bg-[#0B0D12]">
            <div className="flex items-center justify-between mb-3">
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#F4F6FA' }}>
                Evolução Mensal: Receitas vs. Custos Operacionais
              </span>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5" style={{ fontSize: '14px', color: '#A6B0C0' }}>
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#4F8CFF]" /> Receita
                </span>
                <span className="inline-flex items-center gap-1.5" style={{ fontSize: '14px', color: '#A6B0C0' }}>
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#896ABD]" /> Custos
                </span>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 items-end h-28 pt-2">
              {monthlyBars.map((b) => (
                <div key={b.month} className="flex flex-col items-center gap-1.5 h-full justify-end">
                  <div className="w-full flex items-end justify-center gap-1.5 h-20">
                    <div
                      className="w-3.5 rounded-t bg-[#4F8CFF]"
                      style={{ height: `${b.rev}%` }}
                      title={`Receita ${b.month}: ${b.rev}%`}
                    />
                    <div
                      className="w-3.5 rounded-t bg-[#896ABD]"
                      style={{ height: `${b.cost}%` }}
                      title={`Custos ${b.month}: ${b.cost}%`}
                    />
                  </div>
                  <span style={{ fontSize: '14px', color: '#A6B0C0' }}>{b.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Seletor de etapa da arquitetura */}
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Etapas do pipeline FinAI">
              {stages.map((st, idx) => {
                const active = finaiStage === idx;
                return (
                  <button
                    key={st.name}
                    type="button"
                    onClick={() => setFinaiStage(idx)}
                    aria-pressed={active}
                    className="px-3 py-1.5 rounded-lg border cursor-pointer"
                    style={{
                      fontSize: '14px',
                      fontWeight: active ? 600 : 400,
                      backgroundColor: active ? '#0B0D12' : 'transparent',
                      borderColor: active ? '#4F8CFF' : '#222938',
                      color: active ? '#F4F6FA' : '#A6B0C0',
                    }}
                  >
                    {st.name}
                  </button>
                );
              })}
            </div>

            <div className="p-3.5 rounded-lg border border-[#222938] bg-[#0B0D12] flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#A855F7] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#F4F6FA', margin: 0 }}>
                  {stages[finaiStage].metric}
                </p>
                <p style={{ fontSize: '14px', color: '#A6B0C0', margin: '0.2rem 0 0 0', lineHeight: 1.5 }}>
                  {stages[finaiStage].detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'finance-dashboard') {
    const datasets = {
      Q1: {
        receita: 'R$ 1,18M',
        despesa: 'R$ 740k',
        ebitda: 'R$ 440k (37,2%)',
        categories: [
          { name: 'Operações & Logística', share: 42 },
          { name: 'Tecnologia & Cloud', share: 28 },
          { name: 'Comercial & Marketing', share: 19 },
          { name: 'Administrativo', share: 11 },
        ],
      },
      Q2: {
        receita: 'R$ 1,36M',
        despesa: 'R$ 810k',
        ebitda: 'R$ 550k (40,4%)',
        categories: [
          { name: 'Operações & Logística', share: 39 },
          { name: 'Tecnologia & Cloud', share: 31 },
          { name: 'Comercial & Marketing', share: 20 },
          { name: 'Administrativo', share: 10 },
        ],
      },
      YTD: {
        receita: 'R$ 2,54M',
        despesa: 'R$ 1,55M',
        ebitda: 'R$ 990k (38,9%)',
        categories: [
          { name: 'Operações & Logística', share: 40 },
          { name: 'Tecnologia & Cloud', share: 30 },
          { name: 'Comercial & Marketing', share: 19 },
          { name: 'Administrativo', share: 11 },
        ],
      },
    };

    const current = datasets[financeQuarter];

    return (
      <div className="rounded-[12px] border border-[#222938] bg-[#151A24] overflow-hidden">
        <div className="px-5 py-4 border-b border-[#222938] bg-[#0B0D12] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Database className="w-5 h-5 text-[#5CC2B2]" aria-hidden="true" />
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#F4F6FA' }}>
              Finance Dashboard · Power BI, Power Query & DAX
            </span>
          </div>
          <div className="flex items-center gap-1.5" role="group" aria-label="Filtro de período financeiro">
            {(['Q1', 'Q2', 'YTD'] as const).map((q) => {
              const active = financeQuarter === q;
              return (
                <button
                  key={q}
                  type="button"
                  onClick={() => setFinanceQuarter(q)}
                  aria-pressed={active}
                  className="px-2.5 py-1 rounded border cursor-pointer"
                  style={{
                    fontSize: '14px',
                    fontWeight: active ? 600 : 400,
                    backgroundColor: active ? '#151A24' : '#0B0D12',
                    borderColor: active ? '#5CC2B2' : '#222938',
                    color: active ? '#F4F6FA' : '#A6B0C0',
                  }}
                >
                  {q === 'YTD' ? 'Acumulado' : q}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-5 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-lg border border-[#222938] bg-[#0B0D12]">
              <p style={{ fontSize: '14px', color: '#A6B0C0', margin: 0 }}>Receita Bruta</p>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#F4F6FA', margin: '0.2rem 0 0 0' }}>
                {current.receita}
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#222938] bg-[#0B0D12]">
              <p style={{ fontSize: '14px', color: '#A6B0C0', margin: 0 }}>Despesas Totais</p>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#F4F6FA', margin: '0.2rem 0 0 0' }}>
                {current.despesa}
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#222938] bg-[#0B0D12]">
              <p style={{ fontSize: '14px', color: '#A6B0C0', margin: 0 }}>Resultado (DAX)</p>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#5CC2B2', margin: '0.2rem 0 0 0' }}>
                {current.ebitda}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-[#222938] bg-[#0B0D12] flex flex-col gap-3">
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#F4F6FA', margin: 0 }}>
              Composição de Centros de Custo (% sobre Despesa)
            </p>
            {current.categories.map((cat) => (
              <div key={cat.name} className="flex flex-col gap-1">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span style={{ color: '#F4F6FA' }}>{cat.name}</span>
                  <span style={{ color: '#A6B0C0', fontWeight: 600 }}>{cat.share}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#151A24] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#5CC2B2] transition-all duration-300"
                    style={{ width: `${cat.share}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-lg border border-[#222938] bg-[#0B0D12]">
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#F4F6FA', margin: 0 }}>
              Medida DAX implementada no modelo:
            </p>
            <p style={{ fontSize: '14px', color: '#A6B0C0', margin: '0.25rem 0 0 0' }}>
              Margem Operacional % = DIVIDE([Receita Liquida] - [Despesas Operacionais], [Receita Liquida], 0)
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'fraudguard') {
    const transactions = [
      {
        id: 'TX-9041',
        amount: 'R$ 14.890,00',
        origin: 'Transferência Noturna · IP Externo',
        score: '0.94 (Anomalia Crítica)',
        flagged: true,
      },
      {
        id: 'TX-9042',
        amount: 'R$ 248,50',
        origin: 'Compra Recorrente · São Paulo',
        score: '0.08 (Padrão Normal)',
        flagged: false,
      },
      {
        id: 'TX-9045',
        amount: 'R$ 6.420,00',
        origin: '3 tentativas em 40s · Ticket 8x acima da média',
        score: '0.87 (Anomalia Alta)',
        flagged: true,
      },
      {
        id: 'TX-9048',
        amount: 'R$ 1.120,00',
        origin: 'Fornecedor Homologado · Horário Comercial',
        score: '0.11 (Padrão Normal)',
        flagged: false,
      },
    ];

    const visibleTx =
      fraudFilter === 'flagged' ? transactions.filter((t) => t.flagged) : transactions;

    return (
      <div className="rounded-[12px] border border-[#222938] bg-[#151A24] overflow-hidden">
        <div className="px-5 py-4 border-b border-[#222938] bg-[#0B0D12] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Activity className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#F4F6FA' }}>
              FraudGuard · Monitor Experimental (Scikit-learn)
            </span>
          </div>

          <div className="flex items-center gap-2" role="group" aria-label="Filtro de anomalias">
            <button
              type="button"
              onClick={() => setFraudFilter('all')}
              aria-pressed={fraudFilter === 'all'}
              className="px-2.5 py-1 rounded border cursor-pointer"
              style={{
                fontSize: '14px',
                fontWeight: fraudFilter === 'all' ? 600 : 400,
                backgroundColor: fraudFilter === 'all' ? '#151A24' : '#0B0D12',
                borderColor: fraudFilter === 'all' ? '#F59E0B' : '#222938',
                color: fraudFilter === 'all' ? '#F4F6FA' : '#A6B0C0',
              }}
            >
              Todas (4)
            </button>
            <button
              type="button"
              onClick={() => setFraudFilter('flagged')}
              aria-pressed={fraudFilter === 'flagged'}
              className="px-2.5 py-1 rounded border cursor-pointer"
              style={{
                fontSize: '14px',
                fontWeight: fraudFilter === 'flagged' ? 600 : 400,
                backgroundColor: fraudFilter === 'flagged' ? '#151A24' : '#0B0D12',
                borderColor: fraudFilter === 'flagged' ? '#F59E0B' : '#222938',
                color: fraudFilter === 'flagged' ? '#F4F6FA' : '#A6B0C0',
              }}
            >
              Apenas Anomalias (2)
            </button>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-lg border border-[#222938] bg-[#0B0D12]">
              <p style={{ fontSize: '14px', color: '#A6B0C0', margin: 0 }}>Amostra Simulada</p>
              <p style={{ fontSize: '17px', fontWeight: 600, color: '#F4F6FA', margin: '0.2rem 0 0 0' }}>
                25.000 transações
              </p>
            </div>
            <div className="p-3 rounded-lg border border-[#222938] bg-[#0B0D12]">
              <p style={{ fontSize: '14px', color: '#A6B0C0', margin: 0 }}>Taxa de Outliers</p>
              <p style={{ fontSize: '17px', fontWeight: 600, color: '#F59E0B', margin: '0.2rem 0 0 0' }}>
                1,8% sinalizadas
              </p>
            </div>
            <div className="p-3 rounded-lg border border-[#222938] bg-[#0B0D12]">
              <p style={{ fontSize: '14px', color: '#A6B0C0', margin: 0 }}>Algoritmo</p>
              <p style={{ fontSize: '17px', fontWeight: 600, color: '#F4F6FA', margin: '0.2rem 0 0 0' }}>
                Isolation Forest
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {visibleTx.map((tx) => (
              <div
                key={tx.id}
                className="p-3.5 rounded-lg border bg-[#0B0D12] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                style={{
                  borderColor: tx.flagged ? 'rgba(245, 158, 11, 0.55)' : '#222938',
                }}
              >
                <div className="flex items-start gap-2.5">
                  {tx.flagged ? (
                    <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-[#5CC2B2] shrink-0 mt-1" aria-hidden="true" />
                  )}
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: '#F4F6FA', margin: 0 }}>
                      {tx.id} · {tx.amount}
                    </p>
                    <p style={{ fontSize: '14px', color: '#A6B0C0', margin: '0.15rem 0 0 0' }}>
                      {tx.origin}
                    </p>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: tx.flagged ? '#F59E0B' : '#5CC2B2',
                  }}
                >
                  Score: {tx.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // herois-godot
  return (
    <div className="rounded-[12px] border border-[#222938] bg-[#151A24] overflow-hidden">
      <div className="px-5 py-4 border-b border-[#222938] bg-[#0B0D12] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Gamepad2 className="w-5 h-5 text-[#A855F7]" aria-hidden="true" />
          <span style={{ fontSize: '15px', fontWeight: 600, color: '#F4F6FA' }}>
            Heróis da Harmonia · Arquitetura Godot 2D (Nota Máxima TCC)
          </span>
        </div>

        <button
          type="button"
          onClick={() => setWorldRestored((v) => !v)}
          className="px-3 py-1 rounded border border-[#4F8CFF] bg-[#0B0D12] text-[#F4F6FA] cursor-pointer"
          style={{ fontSize: '14px', fontWeight: 500 }}
        >
          Estado do Cenário: {worldRestored ? 'Cores Restauradas' : 'Cinza Autoritário'}
        </button>
      </div>

      <div className="p-5 flex flex-col gap-4">
        <div
          className="p-6 rounded-xl border border-[#222938] transition-all duration-500 flex flex-col justify-between gap-5"
          style={{
            background: worldRestored
              ? 'linear-gradient(135deg, rgba(79,140,255,0.18) 0%, rgba(168,85,247,0.22) 55%, rgba(92,194,178,0.18) 100%)'
              : '#0B0D12',
            filter: worldRestored ? 'saturate(1.15)' : 'grayscale(0.95)',
          }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#F4F6FA' }}>
              {worldRestored
                ? 'Fase Restaurada: Acordes devolvem a biodiversidade e as cores ao bioma'
                : 'Fase Ocupada: Corporação drena recursos naturais e apaga a paleta do mundo'}
            </span>
            <span style={{ fontSize: '14px', color: '#5CC2B2', fontWeight: 600 }}>
              60 FPS · Física 2D
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-lg border border-[#222938] bg-[#0B0D12]/90">
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#F4F6FA', margin: 0 }}>
                Programação & POO
              </p>
              <p style={{ fontSize: '14px', color: '#A6B0C0', margin: '0.2rem 0 0 0' }}>
                Herança de entidades, máquina de estados dos personagens e sistema de colisão 2D.
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#222938] bg-[#0B0D12]/90">
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#F4F6FA', margin: 0 }}>
                Mecânica Musical
              </p>
              <p style={{ fontSize: '14px', color: '#A6B0C0', margin: '0.2rem 0 0 0' }}>
                Progressão de fase que altera shaders e camadas visuais conforme o jogador avança.
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-[#222938] bg-[#0B0D12]/90">
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#F4F6FA', margin: 0 }}>
                Avaliação da Banca
              </p>
              <p style={{ fontSize: '14px', color: '#5CC2B2', margin: '0.2rem 0 0 0' }}>
                Concluído e aprovado com Nota Máxima na Etec Ferraz de Vasconcelos (2024).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
