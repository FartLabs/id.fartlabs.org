import type { Graph, Organization } from "schema-dts";

/**
 * fartlabs is a schema.org organization and brand representing FartLabs.
 */
export const fartlabs = {
  "@id": "https://id.fart.tools/",
  "@type": "Organization",
  additionalType: "https://schema.org/Brand",
  name: "FartLabs",
  description: "FartLabs provides software solutions out the wazoo!",
  url: "https://fart.tools/",
  logo: "https://fart.tools/fl-logo.png",
  slogan: "Software solutions out the wazoo!",
  email: "mailto:support@fart.tools",
  sameAs: [
    "https://github.com/FartLabs",
    "https://twitter.com/fart_labs",
    "https://instagram.com/fartlabs",
    "https://linkedin.com/company/fartlabs",
    "https://linktr.ee/fartlabs",
  ],
  member: "https://id.etok.me/",
} as const satisfies Organization;

/**
 * graph is the JSON-LD graph containing `fl`.
 */
export const graph = {
  "@context": "https://schema.org",
  "@graph": [fartlabs],
} as const satisfies Graph;
