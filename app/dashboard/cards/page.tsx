"use client";
import { Logo } from "@/components/Logo";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { CARDS } from "@/lib/cards";

const CREDIT_SCORE_OPTIONS = [
  { label: "Exceptional 800+", value: 800 },
  { label: "Excellent 750+",   value: 750 },
  { label: "Good 700+",        value: 700 },
  { label: "Fair 640+",        value: 640 },
  { label: "Building",         value: 580 },
];

function getApprovalBadge(creditScore: number | null, minCreditScore: number | undefined, inviteOnly: boolean | undefined) {
  if (inviteOnly) return { label: "Invite only", className: "bg-[#d4a843]/10 text-[#a07820] border border-[#d4a843]/30" };
  if (creditScore === null || minCreditScore === undefined) return null;
  if (creditScore >= minCreditScore) return { label: "Strong odds", className: "bg-[#34c759]/10 text-[#1a7a38] border border-[#34c759]/30" };
  if (creditScore >= minCreditScore - 30) return { label: "Fair odds", className: "bg-[#ff9f0a]/10 text-[#a05f00] border border-[#ff9f0a]/30" };
  return { label: "Low odds", className: "bg-[#ff3b30]/10 text-[#9b2118] border border-[#ff3b30]/30" };
}

export default function ManageCardsPage() {
  const router = useRouter();
  const supabase = createClient();
  const [userId, setUserId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [creditScore, setCreditScore] = useState<number | null>(null);

  useEffect(() => {
    // Load saved credit score from localStorage
    const saved = localStorage.getItem("perched_credit_score");
    if (saved) setCreditScore(parseInt(saved));
  }, []);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/auth/signin"); return; }
      setUserId(user.id);
      const { data } = await supabase
        .from("perched_user_cards")
        .select("card_id")
        .eq("user_id", user.id);
      if (data && data.length > 0) {
        setSelectedIds(new Set(data.map((r: { card_id: string }) => r.card_id)));
      }
      setLoading(false);
    }
    load();
  }, []);

  function toggle(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  async function save() {
    if (!userId) return;
    setSaving(true);

    const { data: existing } = await supabase
      .from("perched_user_cards")
      .select("card_id")
      .eq("user_id", userId);

    const existingIds = new Set((existing || []).map((r: { card_id: string }) => r.card_id));
    const toAdd = [...selectedIds].filter((id) => !existingIds.has(id));
    const toRemove = [...existingIds].filter((id) => !selectedIds.has(id));

    if (toAdd.length > 0) {
      await supabase.from("perched_user_cards").insert(
        toAdd.map((card_id) => ({ user_id: userId, card_id }))
      );
    }
    if (toRemove.length > 0) {
      await supabase.from("perched_user_cards")
        .delete()
        .eq("user_id", userId)
        .in("card_id", toRemove);
    }

    router.push("/dashboard");
  }

  const selectedCards = CARDS.filter((c) => selectedIds.has(c.id));
  const totalValue = selectedCards.reduce((s, c) => s + c.totalPerkValue, 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <div className="text-[#1d1d1f]"><Logo size="lg"/></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center gap-3">
          <Link href="/dashboard" className="text-[#007aff] text-sm font-medium hover:text-[#0056d3] flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Dashboard
          </Link>
          <span className="text-[#d2d2d7]">/</span>
          <span className="text-sm font-semibold text-[#1d1d1f]">My cards</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-8">
        <h1 className="text-3xl font-bold text-[#1d1d1f] mb-2">Choose your cards</h1>
        <p className="text-[#6e6e73] mb-8">Select every card you carry. We'll track all their perks in your dashboard.</p>

        {/* Credit score selector */}
        <div className="mb-6 p-4 bg-white rounded-2xl border border-black/[0.06]">
          <p className="text-[13px] font-semibold text-[#1d1d1f] mb-3">
            Your credit score range{" "}
            <span className="font-normal text-[#aeaeb2]">(stored locally — helps show approval odds)</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {CREDIT_SCORE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setCreditScore(opt.value);
                  localStorage.setItem("perched_credit_score", String(opt.value));
                }}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                  creditScore === opt.value
                    ? "bg-[#1d1d1f] text-white"
                    : "bg-[#f5f5f7] text-[#6e6e73] hover:bg-[#e5e5ea]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {selectedIds.size > 0 && (
          <div className="bg-[#1d1d1f] text-white rounded-2xl p-4 mb-6 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">{selectedIds.size} card{selectedIds.size !== 1 ? "s" : ""} selected</div>
              <div className="text-xs text-white/50 mt-0.5">${totalValue.toLocaleString()} in annual perks</div>
            </div>
            <button onClick={save} disabled={saving}
              className="bg-[#d4a843] text-[#1d1d1f] text-sm font-bold px-5 py-2 rounded-xl hover:bg-[#ebc04a] transition-colors disabled:opacity-60">
              {saving ? "Saving…" : "Save →"}
            </button>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          {CARDS.map((card) => {
            const selected = selectedIds.has(card.id);
            const badge = getApprovalBadge(creditScore, card.minCreditScore, card.inviteOnly);
            return (
              <button key={card.id} onClick={() => toggle(card.id)}
                className={`text-left bg-white rounded-3xl overflow-hidden shadow-card border-2 transition-all hover:-translate-y-0.5 hover:shadow-apple ${
                  selected ? "border-[#007aff]" : "border-transparent"
                }`}>
                <div className="h-20 flex items-end p-4 relative" style={{ background: card.gradient }}>
                  {selected && (
                    <div className="absolute top-3 right-3 w-6 h-6 bg-[#007aff] rounded-full flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: card.accentColor }}>{card.issuer}</div>
                    <div className="text-base font-bold text-white">{card.name}</div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#6e6e73] mb-3 leading-relaxed">{card.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-[10px] text-[#aeaeb2] font-medium uppercase tracking-wide">Perk value</div>
                      <div className="text-lg font-bold text-[#1d1d1f]">${card.totalPerkValue.toLocaleString()}/yr</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-[#aeaeb2] font-medium uppercase tracking-wide">Fee</div>
                      <div className="text-sm font-semibold text-[#6e6e73]">${card.annualFee}/yr</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#f5f5f7]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#aeaeb2]">{card.perks.length} perks tracked</span>
                      {badge && (
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badge.className}`}>
                          {badge.label}
                        </span>
                      )}
                    </div>
                    <a
                      href={card.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[11px] text-[#007aff] font-medium hover:underline"
                    >
                      Apply →
                    </a>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
