import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Perched — Your Benefits, All In One Place", template: "%s | Perched" },
  description: "Track every perk, credit, and reward across all your premium cards. See exactly what you're entitled to — and make sure you use it.",
  keywords: ["credit card perks tracker", "premium card benefits", "rewards tracker", "Amex Platinum perks", "Chase Sapphire benefits"],
  openGraph: {
    title: "Perched — Your Benefits, All In One Place",
    description: "Track every perk, credit, and reward across all your premium cards.",
    url: "https://perched.life",
    siteName: "Perched",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Perched", description: "Your benefits, all in one place." },
  metadataBase: new URL("https://perched.life"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
