import type { Graph, Organization } from "schema-dts";

/**
 * fartlabs is a schema.org organization and brand representing FartLabs.
 */
export const fartlabs = {
  "@id": "https://id.fartlabs.org/",
  "@type": "Organization",
  additionalType: "https://schema.org/Brand",
  name: "FartLabs",
  description: "FartLabs builds software solutions out the wazoo!",
  url: "https://fartlabs.org/",
  logo: "https://fartlabs.org/fl-logo.png",
  slogan: "Software solutions out the wazoo!",
  sameAs: [
    "https://github.com/FartLabs",
    "https://x.com/fartlabs_org",
    "https://instagram.com/fartlabs",
    "https://linkedin.com/company/fartlabs",
    "https://linktr.ee/fartlabs",
  ],
  founder: {
    "@type": "Person",
    "@id": "https://id.etok.me/",
  },
  member: [
    {
      "@type": "Person",
      "@id": "https://id.johncarlomanuel.com/",
    },
  ],
} as const satisfies Organization;

/**
 * graph is the JSON-LD graph containing `fl`.
 */
export const graph = {
  "@context": "https://schema.org",
  "@graph": [fartlabs],
} as const satisfies Graph;
