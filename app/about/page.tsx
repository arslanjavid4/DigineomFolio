import type { Metadata } from "next";
import AboutView from "@/components/pages/AboutView";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About DigiNeom",
  description:
    "Why DigiNeom places degree-verified Pakistani engineers in managed co-working spaces for Europe and North America — not freelance marketplaces.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return <AboutView />;
}
