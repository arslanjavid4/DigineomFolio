/** Anonymized DigiNeom marketing content — no fake company or full personal names. */

export type TalentProfile = {
  id: string;
  firstName: string;
  role: string;
  seniority: "Mid" | "Senior" | "Lead" | "Staff";
  experienceYears: number;
  domain: "fullstack" | "backend" | "frontend" | "ai-ml" | "devops" | "mobile";
  degreeLabel: string;
  liveCodingScore: number;
  englishCefr: string;
  primarySkills: string[];
  hubCity: "Lahore" | "Karachi" | "Islamabad";
  timezoneOverlap: string[];
  availability: string;
  summary: string;
};

export type ClientStory = {
  id: string;
  industry: string;
  region: string;
  teamSize: string;
  squad: string;
  impact: string;
  summary: string;
  quote: string;
  attribution: string;
  stack: string[];
};

export type PricingPlan = {
  title: string;
  description: string;
  badge?: string;
  monthlyRange: string;
  frequency: string;
  audience: string;
  features: string[];
  featured?: boolean;
};

export type ComparisonRow = {
  feature: string;
  digineom: string;
  freelance: string;
  inhouse: string;
};

export type HubAdvantage = {
  title: string;
  description: string;
  tag: string;
};

export type HeroPlacement = {
  firstName: string;
  role: string;
  stars: number;
  origin: { lat: number; lng: number; label: string };
  destination: { lat: number; lng: number; label: string };
};

export const HERO_PLACEMENTS: HeroPlacement[] = [
  {
    firstName: "Ayesha",
    role: "Senior Full-Stack",
    stars: 5,
    origin: { lat: 31.5204, lng: 74.3587, label: "Lahore" },
    destination: { lat: 51.5074, lng: -0.1278, label: "London" },
  },
  {
    firstName: "Bilal",
    role: "Staff Platform Engineer",
    stars: 5,
    origin: { lat: 24.8607, lng: 67.0011, label: "Karachi" },
    destination: { lat: 40.7128, lng: -74.006, label: "New York" },
  },
  {
    firstName: "Sana",
    role: "ML Engineer",
    stars: 5,
    origin: { lat: 33.6844, lng: 73.0479, label: "Islamabad" },
    destination: { lat: 52.52, lng: 13.405, label: "Berlin" },
  },
  {
    firstName: "Omar",
    role: "Senior Backend",
    stars: 5,
    origin: { lat: 31.5204, lng: 74.3587, label: "Lahore" },
    destination: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
  },
  {
    firstName: "Hira",
    role: "DevOps Engineer",
    stars: 5,
    origin: { lat: 24.8607, lng: 67.0011, label: "Karachi" },
    destination: { lat: 43.6532, lng: -79.3832, label: "Toronto" },
  },
  {
    firstName: "Zain",
    role: "Mobile Engineer",
    stars: 5,
    origin: { lat: 33.6844, lng: 73.0479, label: "Islamabad" },
    destination: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
  },
];

export const TALENT_PROFILES: TalentProfile[] = [
  {
    id: "t-01",
    firstName: "Ayesha",
    role: "Senior Full-Stack Engineer",
    seniority: "Senior",
    experienceYears: 7,
    domain: "fullstack",
    degreeLabel: "B.S. Computer Science · Tier-1 STEM · Verified",
    liveCodingScore: 94,
    englishCefr: "C1",
    primarySkills: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    hubCity: "Lahore",
    timezoneOverlap: ["GMT", "CET", "EST"],
    availability: "Ready in days",
    summary:
      "Builds SaaS products and high-throughput APIs for European and North American product teams.",
  },
  {
    id: "t-02",
    firstName: "Bilal",
    role: "Staff Platform Engineer",
    seniority: "Staff",
    experienceYears: 9,
    domain: "devops",
    degreeLabel: "B.S. Software Engineering · Tier-1 STEM · Verified",
    liveCodingScore: 96,
    englishCefr: "C1",
    primarySkills: ["Kubernetes", "Terraform", "Go", "AWS", "Observability"],
    hubCity: "Karachi",
    timezoneOverlap: ["EST", "PST"],
    availability: "Ready in days",
    summary:
      "Owns multi-cloud reliability, GitOps, and platform tooling for mid-market SaaS squads.",
  },
  {
    id: "t-03",
    firstName: "Sana",
    role: "Lead Machine Learning Engineer",
    seniority: "Lead",
    experienceYears: 8,
    domain: "ai-ml",
    degreeLabel: "M.S. Artificial Intelligence · Verified",
    liveCodingScore: 97,
    englishCefr: "C2",
    primarySkills: ["Python", "PyTorch", "FastAPI", "RAG", "Vector DBs"],
    hubCity: "Islamabad",
    timezoneOverlap: ["EST", "GMT", "CET"],
    availability: "Interview-ready",
    summary:
      "Ships production LLM and RAG systems with clear documentation for Western stakeholders.",
  },
  {
    id: "t-04",
    firstName: "Omar",
    role: "Senior Backend Engineer",
    seniority: "Senior",
    experienceYears: 6,
    domain: "backend",
    degreeLabel: "B.S. Computer Science · Tier-1 STEM · Verified",
    liveCodingScore: 93,
    englishCefr: "C1",
    primarySkills: ["Go", "PostgreSQL", "Kafka", "gRPC", "Redis"],
    hubCity: "Lahore",
    timezoneOverlap: ["GMT", "CET"],
    availability: "Ready in days",
    summary:
      "Designs payment and logistics services with strong testing and operational discipline.",
  },
  {
    id: "t-05",
    firstName: "Hira",
    role: "Senior Frontend Engineer",
    seniority: "Senior",
    experienceYears: 6,
    domain: "frontend",
    degreeLabel: "B.S. Software Engineering · Verified",
    liveCodingScore: 92,
    englishCefr: "C1",
    primarySkills: ["React", "TypeScript", "Next.js", "Design systems", "Cypress"],
    hubCity: "Karachi",
    timezoneOverlap: ["EST", "GMT"],
    availability: "Interview-ready",
    summary:
      "Owns design systems and performance-sensitive product UI for growth-stage teams.",
  },
  {
    id: "t-06",
    firstName: "Zain",
    role: "Mobile Engineer",
    seniority: "Senior",
    experienceYears: 5,
    domain: "mobile",
    degreeLabel: "B.S. Computer Science · Verified",
    liveCodingScore: 91,
    englishCefr: "B2",
    primarySkills: ["React Native", "Flutter", "TypeScript", "Offline-first"],
    hubCity: "Islamabad",
    timezoneOverlap: ["EST", "GMT"],
    availability: "Ready in days",
    summary: "Ships offline-first field and consumer apps with clean release hygiene.",
  },
  {
    id: "t-07",
    firstName: "Nadia",
    role: "Senior DevOps Engineer",
    seniority: "Senior",
    experienceYears: 7,
    domain: "devops",
    degreeLabel: "B.S. Information Systems · Verified",
    liveCodingScore: 94,
    englishCefr: "C1",
    primarySkills: ["AWS", "CI/CD", "Docker", "Prometheus", "Security"],
    hubCity: "Lahore",
    timezoneOverlap: ["CET", "GMT"],
    availability: "Interview-ready",
    summary: "Hardens delivery pipelines and on-call practices for EU product companies.",
  },
  {
    id: "t-08",
    firstName: "Farhan",
    role: "Mid Full-Stack Engineer",
    seniority: "Mid",
    experienceYears: 4,
    domain: "fullstack",
    degreeLabel: "B.S. Computer Science · Verified",
    liveCodingScore: 88,
    englishCefr: "B2",
    primarySkills: ["TypeScript", "Node.js", "React", "PostgreSQL", "Prisma"],
    hubCity: "Karachi",
    timezoneOverlap: ["GMT", "EST"],
    availability: "Ready in days",
    summary: "Strong execution on feature delivery inside established sprint rituals.",
  },
];

export const CLIENT_STORIES: ClientStory[] = [
  {
    id: "c-01",
    industry: "FinTech & B2B Treasury",
    region: "London, United Kingdom",
    teamSize: "50–100 staff",
    squad: "6 senior engineers (full-stack, Go, AWS)",
    impact: "Faster sprint release cycles",
    summary:
      "A European payments scaleup needed more throughput without competing for local London payroll.",
    quote:
      "Having engineers seated in a managed hub meant standups, pairing, and deploys ran without the usual remote friction.",
    attribution: "VP of Engineering · EU payments scaleup",
    stack: ["Go", "Next.js", "PostgreSQL", "AWS"],
  },
  {
    id: "c-02",
    industry: "Supply Chain & Freight",
    region: "Chicago, United States",
    teamSize: "50–100 staff",
    squad: "4 backend & distributed systems specialists",
    impact: "Scaled high-volume event processing",
    summary:
      "A mid-market freight brokerage automated dispatch integrations after leaving unstable contractor setups.",
    quote:
      "Developers are at their desks on EST hours every morning, on company hardware, with backup power.",
    attribution: "CTO · US logistics scaleup",
    stack: ["Go", "Kubernetes", "PostgreSQL", "Redis"],
  },
  {
    id: "c-03",
    industry: "MedTech & Clinical Intelligence",
    region: "Berlin, Germany",
    teamSize: "50–100 staff",
    squad: "3 AI / ML engineers & MLOps",
    impact: "Production model uptime under privacy constraints",
    summary:
      "A healthcare product company needed mathematics depth and reliable inference delivery.",
    quote:
      "The degree-verified ML depth was a different calibre from marketplace contractors we had tried.",
    attribution: "Head of Applied AI · EU MedTech",
    stack: ["Python", "PyTorch", "FastAPI", "Kubernetes"],
  },
  {
    id: "c-04",
    industry: "Enterprise Data Platform",
    region: "New York, United States",
    teamSize: "50–100 staff",
    squad: "5 full-stack & reliability engineers",
    impact: "Material savings vs local NY payroll",
    summary:
      "A B2B SaaS platform needed multi-tenant migrations and compliance work ahead of enterprise expansion.",
    quote:
      "It feels like managing another squad in the same company — without a second local payroll.",
    attribution: "VP of Product · US B2B SaaS",
    stack: ["TypeScript", "React", "Node.js", "Terraform"],
  },
  {
    id: "c-05",
    industry: "Payments & Cross-Border Billing",
    region: "Dublin, Ireland",
    teamSize: "50–100 staff",
    squad: "4 senior distributed systems & SREs",
    impact: "Peak trading SLA held",
    summary:
      "A pan-European payments provider scaled reconciliation and reliability under retail peaks.",
    quote:
      "One consolidated invoice and clear IP assignment made legal sign-off straightforward.",
    attribution: "CIO · EU payments infrastructure",
    stack: ["Go", "Kafka", "Terraform"],
  },
  {
    id: "c-06",
    industry: "Industrial IoT",
    region: "Toronto, Canada",
    teamSize: "50–100 staff",
    squad: "3 mobile & edge engineers",
    impact: "Field app reliability recovered",
    summary:
      "An industrial telemetry company rebuilt offline-first field apps for technicians.",
    quote: "The professional floor shows in every commit — not kitchen-table delivery.",
    attribution: "Director of Engineering · Canadian industrial software",
    stack: ["Flutter", "React Native", "TypeScript"],
  },
];

export const HUB_ADVANTAGES: HubAdvantage[] = [
  {
    title: "Uninterrupted power",
    description:
      "Industrial UPS and generator backup so local grid problems stay local — not your sprint risk.",
    tag: "Always on",
  },
  {
    title: "Enterprise connectivity",
    description:
      "Redundant high-speed lines with failover so standups and remote terminals stay clean.",
    tag: "Dual path",
  },
  {
    title: "Secured premises",
    description:
      "Access-controlled floors and managed entry — a serious answer to the kitchen-table security question.",
    tag: "Controlled access",
  },
  {
    title: "Company hardware",
    description:
      "Provisioned, secured machines with proper multi-monitor setups — maintained for you.",
    tag: "Turnkey",
  },
  {
    title: "Rooms for real collaboration",
    description: "Bookable meeting rooms and call booths for interviews and reviews.",
    tag: "Focus space",
  },
  {
    title: "One accountable partner",
    description:
      "Contracts, invoicing, and replacements handled by DigiNeom — you manage the work.",
    tag: "Single invoice",
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Degree verification",
    digineom: "Independent checks before a CV reaches you",
    freelance: "Self-reported claims",
    inhouse: "Slow HR background cycles",
  },
  {
    feature: "Work environment",
    digineom: "Managed co-working floor DigiNeom runs",
    freelance: "Home Wi-Fi and kitchen tables",
    inhouse: "Full local office cost",
  },
  {
    feature: "Cost profile",
    digineom: "Typically 60–75% below US / Western EU rates",
    freelance: "Volatile hourly billing",
    inhouse: "Salary, benefits, equity, desk",
  },
  {
    feature: "Time to start",
    digineom: "Shortlist of verified engineers, then your interview",
    freelance: "Ghosting and restart loops",
    inhouse: "Months of recruiting",
  },
  {
    feature: "Timezone overlap",
    digineom: "Aligned to your core hours",
    freelance: "Irregular availability",
    inhouse: "Local only",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "One engineer",
    description: "Add a verified engineer into your existing squad.",
    badge: "Most requested",
    monthlyRange: "From mid four figures",
    frequency: "per month · all-inclusive seat",
    audience: "Best for 50–100 person product teams filling a specific stack gap.",
    features: [
      "Degree-verified engineer",
      "Timezone overlap with your team",
      "Managed desk, power, and line",
      "Company hardware",
      "You interview and choose",
      "IP and contracting through DigiNeom",
    ],
    featured: true,
  },
  {
    title: "Small pod",
    description: "A tight group of engineers for a defined workstream.",
    monthlyRange: "Scoped per role mix",
    frequency: "per month · consolidated invoice",
    audience: "When you need a dedicated slice of delivery capacity, not a marketplace.",
    features: [
      "2–4 verified engineers",
      "One account contact",
      "Shared rituals with your leads",
      "Managed floor for the whole pod",
      "Replacement support if fit is wrong",
    ],
  },
  {
    title: "Extended squad",
    description: "Multiple roles across backend, frontend, and platform.",
    monthlyRange: "Custom",
    frequency: "scoped after a briefing call",
    audience: "Mid-market teams building a second engineering bench without a second payroll.",
    features: [
      "Cross-discipline mix",
      "Structured onboarding",
      "Workspace and ops included",
      "Western-facing contracting",
      "Talk to us about scope",
    ],
  },
];

export const ABOUT_BELIEFS = [
  {
    title: "Academic depth",
    copy: "Degrees are verified. Live coding is scored. English is evaluated. Under 3% of applicants are placed.",
  },
  {
    title: "Physical collocation",
    copy: "Engineers work from floors we manage — not bedrooms, cafés, or kitchen tables.",
  },
  {
    title: "Western governance",
    copy: "You hire onto your team. DigiNeom handles contracts, workspace, and accountability.",
  },
];
