import type { Plant } from "./types";

export const irishPotato: Plant = {
  slug: "irish-potato",
  name: "Irish potato",
  latin: "Solanum tuberosum",
  family: "Solanaceae",
  category: "Roots & tuber",
  zones: ["Highland","Tropical"],
  difficulty: "Demanding",
  lifecycle: "Annual",
  featured: true,
  blurb:
    "The cool-country potato that grows in Nigeria only on the high plateaux — Jos and Mambilla mostly. It needs cool nights and deep loose soil, and it fails quickly in the heat of the lowlands.",
  images: [
    { src: "/images/plants/irish-potato/1.jpg" },
    { src: "/images/plants/irish-potato/2.jpg" },
    { src: "/images/plants/irish-potato/3.jpg" },
    { src: "/images/plants/irish-potato/4.jpg" },
    { src: "/images/plants/irish-potato/5.jpg" },
    { src: "/images/plants/irish-potato/6.jpg" },
  ],
  states: ["plateau", "adamawa", "taraba", "kaduna"],
  varieties: [
    {
      name: "Nicolaus",
      description:
        "Oval, yellow-fleshed, widely planted on the Jos Plateau. Stores reasonably well.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
    {
      name: "Rosita",
      description:
        "Red-skinned, early-maturing type suited to the Plateau's two-season cycle.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
    {
      name: "Marabel",
      description: "Red-skinned, good for boiling; common in Jos markets.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
    {
      name: "Desiree",
      description:
        "Red-skinned, all-purpose; widely grown on the Plateau and Mambilla.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
  ],
  nigeriaNote:
    "Irish potato is essentially a Plateau and Mambilla crop. The lowlands are too hot for it — it grows only where altitude brings cool nights. Jos markets supply most of Nigeria's Irish potato.",
  facts: {
    light: "Full sun",
    water: "Steady moisture through tuber formation; dry off before harvest",
    soil: "Deep, loose, slightly acidic loam; stones and hard pans deform the tubers",
    spacing: "Ridges 75 cm apart, seed pieces 30 cm apart",
    harvest: "3–4 months after planting",
    habit: "Bushy annual with underground tubers",
  },
  growing: [
    {
      title: "Plant at the right altitude",
      body: "Irish potato needs cool nights. On the Jos Plateau and Mambilla, plant with the rains; in lower areas it simply will not tuber properly.",
    },
    {
      title: "Use clean seed tubers",
      body: "Each piece of seed potato must have at least two eyes and come from a healthy plant. Re-using tubers from a diseased crop spreads blight into the next season.",
    },
    {
      title: "Earth up the ridges",
      body: "Pull soil up around the base of the plants while they are growing. This covers the developing tubers so they stay green-free and swell properly.",
    },
    {
      title: "Harvest when the leaves die back",
      body: "When the leaves yellow and dry, the tubers are ready. Lift on a dry day and let them dry in the shade before storing somewhere cool and dark.",
    },
  ],
  benefits: [
    {
      title: "A real staple on the Plateau",
      body: "For Jos and Mambilla families, Irish potato is what rice is to the south — a daily food that fills the stomach reliably.",
    },
    {
      title: "Two seasons a year",
      body: "The Plateau's weather allows two plantings a year, so the crop can feed the household across most of the calendar.",
    },
  ],
  cautions: [
    {
      title: "Late blight can wipe the crop",
      body: "In cool, wet weather, late blight spreads fast and destroys leaves and tubers. Space plants for airflow, avoid wetting the leaves, and remove infected plants quickly.",
    },
    {
      title: "Green tubers are poisonous",
      body: "Tubers exposed to light turn green and build up a natural poison. Never eat green potatoes; peel deeply or throw them out.",
    },
    {
      title: "Seed is expensive",
      body: "A large share of the harvest must be kept for next season's planting. Plan the split between eating, selling and replanting before harvest.",
    },
  ],
  companions: [
    {
      plant: "Cabbage",
      why: "Both are cool-season Plateau crops and share the same planting window without competing for space.",
    },
  ],
  avoid: [
    {
      plant: "Tomato",
      why: "Both are in the same family and share late blight. Planting them together invites the disease to jump between them.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
