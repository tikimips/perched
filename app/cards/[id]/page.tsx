"use client";
import { Logo } from "@/components/Logo";
import { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { CARD_MAP, CATEGORIES, type Perk } from "@/lib/cards";
import { CATEGORY_ICONS, IconWarning, IconChevronLeft } from "@/components/Icon";

const FREQ_LABELS: Record<string, string> = {
  annual:      "Annual credit",
  "semi-annual": "Semi-annual credit",
  monthly:     "Monthly credit",
  quarterly:   "Quarterly credit",
  "one-time":  "One-time credit",
};

function PerkCard({ perk, isUsed, onToggle, isLoggedIn }: {
  perk: Perk; isUsed: boolean; onToggle: () => void; isLoggedIn: boolean;
}) {
  const cat = CATEGORIES[perk.category];
  const CatIcon = CATEGORY_ICONS[perk.category];
  return (
    <div className={`bg-white rounded-3xl p-5 border-2 transition-all ${isUsed ? "border-[#34c759]/30 opacity-60" : "border-transparent shadow-card hover:shadow-apple"}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isUsed ? "bg-[#f5f5f7] text-[#aeaeb2]" : "bg-[#f5f5f7] text-[#1d1d1f]"}`}>
            {CatIcon && <CatIcon size={18}/>}
          </div>
          <div>
            <div className="text-[15px] font-semibold text-[#1d1d1f] leading-tight">{perk.name}</div>
            <div className="text-[11px] text-[#aeaeb2] font-medium uppercase tracking-wider mt-0.5">{FREQ_LABELS[perk.frequency] || perk.frequency}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {perk.value > 0 && (
            <span className={`text-xl font-bold ${isUsed ? "text-[#aeaeb2] line-through" : "text-[#1d1d1f]"}`}>
              ${perk.value}
            </span>
          )}
          {isLoggedIn && (
            <button
              onClick={onToggle}
              className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                isUsed ? "bg-[#34c759] border-[#34c759]" : "border-[#d2d2d7] hover:border-[#34c759]"
              }`}
              aria-label={isUsed ? "Mark unused" : "Mark used"}
            >
              {isUsed && (
                <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
      <p className="text-sm text-[#6e6e73] leading-relaxed">{perk.description}</p>
      {perk.notes && (
        <div className="mt-3 flex items-start gap-1.5">
          <IconWarning size={12} className="text-[#aeaeb2] shrink-0 mt-0.5"/>
          <p className="text-[11px] text-[#aeaeb2] leading-relaxed">{perk.notes}</p>
        </div>
      )}
      {isUsed && (
        <div className="mt-3 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#34c759]"/>
          <span className="text-[11px] text-[#34c759] font-semibold">Claimed this year</span>
        </div>
      )}
    </div>
  );
}

export default function CardDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const card = CARD_MAP[id];

  const [usedPerkIds, setUsedPerkIds] = useState<Set<string>>(new Set());
  const [userId, setUserId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (!card) return;
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) return;
      setUserId(user.id);
      const year = new Date().getFullYear();
      const { data } = await supabase
        .from("perched_user_perks")
        .select("perk_id")
        .eq("user_id", user.id)
        .eq("is_used", true)
        .eq("period_year", year);
      if (data) setUsedPerkIds(new Set(data.map((r: any) => r.perk_id)));
    });
  }, []);

  if (!card) return notFound();

  async function togglePerk(perkId: string) {
    if (!userId) return;
    const supabase = createClient();
    const year = new Date().getFullYear();
    const nowUsed = !usedPerkIds.has(perkId);
    setUsedPerkIds((prev) => {
      const next = new Set(prev);
      nowUsed ? next.add(perkId) : next.delete(perkId);
      return next;
    });
    const { data: existing } = await supabase.from("perched_user_perks").select("id")
      .eq("user_id", userId).eq("perk_id", perkId).eq("period_year", year).maybeSingle();
    if (existing) {
      await supabase.from("perched_user_perks").update({ is_used: nowUsed, used_at: nowUsed ? new Date().toISOString() : null }).eq("id", existing.id);
    } else {
      await supabase.from("perched_user_perks").insert({ user_id: userId, perk_id: perkId, is_used: nowUsed, used_at: nowUsed ? new Date().toISOString() : null, period_year: year });
    }
  }

  // Group perks by category
  const usedValue = card.perks.filter(p => usedPerkIds.has(p.id)).reduce((s, p) => s + p.value, 0);
  const unclaimed = card.perks.filter(p => !usedPerkIds.has(p.id) && p.value > 0).reduce((s, p) => s + p.value, 0);

  const categories = ["all", ...Array.from(new Set(card.perks.map(p => p.category)))];
  const visiblePerks = activeCategory === "all" ? card.perks : card.perks.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center gap-3">
          <Link href="/dashboard" className="text-[#007aff] text-sm font-medium flex items-center gap-1 hover:text-[#0056d3] transition-colors">
            <IconChevronLeft size={16}/>
            Dashboard
          </Link>
          <span className="text-[#d2d2d7]">/</span>
          <span className="text-sm font-semibold text-[#1d1d1f] truncate">{card.issuer} {card.name}</span>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-5 py-8">
        {/* Card hero */}
        <div className="rounded-3xl overflow-hidden shadow-apple-md mb-6">
          {/* Card face */}
          <div className="h-44 flex flex-col justify-between p-6 relative" style={{ background: card.gradient }}>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: card.accentColor }}>{card.issuer}</div>
              <div className="text-3xl font-bold text-white">{card.name}</div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[10px] text-white/50 uppercase tracking-wider font-medium mb-0.5">Network</div>
                <div className="text-sm font-semibold text-white/80">{card.network}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-white/50 uppercase tracking-wider font-medium mb-0.5">Annual fee</div>
                <div className="text-lg font-bold text-white">{card.annualFee === 0 ? "None" : `$${card.annualFee}`}</div>
              </div>
            </div>
          </div>
          {/* Stats strip */}
          <div className="bg-white grid grid-cols-3 divide-x divide-[#f5f5f7]">
            {[
              { label: "Total perk value", value: `$${card.totalPerkValue.toLocaleString()}` },
              { label: "Claimed this year", value: `$${usedValue.toLocaleString()}` },
              { label: "Unclaimed", value: `$${unclaimed.toLocaleString()}`, highlight: unclaimed > 0 },
            ].map(({ label, value, highlight }) => (
              <div key={label} className="p-4 text-center">
                <div className="text-[10px] text-[#aeaeb2] uppercase tracking-wider font-medium mb-1">{label}</div>
                <div className={`text-xl font-bold ${highlight ? "text-[#d4a843]" : "text-[#1d1d1f]"}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-[#6e6e73] text-sm mb-6 leading-relaxed px-1">{card.description}</p>

        {/* Category filter */}
        {categories.length > 2 && (
          <div className="flex gap-2 overflow-x-auto pb-3 mb-5">
            {categories.map((cat) => {
              const label = cat === "all" ? "All perks" : CATEGORIES[cat as keyof typeof CATEGORIES]?.label;
              const CatIcon = cat !== "all" ? CATEGORY_ICONS[cat] : null;
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
                    activeCategory === cat ? "bg-[#1d1d1f] text-white" : "bg-white text-[#6e6e73] border border-black/[0.08] hover:bg-[#f5f5f7]"
                  }`}>
                  {CatIcon && <CatIcon size={13}/>}
                  {label}
                </button>
              );
            })}
          </div>
        )}

        {/* Perk list */}
        <div className="space-y-3">
          {visiblePerks.map((perk) => (
            <PerkCard
              key={perk.id}
              perk={perk}
              isUsed={usedPerkIds.has(perk.id)}
              onToggle={() => togglePerk(perk.id)}
              isLoggedIn={!!userId}
            />
          ))}
        </div>

        {/* Not logged in CTA */}
        {!userId && (
          <div className="mt-8 bg-[#1d1d1f] rounded-3xl p-6 text-center">
            <div className="mb-2 text-[#1d1d1f] flex justify-center"><Logo size="lg"/></div>
            <h3 className="text-white font-bold text-lg mb-1">Track what you've used</h3>
            <p className="text-white/50 text-sm mb-4">Create a free account to mark perks as used and see your unclaimed value.</p>
            <Link href="/auth/signup" className="inline-block bg-[#d4a843] text-[#1d1d1f] px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#ebc04a] transition-colors">
              Get started free
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
