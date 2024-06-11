import type { Graph, Person } from "schema-dts";

/**
 * ethan is a Person representing Ethan Davidson.
 */
export const ethan = {
  "@id": "https://id.etok.me/",
  "@type": "Person",
  name: "Ethan",
  description:
    "Hi, I'm Ethan, an alumn of California State University, Fullerton and past software engineer intern. I'm interested in web development, open source, and Pokémon breeding and glitching.",
  identifier: ["etok", "ethanthatonekid"],
  url: "http://ethandavidson.com",
  sameAs: [
    "https://github.com/EthanThatOneKid",
    "https://twitter.com/__etok__",
    "https://linkedin.com/in/etok",
    "https://blahaj.zone/@etok",
  ],
  email: "mailto:ethan.r.davidson@gmail.com",
  height: "177 cm",
  birthDate: "2001-03-24",
  knowsLanguage: "en",
  colleague: "https://0xd14.id/",
} as const satisfies Person;

/**
 * graph is the JSON-LD graph containing `ethan`.
 */
export const graph = {
  "@context": "https://schema.org",
  "@graph": [ethan],
} as const satisfies Graph;
