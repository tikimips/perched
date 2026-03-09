"use client";
import { useState } from "react";
import Link from "next/link";
import { CARDS, CATEGORIES, type Perk, type Card } from "@/lib/cards";

// Demo: user has these 3 cards pre-selected
const DEMO_CARD_IDS = ["amex-platinum", "chase-sapphire-reserve", "capital-one-venture-x"];

function PerkRow({ perk, cardName }: { perk: Perk; cardName: string }) {
  const [used, setUsed] = useState(false);
  const cat = CATEGORIES[perk.category];

  return (
    <div className={`flex items-start gap-4 p-4 rounded-2xl transition-all ${used ? "bg-[#f5f5f7] opacity-60" : "bg-white border border-black/[0.06] shadow-card hover:shadow-apple"}`}>
      <button
        onClick={() => setUsed(!used)}
        className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all mt-0.5 ${used ? "bg-[#34c759] border-[#34c759]" : "border-[#d2d2d7] hover:border-[#34c759]"}`}
        aria-label={used ? "Mark as unused" : "Mark as used"}
      >
        {used && (
          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 16 16" fill="none">
            <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-xs mr-1.5">{cat.emoji}</span>
            <span className="text-[15px] font-semibold text-[#1d1d1f]">{perk.name}</span>
          </div>
          <span className={`shrink-0 text-[15px] font-bold ${used ? "text-[#aeaeb2] line-through" : "text-[#1d1d1f]"}`}>
            ${perk.value}
          </span>
        </div>
        <p className="text-xs text-[#6e6e73] mt-1 leading-relaxed line-clamp-2">{perk.description}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[10px] bg-[#f5f5f7] text-[#6e6e73] px-2 py-0.5 rounded-full font-medium capitalize">{perk.frequency}</span>
          <span className="text-[10px] text-[#aeaeb2]">{cardName}</span>
          {perk.notes && <span className="text-[10px] text-[#aeaeb2] truncate">· {perk.notes}</span>}
        </div>
      </div>
    </div>
  );
}

function MiniCard({ card }: { card: Card }) {
  const [pointsBalance, setPointsBalance] = useState<string>("");

  return (
    <div className="bg-white rounded-3xl shadow-card border border-black/[0.06] overflow-hidden">
      <div className="h-20 flex items-end p-4" style={{ background: card.gradient }}>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: card.accentColor }}>{card.issuer}</div>
          <div className="text-base font-bold text-white">{card.name}</div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div>
            <div className="text-[10px] text-[#aeaeb2] uppercase tracking-wider font-medium">Annual perks</div>
            <div className="text-xl font-bold text-[#1d1d1f]">${card.totalPerkValue.toLocaleString()}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-[#aeaeb2] uppercase tracking-wider font-medium">Annual fee</div>
            <div className="text-sm font-semibold text-[#6e6e73]">${card.annualFee}</div>
          </div>
        </div>
        <div>
          <label className="text-[10px] text-[#aeaeb2] uppercase tracking-wider font-medium block mb-1">Points balance</label>
          <input
            type="text"
            value={pointsBalance}
            onChange={(e) => setPointsBalance(e.target.value)}
            placeholder="Enter your balance"
            className="w-full bg-[#f5f5f7] rounded-xl h-8 px-3 text-xs text-[#1d1d1f] placeholder:text-[#aeaeb2] outline-none focus:ring-2 focus:ring-[#007aff]/30 transition-all"
          />
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const myCards = CARDS.filter((c) => DEMO_CARD_IDS.includes(c.id));
  const allPerks = myCards.flatMap((c) => c.perks.map((p) => ({ ...p, cardName: `${c.issuer} ${c.name}` })));
  const totalValue = myCards.reduce((s, c) => s + c.totalPerkValue, 0);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filters = [
    { key: "all", label: "All" },
    { key: "travel", label: "✈️ Travel" },
    { key: "dining", label: "🍽️ Dining" },
    { key: "entertainment", label: "🎬 Entertainment" },
    { key: "lounge", label: "🛋️ Lounges" },
    { key: "shopping", label: "🛍️ Shopping" },
    { key: "wellness", label: "💆 Wellness" },
  ];

  const filteredPerks = activeFilter === "all"
    ? allPerks
    : allPerks.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐦</span>
            <span className="font-semibold text-[#1d1d1f] tracking-tight">Perched</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard/cards" className="text-sm font-medium text-[#007aff] hover:text-[#0056d3] transition-colors">
              Manage cards
            </Link>
            <div className="w-8 h-8 bg-[#1d1d1f] rounded-full flex items-center justify-center text-white text-xs font-bold">M</div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-8">
        {/* Summary bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: "Total perk value", value: `$${totalValue.toLocaleString()}`, sub: "across your cards" },
            { label: "Active cards", value: `${myCards.length}`, sub: "cards tracked" },
            { label: "Total perks", value: `${allPerks.length}`, sub: "benefits available" },
            { label: "Annual fees", value: `$${myCards.reduce((s, c) => s + c.annualFee, 0).toLocaleString()}`, sub: "total cost" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="bg-white rounded-2xl p-4 shadow-card border border-black/[0.04]">
              <div className="text-[11px] text-[#aeaeb2] font-medium uppercase tracking-wide mb-1">{label}</div>
              <div className="text-2xl font-bold text-[#1d1d1f]">{value}</div>
              <div className="text-[11px] text-[#aeaeb2] mt-0.5">{sub}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-6">
          {/* Left: perks */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#1d1d1f]">Your perks</h2>
              <span className="text-sm text-[#aeaeb2]">{filteredPerks.length} benefits</span>
            </div>

            {/* Category filters */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-5 scrollbar-hide">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
                    activeFilter === f.key
                      ? "bg-[#1d1d1f] text-white"
                      : "bg-white text-[#6e6e73] border border-black/[0.08] hover:bg-[#f5f5f7]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="space-y-2.5">
              {filteredPerks.map((perk) => (
                <PerkRow key={perk.id} perk={perk} cardName={perk.cardName} />
              ))}
            </div>
          </div>

          {/* Right: cards */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#1d1d1f]">My cards</h2>
              <Link href="/dashboard/cards" className="text-xs font-semibold text-[#007aff]">Edit</Link>
            </div>
            <div className="space-y-4">
              {myCards.map((card) => (
                <MiniCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
