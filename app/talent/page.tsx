import type { Metadata } from "next";
import TalentView from "@/components/pages/TalentView";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Talent directory",
  description:
    "Browse DigiNeom engineers by role and stack. Click a profile to brief us about that seat.",
  alternates: { canonical: `${SITE_URL}/talent` },
};

export default function TalentPage() {
  return <TalentView />;
}
