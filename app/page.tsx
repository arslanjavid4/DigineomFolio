import type { Metadata } from "next";
import TalentBridgeHome from "@/components/TalentBridgeHome";
import { HomeJsonLd } from "@/components/JsonLd";
import { SITE_DESCRIPTION, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: SITE_TAGLINE,
    description: SITE_DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <TalentBridgeHome />
    </>
  );
}
