export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://digineom.co";

export const SITE_NAME = "DigiNeom";
export const SITE_LEGAL_NAME = "DigiNeom Solutions";
export const SITE_EMAIL = "info@digineom.co";
export const SITE_LINKEDIN = "https://www.linkedin.com/company/digineom";

export const SITE_TAGLINE = "A second engineering team. Not a second payroll.";

export const SITE_DESCRIPTION =
  "A second engineering team, not a second payroll. Hire vetted remote talent from Pakistan — degree-verified software engineers for Europe and North America, seated in co-working spaces DigiNeom manages.";

export const SITE_TITLE = "Hire Vetted Remote Talent from Pakistan | DigiNeom";

export const CONTACT_TITLE = "Hire a Pakistani software engineer";
export const CONTACT_DESCRIPTION =
  "Brief a role and hire Pakistani software engineers through DigiNeom. We vet, verify, and seat talent in managed co-working spaces for Europe and North America.";

export const faqs = [
  {
    question: "What is DigiNeom?",
    answer:
      "DigiNeom is a talent company that places degree-verified Pakistani software engineers with teams in Europe and North America. Engineers work from premium co-working spaces DigiNeom manages, with company hardware, enterprise internet, and on-site support.",
  },
  {
    question: "How is DigiNeom different from a software agency or freelance marketplace?",
    answer:
      "DigiNeom is not a project shop, not a freelance marketplace, and not a Pakistani job board like Jobee or Rozee. You hire a verified engineer onto your team. DigiNeom handles sourcing, degree and skill verification, contracts, invoicing, and the workspace. You manage the work.",
  },
  {
    question: "Where do the engineers work?",
    answer:
      "Every engineer works from a premium co-working space DigiNeom manages. Facilities include redundant high-speed internet, power backup, provisioned company hardware, meeting rooms, call booths, and access-controlled floors.",
  },
  {
    question: "How are engineers vetted?",
    answer:
      "Candidates go through independent degree verification, live coding assessment, English evaluation, and reference checks before any CV reaches a client. Under 3% of applicants are placed.",
  },
  {
    question: "Who is DigiNeom for?",
    answer:
      "Software companies and engineering teams in Europe and North America that need additional engineers at Western output standard, without taking on a second local payroll.",
  },
  {
    question: "How does a placement start?",
    answer:
      "You brief the role. DigiNeom vets and verifies candidates. You interview a shortlist and choose. The engineer starts from a managed co-working floor, on DigiNeom equipment, on your timezone.",
  },
  {
    question: "How does cost compare with hiring locally?",
    answer:
      "Clients typically pay 60–75% less than equivalent North American or Western European developer rates, at the same output standard, because engineers are based in Pakistan with DigiNeom covering workspace and operations.",
  },
  {
    question: "How do I hire software engineers from Pakistan?",
    answer:
      "Brief DigiNeom on the stack, seniority, and timezone overlap. We source Pakistani engineers, independently verify degrees, run live coding and English checks, then send a shortlist. You interview and choose. The engineer starts from a co-working floor we manage.",
  },
  {
    question: "How is DigiNeom different from Jobjen, Jobee, or Rozee?",
    answer:
      "Jobee and Rozee are local job boards for posting roles in Pakistan. Jobjen markets a 24-hour bench of AI and JavaScript developers for US startups. DigiNeom is staff augmentation for Europe and North America: under 3% of applicants are placed, every engineer is degree-verified, and they work from a desk DigiNeom runs — not from home.",
  },
] as const;
