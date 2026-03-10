// The Perched hero illustration:
// An affluent, fashionable bird — plump, confident, monocled —
// sitting at ease atop a fanned throne of premium credit cards.
// Style: editorial, warm, expressive line quality (à la Clue/Ouur illustration).

export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      width="420" height="340"
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="An affluent bird perched atop a stack of premium credit cards"
      className={className}
    >
      <defs>
        {/* Card gradients */}
        <linearGradient id="card1" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#8B8FA8"/>
          <stop offset="1" stopColor="#6B7080"/>
        </linearGradient>
        <linearGradient id="card2" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#C9A84C"/>
          <stop offset="1" stopColor="#A8782A"/>
        </linearGradient>
        <linearGradient id="card3" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#1a1a2e"/>
          <stop offset="1" stopColor="#2563eb"/>
        </linearGradient>
        <linearGradient id="card4" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#1a1a1a"/>
          <stop offset="1" stopColor="#3a3a1a"/>
        </linearGradient>
        <linearGradient id="shimmer" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#ffffff" stopOpacity="0.15"/>
          <stop offset="1" stopColor="#ffffff" stopOpacity="0"/>
        </linearGradient>
      </defs>

      {/* ── Atmospheric background glows ──────────────────────────── */}
      <ellipse cx="210" cy="290" rx="140" ry="30" fill="#d4a843" opacity="0.06"/>
      <ellipse cx="210" cy="200" rx="110" ry="90" fill="#d4a843" opacity="0.04"/>

      {/* ── Credit card throne — fanned stack ────────────────────── */}

      {/* Card 5 — far left, steep angle */}
      <g transform="rotate(-28, 210, 265)">
        <rect x="100" y="230" width="220" height="138" rx="14" fill="url(#card3)" opacity="0.7"/>
        <rect x="100" y="230" width="220" height="138" rx="14" fill="url(#shimmer)"/>
        <rect x="116" y="252" width="28" height="20" rx="3" fill="#d4a843" opacity="0.5"/>
      </g>

      {/* Card 4 — left, moderate angle */}
      <g transform="rotate(-16, 210, 265)">
        <rect x="100" y="228" width="220" height="138" rx="14" fill="url(#card4)" opacity="0.82"/>
        <rect x="100" y="228" width="220" height="138" rx="14" fill="url(#shimmer)"/>
        <rect x="116" y="250" width="28" height="20" rx="3" fill="#d4a843" opacity="0.5"/>
        {/* dots */}
        <circle cx="118" cy="332" r="2" fill="white" opacity="0.3"/>
        <circle cx="126" cy="332" r="2" fill="white" opacity="0.3"/>
        <circle cx="134" cy="332" r="2" fill="white" opacity="0.3"/>
      </g>

      {/* Card 3 — slight left tilt */}
      <g transform="rotate(-7, 210, 265)">
        <rect x="100" y="226" width="220" height="138" rx="14" fill="url(#card2)" opacity="0.88"/>
        <rect x="100" y="226" width="220" height="138" rx="14" fill="url(#shimmer)"/>
        <rect x="116" y="248" width="28" height="20" rx="3" fill="#e8d090" opacity="0.6"/>
        <line x1="116" y1="258" x2="144" y2="258" stroke="#b8892a" strokeWidth="0.8" opacity="0.4"/>
        <line x1="130" y1="248" x2="130" y2="268" stroke="#b8892a" strokeWidth="0.8" opacity="0.4"/>
        <circle cx="118" cy="330" r="2" fill="white" opacity="0.35"/>
        <circle cx="126" cy="330" r="2" fill="white" opacity="0.35"/>
        <circle cx="134" cy="330" r="2" fill="white" opacity="0.35"/>
        <circle cx="142" cy="330" r="2" fill="white" opacity="0.35"/>
      </g>

      {/* Card 2 — slight right tilt */}
      <g transform="rotate(5, 210, 265)">
        <rect x="100" y="224" width="220" height="138" rx="14" fill="url(#card1)" opacity="0.92"/>
        <rect x="100" y="224" width="220" height="138" rx="14" fill="url(#shimmer)"/>
        <rect x="116" y="246" width="28" height="20" rx="3" fill="#d4a843" opacity="0.65"/>
        <line x1="116" y1="256" x2="144" y2="256" stroke="#9B9FB8" strokeWidth="0.8" opacity="0.4"/>
        <line x1="130" y1="246" x2="130" y2="266" stroke="#9B9FB8" strokeWidth="0.8" opacity="0.4"/>
        <circle cx="272" cy="248" r="12" fill="white" opacity="0.08"/>
        <circle cx="286" cy="248" r="12" fill="white" opacity="0.06"/>
        <circle cx="118" cy="328" r="2" fill="white" opacity="0.4"/>
        <circle cx="127" cy="328" r="2" fill="white" opacity="0.4"/>
        <circle cx="136" cy="328" r="2" fill="white" opacity="0.4"/>
        <circle cx="145" cy="328" r="2" fill="white" opacity="0.4"/>
        <text x="152" y="336" fill="white" opacity="0.2" fontSize="7" fontFamily="monospace">PERCHED</text>
      </g>

      {/* Card 1 — top card, flat/hero */}
      <rect x="100" y="222" width="220" height="138" rx="14" fill="url(#card1)"/>
      <rect x="100" y="222" width="220" height="138" rx="14" fill="url(#shimmer)"/>
      {/* Chip */}
      <rect x="118" y="245" width="30" height="22" rx="4" fill="#d4a843" opacity="0.75"/>
      <line x1="118" y1="256" x2="148" y2="256" stroke="#a07820" strokeWidth="1" opacity="0.5"/>
      <line x1="133" y1="245" x2="133" y2="267" stroke="#a07820" strokeWidth="1" opacity="0.5"/>
      {/* Embossed circles */}
      <circle cx="278" cy="248" r="13" fill="white" opacity="0.1"/>
      <circle cx="292" cy="248" r="13" fill="white" opacity="0.07"/>
      {/* Number dots */}
      <circle cx="118" cy="326" r="2.2" fill="white" opacity="0.45"/>
      <circle cx="127" cy="326" r="2.2" fill="white" opacity="0.45"/>
      <circle cx="136" cy="326" r="2.2" fill="white" opacity="0.45"/>
      <circle cx="145" cy="326" r="2.2" fill="white" opacity="0.45"/>
      <circle cx="162" cy="326" r="2.2" fill="white" opacity="0.45"/>
      <circle cx="171" cy="326" r="2.2" fill="white" opacity="0.45"/>
      <circle cx="180" cy="326" r="2.2" fill="white" opacity="0.45"/>
      <circle cx="189" cy="326" r="2.2" fill="white" opacity="0.45"/>
      {/* Name */}
      <text x="118" y="345" fill="white" opacity="0.35" fontSize="7.5" fontFamily="-apple-system, system-ui, sans-serif" letterSpacing="2" fontWeight="600">PERCHED MEMBER</text>

      {/* ── The Bird ─────────────────────────────────────────────── */}

      {/* Shadow under bird */}
      <ellipse cx="215" cy="228" rx="52" ry="8" fill="#1d1d1f" opacity="0.12"/>

      {/* Tail — swept confidently to the left */}
      <path d="M162 210 Q148 218 136 225 Q142 216 152 212 Q156 210 162 210Z" fill="#1d1d1f"/>
      <path d="M162 212 Q146 223 130 232 Q139 220 155 214Z" fill="#1d1d1f" opacity="0.7"/>

      {/* Body — plump, round, prosperous */}
      <ellipse cx="210" cy="198" rx="52" ry="42" fill="#1d1d1f"/>

      {/* Wing texture — subtle feather sheen */}
      <path d="M168 195 Q182 185 205 190 Q190 182 170 188Z" fill="white" opacity="0.05"/>
      <path d="M170 205 Q188 196 212 200" stroke="white" strokeWidth="1" opacity="0.07" fill="none" strokeLinecap="round"/>

      {/* Head — large, confident */}
      <circle cx="245" cy="168" r="38" fill="#1d1d1f"/>

      {/* Neck connection */}
      <ellipse cx="228" cy="183" rx="20" ry="16" fill="#1d1d1f"/>

      {/* ── Monocle ── */}
      {/* Chain */}
      <path d="M252 148 Q260 142 268 138 Q272 134 270 130" stroke="#d4a843" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.8"/>
      {/* Monocle rim */}
      <circle cx="263" cy="165" r="11" stroke="#d4a843" strokeWidth="2" fill="none" opacity="0.9"/>
      {/* Monocle lens glare */}
      <circle cx="263" cy="165" r="11" fill="#d4a843" opacity="0.06"/>
      <path d="M257 160 Q260 157 264 158" stroke="white" strokeWidth="1" fill="none" opacity="0.4" strokeLinecap="round"/>

      {/* Eye — knowing, satisfied */}
      <circle cx="256" cy="160" r="9" fill="white"/>
      <circle cx="257" cy="161" r="5.5" fill="#1d1d1f"/>
      <circle cx="258.5" cy="159.5" r="1.8" fill="white"/>
      {/* Small lower lid — content squint */}
      <path d="M249 164 Q256 167 264 164" stroke="#1d1d1f" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Beak — small, distinguished */}
      <path d="M278 167 L290 171 L278 175 Z" fill="#d4a843"/>
      <line x1="278" y1="171" x2="290" y2="171" stroke="#b8892a" strokeWidth="0.8" opacity="0.4"/>

      {/* Tiny top hat */}
      <rect x="232" y="118" width="34" height="22" rx="3" fill="#1d1d1f"/>
      <rect x="224" y="138" width="50" height="6" rx="3" fill="#1d1d1f"/>
      {/* Hat band — gold */}
      <rect x="232" y="130" width="34" height="5" fill="#d4a843" opacity="0.8"/>
      {/* Hat highlight */}
      <path d="M235 122 Q242 119 249 120" stroke="white" strokeWidth="1" opacity="0.12" fill="none" strokeLinecap="round"/>

      {/* Feet — resting comfortably atop the card */}
      <path d="M193 224 L190 232" stroke="#1d1d1f" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M215 226 L213 234" stroke="#1d1d1f" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Left foot toes */}
      <path d="M190 232 L183 237" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M190 232 L190 238" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M190 232 L196 236" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M190 232 L185 229" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      {/* Right foot toes */}
      <path d="M213 234 L206 238" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M213 234 L213 240" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M213 234 L219 238" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M213 234 L208 231" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>

      {/* ── Floating perk icons around the bird ──────────────────── */}

      {/* Tiny plane — top left */}
      <g transform="translate(82, 88) rotate(-20)" opacity="0.5">
        <path d="M0 5 L12 0 L10 5 L12 10 L0 5Z" fill="#d4a843"/>
        <path d="M3 3 L3 7" stroke="#d4a843" strokeWidth="1" opacity="0.5"/>
      </g>

      {/* Tiny cocktail glass — top right */}
      <g transform="translate(330, 95)" opacity="0.45">
        <path d="M8 0 L0 12 L16 12Z" stroke="#d4a843" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
        <line x1="8" y1="12" x2="8" y2="18" stroke="#d4a843" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="4" y1="18" x2="12" y2="18" stroke="#d4a843" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="5" y1="7" x2="11" y2="7" stroke="#d4a843" strokeWidth="1" opacity="0.5"/>
      </g>

      {/* Tiny hotel key — left */}
      <g transform="translate(68, 165)" opacity="0.4">
        <circle cx="6" cy="6" r="5" stroke="#d4a843" strokeWidth="1.2" fill="none"/>
        <line x1="11" y1="6" x2="20" y2="6" stroke="#d4a843" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="17" y1="6" x2="17" y2="9" stroke="#d4a843" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="20" y1="6" x2="20" y2="9" stroke="#d4a843" strokeWidth="1.2" strokeLinecap="round"/>
      </g>

      {/* Tiny star — upper right area */}
      <g transform="translate(350, 155)" opacity="0.4">
        <path d="M8 0 L9.8 5.5 L16 5.5 L11 9 L12.8 14.5 L8 11 L3.2 14.5 L5 9 L0 5.5 L6.2 5.5Z" fill="#d4a843"/>
      </g>

      {/* Gold sparkle dots */}
      <circle cx="90" cy="130" r="3" fill="#d4a843" opacity="0.35"/>
      <circle cx="78" cy="148" r="2" fill="#d4a843" opacity="0.25"/>
      <circle cx="345" cy="130" r="2.5" fill="#d4a843" opacity="0.3"/>
      <circle cx="358" cy="175" r="2" fill="#d4a843" opacity="0.25"/>
      <circle cx="365" cy="200" r="1.5" fill="#d4a843" opacity="0.2"/>
      <circle cx="72" cy="200" r="2" fill="#d4a843" opacity="0.2"/>

      {/* Four-pointed star — upper left */}
      <path d="M112 60 L114 68 L122 70 L114 72 L112 80 L110 72 L102 70 L110 68Z" fill="#d4a843" opacity="0.22"/>

      {/* Small asterisk — right side */}
      <g transform="translate(360, 238)" opacity="0.2">
        <line x1="6" y1="0" x2="6" y2="12" stroke="#d4a843" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="0" y1="6" x2="12" y2="6" stroke="#d4a843" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="1.8" y1="1.8" x2="10.2" y2="10.2" stroke="#d4a843" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10.2" y1="1.8" x2="1.8" y2="10.2" stroke="#d4a843" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

// Compact version for onboarding welcome screen
export function WelcomeIllustration({ className }: { className?: string }) {
  return (
    <svg
      width="300" height="240"
      viewBox="60 80 300 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="wc1" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#8B8FA8"/><stop offset="1" stopColor="#6B7080"/>
        </linearGradient>
        <linearGradient id="wc2" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#C9A84C"/><stop offset="1" stopColor="#A8782A"/>
        </linearGradient>
        <linearGradient id="wcshim" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#ffffff" stopOpacity="0.15"/><stop offset="1" stopColor="#ffffff" stopOpacity="0"/>
        </linearGradient>
      </defs>

      {/* Cards */}
      <g transform="rotate(-12, 210, 265)">
        <rect x="100" y="228" width="220" height="138" rx="14" fill="url(#wc2)" opacity="0.8"/>
        <rect x="100" y="228" width="220" height="138" rx="14" fill="url(#wcshim)"/>
      </g>
      <g transform="rotate(6, 210, 265)">
        <rect x="100" y="224" width="220" height="138" rx="14" fill="url(#wc1)" opacity="0.9"/>
        <rect x="100" y="224" width="220" height="138" rx="14" fill="url(#wcshim)"/>
      </g>
      <rect x="100" y="222" width="220" height="138" rx="14" fill="url(#wc1)"/>
      <rect x="100" y="222" width="220" height="138" rx="14" fill="url(#wcshim)"/>
      <rect x="118" y="245" width="30" height="22" rx="4" fill="#d4a843" opacity="0.75"/>
      <line x1="118" y1="256" x2="148" y2="256" stroke="#a07820" strokeWidth="1" opacity="0.5"/>
      <line x1="133" y1="245" x2="133" y2="267" stroke="#a07820" strokeWidth="1" opacity="0.5"/>

      {/* Bird */}
      <ellipse cx="215" cy="228" rx="48" ry="7" fill="#1d1d1f" opacity="0.1"/>
      <path d="M165 210 Q148 220 136 228 Q148 218 160 212Z" fill="#1d1d1f"/>
      <ellipse cx="212" cy="198" rx="50" ry="40" fill="#1d1d1f"/>
      <circle cx="247" cy="168" r="36" fill="#1d1d1f"/>
      <ellipse cx="230" cy="183" rx="19" ry="15" fill="#1d1d1f"/>
      {/* Hat */}
      <rect x="234" y="120" width="32" height="20" rx="3" fill="#1d1d1f"/>
      <rect x="226" y="138" width="48" height="5" rx="2.5" fill="#1d1d1f"/>
      <rect x="234" y="130" width="32" height="4" fill="#d4a843" opacity="0.8"/>
      {/* Monocle */}
      <circle cx="262" cy="165" r="10" stroke="#d4a843" strokeWidth="1.8" fill="none" opacity="0.9"/>
      <path d="M254 148 Q262 142 268 136" stroke="#d4a843" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7"/>
      {/* Eye */}
      <circle cx="254" cy="160" r="8" fill="white"/>
      <circle cx="255" cy="161" r="5" fill="#1d1d1f"/>
      <circle cx="256.5" cy="159.5" r="1.6" fill="white"/>
      <path d="M248 164 Q255 167 263 164" stroke="#1d1d1f" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      {/* Beak */}
      <path d="M277 167 L288 171 L277 175Z" fill="#d4a843"/>
      {/* Feet */}
      <path d="M194 224 L191 232" stroke="#1d1d1f" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M214 226 L212 234" stroke="#1d1d1f" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M191 232 L184 237M191 232 L191 238M191 232 L197 236" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M212 234 L205 238M212 234 L212 240M212 234 L218 238" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round"/>

      {/* Sparkles */}
      <path d="M100 110 L102 118 L110 120 L102 122 L100 130 L98 122 L90 120 L98 118Z" fill="#d4a843" opacity="0.2"/>
      <circle cx="340" cy="155" r="3" fill="#d4a843" opacity="0.3"/>
      <circle cx="85" cy="170" r="2.5" fill="#d4a843" opacity="0.3"/>
    </svg>
  );
}
