"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CARDS, CARD_MAP } from "@/lib/cards";
import { createClient } from "@/lib/supabase";
import { IconChevronLeft, IconBell, CATEGORY_ICONS } from "@/components/Icon";
import { Logo } from "@/components/Logo";

interface NewPerkItem {
  perkId: string;
  perkName: string;
  perkDescription: string;
  cardId: string;
  cardName: string;
  cardIssuer: string;
  cardGradient: string;
  cardAccentColor: string;
  rewardsUrl: string;
}

export default function NotificationsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [myCardIds, setMyCardIds] = useState<string[]>([]);
  const [seenPerkIds, setSeenPerkIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load seen perk IDs from localStorage
    try {
      const raw = localStorage.getItem("perched_seen_new_perks");
      if (raw) setSeenPerkIds(new Set(JSON.parse(raw) as string[]));
    } catch {
      // ignore parse errors
    }
  }, []);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/auth/signin"); return; }

      const { data } = await supabase
        .from("perched_user_cards")
        .select("card_id")
        .eq("user_id", user.id);

      if (data) setMyCardIds(data.map((r: { card_id: string }) => r.card_id));
      setLoading(false);
    }
    load();
  }, []);

  // Collect all isNew perks from user's cards
  const newPerks: NewPerkItem[] = myCardIds.flatMap((cardId) => {
    const card = CARD_MAP[cardId];
    if (!card) return [];
    return card.perks
      .filter((p) => p.isNew)
      .map((p) => ({
        perkId: p.id,
        perkName: p.name,
        perkDescription: p.description,
        cardId: card.id,
        cardName: `${card.issuer} ${card.name}`,
        cardIssuer: card.issuer,
        cardGradient: card.gradient,
        cardAccentColor: card.accentColor,
        rewardsUrl: p.sourceUrl ?? card.rewardsUrl,
      }));
  });

  const unseenPerks = newPerks.filter((p) => !seenPerkIds.has(p.perkId));

  function markAllSeen() {
    const allIds = newPerks.map((p) => p.perkId);
    const next = new Set([...seenPerkIds, ...allIds]);
    setSeenPerkIds(next);
    try {
      localStorage.setItem("perched_seen_new_perks", JSON.stringify([...next]));
    } catch {
      // ignore
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <div className="text-[#1d1d1f]"><Logo size="lg"/></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-[#007aff] text-sm font-medium flex items-center gap-1 hover:text-[#0056d3] transition-colors">
              <IconChevronLeft size={16}/>
              Dashboard
            </Link>
            <span className="text-[#d2d2d7]">/</span>
            <span className="text-sm font-semibold text-[#1d1d1f]">What's New</span>
          </div>
          {unseenPerks.length > 0 && (
            <button
              onClick={markAllSeen}
              className="text-xs font-semibold text-[#007aff] hover:text-[#0056d3] transition-colors"
            >
              Mark all as seen
            </button>
          )}
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-5 py-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#1d1d1f] rounded-2xl flex items-center justify-center">
            <IconBell size={20} className="text-white"/>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1d1d1f]">What's New</h1>
            <p className="text-[13px] text-[#6e6e73]">New and updated perks across your cards</p>
          </div>
        </div>

        {newPerks.length === 0 ? (
          <div className="mt-16 text-center">
            <div className="w-16 h-16 bg-[#f5f5f7] rounded-3xl flex items-center justify-center mx-auto mb-4">
              <IconBell size={28} className="text-[#aeaeb2]"/>
            </div>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-2">You're up to date</h2>
            <p className="text-sm text-[#6e6e73] mb-6">No new perks across your cards right now. Check back after your next card update.</p>
            <Link href="/dashboard" className="inline-block bg-[#1d1d1f] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#3a3a3a] transition-colors">
              Back to Dashboard
            </Link>
          </div>
        ) : (
          <>
            {unseenPerks.length > 0 && (
              <div className="mt-4 mb-2">
                <div className="inline-flex items-center gap-1.5 bg-[#ff3b30]/10 text-[#ff3b30] text-[11px] font-bold px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-[#ff3b30] rounded-full"/>
                  {unseenPerks.length} new since you last checked
                </div>
              </div>
            )}

            <div className="mt-4 space-y-3">
              {newPerks.map((item) => {
                const isSeen = seenPerkIds.has(item.perkId);
                const card = CARD_MAP[item.cardId];
                const CatIcon = card
                  ? CATEGORY_ICONS[card.perks.find((p) => p.id === item.perkId)?.category ?? "other"]
                  : null;

                return (
                  <div
                    key={item.perkId}
                    className={`bg-white rounded-3xl overflow-hidden border-2 transition-all ${
                      isSeen ? "border-transparent opacity-60" : "border-[#ff3b30]/20 shadow-card"
                    }`}
                  >
                    {/* Card mini-header */}
                    <div className="h-10 flex items-center px-4" style={{ background: item.cardGradient }}>
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: item.cardAccentColor }}>
                        {item.cardIssuer}
                      </span>
                      <span className="text-white/70 text-[10px] font-semibold ml-2">{item.cardName}</span>
                    </div>

                    {/* Perk details */}
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        {CatIcon && (
                          <div className="w-9 h-9 rounded-xl bg-[#f5f5f7] flex items-center justify-center shrink-0">
                            <CatIcon size={18} className="text-[#1d1d1f]"/>
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[15px] font-semibold text-[#1d1d1f]">{item.perkName}</span>
                            {!isSeen && (
                              <span className="text-[9px] font-bold text-white bg-[#ff3b30] px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                                New
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-[#6e6e73] leading-relaxed">{item.perkDescription}</p>
                          <div className="flex items-center gap-3 mt-3">
                            <Link
                              href={`/cards/${item.cardId}`}
                              className="text-[11px] text-[#007aff] font-semibold hover:underline"
                            >
                              View card →
                            </Link>
                            <a
                              href={item.rewardsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-[#aeaeb2] hover:text-[#6e6e73] font-medium hover:underline"
                            >
                              Official source ↗
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {unseenPerks.length > 0 && (
              <div className="mt-6 text-center">
                <button
                  onClick={markAllSeen}
                  className="bg-[#f5f5f7] text-[#6e6e73] text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#e5e5ea] transition-colors"
                >
                  Mark all as seen
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
