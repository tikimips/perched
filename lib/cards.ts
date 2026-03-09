export type PerkCategory = "travel" | "dining" | "entertainment" | "shopping" | "wellness" | "lounge" | "insurance" | "other";
export type PerkFrequency = "annual" | "semi-annual" | "monthly" | "quarterly" | "one-time";

export interface Perk {
  id: string;
  name: string;
  description: string;
  value: number; // in dollars
  category: PerkCategory;
  frequency: PerkFrequency;
  notes?: string;
  expires?: string; // "December 31" etc
}

export interface Card {
  id: string;
  name: string;
  issuer: string;
  network: string;
  annualFee: number;
  totalPerkValue: number;
  gradient: string;
  textColor: string;
  accentColor: string;
  description: string;
  perks: Perk[];
}

export const CARDS: Card[] = [
  {
    id: "amex-platinum",
    name: "Platinum Card",
    issuer: "American Express",
    network: "Amex",
    annualFee: 695,
    totalPerkValue: 1544,
    gradient: "linear-gradient(135deg, #8B8FA8 0%, #6B7080 40%, #9B9FB8 100%)",
    textColor: "#ffffff",
    accentColor: "#C8CAD8",
    description: "The flagship premium card for the frequent traveler.",
    perks: [
      { id: "amex-plat-airline", name: "$200 Airline Fee Credit", description: "Up to $200 per year in airline incidental fee credits with your selected airline.", value: 200, category: "travel", frequency: "annual", notes: "Must select one qualifying airline each year" },
      { id: "amex-plat-hotel", name: "$200 Hotel Credit", description: "Up to $200 in statement credits annually for prepaid Fine Hotels + Resorts or The Hotel Collection bookings.", value: 200, category: "travel", frequency: "annual", notes: "Must book through Amex Travel" },
      { id: "amex-plat-uber", name: "$200 Uber Cash", description: "$15 in Uber Cash each month, plus a bonus $20 in December. Use for Uber rides or Uber Eats.", value: 200, category: "dining", frequency: "annual", notes: "$15/month + $20 bonus in December" },
      { id: "amex-plat-digital", name: "$240 Digital Entertainment Credit", description: "$20 per month in statement credits for eligible digital streaming and entertainment subscriptions.", value: 240, category: "entertainment", frequency: "annual", notes: "Covers Disney+, Hulu, ESPN+, Peacock, NYT, WSJ" },
      { id: "amex-plat-walmart", name: "$155 Walmart+ Credit", description: "Statement credit to cover the monthly cost of Walmart+ membership ($12.95/month).", value: 155, category: "shopping", frequency: "annual" },
      { id: "amex-plat-saks", name: "$100 Saks Fifth Avenue Credit", description: "$50 in statement credits at Saks Fifth Avenue twice a year.", value: 100, category: "shopping", frequency: "semi-annual", notes: "$50 Jan-Jun, $50 Jul-Dec" },
      { id: "amex-plat-equinox", name: "$300 Equinox Credit", description: "$25 per month in statement credits for Equinox memberships or Equinox+ app.", value: 300, category: "wellness", frequency: "annual" },
      { id: "amex-plat-clear", name: "$189 CLEAR Plus Credit", description: "Annual statement credit for CLEAR Plus membership, which speeds you through airport security.", value: 189, category: "travel", frequency: "annual" },
      { id: "amex-plat-global-entry", name: "$100 Global Entry Credit", description: "Statement credit for Global Entry application fee (every 4.5 years). Includes TSA PreCheck.", value: 100, category: "travel", frequency: "one-time", notes: "Every 4.5 years" },
      { id: "amex-plat-lounge", name: "Global Lounge Collection", description: "Access to 1,400+ airport lounges worldwide including all Centurion Lounges, Priority Pass, and Delta Sky Clubs.", value: 400, category: "lounge", frequency: "annual", notes: "Estimated annual value for frequent travelers" },
      { id: "amex-plat-fhr", name: "Fine Hotels + Resorts Benefits", description: "Room upgrade, complimentary breakfast, $100 property credit, early check-in, 4pm late checkout.", value: 300, category: "travel", frequency: "annual", notes: "Per eligible stay" },
    ],
  },
  {
    id: "amex-gold",
    name: "Gold Card",
    issuer: "American Express",
    network: "Amex",
    annualFee: 250,
    totalPerkValue: 480,
    gradient: "linear-gradient(135deg, #C9A84C 0%, #A67C2E 50%, #D4A843 100%)",
    textColor: "#ffffff",
    accentColor: "#F2D88B",
    description: "Built for people who spend on food and dining.",
    perks: [
      { id: "amex-gold-dining", name: "$120 Dining Credit", description: "$10 per month in statement credits at Grubhub, The Cheesecake Factory, Goldbelly, Wine.com, and Five Guys.", value: 120, category: "dining", frequency: "annual", notes: "$10/month at select merchants" },
      { id: "amex-gold-uber", name: "$120 Uber Cash", description: "$10 in Uber Cash each month for Uber rides and Uber Eats.", value: 120, category: "dining", frequency: "annual", notes: "$10/month, must add card to Uber app" },
      { id: "amex-gold-resy", name: "$100 Resy Credit", description: "Up to $50 in statement credits semi-annually when dining at Resy restaurants.", value: 100, category: "dining", frequency: "semi-annual", notes: "$50 Jan-Jun, $50 Jul-Dec" },
      { id: "amex-gold-dunkin", name: "$84 Dunkin' Credit", description: "$7 per month in statement credits at Dunkin' locations.", value: 84, category: "dining", frequency: "annual", notes: "$7/month" },
      { id: "amex-gold-hotel", name: "Hotel Collection", description: "Room upgrade and $100 experience credit at The Hotel Collection properties.", value: 100, category: "travel", frequency: "annual", notes: "On eligible stays of 2+ nights" },
    ],
  },
  {
    id: "chase-sapphire-reserve",
    name: "Sapphire Reserve",
    issuer: "Chase",
    network: "Visa",
    annualFee: 550,
    totalPerkValue: 900,
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    textColor: "#ffffff",
    accentColor: "#e94560",
    description: "The premium travel card with a generous annual travel credit.",
    perks: [
      { id: "csr-travel", name: "$300 Annual Travel Credit", description: "Up to $300 in statement credits for travel purchases automatically each account anniversary year.", value: 300, category: "travel", frequency: "annual", notes: "Automatically applies to any travel purchase" },
      { id: "csr-lounge", name: "Priority Pass Select", description: "Unlimited Priority Pass lounge access for you and 2 guests at 1,400+ lounges worldwide.", value: 300, category: "lounge", frequency: "annual" },
      { id: "csr-global-entry", name: "$100 Global Entry Credit", description: "Statement credit for Global Entry or TSA PreCheck application every 4 years.", value: 100, category: "travel", frequency: "one-time", notes: "Every 4 years" },
      { id: "csr-doordash", name: "DashPass Membership", description: "Complimentary DoorDash DashPass subscription (free delivery, reduced service fees).", value: 96, category: "dining", frequency: "annual", notes: "Must activate by Dec 31, 2027" },
      { id: "csr-lyft", name: "Lyft Pink All Access", description: "Complimentary Lyft Pink All Access membership with 15% off rides and member pricing.", value: 199, category: "travel", frequency: "annual" },
      { id: "csr-instacart", name: "$50 Instacart+ Credit", description: "Up to $50 in statement credits annually for Instacart+ membership or purchases.", value: 50, category: "shopping", frequency: "annual" },
    ],
  },
  {
    id: "chase-sapphire-preferred",
    name: "Sapphire Preferred",
    issuer: "Chase",
    network: "Visa",
    annualFee: 95,
    totalPerkValue: 195,
    gradient: "linear-gradient(135deg, #1c4b82 0%, #2563eb 100%)",
    textColor: "#ffffff",
    accentColor: "#93c5fd",
    description: "The best entry-level travel rewards card on the market.",
    perks: [
      { id: "csp-hotel", name: "$50 Annual Hotel Credit", description: "$50 in statement credits for hotel stays booked through Chase Travel each account anniversary year.", value: 50, category: "travel", frequency: "annual" },
      { id: "csp-doordash", name: "DashPass Membership", description: "Complimentary DashPass subscription for free delivery and reduced service fees on DoorDash.", value: 96, category: "dining", frequency: "annual" },
      { id: "csp-instacart", name: "$15 Instacart+ Credit", description: "Up to $15 per quarter in Instacart+ statement credits (up to $60/year).", value: 60, category: "shopping", frequency: "annual", notes: "$15/quarter" },
    ],
  },
  {
    id: "capital-one-venture-x",
    name: "Venture X",
    issuer: "Capital One",
    network: "Visa",
    annualFee: 395,
    totalPerkValue: 600,
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
    textColor: "#ffffff",
    accentColor: "#d4a843",
    description: "Premium travel rewards with a straightforward value proposition.",
    perks: [
      { id: "c1vx-travel", name: "$300 Capital One Travel Credit", description: "$300 in annual credits for bookings made through Capital One Travel portal.", value: 300, category: "travel", frequency: "annual" },
      { id: "c1vx-anniversary", name: "10,000 Anniversary Miles", description: "10,000 bonus miles every year on your account anniversary, worth $100 in travel.", value: 100, category: "travel", frequency: "annual" },
      { id: "c1vx-lounge", name: "Priority Pass + Capital One Lounges", description: "Unlimited Priority Pass lounge access plus Capital One's own growing network of lounges.", value: 200, category: "lounge", frequency: "annual" },
      { id: "c1vx-global-entry", name: "$100 Global Entry Credit", description: "Statement credit for Global Entry or TSA PreCheck application every 4 years.", value: 100, category: "travel", frequency: "one-time", notes: "Every 4 years" },
    ],
  },
  {
    id: "citi-aadvantage-executive",
    name: "AAdvantage Executive",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 595,
    totalPerkValue: 650,
    gradient: "linear-gradient(135deg, #c8102e 0%, #9b0d24 100%)",
    textColor: "#ffffff",
    accentColor: "#ff6b6b",
    description: "The premium American Airlines card for frequent AA flyers.",
    perks: [
      { id: "citi-aa-lounge", name: "Admirals Club Membership", description: "Full Admirals Club membership for you and immediate family or up to two guests.", value: 850, category: "lounge", frequency: "annual", notes: "Standalone membership is $850/year" },
      { id: "citi-aa-global-entry", name: "$100 Global Entry Credit", description: "Statement credit for Global Entry or TSA PreCheck every 5 years.", value: 100, category: "travel", frequency: "one-time", notes: "Every 5 years" },
      { id: "citi-aa-bags", name: "First Checked Bag Free", description: "First checked bag free for you and up to 8 travel companions on American Airlines flights.", value: 60, category: "travel", frequency: "annual", notes: "Per round trip, up to 9 travelers" },
    ],
  },
  {
    id: "us-bank-altitude-reserve",
    name: "Altitude Reserve",
    issuer: "US Bank",
    network: "Visa",
    annualFee: 400,
    totalPerkValue: 625,
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%)",
    textColor: "#ffffff",
    accentColor: "#7ec8e3",
    description: "The hidden gem for mobile wallet users and real-time mobile pay.",
    perks: [
      { id: "usb-travel", name: "$325 Annual Travel Credit", description: "Up to $325 per year for travel and mobile wallet purchases (Uber, Lyft, etc. count).", value: 325, category: "travel", frequency: "annual" },
      { id: "usb-lounge", name: "Priority Pass Select", description: "Priority Pass membership with 12 complimentary lounge visits per year.", value: 200, category: "lounge", frequency: "annual" },
      { id: "usb-global-entry", name: "$100 Global Entry Credit", description: "Reimbursement for Global Entry or TSA PreCheck application fee every 4.5 years.", value: 100, category: "travel", frequency: "one-time" },
    ],
  },
];

export const CARD_MAP: Record<string, Card> = Object.fromEntries(CARDS.map((c) => [c.id, c]));

export const CATEGORIES: Record<PerkCategory, { label: string; emoji: string }> = {
  travel:        { label: "Travel",        emoji: "✈️" },
  dining:        { label: "Dining",        emoji: "🍽️" },
  entertainment: { label: "Entertainment", emoji: "🎬" },
  shopping:      { label: "Shopping",      emoji: "🛍️" },
  wellness:      { label: "Wellness",      emoji: "💆" },
  lounge:        { label: "Lounges",       emoji: "🛋️" },
  insurance:     { label: "Insurance",     emoji: "🛡️" },
  other:         { label: "Other",         emoji: "✨" },
};
