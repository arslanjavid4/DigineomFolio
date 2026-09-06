import type { Metadata } from "next";
import TalentBridgeHome from "@/components/TalentBridgeHome";
import OnPageSeo from "@/components/OnPageSeo";
import { HomeJsonLd } from "@/components/JsonLd";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <OnPageSeo />
      <TalentBridgeHome />
    </>
  );
}
