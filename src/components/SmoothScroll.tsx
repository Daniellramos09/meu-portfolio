import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

export const SmoothScroll: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    let lenis: Lenis | null = null;
    let rafId = 0;

    if (!prefersReduced) {
      lenis = new Lenis({
        duration: 1.25,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
      });

      lenis.on('scroll', ({ progress: p }: { progress: number }) => {
        setProgress(Math.max(0, Math.min(1, p || 0)));
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    } else {
      const onNativeScroll = () => {
        const doc = document.documentElement;
        const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
        setProgress(Math.max(0, Math.min(1, window.scrollY / max)));
      };
      window.addEventListener('scroll', onNativeScroll, { passive: true });
      onNativeScroll();
      return () => window.removeEventListener('scroll', onNativeScroll);
    }

    // Intercepta links de âncora (#...) para deslizar suavemente com Lenis
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href) as HTMLElement | null;
      if (!el) return;

      event.preventDefault();
      if (lenis) {
        lenis.scrollTo(el, {
          offset: -68,
          duration: 1.35,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
      }
      window.history.pushState(null, '', href);
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2px] pointer-events-none bg-transparent"
    >
      <div
        className="h-full transition-transform duration-75 origin-left"
        style={{
          transform: `scaleX(${progress})`,
          background: 'linear-gradient(90deg, #4F8CFF 0%, #896ABD 55%, #A855F7 100%)',
        }}
      />
    </div>
  );
};
