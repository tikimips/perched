import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🐦</span>
            <span className="font-semibold text-[#1d1d1f] tracking-tight">Perched</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-5 py-14">
        <h1 className="text-4xl font-bold text-[#1d1d1f] mb-2">Terms of Service</h1>
        <p className="text-[#aeaeb2] text-sm mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-[#1d1d1f]">
          <section>
            <h2 className="text-xl font-bold mb-3">The service</h2>
            <p className="text-[#6e6e73] leading-relaxed">Perched is a free tool that helps you track the perks, credits, and benefits associated with your premium credit cards. We provide informational content only — we are not affiliated with, endorsed by, or connected to any credit card issuer, bank, or financial institution.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Accuracy of perk information</h2>
            <p className="text-[#6e6e73] leading-relaxed">We do our best to keep perk details accurate and up to date, but card benefits change. Always verify current terms directly with your card issuer before making financial decisions. Perched is not responsible for errors or outdated information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Your account</h2>
            <p className="text-[#6e6e73] leading-relaxed">You're responsible for keeping your account secure. Don't share your login credentials. We reserve the right to suspend or terminate accounts that violate these terms or are used for abusive purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">No financial advice</h2>
            <p className="text-[#6e6e73] leading-relaxed">Nothing on Perched constitutes financial, legal, or tax advice. Perched is a productivity tool. Consult a qualified professional for advice specific to your situation.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Changes to these terms</h2>
            <p className="text-[#6e6e73] leading-relaxed">We may update these terms from time to time. Continued use of Perched after changes are posted means you accept the updated terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Contact</h2>
            <p className="text-[#6e6e73] leading-relaxed">Questions? Email us at <a href="mailto:hello@perched.life" className="text-[#007aff] hover:underline">hello@perched.life</a>.</p>
          </section>
        </div>
      </main>

      <footer className="py-8 px-5 border-t border-black/[0.06] mt-10">
        <div className="max-w-3xl mx-auto flex gap-4 text-xs text-[#aeaeb2]">
          <Link href="/privacy" className="hover:text-[#6e6e73]">Privacy</Link>
          <Link href="/terms" className="hover:text-[#6e6e73]">Terms</Link>
          <Link href="/" className="hover:text-[#6e6e73]">← Perched</Link>
        </div>
      </footer>
    </div>
  );
}
