import type { Metadata } from "next";
import PricingView from "@/components/pages/PricingView";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "DigiNeom engagement models for one engineer, small pods, and extended squads — typically 60–75% below US and Western European rates.",
  alternates: { canonical: `${SITE_URL}/pricing` },
};

export default function PricingPage() {
  return <PricingView />;
}
