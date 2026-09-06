import {
  CONTACT_DESCRIPTION,
  CONTACT_TITLE,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_LEGAL_NAME,
  SITE_LINKEDIN,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_TITLE,
  SITE_URL,
  faqs,
} from "@/lib/site";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const organization = {
  "@type": ["Organization", "EmploymentAgency"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  url: SITE_URL,
  email: SITE_EMAIL,
  description: SITE_DESCRIPTION,
  slogan: SITE_TAGLINE,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/brand/logo.png`,
    caption: SITE_NAME,
  },
  image: `${SITE_URL}/opengraph-image`,
  sameAs: [SITE_LINKEDIN],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Europe" },
    { "@type": "AdministrativeArea", name: "North America" },
    { "@type": "Country", name: "Pakistan" },
  ],
  knowsAbout: [
    "Hiring Pakistani software engineers",
    "IT staff augmentation from Pakistan",
    "Degree-verified engineers",
    "Managed co-working workspaces",
    "Offshore software engineering for Europe and North America",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE_EMAIL,
    contactType: "sales",
    url: `${SITE_URL}/contact`,
    availableLanguage: ["English"],
  },
};

const service = {
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  name: "Hire vetted Pakistani software engineers",
  serviceType: "IT staff augmentation from Pakistan",
  description: SITE_DESCRIPTION,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: organization.areaServed,
  audience: {
    "@type": "Audience",
    audienceType: "Software companies and engineering teams in Europe and North America",
  },
};

export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": [
          organization,
          service,
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: SITE_NAME,
            description: SITE_DESCRIPTION,
            publisher: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en",
          },
        ],
      }}
    />
  );
}

export function HomeJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/#webpage`,
            url: SITE_URL,
            name: SITE_TITLE,
            description: SITE_DESCRIPTION,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            primaryImageOfPage: `${SITE_URL}/opengraph-image`,
            inLanguage: "en",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Hire Pakistani engineers",
                  item: SITE_URL,
                },
              ],
            },
          },
          {
            "@type": "FAQPage",
            "@id": `${SITE_URL}/#faq`,
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          },
        ],
      }}
    />
  );
}

export function ContactJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact#webpage`,
        url: `${SITE_URL}/contact`,
        name: CONTACT_TITLE,
        description: CONTACT_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      }}
    />
  );
}
