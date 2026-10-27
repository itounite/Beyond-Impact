// =====================================================================
// Beyond Impact — Site Content
// =====================================================================
// EDIT THIS FILE to update copy, stats, team members, portfolio, etc.
// All text on the site is sourced from this single file.
// =====================================================================

import heroFields from "@/assets/hero-fields.jpg";
import heroBio from "@/assets/hero-bio.jpg";
import heroLab from "@/assets/hero-lab.jpg";
import heroEarth from "@/assets/hero-earth.jpg";
import transitionRupture from "@/assets/transition-rupture.jpg";
import sectorMaterials from "@/assets/sector-materials.jpg";
import sectorNutrition from "@/assets/sector-nutrition.jpg";
import sectorPharma from "@/assets/sector-pharma.jpg";
import sectorIngredients from "@/assets/sector-ingredients.jpg";
import teamClaire from "@/assets/team/claire.png";
import teamTarja from "@/assets/team/tarja.png";
import teamSagar from "@/assets/team/sagar.png";
import teamAnthony from "@/assets/team/anthony.png";
import teamHanna from "@/assets/team/hanna.png";
import teamJody from "@/assets/team/jody.png";

export const site = {
  brand: "Beyond Impact",
  tagline: "Accelerating the transition to a kinder, cleaner, healthier world.",
  contactEmail: "invest@beyondimpact.vc",
  founded: 2017,
  navLinks: [
    { label: "About", href: "/about" },
    { label: "Funds", href: "/funds" },
    { label: "Blue Economy", href: "/blue-economy" },
    { label: "Advisory", href: "/advisory" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Insights", href: "/insights" },
    { label: "Media", href: "/media" },
  ],
  social: [
    { label: "Twitter", href: "https://twitter.com/BeyondInvest" },
    { label: "Facebook", href: "https://www.facebook.com/beyondinvesting/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/beyond-impact-advisors/" },
  ],
  funding: {
    label: "Submit your fundraise",
    intro: "If you are building a venture relevant to our thesis, we'd love to hear from you.",
    href: "https://bit.ly/fundregenerative",
    display: "Submit your fundraise",
  },
  investors: {
    label: "Register your interest",
    intro: "Investors interested in Beyond Impact and its products can register interest here.",
    href: "https://share.hsforms.com/1sLQdL_wxSiSpkrZHLNMJAwbovuv",
    display: "Register your interest",
  },
};

export const home = {
  hero: {
    eyebrow: "Pioneer Impact VC · Article 9 SFDR · Est. 2017",
    headlineLead: "Capital for the",
    headlineScript: "transition",
    headlineRest: "economy.",
    sub: "Beyond Impact is an Article 9 SFDR impact fund platform investing in superior, scalable, and sustainable biosolutions across global developed markets — a pioneer impact venture capital, climate VC and bioeconomy investor across advanced nutrition, human food, pet food, functional ingredients, life sciences and biomaterials.",
    primaryCta: { label: "Explore the platform", href: "/funds" },
    secondaryCta: { label: "Read our thesis", href: "/about" },
    image: heroFields,
  },
  missionCallout: {
    eyebrow: "The Transition Economy",
    title: "The animal supply chain is not at risk — it is actively breaking.",
    body: "Avian flu has destroyed >100M U.S. layer hens. Marine ingredients in aquafeed dropped from 25% to 3%. Western per-capita meat is in structural decline. We back the companies replacing what's failing — with humane, decarbonizing, regenerative innovation.",
    image: transitionRupture,
    stats: [
      { value: ">168M", label: "U.S. birds culled by H5N1 since Feb 2022" },
      { value: "25% → 3%", label: "Marine ingredients in aquafeed (2000–2023)" },
      { value: "+275%", label: "U.S. egg price surge post 18% flock depopulation" },
      { value: "−6%", label: "EU & U.S. peak dairy herd decline YoY" },
    ],
  },
  stats: [
    { value: "$191M", label: "AUM across two VC funds, co-investments and a public fund" },
    { value: "23+", label: "Portfolio companies across Fund I & Fund II" },
    { value: "$1B+", label: "Raised by portfolio post-investment" },
    { value: "100+", label: "Years of combined team investing experience" },
  ],
  sectors: [
    { name: "Advanced Nutrition", desc: "New protein sources, human & pet nutrition.", image: sectorNutrition, market: "$1.9T" },
    { name: "Ingredients", desc: "Functional ingredients, enablers & capacity builders.", image: sectorIngredients, market: "$200B+" },
    { name: "Life Sciences", desc: "Cruelty-free personal & health care, organ-chips.", image: sectorPharma, market: "$500B" },
    { name: "Materials", desc: "Next-gen, bio-based, circular materials.", image: sectorMaterials, market: "$1.5T" },
  ],
  partnership: {
    title: "Partner with the platform built for the next decade of impact.",
    body: "We advise, design and launch flagship funds — and co-build specialised vehicles with aligned strategic partners.",
    cta: { label: "Email invest@beyondimpact.vc", href: "mailto:invest@beyondimpact.vc" },
  },
};

export const about = {
  hero: {
    eyebrow: "About — Impact VC, Climate VC, Bioeconomy Investor",
    title: "Pioneer impact VC, built on conviction.",
    sub: "Founded by Claire Smith in 2017, Beyond Impact is an Article 9 (SFDR) impact venture capital platform — a pioneer impact VC, climate investor and bioeconomy investor backing plant-based, biodiversity-positive biosolutions, advanced nutrition, human food and pet food across global developed markets.",
    image: heroLab,
  },
  values: [
    {
      tag: "01",
      title: "Humane Innovation",
      body: "We replace animal-derived inputs across nutrition, ingredients, pharmaceuticals and materials — eliminating suffering at industrial scale.",
    },
    {
      tag: "02",
      title: "Decarbonization",
      body: "Precision fermentation and cellular agriculture deliver 50–80% lower cost AND a fraction of the emissions footprint of legacy supply chains.",
    },
    {
      tag: "03",
      title: "Bio-Economy",
      body: "Regenerative inputs — micro-algae, fungi, pulses, fibres — feeding circular ingredient systems with structural margin advantages.",
    },
  ],
  team: [
    {
      name: "Claire Smith",
      role: "Founder & CIO",
      flags: "",
      photo: teamClaire,
      bio: "Founder of Beyond Investing and the Beyond Animal platform with 35+ years of financial management experience. Former Head of Equity Quantitative Strategies at Albourne Partners Limited, Head of Investor Derivative Marketing at UBS, and Head of Convertible Sales at Swiss Bank Corporation. Among the earliest investors in Geltor, EVERY, Mosa Meat, SuperMeat and BlueNalu.",
    },
    {
      name: "Tarja Zudemberg",
      role: "Partner",
      flags: "",
      photo: teamTarja,
      bio: "20+ years of direct experience in venture capital, impact investing and SME financing. Spent 13 years as CEO and Fund Manager at Almi Invest, executing 100+ transactions across 60+ portfolio companies and holding 30 board seats. Active angel investor in early-stage Nordic startups focused on sustainable goals.",
    },
    {
      name: "Sagar Tandon",
      role: "Partner",
      flags: "",
      photo: teamSagar,
      bio: "Specialised bioeconomy fund designer. Historically involved in setting up multiple impact funds, including Gray Matters Capital (family office managing over $200 million in AUM), edLABS, and an Australian Government DFAT-backed impact fund. Active Mentor at the Good Food Institute India & APAC, FI Food APAC, and Fashion for Good (Netherlands). Advisor at 2X Global Forum and 2X Ignite. Board seats: Swedish Algae Factory (Sweden), TissenBioFarm (South Korea) and Perfat (Finland).",
    },
    {
      name: "Anthony Stam",
      role: "Partner",
      flags: "",
      photo: teamAnthony,
      bio: "20+ years of direct experience in Private Equity, M&A and Corporate Finance across Europe and North America, with extensive focus across complex capital structures — including equity, structured equity, mezzanine and debt. Board seat: YeastUp (Switzerland).",
    },
    {
      name: "Hanna Y. Gabay",
      role: "Partner",
      flags: "",
      photo: teamHanna,
      bio: "20+ years of operational experience, program management and scale-up execution. Serves on several not-for-profit boards — currently acting as Chairwoman at Freedom 4 Animals and Director of Global Campaigns for the Plant-Based Treaty and the Animal Save Movement. Portfolio board representative (Observer) at Les Nouveaux Affineurs.",
    },
    {
      name: "Jody Rasch",
      role: "Partner",
      flags: "",
      photo: teamJody,
      bio: "Pioneer advanced nutrition, human food and pet food investor. Former Trustee at VegInvest, Board Member at VegFund and Woodstock Farm Sanctuary, and Advisor to Crowdbureau. Early vehicle backing includes Wild Earth, Clara Foods, Geltor, BlueNalu, Veggie Grill, NutPods and Just Inc. Portfolio board representation at Renewal Mill.",
    },
  ],
  impactPillars: {
    eyebrow: "Impact Tracking Pillars",
    title: "Three layers of impact — measured, not implied.",
    sub: "Every portfolio company is underwritten and tracked against a triple-pillar framework. No green halo, no vanity metrics.",
    pillars: [
      {
        icon: "Sprout",
        name: "Biodiversity",
        points: [
          "Track animal lives spared and suffering avoided by replacing livestock products with ethical alternatives.",
          "Quantify land liberation and rewilding from a reduced industrial-agriculture footprint.",
          "Measure net-positive ecosystem gains using standardised biodiversity restoration metrics.",
        ],
      },
      {
        icon: "Globe2",
        name: "Climate",
        points: [
          "Target aggressive methane reduction for immediate cooling effects on the planet.",
          "Prioritise innovations delivering both emission avoidance and active carbon sequestration.",
          "Benchmark every portfolio company against global net-zero and Paris-aligned pathways.",
        ],
      },
      {
        icon: "HeartPulse",
        name: "Health & Wellbeing",
        points: [
          "Combat chronic disease by removing harmful animal-based ingredients from global diets.",
          "Reduce the rise of antibiotic-resistant microbes driven by routine livestock antibiotic use.",
          "Mitigate zoonotic pandemic risk by decoupling supply chains from factory farming.",
        ],
      },
    ],
  },
  awards: [
    {
      year: "2026",
      issuer: "ImpactAssets IA 50",
      title: "Emerging Impact Manager — 15 Years of IA 50",
    },
    {
      year: "2024",
      issuer: "Wealth & Finance — Ethical Finance Awards",
      title: "Best Impact-Focused Fund Management Firm",
    },
    {
      year: "2023",
      issuer: "Wealth & Finance — Ethical Finance Awards",
      title: "Best Investment Company",
    },
    {
      year: "2023",
      issuer: "Environmental Finance — Sustainable Investment Awards",
      title: "Environmental Fund of the Year — Global",
    },
    {
      year: "Certified",
      issuer: "ESG AAA Rating",
      title: "Best ESG Fund — Climate Focused",
    },
    {
      year: "Classified",
      issuer: "SFDR Classification",
      title: "Article 9 (SFDR) Impact Fund Platform",
    },
  ],
};

export const funds = {
  hero: {
    eyebrow: "Investment Strategy",
    title: "An impact fund platform — not a single fund.",
    sub: "Luxembourg SICAV-RAIF umbrella, with established AIFM and institutional-quality administration.",
    image: heroBio,
  },
  vehicles: [
    {
      name: "Beyond Impact Ventures",
      status: "Flagship VC platform",
      focus: "Article 9 SFDR venture funds investing seed → Series A across animal-free nutrition, ingredients, life sciences and materials, structured under a Luxembourg SICAV-RAIF umbrella.",
      highlights: ["Fund I — closed", "Fund II — active", "23+ portfolio companies", "Article 9 SFDR"],
    },
    {
      name: "Co-Investments",
      status: "Open — rolling",
      focus: "Direct co-investment opportunities into high-conviction follow-ons, secondaries and pro-rata rounds alongside Beyond Impact Ventures. Investor-aligned terms, full diligence memos shared.",
      highlights: ["Single-asset vehicles", "Sterling & EUR structures", "Investor-aligned terms"],
    },
  ],
  sister: {
    name: "Beyond Investing",
    tag: "Sister entity",
    desc: "Public-market platform for the transition economy — sponsor and adviser to a US Exchange Traded Fund, and creator of ethical and sustainable stock indexes.",
    cta: { label: "Visit beyondinvesting.com", href: "https://beyondinvesting.com" },
  },
  philosophy: {
    title: "Scaling the impact, not the hype.",
    body: "Disciplined selection over market hype. Our specific B2B filters protected the platform from high-profile capital traps — backing companies that started in high-margin niches and earned their way to scale.",
  },
};

export const advisory = {
  hero: {
    eyebrow: "Advisory Services",
    title: "Impact Investing — as a Service.",
    sub: "We help corporates, philanthropists and International NGOs design, structure and launch impact vehicles aligned with the transition towards a kinder, cleaner, healthier world.",
    image: heroLab,
  },
  thesis: {
    title: "Your capital, our specific thesis.",
    body: "We bring nine years of pioneer impact VC discipline to every mandate — anchored in one thesis: a kinder, cleaner, healthier world. Every vehicle we design is underwritten against the same three pillars we apply to our own funds — Biodiversity, Climate, and Health & Wellbeing — so impact is accurately measured.",
    pillars: [
      { tag: "Biodiversity", body: "Animal lives spared and suffering avoided, land liberated, ecosystems restored." },
      { tag: "Climate", body: "Methane reduction, emission avoidance, Paris-aligned pathways." },
      { tag: "Health", body: "Chronic disease reduction, antibiotic-resistant microbe risk, zoonotic risk decoupling, public-safety gains." },
    ],
    benefits: [
      "Additionality — net-new impact created by deployed capital",
      "Sustainability and liquidity for legacy grant programmes",
      "Specific origination across the transition economy",
      "Access to disruptive talent, models and distribution",
    ],
  },
  audiences: [
    {
      tag: "Corporate Sustainability",
      name: "Corporate Sustainability Programs",
      body: "Beyond Impact manages corporate sustainability capital with no return expectations but 100%+ recycling — turning grant budgets into perpetual impact engines.",
      flow: "Invest + reinvest",
    },
    {
      tag: "Corporates",
      name: "Corporations",
      body: "We deploy corporate impact capital with return expectations — Venture Capital-as-a-Service for strategic investors seeking financial and impact returns.",
      flow: "Market returns",
    },
    {
      tag: "International NGOs",
      name: "International NGOs",
      body: "Like corporations, International NGOs invest in impact ventures to bring sustainability and reduce external dependencies — generating below-market returns that fund mission.",
      flow: "Below-market returns",
    },
    {
      tag: "Philanthropists",
      name: "Philanthropists & Foundations",
      body: "Bespoke vehicles for HNW individuals and family foundations seeking deep specific impact in animal-free, climate-aligned innovation.",
      flow: "Mission-aligned",
    },
  ],
  services: [
    {
      step: "01",
      title: "Investability & market scoping",
      body: "Assessing the investability and bankability of the vehicle and conducting market scoping across the transition economy.",
    },
    {
      step: "02",
      title: "Vehicle structuring",
      body: "Developing the vehicle structure — portfolio construction, investment thesis, fund structure, investment instruments, and fund economics.",
    },
    {
      step: "03",
      title: "Process & governance design",
      body: "Designing key processes at fund and portfolio level, plus providing human-capital services for team build-out and governance.",
    },
    {
      step: "04",
      title: "Launch & management",
      body: "Launching and managing the fund — sourcing, selection, deal closures, portfolio management and investor reporting.",
    },
  ],
  cta: {
    title: "Build a vehicle with us.",
    body: "If your organisation is exploring impact capital deployment in the transition economy, we'd welcome a conversation.",
    label: "Email invest@beyondimpact.vc",
    href: "mailto:invest@beyondimpact.vc",
  },
};

export const portfolio = {
  hero: {
    eyebrow: "Portfolio",
    title: "A working directory of the transition economy.",
    sub: "Active holdings across Fund I and Fund II. Filter by fund, sector or geography.",
  },
  companies: [
    // Fund I & II shared
    { name: "Algama", sector: "Nutrition", funds: ["Fund I", "Fund II"], region: "EU", desc: "French company harvesting algae to create sustainable, egg-reducing ingredients for industrial bakeries." },
    { name: "Geltor", sector: "Ingredients", funds: ["Fund I", "Fund II"], region: "US", desc: "US-based manufacturer of biodesigned, animal-free collagen and proteins for skincare and food." },
    { name: "Gourmey", sector: "Nutrition", funds: ["Fund I", "Fund II"], region: "EU", desc: "French pioneering cultivated meat company; first in the EU to receive regulatory approval (Singapore) for cultivated chicken / foie gras." },
    { name: "Jay & Joy", sector: "Nutrition", funds: ["Fund I", "Fund II"], region: "EU", desc: "French producer of organic, plant-based fermented cheeses with nationwide retail presence." },
    { name: "Renewal Mill", sector: "Ingredients", funds: ["Fund I", "Fund II"], region: "US", desc: "Award-winning US company upcycling food manufacturing by-products into high-quality flours and baking mixes." },
    // Fund I only
    { name: "BlueNalu", sector: "Nutrition", funds: ["Fund I"], region: "US", desc: "US-based cellular aquaculture leader nearing FDA approval for its cultivated Bluefin Tuna Toro." },
    { name: "Emulate", sector: "Health", funds: ["Fund I"], region: "US", desc: "Boston-based developer of Organs-on-Chips technology used to replace animal testing in drug discovery." },
    { name: "EVERY", sector: "Ingredients", funds: ["Fund I"], region: "US", desc: "Formerly Clara Foods — uses precision fermentation to create animal-free egg proteins." },
    { name: "Mosa Meat", sector: "Nutrition", funds: ["Fund I"], region: "EU", desc: "Dutch pioneer in cultivated beef, currently utilising a UK regulatory sandbox for cultivated beef fat." },
    { name: "PLHYDE", sector: "Materials", funds: ["Fund I"], region: "US", desc: "The Plant Leather Company — transforming fruit and vegetable waste into plastic-free, luxury regenerative leather." },
    { name: "Plant Veda", sector: "Nutrition", funds: ["Fund I"], region: "NA", desc: "Canadian company producing probiotic, plant-based dairy products inspired by traditional Indian recipes." },
    { name: "SuperMeat", sector: "Nutrition", funds: ["Fund I"], region: "Europe", desc: "Israeli startup developing technology to produce nature-identical meat from chicken cells at competitive price." },
    { name: "SwissDeCode", sector: "Health", funds: ["Fund I"], region: "EU", desc: "Swiss firm providing on-site DNA testing solutions to ensure food safety and plant-based compliance." },
    { name: "Umami Bioworks", sector: "Nutrition", funds: ["Fund I"], region: "APAC", desc: "Singapore-based B2B technology provider using AI to cultivate high-demand marine species and ingredients." },
    // Fund II only
    { name: "Ingrediome", sector: "Ingredients", funds: ["Fund II"], region: "EU", desc: "US/Israel firm using cyanobacterial precision fermentation to produce bio-identical meat proteins from CO₂." },
    { name: "Paleo", sector: "Ingredients", funds: ["Fund II"], region: "EU", desc: "Belgian precision fermentation company producing bio-identical heme proteins." },
    { name: "Perfat", sector: "Ingredients", funds: ["Fund II"], region: "EU", desc: "Finnish food ingredients company using patented oleogel technology for healthy, sustainable plant-based solid fats." },
    { name: "Swedish Algae Factory", sector: "Ingredients and personal care", funds: ["Fund II"], region: "EU", desc: "A climate-positive biotechnology startup that commercializes the large-scale production of diatoms (a type of microalgae) to harvest their nanoporous silica shells, which they brand as Algica®." },
    { name: "Tissen BioFarm", sector: "Nutrition", funds: ["Fund II"], region: "APAC", desc: "South Korean biotech producing premium whole-cut cultivated meats and high-margin K-beauty ingredients." },
    { name: "Yeastup", sector: "Ingredients", funds: ["Fund II"], region: "EU", desc: "Swiss B2B company upcycling spent brewer's yeast into premium nutritional proteins and fibres for human consumption." },
  ],
};

export const insights = {
  hero: {
    eyebrow: "Field Notes",
    title: "Strategy, signal and the long arc of the transition.",
    sub: "Perspectives from the team on supply-chain rupture, dealflow discipline, and what comes next.",
  },
  articles: [
    {
      tag: "Thesis",
      title: "The animal supply chain is breaking — here's the data.",
      excerpt: "Avian flu, marine feed scarcity, regulatory shocks. We map the structural fractures and the companies positioned to replace them.",
      date: "Mar 2026",
      readTime: "9 min",
    },
    {
      tag: "Discipline",
      title: "Good misses: why our B2B filter said no to unicorns.",
      excerpt: "Beyond Meat. Oatly. New Age Meats. A frank look at the companies we passed on — and why discipline beat momentum.",
      date: "Feb 2026",
      readTime: "7 min",
    },
    {
      tag: "Sector",
      title: "Precision fermentation: the 50–80% cost-down is real.",
      excerpt: "RethinkX projections meet operating reality. What our portfolio is delivering at gram-scale and tonne-scale.",
      date: "Jan 2026",
      readTime: "12 min",
    },
    {
      tag: "Market",
      title: "Pet nutrition: the $120B niche hiding a transition story.",
      excerpt: "Pet food is the canary for animal-free adoption. Margin structure, retailer behaviour, and the brands winning shelf.",
      date: "Dec 2025",
      readTime: "6 min",
    },
  ],
  newsletter: {
    title: "Join the Trailblazers.",
    body: "Quarterly notes from the front of the transition economy. No spam, no pitchdecks — just signal.",
  },
};

export const blueEconomy = {
  hero: {
    eyebrow: "Press Release · 13 April 2026",
    title: "Beyond Impact and UMITO Partners launch a strategic partnership for the Blue Economy.",
    sub: "Advancing the global \"New Blue Economy\" — bridging Europe, Japan and Asia-Pacific to scale ocean innovation across food, biotech, clean tech and climate solutions.",
    sourceLabel: "Originally published on umitopartners.com",
    sourceHref: "https://umitopartners.com/en/2026/04/beyondimpact-partnership/",
  },
  intro: [
    "UMITO Partners, a Japan-based ocean sustainability consulting platform, and Beyond Impact, a Europe-based impact investment platform focused on innovative technology, today announced a strategic partnership to accelerate the blue economy through impact investment and ecosystem building for a resilient ocean across Europe, Japan, and Asia-Pacific.",
    "This partnership aims to bridge Europe, Japan and Asia-Pacific's advanced ocean technologies with industrial and implementation capabilities, enabling scalable ocean innovations to drive ocean resilience while accelerating economic growth.",
  ],
  sections: [
    {
      title: "Why Blue Economy collaboration, and why now",
      body: [
        "The ocean sits at the intersection of economic growth, food security, climate stability, and biodiversity. According to the OECD, the ocean economy is projected to expand from approximately USD 1.5 trillion in 2010 to USD 3 trillion by 2030.",
        "Yet a significant financing gap remains for sustainable ocean initiatives, and many promising technologies and business models have yet to translate into scalable, commercially viable solutions.",
        "Meanwhile global protein demand is projected to rise 35–56% by 2050, while wild capture fisheries have plateaued at ~92 million tonnes annually and agricultural land already occupies nearly half of the world's habitable land. Food systems account for ~21–37% of global greenhouse gas emissions.",
        "Against this backdrop, the ocean sector is undergoing a structural transition — from an extractive \"take and use\" model to a regenerative model that leverages technology to enhance sustainability and resilience.",
      ],
    },
    {
      title: "Emerging regenerative industries",
      list: [
        "B2B advanced nutrition, human food and pet food platforms supplying high-value functional ingredients",
        "Next-generation aquaculture systems enabling sustainable, scalable seafood production",
        "Algae and microbial production platforms for feed, protein and industrial applications",
        "Marine biotechnology applied to pharmaceuticals, biomaterials and nutrition",
        "Decarbonization technologies in maritime sectors, including low-carbon fuels and vessel efficiency",
        "Port electrification, ocean monitoring, and environmental data infrastructure",
        "Nature-based solutions such as ocean carbon removal and biodiversity restoration",
      ],
    },
    {
      title: "From mitigation to additionality",
      body: [
        "Europe has built strong capabilities in ocean deep tech and R&D, but opportunities for real-world deployment and commercialization remain limited. Japan and broader Asia offer robust implementation platforms through fisheries and coastal industries, but often lack access to advanced technologies and global innovation networks.",
        "By combining their respective strengths, the two organizations aim to build an implementation model that connects technology, on-the-ground ecosystems and markets — evolving ocean impact from mitigation to additionality: creating entirely new forms of value that restore ecosystems while generating sustainable economic opportunities.",
      ],
    },
    {
      title: "Scope of the partnership",
      list: [
        "Connecting ocean startups across Europe, Japan and Asia with established industrial ecosystems",
        "Joint analysis of technological trends and market opportunities in the ocean domain",
        "Supporting partnerships to enable pilot projects and commercialization",
        "Building cross-border ecosystems through international networks",
      ],
    },
    {
      title: "Outlook — the Blue Frontier Fund",
      body: [
        "UMITO Partners and Beyond Impact will work to establish a cross-regional collaboration platform spanning Europe, Japan and Asia. At the core is the development of an international ecosystem — the \"Blue Frontier Fund\" — designed to connect ocean technologies with real-world implementation environments across food tech, biotechnology, ocean tech, clean tech and climate solutions.",
      ],
    },
  ],
  quotes: [
    {
      who: "Shunji Murakami",
      role: "CEO, UMITO Partners",
      text: "The ocean environment is undergoing rapid transformation, with direct implications for the foundations of our societies and industries. This partnership represents a concrete step toward connecting advanced European technologies with implementation platforms in Japan and Asia to build an ecosystem that enables a new ocean economy.",
    },
    {
      who: "Claire Smith",
      role: "CEO, Beyond Impact",
      text: "Ocean innovation is entering a phase where scientific breakthroughs must translate into scalable industrial solutions. Through this partnership with UMITO Partners, we are connecting Europe's deep tech ecosystem with Asia's ocean industries, creating a platform that can accelerate real-world implementation and systemic change.",
    },
  ],
};
