import { Logo } from "@/components/Logo";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center gap-2">
          <Logo/>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-5 py-14">
        <h1 className="text-4xl font-bold text-[#1d1d1f] mb-2">Privacy Policy</h1>
        <p className="text-[#aeaeb2] text-sm mb-10">Last updated: March 2026</p>

        <div className="prose prose-sm max-w-none space-y-8 text-[#1d1d1f]">
          <section>
            <h2 className="text-xl font-bold mb-3">What we collect</h2>
            <p className="text-[#6e6e73] leading-relaxed">When you create a Perched account, we collect your email address and, if you sign in with Google, your name and profile picture. We also store the credit cards you select, which perks you've marked as used, and any points balances you enter manually.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">What we don't collect</h2>
            <p className="text-[#6e6e73] leading-relaxed">We do not collect your credit card numbers, account numbers, financial institution login credentials, or any payment information. Perched is a perk-tracking tool only — we never connect to your bank or card accounts.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">How we use your data</h2>
            <p className="text-[#6e6e73] leading-relaxed">Your data is used solely to power your Perched dashboard — showing your perks, tracking what you've used, and saving your preferences. We do not sell your data, share it with advertisers, or use it for any purpose beyond operating the product.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Data storage</h2>
            <p className="text-[#6e6e73] leading-relaxed">Your data is stored securely using Supabase, hosted on AWS in the US-West region. All data is encrypted in transit and at rest. Row-level security ensures your data is only accessible to you.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Your rights</h2>
            <p className="text-[#6e6e73] leading-relaxed">You can delete your account and all associated data at any time by contacting us. We'll remove everything within 30 days.</p>
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
