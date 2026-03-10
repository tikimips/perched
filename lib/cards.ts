export type PerkCategory = "travel" | "dining" | "entertainment" | "shopping" | "wellness" | "lounge" | "insurance" | "other";
export type PerkFrequency = "annual" | "semi-annual" | "monthly" | "quarterly" | "one-time";

export interface Perk {
  id: string;
  name: string;
  description: string;
  value: number; // in dollars; 0 = non-monetary benefit, still trackable
  category: PerkCategory;
  frequency: PerkFrequency;
  notes?: string;
  expires?: string;
  sourceUrl?: string;
  isNew?: boolean;
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
  // Apply / affiliate links
  applyUrl: string;
  affiliateUrl?: string; // TODO: swap for real affiliate URL when monetizing
  rewardsUrl: string;
  prequalUrl?: string;
  // Card metadata
  minCreditScore?: number;
  creditScoreLabel?: string;
  inviteOnly?: boolean;
  initiationFee?: number;
  spendingRequirement?: string;
  cardMaterial?: string;
}

export const CARDS: Card[] = [
  // ─── American Express Platinum ───────────────────────────────────────────
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
    applyUrl: "https://americanexpress.com/us/credit-cards/card/platinum/",
    rewardsUrl: "https://www.americanexpress.com/us/credit-cards/card/platinum/#benefits",
    prequalUrl: "https://www.americanexpress.com/us/credit-cards/pre-qualify/",
    minCreditScore: 720,
    creditScoreLabel: "Excellent (720+)",
    cardMaterial: "Metal",
    perks: [
      // ── Credits ──
      { id: "amex-plat-airline", name: "$200 Airline Fee Credit", description: "Up to $200 per year in statement credits for incidental fees with your one selected qualifying airline (bag fees, seat upgrades, in-flight food, etc.).", value: 200, category: "travel", frequency: "annual", notes: "Select your airline each January. Resets Jan 1." },
      { id: "amex-plat-hotel", name: "$200 Fine Hotels + Resorts Credit", description: "Up to $200 back annually on prepaid Fine Hotels + Resorts or The Hotel Collection bookings made through Amex Travel.", value: 200, category: "travel", frequency: "annual", notes: "Must book through AmexTravel.com" },
      { id: "amex-plat-uber", name: "$200 Uber Cash", description: "$15 in Uber Cash each month, plus a $20 bonus in December — for Uber rides or Uber Eats orders.", value: 200, category: "dining", frequency: "annual", notes: "$15/month + $20 bonus in December. Must add card to Uber app." },
      { id: "amex-plat-digital", name: "$240 Digital Entertainment Credit", description: "$20 per month in statement credits for eligible subscriptions: Disney+, Hulu, ESPN+, Peacock, The New York Times, The Wall Street Journal, and more.", value: 240, category: "entertainment", frequency: "annual", notes: "$20/month. Check eligible merchants at amex.com." },
      { id: "amex-plat-walmart", name: "$155 Walmart+ Credit", description: "Statement credit for one Walmart+ monthly membership ($12.95/month), covering the full annual cost.", value: 155, category: "shopping", frequency: "annual", notes: "Covers $12.95/month Walmart+ fee. Must enroll." },
      { id: "amex-plat-saks", name: "$100 Saks Fifth Avenue Credit", description: "$50 in statement credits at Saks Fifth Avenue stores or saks.com in the first half of the year, and another $50 in the second half.", value: 100, category: "shopping", frequency: "semi-annual", notes: "$50 Jan–Jun, $50 Jul–Dec" },
      { id: "amex-plat-equinox", name: "$300 Equinox Credit", description: "$25 per month in statement credits toward an Equinox club membership or the Equinox+ digital fitness app.", value: 300, category: "wellness", frequency: "annual", notes: "$25/month. Works for Equinox+ app too." },
      { id: "amex-plat-clear", name: "$189 CLEAR Plus Credit", description: "Statement credit that covers the full annual cost of a CLEAR Plus membership, letting you skip the ID check line at 50+ airports.", value: 189, category: "travel", frequency: "annual" },
      { id: "amex-plat-global-entry", name: "$100 Global Entry Credit", description: "Statement credit for the Global Entry application fee (which includes TSA PreCheck). Can be used for authorized users too.", value: 100, category: "travel", frequency: "one-time", notes: "Every 4.5 years. Applies per card member." },

      // ── Lounge Access ──
      { id: "amex-plat-centurion", name: "Centurion Lounge Access", description: "Unlimited access to all American Express Centurion Lounges worldwide — 40+ locations including JFK, LAX, LGA, SEA, DFW, MIA, and international locations.", value: 0, category: "lounge", frequency: "annual", notes: "Up to 2 guests free. Guest policy changed in 2023 — guests require $50 fee unless you spend $75k+/year." },
      { id: "amex-plat-priority-pass", name: "Priority Pass Select Membership", description: "Complimentary Priority Pass Select membership with unlimited visits at 1,300+ partner lounges worldwide (not including PP-branded lounges).", value: 0, category: "lounge", frequency: "annual", notes: "Enroll through your Amex account online." },
      { id: "amex-plat-delta-sky-club", name: "Delta Sky Club Access", description: "When flying Delta, access Delta Sky Club lounges on the day of travel. Up to 10 complimentary visits per year starting Feb 2025.", value: 0, category: "lounge", frequency: "annual", notes: "Limited to 10 visits/year as of Feb 2025. $50/visit after that." },
      { id: "amex-plat-escape-lounge", name: "Escape Lounge Access", description: "Complimentary access to Escape Lounge – The Centurion Studio Partner network at select airports.", value: 0, category: "lounge", frequency: "annual" },
      { id: "amex-plat-lufthansa", name: "Lufthansa Lounge Access", description: "Access to Lufthansa Business Lounges and Senator Lounges when traveling on Lufthansa or Swiss.", value: 0, category: "lounge", frequency: "annual", notes: "Applies on day of Lufthansa/Swiss flight" },

      // ── Hotel Benefits ──
      { id: "amex-plat-fhr-benefits", name: "Fine Hotels + Resorts Benefits", description: "Daily breakfast for two, guaranteed 4pm late checkout, noon early check-in (when available), room upgrade, and a $100 on-property experience credit on every FHR stay.", value: 0, category: "travel", frequency: "annual", notes: "Must book via Amex Travel. Available at 1,600+ properties." },
      { id: "amex-plat-marriott-gold", name: "Marriott Bonvoy Gold Elite Status", description: "Automatic Marriott Bonvoy Gold Elite status, which includes room upgrades, 25% bonus points on stays, and 2pm late checkout.", value: 0, category: "travel", frequency: "annual", notes: "Must enroll by linking your Marriott account. Renews annually." },
      { id: "amex-plat-hilton-gold", name: "Hilton Honors Gold Status", description: "Automatic Hilton Honors Gold status, including room upgrades, complimentary breakfast or daily food/beverage credit, and 80% bonus points on stays.", value: 0, category: "travel", frequency: "annual", notes: "Must enroll by linking your Hilton account. Renews annually." },

      // ── Car Rental Status ──
      { id: "amex-plat-hertz", name: "Hertz President's Circle Status", description: "Complimentary top-tier Hertz President's Circle status — guaranteed car class upgrade, expedited rental, and access to Hertz Gold Plus Rewards Priority Service.", value: 0, category: "travel", frequency: "annual", notes: "Enroll at hertz.com/amex. Renews annually." },
      { id: "amex-plat-avis", name: "Avis Preferred Plus Status", description: "Complimentary Avis Preferred Plus membership for skip-the-counter service and car class upgrades at Avis locations.", value: 0, category: "travel", frequency: "annual", notes: "Enroll through Amex. Renews annually." },
      { id: "amex-plat-national", name: "National Emerald Club Executive Status", description: "Automatic National Car Rental Emerald Club Executive status — choose from a wide selection of vehicles in the Executive section and receive upgrades.", value: 0, category: "travel", frequency: "annual", notes: "Enroll through Amex. Renews annually." },

      // ── Insurance & Protection ──
      { id: "amex-plat-trip-cancel", name: "Trip Cancellation & Interruption Insurance", description: "Up to $10,000 per covered trip ($20,000 per year) if your trip is cancelled or cut short due to a covered reason.", value: 0, category: "insurance", frequency: "annual", notes: "Must pay with card. Covers common carriers only." },
      { id: "amex-plat-trip-delay", name: "Trip Delay Insurance", description: "Up to $500 per covered trip for meals, lodging, and necessary items if your trip is delayed more than 6 hours.", value: 0, category: "insurance", frequency: "annual", notes: "Must pay with card." },
      { id: "amex-plat-baggage-delay", name: "Baggage Delay Insurance", description: "Up to $100/day for 3 days if your checked bags are delayed more than 6 hours by a common carrier.", value: 0, category: "insurance", frequency: "annual" },
      { id: "amex-plat-lost-baggage", name: "Lost Luggage Insurance", description: "Up to $3,000 per covered person for lost or damaged carry-on and checked baggage on a common carrier.", value: 0, category: "insurance", frequency: "annual" },
      { id: "amex-plat-car-rental", name: "Premium Car Rental Protection", description: "Secondary auto rental collision damage waiver on eligible rentals. Optional upgrade to primary coverage available for a small fee per rental.", value: 0, category: "insurance", frequency: "annual", notes: "Must decline the rental company's CDW." },
      { id: "amex-plat-cell-phone", name: "Cell Phone Protection", description: "Up to $800 per claim (up to 2 claims per year) for theft or accidental damage to your cell phone.", value: 0, category: "insurance", frequency: "annual", notes: "$50 deductible. Must pay monthly bill with card." },
      { id: "amex-plat-purchase", name: "Purchase Protection", description: "Covers eligible purchases against accidental damage or theft for up to 90 days from the purchase date — up to $10,000 per claim.", value: 0, category: "insurance", frequency: "annual" },
      { id: "amex-plat-extended-warranty", name: "Extended Warranty", description: "Extends the original manufacturer's warranty by up to 1 additional year on eligible purchases with warranties of 5 years or less.", value: 0, category: "insurance", frequency: "annual" },
      { id: "amex-plat-return", name: "Return Protection", description: "If a merchant won't accept a return, Amex will refund the purchase price up to $300 per item ($1,000 per year) within 90 days.", value: 0, category: "insurance", frequency: "annual" },

      // ── Other Benefits ──
      { id: "amex-plat-concierge", name: "Platinum Concierge", description: "24/7 access to a dedicated Platinum Concierge team who can help with hard-to-get restaurant reservations, event tickets, and personal requests.", value: 0, category: "other", frequency: "annual" },
      { id: "amex-plat-shoprunner", name: "ShopRunner Membership", description: "Complimentary ShopRunner membership for free 2-day shipping at 140+ retailers including Bloomingdale's, Calvin Klein, and Neiman Marcus.", value: 0, category: "shopping", frequency: "annual", notes: "Enroll at shoprunner.com with your Amex card." },
      { id: "amex-plat-iap", name: "International Airline Program", description: "Access to discounted and complimentary upgrades to First and Business class on 20+ airlines when booking through Amex Travel.", value: 0, category: "travel", frequency: "annual", notes: "Requires booking through Amex Travel at a published First/Business fare." },
      { id: "amex-plat-no-foreign", name: "No Foreign Transaction Fees", description: "No fees on purchases made outside the US or in a foreign currency.", value: 0, category: "travel", frequency: "annual" },
    ],
  },

  // ─── American Express Gold ────────────────────────────────────────────────
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
    applyUrl: "https://americanexpress.com/us/credit-cards/card/gold-card/",
    rewardsUrl: "https://www.americanexpress.com/us/credit-cards/card/gold-card/#benefits",
    prequalUrl: "https://www.americanexpress.com/us/credit-cards/pre-qualify/",
    minCreditScore: 700,
    creditScoreLabel: "Good (700+)",
    cardMaterial: "Metal",
    perks: [
      // ── Credits ──
      { id: "amex-gold-dining", name: "$120 Dining Credit", description: "$10 per month in statement credits when you use your card at Grubhub, The Cheesecake Factory, Goldbelly, Wine.com, and Five Guys.", value: 120, category: "dining", frequency: "annual", notes: "$10/month. Must use at enrolled merchants." },
      { id: "amex-gold-uber", name: "$120 Uber Cash", description: "$10 per month in Uber Cash for Uber rides or Uber Eats orders.", value: 120, category: "dining", frequency: "annual", notes: "$10/month. Must add card to Uber app." },
      { id: "amex-gold-resy", name: "$100 Resy Credit", description: "$50 in statement credits semi-annually when dining at Resy restaurants.", value: 100, category: "dining", frequency: "semi-annual", notes: "$50 Jan–Jun, $50 Jul–Dec" },
      { id: "amex-gold-dunkin", name: "$84 Dunkin' Credit", description: "$7 per month in statement credits at Dunkin' locations.", value: 84, category: "dining", frequency: "annual", notes: "$7/month" },

      // ── Hotel Benefits ──
      { id: "amex-gold-hotel", name: "The Hotel Collection Benefits", description: "Room upgrade (when available) and a $100 experience credit on eligible stays of 2+ nights at Hotel Collection properties, booked through Amex Travel.", value: 0, category: "travel", frequency: "annual", notes: "2-night minimum stay required." },

      // ── Insurance & Protection ──
      { id: "amex-gold-baggage", name: "Baggage Insurance Plan", description: "Up to $1,250 for carry-on baggage and $500 for checked baggage in the event of loss, damage, or theft by a common carrier.", value: 0, category: "insurance", frequency: "annual" },
      { id: "amex-gold-car-rental", name: "Car Rental Loss & Damage Insurance", description: "Secondary coverage against theft and damage on eligible car rentals when you decline the rental company's CDW.", value: 0, category: "insurance", frequency: "annual", notes: "Secondary — applies after your personal auto insurance." },
      { id: "amex-gold-trip-delay", name: "Trip Delay Insurance", description: "Up to $300 per covered trip for lodging, meals, and essentials if your trip is delayed more than 12 hours.", value: 0, category: "insurance", frequency: "annual" },
      { id: "amex-gold-purchase", name: "Purchase Protection", description: "Covers eligible purchases against accidental damage or theft for 90 days from the purchase date, up to $10,000 per claim.", value: 0, category: "insurance", frequency: "annual" },
      { id: "amex-gold-extended-warranty", name: "Extended Warranty", description: "Extends manufacturer warranties by 1 year on eligible items with original warranties of 5 years or less.", value: 0, category: "insurance", frequency: "annual" },
      { id: "amex-gold-return", name: "Return Protection", description: "If a merchant won't take it back, Amex will refund up to $300 per item within 90 days of purchase.", value: 0, category: "insurance", frequency: "annual" },

      // ── Other ──
      { id: "amex-gold-no-foreign", name: "No Foreign Transaction Fees", description: "No fees on international purchases.", value: 0, category: "travel", frequency: "annual" },
    ],
  },

  // ─── Chase Sapphire Reserve ───────────────────────────────────────────────
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
    applyUrl: "https://creditcards.chase.com/travel-credit-cards/sapphire/reserve",
    rewardsUrl: "https://creditcards.chase.com/travel-credit-cards/sapphire/reserve",
    prequalUrl: "https://www.chase.com/personal/credit-cards/check-without-applying",
    minCreditScore: 720,
    creditScoreLabel: "Excellent (720+)",
    cardMaterial: "Metal",
    perks: [
      // ── Credits ──
      { id: "csr-travel", name: "$300 Annual Travel Credit", description: "Up to $300 in statement credits per year automatically applied to any travel purchases — flights, hotels, taxis, tolls, parking, Uber, Airbnb, and more.", value: 300, category: "travel", frequency: "annual", notes: "Resets on account anniversary. Very broad definition of 'travel.'" },
      { id: "csr-global-entry", name: "$100 Global Entry / TSA PreCheck Credit", description: "Statement credit for Global Entry ($100) or TSA PreCheck ($85) application fee. Global Entry includes TSA PreCheck.", value: 100, category: "travel", frequency: "one-time", notes: "Every 4 years. Can be used for authorized users too." },
      { id: "csr-doordash-credit", name: "$5/Month DoorDash Credit", description: "$5 per month in DoorDash credits (in-app promo), plus a free DashPass subscription.", value: 60, category: "dining", frequency: "annual", notes: "$5/month through Dec 2027. Activate in the DoorDash app." },

      // ── Memberships ──
      { id: "csr-priority-pass", name: "Priority Pass Select — Unlimited", description: "Unlimited Priority Pass lounge access for the primary cardholder plus 2 guests at 1,400+ lounges worldwide, including Chase's own Sapphire Lounges at BOS, HKG, JFK, LGA, LAS, PHL.", value: 0, category: "lounge", frequency: "annual", notes: "Enroll through Chase. Guest access included." },
      { id: "csr-dashpass", name: "DashPass Membership (Free)", description: "Complimentary DoorDash DashPass membership — free delivery and reduced service fees on eligible orders.", value: 0, category: "dining", frequency: "annual", notes: "Must activate by Dec 31, 2027." },
      { id: "csr-lyft-pink", name: "Lyft Pink All Access Membership", description: "Complimentary Lyft Pink All Access membership ($199/year value) — 15% off rides, priority pickup, relaxed cancellation, and 3 free bike/scooter rides/month.", value: 199, category: "travel", frequency: "annual", notes: "Must activate membership through Chase. Renews annually." },
      { id: "csr-instacart-plus", name: "Instacart+ Membership", description: "Complimentary Instacart+ membership for free delivery on grocery orders over $35.", value: 0, category: "shopping", frequency: "annual", notes: "Enroll through Chase. Up to $15/quarter in credits toward Instacart+ subscription." },

      // ── Insurance ──
      { id: "csr-trip-cancel", name: "Trip Cancellation & Interruption Insurance", description: "Up to $10,000 per person and $20,000 per trip if your trip is cancelled or cut short due to illness, severe weather, or other covered situations.", value: 0, category: "insurance", frequency: "annual" },
      { id: "csr-trip-delay", name: "Trip Delay Reimbursement", description: "Up to $500 per ticket for necessary expenses if your travel is delayed more than 6 hours or requires an overnight stay.", value: 0, category: "insurance", frequency: "annual" },
      { id: "csr-emergency-evac", name: "Emergency Evacuation & Transportation", description: "Up to $100,000 for emergency evacuation and transportation costs if you or a family member requires it during a trip paid with your card.", value: 0, category: "insurance", frequency: "annual" },
      { id: "csr-baggage-delay", name: "Baggage Delay Insurance", description: "Up to $100/day (max 5 days) for essential purchases when your checked bags are delayed more than 6 hours.", value: 0, category: "insurance", frequency: "annual" },
      { id: "csr-lost-baggage", name: "Lost Luggage Reimbursement", description: "Up to $3,000 per passenger for lost or damaged checked or carry-on baggage.", value: 0, category: "insurance", frequency: "annual" },
      { id: "csr-car-rental", name: "Primary Auto Rental CDW", description: "Primary collision damage waiver on eligible car rentals — no need to file with your personal auto insurance first.", value: 0, category: "insurance", frequency: "annual", notes: "Decline the rental company's CDW to activate." },
      { id: "csr-cell-phone", name: "Cell Phone Protection", description: "Up to $1,000 per claim (max 3 claims per year) against theft and damage when you pay your monthly phone bill with the card.", value: 0, category: "insurance", frequency: "annual", notes: "$100 deductible per claim." },
      { id: "csr-purchase", name: "Purchase Protection", description: "Up to $10,000 per claim and $50,000 per year against damage or theft within 120 days of purchase.", value: 0, category: "insurance", frequency: "annual" },
      { id: "csr-extended-warranty", name: "Extended Warranty", description: "Adds 1 additional year to eligible US manufacturer warranties of 3 years or less.", value: 0, category: "insurance", frequency: "annual" },

      // ── Other ──
      { id: "csr-no-foreign", name: "No Foreign Transaction Fees", description: "No fees on international purchases made outside the US.", value: 0, category: "travel", frequency: "annual" },
      { id: "csr-sapphire-lounge", name: "Chase Sapphire Lounge by The Club", description: "Access to Chase's own premium Sapphire Lounges (via Priority Pass Select) at select major airports.", value: 0, category: "lounge", frequency: "annual", notes: "Locations include BOS, HKG, JFK, LAS, LGA, PHL, SFO, SYD." },
    ],
  },

  // ─── Chase Sapphire Preferred ─────────────────────────────────────────────
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
    applyUrl: "https://creditcards.chase.com/travel-credit-cards/sapphire/preferred",
    rewardsUrl: "https://creditcards.chase.com/travel-credit-cards/sapphire/preferred",
    prequalUrl: "https://www.chase.com/personal/credit-cards/check-without-applying",
    minCreditScore: 700,
    creditScoreLabel: "Good (700+)",
    cardMaterial: "Metal",
    perks: [
      // ── Credits ──
      { id: "csp-hotel", name: "$50 Annual Hotel Credit", description: "Up to $50 in statement credits per year for hotel stays booked through Chase Travel.", value: 50, category: "travel", frequency: "annual" },

      // ── Memberships ──
      { id: "csp-dashpass", name: "DashPass Membership (Free)", description: "Complimentary DoorDash DashPass — free delivery and reduced fees on eligible orders.", value: 0, category: "dining", frequency: "annual", notes: "Must activate by Dec 31, 2027." },
      { id: "csp-instacart", name: "Instacart+ Membership + Credits", description: "Complimentary Instacart+ membership plus up to $15 per quarter ($60/year) in statement credits for Instacart+.", value: 60, category: "shopping", frequency: "annual", notes: "$15/quarter. Activate through Chase." },

      // ── Insurance ──
      { id: "csp-trip-cancel", name: "Trip Cancellation & Interruption Insurance", description: "Up to $10,000 per person and $20,000 per trip for covered cancellations or trip interruptions.", value: 0, category: "insurance", frequency: "annual" },
      { id: "csp-trip-delay", name: "Trip Delay Reimbursement", description: "Up to $500 per ticket for necessary expenses if your travel is delayed more than 12 hours.", value: 0, category: "insurance", frequency: "annual" },
      { id: "csp-baggage-delay", name: "Baggage Delay Insurance", description: "Up to $100/day for 5 days on essential purchases when your checked bags are delayed more than 12 hours.", value: 0, category: "insurance", frequency: "annual" },
      { id: "csp-lost-baggage", name: "Lost Luggage Reimbursement", description: "Up to $3,000 per passenger for lost or damaged luggage on a common carrier.", value: 0, category: "insurance", frequency: "annual" },
      { id: "csp-car-rental", name: "Primary Auto Rental CDW", description: "Primary collision damage waiver — covers the full cost of repairs or replacement without involving your personal auto insurance first.", value: 0, category: "insurance", frequency: "annual" },
      { id: "csp-purchase", name: "Purchase Protection", description: "Up to $500 per claim and $50,000 per year against damage or theft for 120 days after purchase.", value: 0, category: "insurance", frequency: "annual" },
      { id: "csp-extended-warranty", name: "Extended Warranty", description: "Adds 1 year to eligible US manufacturer warranties of 3 years or less.", value: 0, category: "insurance", frequency: "annual" },

      // ── Other ──
      { id: "csp-no-foreign", name: "No Foreign Transaction Fees", description: "No foreign transaction fees on purchases made outside the US.", value: 0, category: "travel", frequency: "annual" },
    ],
  },

  // ─── Capital One Venture X ────────────────────────────────────────────────
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
    applyUrl: "https://capitalone.com/credit-cards/venture-x/",
    rewardsUrl: "https://capitalone.com/credit-cards/venture-x/",
    prequalUrl: "https://www.capitalone.com/credit-cards/preapprove/",
    minCreditScore: 720,
    creditScoreLabel: "Excellent (720+)",
    cardMaterial: "Metal",
    perks: [
      // ── Credits ──
      { id: "c1vx-travel", name: "$300 Capital One Travel Credit", description: "$300 annual credit for bookings made through the Capital One Travel portal — flights, hotels, rental cars.", value: 300, category: "travel", frequency: "annual", notes: "Must book through Capital One Travel." },
      { id: "c1vx-anniversary", name: "10,000 Anniversary Bonus Miles", description: "10,000 bonus miles credited every year on your account anniversary — worth $100 in travel.", value: 100, category: "travel", frequency: "annual" },
      { id: "c1vx-global-entry", name: "$100 Global Entry / TSA PreCheck Credit", description: "Statement credit for Global Entry ($100) or TSA PreCheck ($85) application every 4 years.", value: 100, category: "travel", frequency: "one-time", notes: "Every 4 years. Applies to authorized users too." },

      // ── Lounge Access ──
      { id: "c1vx-lounge", name: "Capital One Lounge Access", description: "Unlimited access to Capital One's own premium airport lounges (currently at DFW, IAD, DEN) — full bar, chef-crafted menu, spa, showers, and more.", value: 0, category: "lounge", frequency: "annual", notes: "Up to 2 free guest visits per lounge visit; additional guests $45/each." },
      { id: "c1vx-priority-pass", name: "Priority Pass Select Membership", description: "Unlimited Priority Pass lounge access plus 2 free guests per visit at 1,300+ airport lounges worldwide.", value: 0, category: "lounge", frequency: "annual" },
      { id: "c1vx-plaza-premium", name: "Plaza Premium Lounge Access", description: "Complimentary access to Plaza Premium Lounges worldwide through Priority Pass membership.", value: 0, category: "lounge", frequency: "annual" },

      // ── Insurance ──
      { id: "c1vx-trip-cancel", name: "Trip Cancellation & Interruption Insurance", description: "Up to $2,000 per person for prepaid travel expenses if your trip is cancelled or cut short due to a covered reason.", value: 0, category: "insurance", frequency: "annual" },
      { id: "c1vx-trip-delay", name: "Trip Delay Reimbursement", description: "Up to $500 per ticket for qualifying expenses if a common carrier delays your trip 6+ hours.", value: 0, category: "insurance", frequency: "annual" },
      { id: "c1vx-lost-baggage", name: "Lost Luggage Reimbursement", description: "Up to $3,000 per passenger for lost, damaged, or stolen checked or carry-on baggage.", value: 0, category: "insurance", frequency: "annual" },
      { id: "c1vx-car-rental", name: "Primary Auto Rental CDW", description: "Primary coverage for theft and collision damage on eligible car rentals. No need to involve your personal insurance.", value: 0, category: "insurance", frequency: "annual" },
      { id: "c1vx-cell-phone", name: "Cell Phone Protection", description: "Up to $800 per claim, max 2 claims per year ($25 deductible), for theft or damage when you pay your phone bill with the card.", value: 0, category: "insurance", frequency: "annual" },
      { id: "c1vx-purchase", name: "Purchase Security", description: "Covers eligible purchases against damage or theft for 90 days.", value: 0, category: "insurance", frequency: "annual" },
      { id: "c1vx-extended-warranty", name: "Extended Warranty", description: "Extends manufacturer warranties by 1 additional year on eligible items.", value: 0, category: "insurance", frequency: "annual" },

      // ── Other ──
      { id: "c1vx-no-foreign", name: "No Foreign Transaction Fees", description: "No fees on purchases made outside the US.", value: 0, category: "travel", frequency: "annual" },
      { id: "c1vx-hertz-presidents", name: "Hertz Five Star Status", description: "Complimentary Hertz Five Star status — skip the counter, car class upgrades, and faster service.", value: 0, category: "travel", frequency: "annual", notes: "Enroll through Capital One." },
    ],
  },

  // ─── Citi AAdvantage Executive ────────────────────────────────────────────
  {
    id: "citi-aadvantage-executive",
    name: "AAdvantage® Executive",
    issuer: "Citi",
    network: "Mastercard",
    annualFee: 595,
    totalPerkValue: 650,
    gradient: "linear-gradient(135deg, #c8102e 0%, #9b0d24 100%)",
    textColor: "#ffffff",
    accentColor: "#ff6b6b",
    description: "The premium American Airlines card for frequent AA flyers.",
    applyUrl: "https://www.citi.com/credit-cards/citi-aadvantage-executive-world-elite-mastercard",
    rewardsUrl: "https://www.citi.com/credit-cards/citi-aadvantage-executive-world-elite-mastercard",
    prequalUrl: "https://www.citi.com/credit-cards/pre-qualified-offers.do",
    minCreditScore: 720,
    creditScoreLabel: "Excellent (720+)",
    cardMaterial: "Metal",
    perks: [
      // ── Lounge ──
      { id: "citi-aa-lounge", name: "Admirals Club Membership", description: "Full Admirals Club membership for the primary cardholder plus immediate family members (or up to 2 guests). Access to 50+ Admirals Club lounges worldwide and partner lounges on international itineraries.", value: 0, category: "lounge", frequency: "annual", notes: "Standalone membership is $850/year. Includes authorized user access." },

      // ── Credits ──
      { id: "citi-aa-global-entry", name: "$120 Global Entry / TSA PreCheck Credit", description: "Statement credit for Global Entry ($120) or TSA PreCheck ($85) every 4 years.", value: 120, category: "travel", frequency: "one-time", notes: "Every 4 years." },

      // ── AA-Specific Benefits ──
      { id: "citi-aa-bags", name: "First Checked Bag Free", description: "First checked bag free for you and up to 8 companions on the same reservation on American Airlines flights.", value: 0, category: "travel", frequency: "annual", notes: "Saves ~$35 per person each way. Card must be linked to AAdvantage account." },
      { id: "citi-aa-boarding", name: "Preferred Boarding", description: "Board American Airlines flights in Group 4 — before general boarding but after premium cabin passengers and top-tier status holders.", value: 0, category: "travel", frequency: "annual" },
      { id: "citi-aa-eqm", name: "10,000 EQM Bonus", description: "Earn 10,000 Elite Qualifying Miles (EQMs) toward AAdvantage status once you spend $40,000 in a calendar year.", value: 0, category: "travel", frequency: "annual", notes: "Requires $40k annual spend." },
      { id: "citi-aa-authorized-user", name: "10 Authorized User Memberships", description: "Add up to 10 authorized users who each receive their own Admirals Club membership.", value: 0, category: "lounge", frequency: "annual", notes: "$175 fee per authorized user." },
      { id: "citi-aa-wifi", name: "25% Inflight Wi-Fi Discount", description: "25% savings on inflight Wi-Fi on American Airlines flights when you use your card.", value: 0, category: "travel", frequency: "annual" },
      { id: "citi-aa-award-miles", name: "Miles Expiry Waiver", description: "Your AAdvantage miles never expire as long as you have this card.", value: 0, category: "other", frequency: "annual" },

      // ── Insurance ──
      { id: "citi-aa-trip-cancel", name: "Trip Cancellation & Interruption Protection", description: "Up to $5,000 per trip for non-refundable travel expenses if your trip is cancelled due to a covered reason.", value: 0, category: "insurance", frequency: "annual" },
      { id: "citi-aa-baggage", name: "Lost Baggage Protection", description: "Up to $3,000 per passenger for lost or damaged baggage when traveling on a common carrier.", value: 0, category: "insurance", frequency: "annual" },
      { id: "citi-aa-car-rental", name: "Car Rental Insurance", description: "Coverage against theft and collision on eligible car rentals when you decline the rental company's CDW.", value: 0, category: "insurance", frequency: "annual" },
      { id: "citi-aa-purchase", name: "Purchase Protection", description: "Covers eligible purchases against damage or theft for 90 days.", value: 0, category: "insurance", frequency: "annual" },
      { id: "citi-aa-extended-warranty", name: "Extended Warranty", description: "Extends original US manufacturer warranties of 2 years or less by up to 2 years.", value: 0, category: "insurance", frequency: "annual" },

      // ── Other ──
      { id: "citi-aa-no-foreign", name: "No Foreign Transaction Fees", description: "No fees on international purchases.", value: 0, category: "travel", frequency: "annual" },
    ],
  },

  // ─── US Bank Altitude Reserve ─────────────────────────────────────────────
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
    applyUrl: "https://www.usbank.com/credit-cards/altitude-reserve-visa-infinite-credit-card.html",
    rewardsUrl: "https://www.usbank.com/credit-cards/altitude-reserve-visa-infinite-credit-card.html",
    minCreditScore: 720,
    creditScoreLabel: "Excellent (720+)",
    cardMaterial: "Metal",
    perks: [
      // ── Credits ──
      { id: "usb-travel", name: "$325 Annual Travel / Mobile Wallet Credit", description: "Up to $325 per year in statement credits for travel and mobile wallet purchases — flights, hotels, rideshare, Uber, Lyft, and more.", value: 325, category: "travel", frequency: "annual", notes: "Very broad category includes most mobile pay purchases." },
      { id: "usb-global-entry", name: "$100 Global Entry / TSA PreCheck Credit", description: "Statement credit for Global Entry ($100) or TSA PreCheck every 4.5 years.", value: 100, category: "travel", frequency: "one-time", notes: "Every 4.5 years." },

      // ── Lounge ──
      { id: "usb-priority-pass", name: "Priority Pass Select — 12 Visits", description: "Priority Pass Select membership with 12 complimentary lounge visits per year (any combination of lounges and guests).", value: 0, category: "lounge", frequency: "annual", notes: "$27/visit after 12 complimentary visits." },

      // ── Insurance ──
      { id: "usb-trip-cancel", name: "Trip Cancellation & Interruption Insurance", description: "Up to $2,000 per person for eligible trip cancellation or interruption costs.", value: 0, category: "insurance", frequency: "annual" },
      { id: "usb-trip-delay", name: "Trip Delay Reimbursement", description: "Up to $500 per ticket for necessary expenses if travel is delayed more than 6 hours.", value: 0, category: "insurance", frequency: "annual" },
      { id: "usb-lost-baggage", name: "Lost Luggage Reimbursement", description: "Up to $3,000 per passenger for lost or damaged baggage on a common carrier.", value: 0, category: "insurance", frequency: "annual" },
      { id: "usb-car-rental", name: "Car Rental Collision Damage Waiver", description: "Primary collision damage waiver on eligible rentals when you pay with this card and decline the rental CDW.", value: 0, category: "insurance", frequency: "annual" },
      { id: "usb-travel-accident", name: "Travel Accident Insurance", description: "Common carrier travel accident insurance providing up to $500,000 in coverage.", value: 0, category: "insurance", frequency: "annual" },
      { id: "usb-purchase", name: "Purchase Security", description: "Covers eligible new purchases against theft or damage for up to 90 days.", value: 0, category: "insurance", frequency: "annual" },
      { id: "usb-extended-warranty", name: "Extended Warranty", description: "Extends manufacturer warranties by 1 year on eligible items.", value: 0, category: "insurance", frequency: "annual" },

      // ── Other ──
      { id: "usb-no-foreign", name: "No Foreign Transaction Fees", description: "No fees on purchases made outside the US.", value: 0, category: "travel", frequency: "annual" },
      { id: "usb-concierge", name: "Altitude Reserve Concierge", description: "Access to a dedicated US Bank concierge service for travel reservations, event tickets, dining, and personal assistance.", value: 0, category: "other", frequency: "annual" },
    ],
  },

  // ─── Robinhood Gold Card ───────────────────────────────────────────────────
  {
    id: "robinhood-gold-card",
    name: "Gold Card",
    issuer: "Robinhood",
    network: "Visa",
    annualFee: 60,
    totalPerkValue: 970,
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #3a3a1a 100%)",
    textColor: "#ffffff",
    accentColor: "#f5c842",
    description: "3% cash back on everything. Requires Robinhood Gold ($5/mo).",
    applyUrl: "https://robinhood.com/creditcard/",
    rewardsUrl: "https://robinhood.com/creditcard/",
    minCreditScore: 670,
    creditScoreLabel: "Good (670+)",
    cardMaterial: "Metal",
    perks: [
      // ── Rewards ──
      { id: "rh-gold-cashback-all", name: "3% Cash Back on All Purchases", description: "Unlimited 3% cash back on every purchase, with no rotating categories, no caps, and no annual limit.", value: 0, category: "other", frequency: "annual", notes: "Deposited daily into your Robinhood brokerage account." },
      { id: "rh-gold-cashback-travel", name: "5% Cash Back on Travel (Portal)", description: "5% back on flights, hotels, and car rentals booked through the Robinhood Travel portal.", value: 0, category: "travel", frequency: "annual" },
      { id: "rh-gold-cashback-dining", name: "3% Cash Back on Dining", description: "3% back at restaurants, delivery apps, and food vendors — no enrollment required.", value: 0, category: "dining", frequency: "annual" },

      // ── Insurance & Protection ──
      { id: "rh-gold-phone", name: "Cell Phone Protection", description: "Up to $800 per claim, max $1,000 per year, for theft or accidental damage to your cell phone when you pay your monthly bill with this card.", value: 0, category: "insurance", frequency: "annual", notes: "$50 deductible per claim." },
      { id: "rh-gold-extended", name: "Extended Warranty", description: "Doubles the manufacturer's warranty (up to 1 additional year) on eligible new purchases.", value: 0, category: "insurance", frequency: "annual" },
      { id: "rh-gold-purchase", name: "Purchase Security", description: "Covers eligible purchases against damage or theft for up to 90 days from purchase date.", value: 0, category: "insurance", frequency: "annual" },
      { id: "rh-gold-car-rental", name: "Auto Rental Collision Damage Waiver", description: "Reimbursement for covered theft and collision damages on eligible car rentals.", value: 0, category: "insurance", frequency: "annual", notes: "Decline the rental company's CDW to activate." },
      { id: "rh-gold-trip-cancel", name: "Trip Cancellation & Interruption Insurance", description: "Coverage for non-refundable travel expenses if your trip is cancelled or interrupted due to a covered reason.", value: 0, category: "insurance", frequency: "annual" },

      // ── Lounge ──
      { id: "rh-gold-lounge", name: "Airport Lounge Access", description: "Complimentary airport lounge access through the card's Visa Infinite benefits — access details vary by lounge network.", value: 0, category: "lounge", frequency: "annual", notes: "Visa Infinite benefit — confirm enrollment through Robinhood app." },

      // ── Robinhood Gold Perks (requires $5/mo membership) ──
      { id: "rh-gold-ira-match", name: "3% IRA Contribution Match", description: "Robinhood Gold members get a 3% match on IRA contributions (Traditional or Roth) — one of the highest available matches with no employer required.", value: 0, category: "other", frequency: "annual", notes: "Gold membership required ($5/month). Must keep funds invested for 5 years." },
      { id: "rh-gold-margin", name: "Margin Investing", description: "Borrow at 5.75% interest for margin investing (vs 12% for non-Gold members).", value: 0, category: "other", frequency: "annual", notes: "Gold membership required." },
      { id: "rh-gold-cash-yield", name: "5% Savings APY", description: "Earn 5% APY on uninvested cash in your brokerage account with Robinhood Gold.", value: 0, category: "other", frequency: "annual", notes: "Rate varies. Gold membership required." },

      // ── Other ──
      { id: "rh-gold-no-foreign", name: "No Foreign Transaction Fees", description: "No foreign transaction fees on international purchases.", value: 0, category: "travel", frequency: "annual" },
    ],
  },

  // ─── Gemini Credit Card ───────────────────────────────────────────────────
  {
    id: "gemini-credit-card",
    name: "Credit Card",
    issuer: "Gemini",
    network: "Mastercard",
    annualFee: 0,
    totalPerkValue: 0,
    gradient: "linear-gradient(135deg, #00dcfa 0%, #0080ff 50%, #7c3aed 100%)",
    textColor: "#ffffff",
    accentColor: "#a5f3fc",
    description: "Earn crypto rewards in real time on every purchase. No annual fee.",
    applyUrl: "https://www.gemini.com/credit-card",
    rewardsUrl: "https://www.gemini.com/credit-card",
    minCreditScore: 640,
    creditScoreLabel: "Fair (640+)",
    cardMaterial: "Plastic",
    perks: [
      // ── Rewards ──
      { id: "gem-dining", name: "3% Back on Dining (in Crypto)", description: "3% back in Bitcoin or your preferred cryptocurrency on all restaurant, food delivery, and dining purchases. Rewards credited to your Gemini account in real time.", value: 0, category: "dining", frequency: "annual", notes: "Value fluctuates with crypto prices. Choose from 60+ crypto assets." },
      { id: "gem-grocery", name: "2% Back on Groceries (in Crypto)", description: "2% back in crypto on grocery store purchases.", value: 0, category: "shopping", frequency: "annual" },
      { id: "gem-everything", name: "1% Back on All Other Purchases (in Crypto)", description: "1% back in the crypto of your choice on every other purchase. No caps, no limits. Credited instantly.", value: 0, category: "other", frequency: "annual" },

      // ── Mastercard World Elite Benefits ──
      { id: "gem-cell-phone", name: "Cell Phone Protection", description: "Up to $1,000 per claim for theft or accidental damage when you pay your phone bill with this card. Mastercard World Elite benefit.", value: 0, category: "insurance", frequency: "annual", notes: "$50 deductible." },
      { id: "gem-car-rental", name: "Car Rental Insurance", description: "Secondary coverage for theft and collision on eligible rentals. Mastercard World Elite benefit.", value: 0, category: "insurance", frequency: "annual" },
      { id: "gem-trip-cancel", name: "Trip Cancellation & Interruption Protection", description: "Up to $1,500 per person for eligible trip cancellation or interruption expenses.", value: 0, category: "insurance", frequency: "annual" },
      { id: "gem-purchase", name: "Purchase Assurance", description: "Covers eligible purchases against damage or theft for 90 days.", value: 0, category: "insurance", frequency: "annual" },
      { id: "gem-extended-warranty", name: "Extended Warranty", description: "Doubles the original manufacturer's warranty (up to 1 additional year) on eligible purchases.", value: 0, category: "insurance", frequency: "annual" },
      { id: "gem-concierge", name: "Mastercard World Elite Concierge", description: "24/7 Mastercard concierge service for travel reservations, restaurant bookings, event tickets, and more.", value: 0, category: "other", frequency: "annual" },
      { id: "gem-hotel-benefits", name: "Priceless Cities & Hotel Benefits", description: "Access to Mastercard Priceless Experiences and preferred rates and upgrades at select hotels.", value: 0, category: "travel", frequency: "annual" },

      // ── Other ──
      { id: "gem-no-foreign", name: "No Foreign Transaction Fees", description: "No fees on international purchases.", value: 0, category: "travel", frequency: "annual" },
      { id: "gem-instant-rewards", name: "Real-Time Crypto Rewards", description: "Every reward is credited to your Gemini account instantly after each purchase — no waiting for a statement to close.", value: 0, category: "other", frequency: "annual" },
    ],
  },

  // ─── Amex Centurion Black Card ────────────────────────────────────────────
  {
    id: "amex-centurion",
    name: "Centurion® Card",
    issuer: "American Express",
    network: "Amex",
    annualFee: 5000,
    initiationFee: 10000,
    totalPerkValue: 15000,
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #3a3a3a 100%)",
    textColor: "#ffffff",
    accentColor: "#d4a843",
    description: "The most exclusive charge card in existence. By invitation only. No credit limit. Anodized titanium construction.",
    applyUrl: "https://www.americanexpress.com/us/credit-cards/card/centurion/",
    rewardsUrl: "https://www.americanexpress.com/us/credit-cards/card/centurion/",
    inviteOnly: true,
    spendingRequirement: "~$350,000–$500,000+/year on American Express cards",
    minCreditScore: 800,
    creditScoreLabel: "Exceptional (800+) — invite only",
    cardMaterial: "Anodized Titanium",
    perks: [
      { id: "centurion-advisor", name: "Personal Centurion Advisor", description: "A dedicated, named Centurion Advisor assigned personally to you — available 24/7. Not a call center. Your advisor knows your preferences, travel patterns, and handles requests proactively.", value: 0, category: "other", frequency: "annual" },
      { id: "centurion-lounge", name: "Centurion Lounge + Unlimited Guests", description: "Unlimited access to all Centurion Lounges worldwide with unlimited complimentary guests — no guest fee, ever. Includes the most premium airports: JFK, LAX, SFO, LAS, SEA, DFW, MIA, and international locations.", value: 0, category: "lounge", frequency: "annual" },
      { id: "centurion-delta-status", name: "Delta Platinum Medallion Status", description: "Automatic Delta Platinum Medallion status — complimentary upgrades, priority check-in, extra miles earning, and priority boarding on Delta flights.", value: 0, category: "travel", frequency: "annual" },
      { id: "centurion-marriott-status", name: "Marriott Bonvoy Titanium Elite Status", description: "Automatic Marriott Bonvoy Titanium Elite status — suite upgrades, late checkout, 75% bonus points, and access to Your24 flexible check-in/out.", value: 0, category: "travel", frequency: "annual" },
      { id: "centurion-hilton-status", name: "Hilton Honors Diamond Status", description: "Automatic Hilton Honors Diamond status — room upgrades, executive lounge access, complimentary breakfast, and 100% bonus points.", value: 0, category: "travel", frequency: "annual" },
      { id: "centurion-companion-ticket", name: "Complimentary Companion Airline Ticket", description: "One complimentary companion airline ticket per year (up to $500 value) when you purchase a qualifying full-fare ticket.", value: 500, category: "travel", frequency: "annual" },
      { id: "centurion-airline-credit", name: "$500 Airline Fee Credit", description: "Up to $500 per year in statement credits for airline fees with your selected airline — bags, seat upgrades, lounge day passes, and more.", value: 500, category: "travel", frequency: "annual" },
      { id: "centurion-fhr-credit", name: "$500 Fine Hotels + Resorts Credit", description: "Up to $500 per year toward Fine Hotels + Resorts stays booked through Amex Travel.", value: 500, category: "travel", frequency: "annual" },
      { id: "centurion-fhr-benefits", name: "Enhanced Fine Hotels + Resorts Benefits", description: "Automatic suite upgrades, spa treatment for two, daily breakfast for two, and a dedicated property liaison at every Fine Hotels + Resorts stay.", value: 0, category: "travel", frequency: "annual" },
      { id: "centurion-wheels-up", name: "Private Jet Access via Wheels Up", description: "Preferred access to Wheels Up private aviation network — discounted membership and access to charter flights across the US and internationally.", value: 0, category: "travel", frequency: "annual" },
      { id: "centurion-rental-car-status", name: "Top-Tier Rental Car Status (All Major Brands)", description: "Automatic top-tier elite status with all major rental car companies — Hertz President's Circle, Avis Chairman's, National Executive Elite, Sixt Platinum, and Silvercar preferred access.", value: 0, category: "travel", frequency: "annual" },
      { id: "centurion-clear-credit", name: "$500 CLEAR Plus Credit", description: "Up to $500 per year in CLEAR Plus credits — covers the cardholder plus up to 3 family members' CLEAR memberships.", value: 500, category: "travel", frequency: "annual" },
      { id: "centurion-saks-credit", name: "$250 Saks Fifth Avenue Credit", description: "$125 semi-annually ($250/year) in statement credits at Saks Fifth Avenue stores or saks.com.", value: 250, category: "shopping", frequency: "annual", notes: "$125 Jan–Jun, $125 Jul–Dec" },
      { id: "centurion-equinox-credit", name: "$500 Equinox Credit", description: "Up to $500 per year in statement credits toward Equinox club membership or Equinox+ digital app.", value: 500, category: "wellness", frequency: "annual" },
      { id: "centurion-bio-events", name: "By Invitation Only Events", description: "Exclusive access to fashion week front rows, Grammy after-parties, award show seating, private gallery openings, and curated cultural experiences unavailable to the public.", value: 0, category: "entertainment", frequency: "annual" },
      { id: "centurion-no-limit", name: "No Preset Spending Limit", description: "No preset credit limit — your spending power adjusts based on your usage, payment history, and financial profile.", value: 0, category: "other", frequency: "annual" },
      { id: "centurion-trip-cancel", name: "Trip Cancellation Insurance ($10k/trip)", description: "Up to $10,000 per trip in coverage for non-refundable travel expenses if your trip is cancelled or interrupted due to a covered reason.", value: 0, category: "insurance", frequency: "annual" },
      { id: "centurion-purchase-protection", name: "Purchase Protection ($10k/claim)", description: "Up to $10,000 per claim and $50,000 per year against theft or accidental damage for eligible purchases.", value: 0, category: "insurance", frequency: "annual" },
    ],
  },

  // ─── JPMorgan Reserve Card ────────────────────────────────────────────────
  {
    id: "jpmorgan-reserve",
    name: "Reserve Card",
    issuer: "J.P. Morgan",
    network: "Visa",
    annualFee: 595,
    totalPerkValue: 1200,
    gradient: "linear-gradient(135deg, #2c1810 0%, #8B6914 50%, #C9A84C 100%)",
    textColor: "#ffffff",
    accentColor: "#F2D88B",
    description: "The world's most prestigious metal card. Palladium and gold construction, weighing 28 grams. J.P. Morgan Private Bank clients only.",
    applyUrl: "https://www.jpmorgan.com/wealth-management",
    rewardsUrl: "https://www.jpmorgan.com/wealth-management",
    inviteOnly: true,
    spendingRequirement: "Must be a J.P. Morgan Private Client (typically $10M+ in investable assets)",
    minCreditScore: 800,
    creditScoreLabel: "Exceptional (800+) — J.P. Morgan Private Client only",
    cardMaterial: "Palladium & Gold (28-gram metal card)",
    perks: [
      { id: "jpmorgan-priority-pass", name: "Priority Pass Select — Unlimited", description: "Unlimited Priority Pass lounge access for the cardholder and guests at 1,400+ airport lounges worldwide.", value: 0, category: "lounge", frequency: "annual" },
      { id: "jpmorgan-travel-credit", name: "$300 Annual Travel Credit", description: "Up to $300 per year in statement credits for travel purchases — flights, hotels, car rentals, and more.", value: 300, category: "travel", frequency: "annual" },
      { id: "jpmorgan-anniversary-points", name: "10,000 Anniversary Bonus Points", description: "10,000 bonus Ultimate Rewards-equivalent points on your account anniversary each year — worth approximately $100 in travel.", value: 100, category: "travel", frequency: "annual" },
      { id: "jpmorgan-global-entry", name: "$120 Global Entry Credit", description: "Statement credit for Global Entry application fee (includes TSA PreCheck) every 4 years.", value: 120, category: "travel", frequency: "one-time", notes: "Every 4 years." },
      { id: "jpmorgan-hotel-benefits", name: "Luxury Hotel Benefits", description: "Complimentary breakfast, room upgrade, and a $100 on-property credit at luxury partner hotels when booked through J.P. Morgan's preferred hotel program.", value: 0, category: "travel", frequency: "annual" },
      { id: "jpmorgan-car-rental", name: "Primary Auto Rental CDW", description: "Primary collision damage waiver on eligible car rentals — no need to involve your personal auto insurance first.", value: 0, category: "insurance", frequency: "annual" },
      { id: "jpmorgan-trip-cancel", name: "Trip Cancellation & Interruption Insurance", description: "Coverage for non-refundable travel expenses if your trip is cancelled or interrupted due to a covered reason.", value: 0, category: "insurance", frequency: "annual" },
      { id: "jpmorgan-concierge", name: "J.P. Morgan Concierge", description: "24/7 dedicated J.P. Morgan concierge service for travel arrangements, restaurant reservations, event tickets, and personal requests.", value: 0, category: "other", frequency: "annual" },
      { id: "jpmorgan-restaurant-priority", name: "Priority Restaurant Reservations", description: "Priority access to coveted restaurant reservations at top-tier establishments through J.P. Morgan's exclusive restaurant network.", value: 0, category: "dining", frequency: "annual" },
      { id: "jpmorgan-no-foreign", name: "No Foreign Transaction Fees", description: "No fees on purchases made outside the US or in a foreign currency.", value: 0, category: "travel", frequency: "annual" },
      { id: "jpmorgan-palladium-card", name: "The Physical Palladium Card", description: "The card itself weighs 28 grams — made from palladium and gold. One of the most recognizable status symbols in the world.", value: 0, category: "other", frequency: "one-time" },
    ],
  },

  // ─── Luxury Card Mastercard Gold Card ─────────────────────────────────────
  {
    id: "luxury-card-gold",
    name: "Mastercard® Gold Card™",
    issuer: "Barclays / Luxury Card",
    network: "Mastercard",
    annualFee: 995,
    totalPerkValue: 800,
    gradient: "linear-gradient(135deg, #C9A84C 0%, #b8933c 50%, #D4A843 100%)",
    textColor: "#ffffff",
    accentColor: "#F2D88B",
    description: "24-karat gold-plated stainless steel card. The highest tier Luxury Card with premium travel benefits.",
    applyUrl: "https://www.luxurycard.com/gold-card/",
    rewardsUrl: "https://www.luxurycard.com/gold-card/benefits/",
    prequalUrl: "https://www.luxurycard.com/gold-card/",
    minCreditScore: 750,
    creditScoreLabel: "Excellent (750+)",
    cardMaterial: "24K Gold-Plated Stainless Steel",
    perks: [
      { id: "luxury-gold-airline-credit", name: "$200 Airline Credit", description: "Up to $200 per year in statement credits for airline fees and purchases.", value: 200, category: "travel", frequency: "annual" },
      { id: "luxury-gold-hotel-credit", name: "$200 Hotel Credit", description: "Up to $200 per year in statement credits for hotel stays.", value: 200, category: "travel", frequency: "annual" },
      { id: "luxury-gold-airfare-redemption", name: "2% Airfare Redemption", description: "Redeem rewards at 2% value when used for airfare — higher than most cards' base redemption rates.", value: 0, category: "travel", frequency: "annual" },
      { id: "luxury-gold-cashback", name: "2% Cash Back Redemption", description: "Redeem rewards at 2% value for cash back deposits.", value: 0, category: "other", frequency: "annual" },
      { id: "luxury-gold-priority-pass", name: "Priority Pass Unlimited Membership", description: "Unlimited Priority Pass lounge access at 1,300+ lounges worldwide.", value: 0, category: "lounge", frequency: "annual" },
      { id: "luxury-gold-concierge", name: "24/7 Luxury Card Concierge", description: "Round-the-clock concierge service for travel, dining, entertainment, and personal requests.", value: 0, category: "other", frequency: "annual" },
      { id: "luxury-gold-global-entry", name: "$120 Global Entry Credit", description: "Statement credit for Global Entry ($120) or TSA PreCheck application fee.", value: 120, category: "travel", frequency: "one-time", notes: "Every 4.5 years." },
      { id: "luxury-gold-car-rental", name: "Primary Rental CDW", description: "Primary collision damage waiver on eligible car rentals.", value: 0, category: "insurance", frequency: "annual" },
      { id: "luxury-gold-trip-cancel", name: "Trip Cancellation Insurance", description: "Coverage for non-refundable travel expenses for covered cancellations and interruptions.", value: 0, category: "insurance", frequency: "annual" },
      { id: "luxury-gold-purchase", name: "Purchase Protection", description: "Covers eligible purchases against accidental damage or theft.", value: 0, category: "insurance", frequency: "annual" },
      { id: "luxury-gold-extended-warranty", name: "Extended Warranty", description: "Extends original manufacturer warranties on eligible purchases.", value: 0, category: "insurance", frequency: "annual" },
      { id: "luxury-gold-cell-phone", name: "Cell Phone Protection", description: "Coverage for theft or accidental damage to your cell phone.", value: 0, category: "insurance", frequency: "annual" },
      { id: "luxury-gold-no-foreign", name: "No Foreign Transaction Fees", description: "No fees on international purchases.", value: 0, category: "travel", frequency: "annual" },
    ],
  },

  // ─── Luxury Card Mastercard Black Card ────────────────────────────────────
  {
    id: "luxury-card-black",
    name: "Mastercard® Black Card™",
    issuer: "Barclays / Luxury Card",
    network: "Mastercard",
    annualFee: 495,
    totalPerkValue: 400,
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)",
    textColor: "#ffffff",
    accentColor: "#888888",
    description: "Carbon fiber construction with PVD coating. Premium benefits at a mid-tier annual fee.",
    applyUrl: "https://www.luxurycard.com/black-card/",
    rewardsUrl: "https://www.luxurycard.com/black-card/benefits/",
    prequalUrl: "https://www.luxurycard.com/black-card/",
    minCreditScore: 740,
    creditScoreLabel: "Excellent (740+)",
    cardMaterial: "Carbon Fiber with PVD Coating",
    perks: [
      { id: "luxury-black-airline-credit", name: "$100 Airline Credit", description: "Up to $100 per year in statement credits for airline fees and purchases.", value: 100, category: "travel", frequency: "annual" },
      { id: "luxury-black-airfare-redemption", name: "2% Airfare Redemption", description: "Redeem rewards at 2% value when used for airfare purchases.", value: 0, category: "travel", frequency: "annual" },
      { id: "luxury-black-cashback", name: "1.5% Cash Back Redemption", description: "Redeem rewards at 1.5% value for cash back deposits.", value: 0, category: "other", frequency: "annual" },
      { id: "luxury-black-priority-pass", name: "Priority Pass (10 Visits/Year)", description: "Priority Pass membership with 10 complimentary lounge visits per year at 1,300+ airport lounges.", value: 0, category: "lounge", frequency: "annual", notes: "10 visits per year. Additional visits may be charged." },
      { id: "luxury-black-concierge", name: "24/7 Luxury Card Concierge", description: "Round-the-clock concierge service for travel, dining, and personal requests.", value: 0, category: "other", frequency: "annual" },
      { id: "luxury-black-global-entry", name: "$100 Global Entry Credit", description: "Statement credit for Global Entry or TSA PreCheck application fee.", value: 100, category: "travel", frequency: "one-time", notes: "Every 4.5 years." },
      { id: "luxury-black-car-rental", name: "Car Rental CDW", description: "Collision damage waiver on eligible car rentals.", value: 0, category: "insurance", frequency: "annual" },
      { id: "luxury-black-trip-cancel", name: "Trip Cancellation Insurance", description: "Coverage for non-refundable travel expenses for covered cancellations.", value: 0, category: "insurance", frequency: "annual" },
      { id: "luxury-black-purchase", name: "Purchase Protection", description: "Covers eligible purchases against accidental damage or theft.", value: 0, category: "insurance", frequency: "annual" },
      { id: "luxury-black-cell-phone", name: "Cell Phone Protection", description: "Coverage for theft or accidental damage to your cell phone.", value: 0, category: "insurance", frequency: "annual" },
      { id: "luxury-black-no-foreign", name: "No Foreign Transaction Fees", description: "No fees on international purchases.", value: 0, category: "travel", frequency: "annual" },
    ],
  },

  // ─── Dubai First Royale Mastercard ────────────────────────────────────────
  {
    id: "dubai-first-royale",
    name: "Royale Mastercard",
    issuer: "Dubai First Bank",
    network: "Mastercard",
    annualFee: 0,
    totalPerkValue: 0,
    gradient: "linear-gradient(135deg, #7c4f00 0%, #C9A84C 50%, #f5e6a3 100%)",
    textColor: "#1a1000",
    accentColor: "#7c4f00",
    description: "~200 cards exist worldwide. Gold border, inlaid real diamond. No spending limit. No rules. A personal relationship manager 24/7.",
    applyUrl: "https://www.dubaifirst.com/",
    rewardsUrl: "https://www.dubaifirst.com/",
    inviteOnly: true,
    spendingRequirement: "By invitation only. Approximately 200 cards exist worldwide. Issued exclusively to royalty and the world's wealthiest individuals.",
    minCreditScore: 850,
    creditScoreLabel: "Invitation only — royalty and billionaires",
    cardMaterial: "Gold border with inlaid real diamond",
    perks: [
      { id: "dubai-royale-no-limit", name: "No Credit Limit — No Rules", description: "Absolutely no credit limit and no spending restrictions. Buy anything, anywhere, at any time. No questions asked.", value: 0, category: "other", frequency: "annual" },
      { id: "dubai-royale-relationship-manager", name: "Personal Relationship Manager 24/7", description: "A dedicated personal relationship manager — available around the clock, any day of the year, to handle any request worldwide.", value: 0, category: "other", frequency: "annual" },
      { id: "dubai-royale-lounge", name: "Unlimited VIP Lounge Access (Global)", description: "Unlimited access to VIP and VVIP airport lounges globally — including private terminals used by heads of state and royalty.", value: 0, category: "lounge", frequency: "annual" },
      { id: "dubai-royale-suite-upgrades", name: "Automatic Suite Upgrades — All Luxury Hotels", description: "Automatic suite upgrades at every luxury hotel worldwide. No request necessary.", value: 0, category: "travel", frequency: "annual" },
      { id: "dubai-royale-private-jet", name: "Private Jet & Superyacht Charter Access", description: "On-demand access to private jet and superyacht charters anywhere in the world, arranged by your relationship manager.", value: 0, category: "travel", frequency: "annual" },
      { id: "dubai-royale-private-shopping", name: "After-Hours Private Shopping", description: "Exclusive after-hours private shopping experiences at Hermès, Chanel, Louis Vuitton, and other luxury houses — arranged solely for you.", value: 0, category: "shopping", frequency: "annual" },
      { id: "dubai-royale-medical", name: "VIP Medical Services", description: "Access to the world's top private medical facilities and physicians, with your relationship manager coordinating all arrangements.", value: 0, category: "wellness", frequency: "annual" },
      { id: "dubai-royale-travel-insurance", name: "Unlimited Global Travel Insurance", description: "Comprehensive, unlimited global travel insurance with no coverage caps — covering any situation, anywhere in the world.", value: 0, category: "insurance", frequency: "annual" },
      { id: "dubai-royale-physical-card", name: "The Physical Diamond-Inlaid Card", description: "The card itself — gold border with a real inlaid diamond. Approximately 200 exist in the world. A physical symbol of belonging to the world's most exclusive financial tier.", value: 0, category: "other", frequency: "one-time" },
    ],
  },
];

export const CARD_MAP: Record<string, Card> = Object.fromEntries(CARDS.map((c) => [c.id, c]));

export const CATEGORIES: Record<PerkCategory, { label: string }> = {
  travel:        { label: "Travel"        },
  dining:        { label: "Dining"        },
  entertainment: { label: "Entertainment" },
  shopping:      { label: "Shopping"      },
  wellness:      { label: "Wellness"      },
  lounge:        { label: "Lounges"       },
  insurance:     { label: "Insurance"     },
  other:         { label: "Other"         },
};
