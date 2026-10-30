import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

const LINKS = [
  { label: 'Resumo', href: '#conteudo-principal', tab: 'Resumo' },
  { label: 'Backend & AI', href: '#conteudo-principal', tab: '⚙️ Backend & AI' },
  { label: 'Automação', href: '#conteudo-principal', tab: '🤖 Automação' },
  { label: 'Dados & BI', href: '#conteudo-principal', tab: '📊 Dados & BI' },
  { label: 'Games', href: '#conteudo-principal', tab: '🎮 Games' },
  { label: 'Trajetória', href: '#conteudo-principal', tab: '💼 Trajetória' },
  { label: 'Contato', href: '#contato', tab: 'Resumo' },
  { label: 'Currículo', href: PROFILE_DATA.resume.publicPath },
];

interface NavbarProps {
  onSelectTab?: (tab: string) => void;
}

export function Navbar({ onSelectTab }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#4F8CFF] focus:text-[#0a0a0c] focus:font-semibold focus:text-base focus:rounded-lg"
      >
        Pular para o conteúdo principal
      </a>

      <header
        className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#0a0a0c]/75 backdrop-blur-xl"
        style={{
          paddingLeft: 'clamp(1.25rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.25rem, 5vw, 4rem)',
        }}
      >
        <div className="mx-auto w-full max-w-[1240px] h-16 flex items-center justify-between gap-4">
          <a
            href="#topo"
            className="text-[#F4F6FA] hover:text-white no-underline font-semibold tracking-tight transition-colors duration-300"
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: '18px',
            }}
          >
            Daniel Expedito
          </a>

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {LINKS.map((link) => {
                const isResume = link.label === 'Currículo';
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => {
                        if (link.tab && onSelectTab) onSelectTab(link.tab);
                      }}
                      target={isResume ? '_blank' : undefined}
                      rel={isResume ? 'noopener noreferrer' : undefined}
                      className={
                        isResume
                          ? 'ml-2 px-3.5 py-1.5 rounded-xl border border-[#4F8CFF]/40 bg-[#4F8CFF]/15 hover:bg-[#4F8CFF]/25 text-[#F4F6FA] text-sm font-semibold no-underline transition-all duration-300 ease-out'
                          : 'px-3 py-1.5 rounded-lg text-sm font-medium text-[#A6B0C0] hover:text-[#F4F6FA] hover:bg-white/[0.05] no-underline transition-all duration-300 ease-out'
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            ref={buttonRef}
            type="button"
            className="md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/15 bg-white/[0.04] text-sm font-medium text-[#F4F6FA] cursor-pointer"
            aria-expanded={open}
            aria-controls="menu-principal-movel"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span>{open ? 'Fechar' : 'Menu'}</span>
          </button>
        </div>

        {open && (
          <nav
            id="menu-principal-movel"
            aria-label="Principal"
            className="md:hidden pb-4 pt-2 border-t border-white/[0.08]"
          >
            <ul className="flex flex-col gap-1 list-none m-0 p-0">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => {
                      if (link.tab && onSelectTab) onSelectTab(link.tab);
                      setOpen(false);
                    }}
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-[#F4F6FA] hover:bg-white/[0.06] no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default Navbar;
