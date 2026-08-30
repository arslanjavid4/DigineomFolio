import type { Metadata } from "next";
import { ContactJsonLd } from "@/components/JsonLd";
import { CONTACT_DESCRIPTION, CONTACT_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: CONTACT_TITLE,
  description: CONTACT_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
  },
  twitter: {
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ContactJsonLd />
      {children}
    </>
  );
}
