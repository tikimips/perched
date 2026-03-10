// SF Symbols-inspired SVG icon system for Perched
// Stroke-based, 1.5–2px weight, rounded caps — mirrors Apple HIG visual language

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; className?: string };

const base = (size: number, className = ""): IconProps => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none",
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  stroke: "currentColor", strokeWidth: "1.6",
  className,
});

export function IconBird({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)} viewBox="0 0 24 24">
      <path d="M12 3C9 3 6.5 5 6 8c-.3 1.5.2 3 1 4L4 20h4l2-4h4l2 4h4l-3-8c.8-1 1.3-2.5 1-4C17.5 5 15 3 12 3z"/>
      <path d="M9.5 11.5c.5.3 1.6.5 2.5.5s2-.2 2.5-.5"/>
      <circle cx="10" cy="7.5" r="1" fill="currentColor" stroke="none"/>
      <circle cx="14" cy="7.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export function IconPerch({ size = 24, className }: { size?: number; className?: string }) {
  // Minimal bird perched on a line — the Perched logo mark
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Branch */}
      <path d="M3 17h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      {/* Body */}
      <ellipse cx="12" cy="13" rx="3.5" ry="2.5" fill="currentColor"/>
      {/* Head */}
      <circle cx="15" cy="10.5" r="2.2" fill="currentColor"/>
      {/* Eye */}
      <circle cx="15.8" cy="10" r="0.7" fill="white"/>
      {/* Beak */}
      <path d="M17 11.2l1.8.8-1.8.5" fill="currentColor" stroke="none"/>
      {/* Tail */}
      <path d="M8.5 14.5L6 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      {/* Feet */}
      <path d="M11 15.5v1.5m-1 0h2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M13 15.5v1.5m-1 0h2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

// ── Category icons ──────────────────────────────────────────────────────────

export function IconTravel({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      {/* Airplane */}
      <path d="M21 12l-7-7-1.5 3L7 9.5 5 11l4 1.5L7.5 16 9 17.5l3.5-2 1.5 4L15 19l1-7 5-2z"/>
    </svg>
  );
}

export function IconDining({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      {/* Fork and knife */}
      <path d="M8 3v4a2 2 0 002 2v12"/>
      <path d="M8 3H6v4a2 2 0 002 2"/>
      <path d="M16 3v18"/>
      <path d="M16 3c1.5 0 3 1.5 3 4.5S17.5 11 16 11"/>
    </svg>
  );
}

export function IconEntertainment({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      {/* Film / play */}
      <rect x="2" y="3" width="20" height="14" rx="2.5"/>
      <path d="M8 3v14M16 3v14M2 8h4M2 12h4M18 8h4M18 12h4"/>
      <path d="M10 8.5l5 3-5 3V8.5z" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export function IconShopping({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      {/* Shopping bag */}
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  );
}

export function IconWellness({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      {/* Leaf / heart rate */}
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
  );
}

export function IconLounge({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      {/* Armchair */}
      <path d="M5 11V7a2 2 0 014 0v1h6V7a2 2 0 014 0v4"/>
      <path d="M3 11a2 2 0 002 2v5h14v-5a2 2 0 002-2H3z"/>
      <line x1="7" y1="18" x2="7" y2="21"/>
      <line x1="17" y1="18" x2="17" y2="21"/>
    </svg>
  );
}

export function IconInsurance({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      {/* Shield with check */}
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  );
}

export function IconOther({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      {/* Sparkles */}
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>
      <path d="M19 3l.75 2.25L22 6l-2.25.75L19 9l-.75-2.25L16 6l2.25-.75z" strokeWidth="1.2"/>
      <path d="M5 15l.6 1.8L7.4 17l-1.8.6L5 19.4l-.6-1.8L2.6 17l1.8-.6z" strokeWidth="1.2"/>
    </svg>
  );
}

// ── UI icons ─────────────────────────────────────────────────────────────────

export function IconCheck({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export function IconCheckCircle({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      <circle cx="12" cy="12" r="9"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  );
}

export function IconChevronLeft({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );
}

export function IconChevronRight({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

export function IconCreditCard({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      <rect x="1" y="4" width="22" height="16" rx="2.5"/>
      <line x1="1" y1="10" x2="23" y2="10"/>
      <line x1="6" y1="15" x2="10" y2="15"/>
    </svg>
  );
}

export function IconCard({ size = 24, className }: { size?: number; className?: string }) {
  return <IconCreditCard size={size} className={className}/>;
}

export function IconEnvelope({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22 6 12 13 2 6"/>
    </svg>
  );
}

export function IconMagnifyingGlass({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

export function IconPerson({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

export function IconList({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      <line x1="8" y1="6" x2="21" y2="6"/>
      <line x1="8" y1="12" x2="21" y2="12"/>
      <line x1="8" y1="18" x2="21" y2="18"/>
      <circle cx="4" cy="6" r="1" fill="currentColor" stroke="none"/>
      <circle cx="4" cy="12" r="1" fill="currentColor" stroke="none"/>
      <circle cx="4" cy="18" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export function IconStar({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

export function IconWarning({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  );
}

export function IconArrowRight({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

export function IconXMark({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg {...base(size, className)}>
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

// Map category to icon component
import type { ReactElement } from "react";
export const CATEGORY_ICONS: Record<string, (props: { size?: number; className?: string }) => ReactElement> = {
  travel:        IconTravel,
  dining:        IconDining,
  entertainment: IconEntertainment,
  shopping:      IconShopping,
  wellness:      IconWellness,
  lounge:        IconLounge,
  insurance:     IconInsurance,
  other:         IconOther,
};
