"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { CARDS } from "@/lib/cards";
import { Logo } from "@/components/Logo";

// ─── Illustrations ────────────────────────────────────────────────────────────

function WelcomeBird() {
  return (
    <svg width="180" height="160" viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Glow */}
      <ellipse cx="90" cy="140" rx="60" ry="10" fill="#d4a843" opacity="0.12"/>
      {/* Branch */}
      <path d="M20 120 Q60 115 90 118 Q120 121 160 116" stroke="#d4a843" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.35"/>
      {/* Leaves */}
      <ellipse cx="48" cy="110" rx="10" ry="5" fill="#34c759" opacity="0.3" transform="rotate(-20 48 110)"/>
      <ellipse cx="138" cy="108" rx="9" ry="4.5" fill="#34c759" opacity="0.25" transform="rotate(15 138 108)"/>
      {/* Body */}
      <ellipse cx="90" cy="95" rx="22" ry="16" fill="#1d1d1f"/>
      {/* Head */}
      <circle cx="108" cy="82" r="13" fill="#1d1d1f"/>
      {/* Wing detail */}
      <path d="M73 91 Q82 85 95 89" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.15" fill="none"/>
      {/* Eye */}
      <circle cx="113" cy="79" r="4" fill="white"/>
      <circle cx="114" cy="79" r="2.5" fill="#1d1d1f"/>
      <circle cx="115" cy="78" r="1" fill="white"/>
      {/* Beak */}
      <path d="M119 82 L127 85 L119 87 Z" fill="#d4a843"/>
      {/* Tail */}
      <path d="M70 98 Q58 106 50 113 Q62 108 72 104" fill="#1d1d1f"/>
      {/* Feet */}
      <line x1="84" y1="111" x2="81" y2="120" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="94" y1="111" x2="92" y2="120" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="81" y1="120" x2="75" y2="124" stroke="#1d1d1f" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="81" y1="120" x2="81" y2="125" stroke="#1d1d1f" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="81" y1="120" x2="86" y2="123" stroke="#1d1d1f" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="92" y1="120" x2="87" y2="124" stroke="#1d1d1f" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="92" y1="120" x2="92" y2="125" stroke="#1d1d1f" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="92" y1="120" x2="97" y2="123" stroke="#1d1d1f" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Sparkles */}
      <circle cx="48" cy="58" r="2" fill="#d4a843" opacity="0.5"/>
      <circle cx="140" cy="52" r="1.5" fill="#d4a843" opacity="0.4"/>
      <circle cx="152" cy="78" r="1.5" fill="#d4a843" opacity="0.5"/>
      <circle cx="35" cy="78" r="1.5" fill="#d4a843" opacity="0.4"/>
      <path d="M44 38 L45.2 42 L49 42 L46 44.5 L47.2 48 L44 46 L40.8 48 L42 44.5 L39 42 L42.8 42 Z" fill="#d4a843" opacity="0.25"/>
    </svg>
  );
}

function SuccessIllustration() {
  return (
    <svg width="160" height="140" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Glow circle */}
      <circle cx="80" cy="68" r="48" fill="#d4a843" opacity="0.08"/>
      <circle cx="80" cy="68" r="36" fill="#d4a843" opacity="0.08"/>
      {/* Check circle */}
      <circle cx="80" cy="68" r="28" fill="#1d1d1f"/>
      {/* Checkmark */}
      <path d="M66 68 L75 77 L94 58" stroke="#d4a843" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Orbiting dots */}
      <circle cx="42" cy="40" r="3" fill="#d4a843" opacity="0.4"/>
      <circle cx="122" cy="35" r="2" fill="#d4a843" opacity="0.3"/>
      <circle cx="130" cy="90" r="2.5" fill="#d4a843" opacity="0.4"/>
      <circle cx="28" cy="95" r="2" fill="#d4a843" opacity="0.3"/>
      {/* Stars */}
      <path d="M116 52 L117 55.5 L120.5 55.5 L117.8 57.5 L118.8 61 L116 59 L113.2 61 L114.2 57.5 L111.5 55.5 L115 55.5 Z" fill="#d4a843" opacity="0.3"/>
      <path d="M36 52 L37 54.5 L39.5 54.5 L37.5 56 L38.2 58.5 L36 57 L33.8 58.5 L34.5 56 L32.5 54.5 L35 54.5 Z" fill="#d4a843" opacity="0.25"/>
    </svg>
  );
}

// ─── Step dots ────────────────────────────────────────────────────────────────

function StepDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`rounded-full transition-all duration-300 ${
          i === current ? "w-5 h-2 bg-[#1d1d1f]" : i < current ? "w-2 h-2 bg-[#d2d2d7]" : "w-2 h-2 bg-[#e8e8ed]"
        }`}/>
      ))}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function OnboardingPage() {
  const router = useRouter();
  const supabase = createClient();
  const [step, setStep] = useState(0); // 0=welcome, 1=cards, 2=done
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [saving, setSaving] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.push("/auth/signin"); return; }
      setUserId(user.id);
      // If user already has cards, skip to dashboard
      supabase.from("perched_user_cards").select("card_id").eq("user_id", user.id).then(({ data }) => {
        if (data && data.length > 0) router.push("/dashboard");
      });
    });
  }, []);

  function toggleCard(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  async function saveAndFinish() {
    if (!userId || selectedIds.size === 0) return;
    setSaving(true);
    await supabase.from("perched_user_cards").insert(
      [...selectedIds].map((card_id) => ({ user_id: userId, card_id }))
    );
    setStep(2);
    setSaving(false);
  }

  const selectedCards = CARDS.filter((c) => selectedIds.has(c.id));
  const totalPerkValue = selectedCards.reduce((s, c) => s + c.totalPerkValue, 0);

  // ── Step 0: Welcome ──────────────────────────────────────────────────────────
  if (step === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-sm w-full">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <Logo size="lg"/>
          </div>

          {/* Illustration */}
          <div className="flex justify-center mb-8">
            <WelcomeBird />
          </div>

          {/* Copy */}
          <h1 className="text-[32px] font-bold text-[#1d1d1f] leading-tight mb-4">
            You're sitting on more than you think.
          </h1>
          <p className="text-[16px] text-[#6e6e73] leading-relaxed mb-10">
            Most premium cardholders leave hundreds of dollars in perks on the table every year. Let's fix that.
          </p>

          {/* CTA */}
          <button
            onClick={() => setStep(1)}
            className="w-full bg-[#1d1d1f] text-white h-14 rounded-2xl text-[16px] font-semibold hover:bg-[#3d3d3f] transition-all active:scale-[0.98]"
          >
            Let's get started
          </button>

          <p className="text-xs text-[#aeaeb2] mt-5">Takes about 30 seconds</p>
        </div>
      </div>
    );
  }

  // ── Step 1: Card Picker ──────────────────────────────────────────────────────
  if (step === 1) {
    return (
      <div className="min-h-screen bg-[#f5f5f7]">
        {/* Sticky header */}
        <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-black/[0.06]">
          <div className="max-w-2xl mx-auto px-5 py-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Logo size="sm"/>
              </div>
              <StepDots current={1} total={3} />
            </div>
            <h2 className="text-[22px] font-bold text-[#1d1d1f] leading-tight">Which cards do you carry?</h2>
            <p className="text-sm text-[#6e6e73] mt-1">Select all that apply. You can add more later.</p>
          </div>
        </div>

        {/* Card grid */}
        <div className="max-w-2xl mx-auto px-5 py-5">
          <div className="grid sm:grid-cols-2 gap-3 mb-28">
            {CARDS.map((card) => {
              const selected = selectedIds.has(card.id);
              return (
                <button
                  key={card.id}
                  onClick={() => toggleCard(card.id)}
                  className={`text-left bg-white rounded-3xl overflow-hidden border-2 transition-all active:scale-[0.98] ${
                    selected
                      ? "border-[#1d1d1f] shadow-apple-md"
                      : "border-transparent shadow-card hover:shadow-apple"
                  }`}
                >
                  {/* Card face */}
                  <div className="h-16 flex items-center justify-between px-4 relative" style={{ background: card.gradient }}>
                    <div>
                      <div className="text-[9px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: card.accentColor }}>{card.issuer}</div>
                      <div className="text-sm font-bold text-white leading-tight">{card.name}</div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selected ? "bg-white border-white" : "border-white/40"
                    }`}>
                      {selected && (
                        <svg className="w-3.5 h-3.5 text-[#1d1d1f]" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-[#aeaeb2] uppercase tracking-wider font-medium">Annual perks</div>
                      <div className="text-[17px] font-bold text-[#1d1d1f]">${card.totalPerkValue.toLocaleString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] text-[#aeaeb2] uppercase tracking-wider font-medium">Fee</div>
                      <div className="text-sm font-semibold text-[#6e6e73]">${card.annualFee === 0 ? "None" : card.annualFee}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sticky bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-black/[0.06] px-5 py-4 safe-bottom">
          <div className="max-w-2xl mx-auto">
            {selectedIds.size > 0 ? (
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[13px] font-semibold text-[#1d1d1f]">
                    {selectedIds.size} card{selectedIds.size !== 1 ? "s" : ""} selected
                  </div>
                  <div className="text-[11px] text-[#6e6e73]">
                    ${totalPerkValue.toLocaleString()} in annual perks
                  </div>
                </div>
                <button
                  onClick={saveAndFinish}
                  disabled={saving}
                  className="bg-[#1d1d1f] text-white px-7 h-12 rounded-2xl text-[15px] font-semibold hover:bg-[#3d3d3f] transition-all active:scale-[0.98] disabled:opacity-50 shrink-0"
                >
                  {saving ? "Saving…" : "Continue →"}
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-[#aeaeb2]">Select at least one card to continue.</p>
                <button
                  disabled
                  className="bg-[#f5f5f7] text-[#aeaeb2] px-7 h-12 rounded-2xl text-[15px] font-semibold cursor-not-allowed shrink-0"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── Step 2: All set ──────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-sm w-full">
        <div className="flex items-center justify-center gap-2 mb-10">
          <Logo size="lg"/>
        </div>

        <div className="flex justify-center mb-6">
          <SuccessIllustration />
        </div>

        <h1 className="text-[32px] font-bold text-[#1d1d1f] leading-tight mb-3">
          You're all set.
        </h1>

        <p className="text-[16px] text-[#6e6e73] leading-relaxed mb-3">
          We found <span className="font-semibold text-[#1d1d1f]">${totalPerkValue.toLocaleString()}</span> in annual perks across your {selectedIds.size} card{selectedIds.size !== 1 ? "s" : ""}.
        </p>
        <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-10">
          Head to your dashboard to see everything — and start marking off what you've used.
        </p>

        {/* Selected card mini previews */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {selectedCards.slice(0, 5).map((card) => (
            <div key={card.id} className="w-10 h-6 rounded-md" style={{ background: card.gradient }} title={`${card.issuer} ${card.name}`}/>
          ))}
          {selectedCards.length > 5 && (
            <div className="w-10 h-6 rounded-md bg-[#f5f5f7] flex items-center justify-center text-[10px] font-bold text-[#6e6e73]">
              +{selectedCards.length - 5}
            </div>
          )}
        </div>

        <button
          onClick={() => router.push("/dashboard")}
          className="w-full bg-[#1d1d1f] text-white h-14 rounded-2xl text-[16px] font-semibold hover:bg-[#3d3d3f] transition-all active:scale-[0.98] mb-3"
        >
          Go to my dashboard
        </button>

        <button
          onClick={() => setStep(1)}
          className="w-full text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors py-2"
        >
          ← Change my cards
        </button>
      </div>
    </div>
  );
}
