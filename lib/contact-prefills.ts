import { TALENT_PROFILES } from "@/lib/digineom-content";

export const CONTACT_ROLE_OPTIONS = [
  ...Array.from(new Set(TALENT_PROFILES.map((p) => p.role))),
  "Other engineering role",
  "Not sure yet",
] as const;

export function sampleMessageForRole(role: string) {
  return `Hi — I'm interested in briefing a ${role} seat with DigiNeom. Please share availability, typical timeline, and next steps for interviewing.`;
}

export function contactHrefForRole(role: string) {
  const params = new URLSearchParams({
    role,
    message: sampleMessageForRole(role),
  });
  return `/contact?${params.toString()}`;
}
