export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://digineom.co";

export const SITE_NAME = "DigiNeom";
export const SITE_LEGAL_NAME = "DigiNeom Solutions";
export const SITE_EMAIL = "info@digineom.co";
export const SITE_LINKEDIN = "https://www.linkedin.com/company/digineom";

export const SITE_TAGLINE = "A second engineering team. Not a second payroll.";

export const SITE_DESCRIPTION =
  "DigiNeom places degree-verified South Asian software engineers with companies in Europe and North America. Every engineer works from a co-working space we manage — not from home.";

export const SITE_TITLE =
  "DigiNeom | Degree-verified offshore engineers for Europe and North America";

export const CONTACT_TITLE = "Talk to us about a role";
export const CONTACT_DESCRIPTION =
  "Brief DigiNeom on the role, stack, seniority, and timezone overlap you need. We vet, verify, and seat engineers in managed co-working spaces.";

export const faqs = [
  {
    question: "What is DigiNeom?",
    answer:
      "DigiNeom is a talent company that places degree-verified South Asian software engineers with teams in Europe and North America. Engineers work from premium co-working spaces DigiNeom manages, with company hardware, enterprise internet, and on-site support.",
  },
  {
    question: "How is DigiNeom different from a software agency or freelance marketplace?",
    answer:
      "DigiNeom is not a project shop and not a marketplace of remote freelancers. You hire a verified engineer onto your team. DigiNeom handles sourcing, degree and skill verification, contracts, invoicing, and the workspace. You manage the work.",
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
      "Clients typically pay 60–75% less than equivalent North American or Western European developer rates, at the same output standard, because engineers are based in South Asia with DigiNeom covering workspace and operations.",
  },
] as const;
