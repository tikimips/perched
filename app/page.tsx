import { Logo } from "@/components/Logo";
import Link from "next/link";
import { CARDS } from "@/lib/cards";
import { IconCreditCard, IconList, IconCheckmarkCircle } from "@/components/Icon";
import { HeroIllustration, WelcomeIllustration } from "@/components/HeroIllustration";

const totalCards = CARDS.length;
const totalPerkValue = CARDS.reduce((sum, c) => sum + c.totalPerkValue, 0);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <div className="flex items-center gap-3">
            <Link href="/auth/signin" className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors font-medium">
              Sign in
            </Link>
            <Link href="/auth/signup" className="text-sm bg-[#1d1d1f] text-white px-4 py-2 rounded-full font-medium hover:bg-[#3d3d3f] transition-colors">
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-5 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#f5f5f7] text-[#6e6e73] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-8 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-[#34c759] rounded-full"/>
          Free to use
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] leading-tight mb-6 max-w-3xl mx-auto">
          You have more coming<br/>to you than you think.
        </h1>

        <p className="text-xl text-[#6e6e73] max-w-xl mx-auto mb-10 leading-relaxed">
          Your premium cards are loaded with credits, perks, and entitlements. Perched shows you everything you have — and makes sure you use it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <Link href="/auth/signup" className="w-full sm:w-auto bg-[#1d1d1f] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-[#3d3d3f] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-apple">
            Start for free
          </Link>
          <Link href="#how-it-works" className="w-full sm:w-auto bg-[#f5f5f7] text-[#1d1d1f] px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-[#e8e8ed] transition-all">
            See how it works
          </Link>
        </div>

        {/* Hero illustration */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-[#d4a843]/8 rounded-full blur-3xl scale-90"/>
            <HeroIllustration />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: `${totalCards}`, label: "Premium cards" },
            { value: `$${(totalPerkValue / 1000).toFixed(0)}k+`, label: "In tracked perks" },
            { value: "Free", label: "Always" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-[#f5f5f7] rounded-2xl p-4">
              <div className="text-2xl font-bold text-[#1d1d1f]">{value}</div>
              <div className="text-xs text-[#6e6e73] mt-0.5 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-[#f5f5f7] py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-3">Simple by design.</h2>
            <p className="text-lg text-[#6e6e73]">Three steps to seeing everything you have.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: "01", Icon: IconCreditCard, title: "Select your cards", desc: "Pick the premium cards you carry. We pre-load every perk, credit, and benefit for each one." },
              { step: "02", Icon: IconList,       title: "See your full picture", desc: "Every credit, every perk, every entitlement — laid out clearly. See the total dollar value you're entitled to." },
              { step: "03", Icon: IconCheckmarkCircle, title: "Track what you've used", desc: "Mark perks as used. See what's left. Never let a credit expire again." },
            ].map(({ step, Icon, title, desc }) => (
              <div key={step} className="bg-white rounded-3xl p-7 shadow-apple">
                <div className="text-[11px] font-bold text-[#d4a843] tracking-widest uppercase mb-4">{step}</div>
                <div className="mb-4 text-[#1d1d1f]"><Icon size={36}/></div>
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">{title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards preview */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-3">Cards we track.</h2>
            <p className="text-lg text-[#6e6e73]">All the premium cards. All the perks. More added regularly.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CARDS.map((card) => (
              <Link key={card.id} href={`/cards/${card.id}`} className="block bg-white border border-black/[0.06] rounded-3xl p-5 shadow-card hover:shadow-apple-md transition-all hover:-translate-y-0.5">
                {/* Mini card visual */}
                <div className="w-full h-14 rounded-xl mb-4 flex items-center px-4" style={{ background: card.gradient }}>
                  <div>
                    <div className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">{card.issuer}</div>
                    <div className="text-sm font-semibold text-white">{card.name}</div>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[11px] text-[#aeaeb2] font-medium uppercase tracking-wider mb-0.5">Annual perks value</div>
                    <div className="text-2xl font-bold text-[#1d1d1f]">${card.totalPerkValue.toLocaleString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-[#aeaeb2] font-medium uppercase tracking-wider mb-0.5">Annual fee</div>
                    <div className="text-sm font-semibold text-[#6e6e73]">${card.annualFee}</div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[#f5f5f7]">
                  <div className="text-xs text-[#aeaeb2]">{card.perks.length} perks tracked</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1d1d1f] py-20 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6 opacity-80">
            <WelcomeIllustration />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Stop leaving money on the table.
          </h2>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            The average premium cardholder uses less than 60% of their annual credits. Perched changes that.
          </p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-[#d4a843] text-[#1d1d1f] px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-[#ebc04a] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-apple-md">
            Create your free account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 border-t border-black/[0.06]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🐦</span>
            <span className="font-semibold text-[#1d1d1f] text-sm">Perched</span>
          </div>
          <p className="text-xs text-[#aeaeb2]">© 2026 Perched. Not affiliated with any card issuer.</p>
        </div>
      </footer>

    </div>
  );
}
