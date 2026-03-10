"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { CARDS, CARD_MAP, CATEGORIES, type Perk } from "@/lib/cards";
import { CATEGORY_ICONS, IconPerch } from "@/components/Icon";
import { Logo } from "@/components/Logo";

function PerkRow({ perk, cardName, isUsed, onToggle }: {
  perk: Perk;
  cardName: string;
  isUsed: boolean;
  onToggle: () => void;
}) {
  const cat = CATEGORIES[perk.category];
  const CatIcon = CATEGORY_ICONS[perk.category];
  return (
    <div className={`flex items-start gap-4 p-4 rounded-2xl transition-all ${isUsed ? "bg-[#f5f5f7] opacity-60" : "bg-white border border-black/[0.06] shadow-card hover:shadow-apple"}`}>
      <button
        onClick={onToggle}
        className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all mt-0.5 ${isUsed ? "bg-[#34c759] border-[#34c759]" : "border-[#d2d2d7] hover:border-[#34c759]"}`}
        aria-label={isUsed ? "Mark as unused" : "Mark as used"}
      >
        {isUsed && (
          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 16 16" fill="none">
            <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            {CatIcon && <CatIcon size={14} className="mr-1.5 shrink-0 text-[#6e6e73]"/>}
            <span className="text-[15px] font-semibold text-[#1d1d1f]">{perk.name}</span>
          </div>
          <span className={`shrink-0 text-[15px] font-bold ${isUsed ? "text-[#aeaeb2] line-through" : "text-[#1d1d1f]"}`}>
            ${perk.value}
          </span>
        </div>
        <p className="text-xs text-[#6e6e73] mt-1 leading-relaxed line-clamp-2">{perk.description}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[10px] bg-[#f5f5f7] text-[#6e6e73] px-2 py-0.5 rounded-full font-medium capitalize">{perk.frequency}</span>
          <span className="text-[10px] text-[#aeaeb2]">{cardName}</span>
          {perk.notes && <span className="text-[10px] text-[#aeaeb2] truncate hidden sm:block">· {perk.notes}</span>}
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const supabase = createClient();
  const [userId, setUserId] = useState<string | null>(null);
  const [myCardIds, setMyCardIds] = useState<string[]>([]);
  const [usedPerkIds, setUsedPerkIds] = useState<Set<string>>(new Set());
  const [pointsBalances, setPointsBalances] = useState<Record<string, string>>({});
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Load user + their data
  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/auth/signin"); return; }
      setUserId(user.id);

      // Load selected cards
      const { data: cardRows } = await supabase
        .from("perched_user_cards")
        .select("card_id, points_balance")
        .eq("user_id", user.id);

      if (cardRows && cardRows.length > 0) {
        setMyCardIds(cardRows.map((r: any) => r.card_id));
        const balances: Record<string, string> = {};
        cardRows.forEach((r: any) => {
          if (r.points_balance) balances[r.card_id] = String(r.points_balance);
        });
        setPointsBalances(balances);
      } else {
        // New user with no cards — send to onboarding
        router.push("/onboarding");
        return;
      }

      // Load used perks (current year)
      const year = new Date().getFullYear();
      const { data: perkRows } = await supabase
        .from("perched_user_perks")
        .select("perk_id")
        .eq("user_id", user.id)
        .eq("is_used", true)
        .eq("period_year", year);

      if (perkRows) {
        setUsedPerkIds(new Set(perkRows.map((r: any) => r.perk_id)));
      }
      setLoading(false);
    }
    load();
  }, []);

  async function togglePerk(perkId: string) {
    if (!userId) return;
    const year = new Date().getFullYear();
    const nowUsed = !usedPerkIds.has(perkId);

    setUsedPerkIds((prev) => {
      const next = new Set(prev);
      nowUsed ? next.add(perkId) : next.delete(perkId);
      return next;
    });

    const { data: existing } = await supabase
      .from("perched_user_perks")
      .select("id")
      .eq("user_id", userId)
      .eq("perk_id", perkId)
      .eq("period_year", year)
      .maybeSingle();

    if (existing) {
      await supabase.from("perched_user_perks").update({ is_used: nowUsed, used_at: nowUsed ? new Date().toISOString() : null }).eq("id", existing.id);
    } else {
      await supabase.from("perched_user_perks").insert({ user_id: userId, perk_id: perkId, is_used: nowUsed, used_at: nowUsed ? new Date().toISOString() : null, period_year: year });
    }
  }

  async function updatePointsBalance(cardId: string, value: string) {
    setPointsBalances((prev) => ({ ...prev, [cardId]: value }));
    if (!userId) return;
    await supabase.from("perched_user_cards")
      .update({ points_balance: parseInt(value) || null, points_updated_at: new Date().toISOString() })
      .eq("user_id", userId)
      .eq("card_id", cardId);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/");
  }

  const myCards = CARDS.filter((c) => myCardIds.includes(c.id));
  const allPerks = myCards.flatMap((c) => c.perks.map((p) => ({ ...p, cardName: `${c.issuer} ${c.name}` })));
  const filteredPerks = activeFilter === "all" ? allPerks : allPerks.filter((p) => p.category === activeFilter);
  const totalValue = myCards.reduce((s, c) => s + c.totalPerkValue, 0);
  const usedValue = allPerks.filter((p) => usedPerkIds.has(p.id)).reduce((s, p) => s + p.value, 0);

  const filters = [
    { key: "all", label: "All" },
    { key: "travel", label: "Travel" },
    { key: "dining", label: "Dining" },
    { key: "lounge", label: "Lounges" },
    { key: "entertainment", label: "Entertainment" },
    { key: "shopping", label: "Shopping" },
    { key: "wellness", label: "Wellness" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <div className="text-center">
          <div className="mb-3 text-[#1d1d1f]"><IconPerch size={40}/></div>
          <div className="text-sm text-[#6e6e73] font-medium">Loading your perks…</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <Link href="/dashboard/cards" className="text-sm font-medium text-[#007aff] hover:text-[#0056d3] transition-colors">
              My cards
            </Link>
            <button onClick={handleSignOut} className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors font-medium">
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-8">
        {/* Progress banner */}
        <div className="bg-[#1d1d1f] rounded-3xl p-5 mb-6 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Used so far this year</div>
            <div className="text-3xl font-bold text-white">${usedValue.toLocaleString()}</div>
            <div className="text-xs text-white/40 mt-0.5">of ${totalValue.toLocaleString()} in available perks</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Unclaimed</div>
            <div className="text-3xl font-bold text-[#d4a843]">${(totalValue - usedValue).toLocaleString()}</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: "Cards tracked", value: `${myCards.length}` },
            { label: "Total perks", value: `${allPerks.length}` },
            { label: "Used", value: `${usedPerkIds.size}` },
            { label: "Annual fees", value: `$${myCards.reduce((s, c) => s + c.annualFee, 0).toLocaleString()}` },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-2xl p-4 shadow-card border border-black/[0.04]">
              <div className="text-[11px] text-[#aeaeb2] font-medium uppercase tracking-wide mb-1">{label}</div>
              <div className="text-2xl font-bold text-[#1d1d1f]">{value}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-6">
          {/* Perks list */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#1d1d1f]">Your perks</h2>
              <span className="text-sm text-[#aeaeb2]">{filteredPerks.length} benefits</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-3 mb-5">
              {filters.map((f) => {
                const CatIcon = f.key !== "all" ? CATEGORY_ICONS[f.key] : null;
                return (
                  <button key={f.key} onClick={() => setActiveFilter(f.key)}
                    className={`shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
                      activeFilter === f.key ? "bg-[#1d1d1f] text-white" : "bg-white text-[#6e6e73] border border-black/[0.08] hover:bg-[#f5f5f7]"
                    }`}>
                    {CatIcon && <CatIcon size={13}/>}
                    {f.label}
                  </button>
                );
              })}
            </div>
            <div className="space-y-2.5">
              {filteredPerks.map((perk) => (
                <PerkRow key={perk.id} perk={perk} cardName={perk.cardName}
                  isUsed={usedPerkIds.has(perk.id)}
                  onToggle={() => togglePerk(perk.id)}/>
              ))}
            </div>
          </div>

          {/* Cards sidebar */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#1d1d1f]">My cards</h2>
              <Link href="/dashboard/cards" className="text-xs font-semibold text-[#007aff]">Edit</Link>
            </div>
            <div className="space-y-4">
              {myCards.map((card) => (
                <Link key={card.id} href={`/cards/${card.id}`} className="block bg-white rounded-3xl shadow-card border border-black/[0.06] overflow-hidden hover:shadow-apple transition-all">
                  <div className="h-16 flex items-end p-4" style={{ background: card.gradient }}>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: card.accentColor }}>{card.issuer}</div>
                      <div className="text-sm font-bold text-white">{card.name}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <div className="text-[10px] text-[#aeaeb2] uppercase tracking-wider font-medium">Perk value</div>
                        <div className="text-lg font-bold text-[#1d1d1f]">${card.totalPerkValue.toLocaleString()}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-[#aeaeb2] uppercase tracking-wider font-medium">Fee</div>
                        <div className="text-sm font-semibold text-[#6e6e73]">${card.annualFee}</div>
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] text-[#aeaeb2] uppercase tracking-wider font-medium block mb-1">Points balance</label>
                      <input type="text" value={pointsBalances[card.id] || ""}
                        onChange={(e) => updatePointsBalance(card.id, e.target.value)}
                        placeholder="Enter your balance"
                        className="w-full bg-[#f5f5f7] rounded-xl h-8 px-3 text-xs text-[#1d1d1f] placeholder:text-[#aeaeb2] outline-none focus:ring-2 focus:ring-[#007aff]/20 transition-all"/>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
