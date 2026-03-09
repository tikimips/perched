"use client";
import { useState } from "react";
import Link from "next/link";
import { CARDS } from "@/lib/cards";

export default function ManageCardsPage() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(["amex-platinum", "chase-sapphire-reserve", "capital-one-venture-x"])
  );

  function toggle(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const selectedCards = CARDS.filter((c) => selectedIds.has(c.id));
  const totalValue = selectedCards.reduce((s, c) => s + c.totalPerkValue, 0);

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center gap-3">
          <Link href="/dashboard" className="text-[#007aff] text-sm font-medium hover:text-[#0056d3] transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Dashboard
          </Link>
          <span className="text-[#d2d2d7]">/</span>
          <span className="text-sm font-semibold text-[#1d1d1f]">My cards</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1d1d1f] mb-2">Choose your cards</h1>
          <p className="text-[#6e6e73]">Select the cards you carry. We'll show all their perks in your dashboard.</p>
        </div>

        {/* Summary pill */}
        {selectedIds.size > 0 && (
          <div className="bg-[#1d1d1f] text-white rounded-2xl p-4 mb-6 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">{selectedIds.size} card{selectedIds.size !== 1 ? "s" : ""} selected</div>
              <div className="text-xs text-white/60 mt-0.5">${totalValue.toLocaleString()} in annual perks</div>
            </div>
            <Link href="/dashboard" className="bg-white text-[#1d1d1f] text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#f5f5f7] transition-colors">
              Save & view →
            </Link>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          {CARDS.map((card) => {
            const selected = selectedIds.has(card.id);
            return (
              <button
                key={card.id}
                onClick={() => toggle(card.id)}
                className={`text-left bg-white rounded-3xl overflow-hidden shadow-card border-2 transition-all hover:-translate-y-0.5 hover:shadow-apple ${
                  selected ? "border-[#007aff] shadow-apple" : "border-transparent"
                }`}
              >
                {/* Card visual */}
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
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-[#aeaeb2] font-medium uppercase tracking-wide">Perk value</div>
                      <div className="text-lg font-bold text-[#1d1d1f]">${card.totalPerkValue.toLocaleString()}/yr</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-[#aeaeb2] font-medium uppercase tracking-wide">Fee</div>
                      <div className="text-sm font-semibold text-[#6e6e73]">${card.annualFee}/yr</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#f5f5f7] text-xs text-[#aeaeb2]">
                    {card.perks.length} perks tracked
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
