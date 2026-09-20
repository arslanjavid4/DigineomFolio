import type { Metadata } from "next";
import HubsView from "@/components/pages/HubsView";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Managed hubs",
  description:
    "DigiNeom seats engineers in managed co-working floors — power, connectivity, hardware, and security included. Not kitchen-table remote.",
  alternates: { canonical: `${SITE_URL}/hubs` },
};

export default function HubsPage() {
  return <HubsView />;
}
