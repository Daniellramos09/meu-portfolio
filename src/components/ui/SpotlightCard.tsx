import React, { useRef } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'div' | 'article' | 'section' | 'figure';
  rounded?: '2xl' | '3xl';
  children: React.ReactNode;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  as: Component = 'div',
  rounded = '3xl',
  className = '',
  children,
  onMouseMove,
  ...rest
}) => {
  const ref = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    }
    onMouseMove?.(e);
  };

  const radiusClass = rounded === '3xl' ? 'rounded-3xl' : 'rounded-2xl';

  return (
    <Component
      ref={ref as any}
      onMouseMove={handleMouseMove}
      className={`glass-card group overflow-hidden ${radiusClass} ${className}`}
      {...rest}
    >
      <div className="spotlight-overlay" aria-hidden="true" />
      <div className="spotlight-border" aria-hidden="true" />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </Component>
  );
};
