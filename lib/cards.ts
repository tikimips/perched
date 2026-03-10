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
