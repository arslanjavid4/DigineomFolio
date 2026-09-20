import type { Metadata } from "next";
import ClientsView from "@/components/pages/ClientsView";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "How DigiNeom seats verified Pakistani engineers with mid-market product teams in Europe and North America — anonymized client stories.",
  alternates: { canonical: `${SITE_URL}/clients` },
};

export default function ClientsPage() {
  return <ClientsView />;
}
