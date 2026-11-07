import type { Plant } from "./types";

export const ginger: Plant = {
  slug: "ginger",
  name: "Ginger",
  latin: "Zingiber officinale",
  family: "Zingiberaceae",
  category: "Spices & aromatics",
  zones: ["Tropical"],
  difficulty: "Moderate",
  lifecycle: "Perennial grown as a seasonal crop",
  featured: true,
  blurb:
    "The hot, fragrant rhizome that flavours Nigerian soups, teas and drinks. Kaduna state grows most of Nigeria's ginger, especially in the southern local government areas.",
  images: [
    { src: "/images/plants/ginger/1.jpg" },
    { src: "/images/plants/ginger/2.jpg" },
    { src: "/images/plants/ginger/3.jpg" },
    { src: "/images/plants/ginger/4.jpg" },
    { src: "/images/plants/ginger/5.jpg" },
    { src: "/images/plants/ginger/6.jpg" },
  ],
  states: [
    "kaduna",
    "plateau",
    "nasarawa",
    "benue",
    "taraba",
    "niger",
    "kogi",
    "kwara",
    "oyo",
    "osun",
    "ondo",
    "ekiti",
    "cross-river",
  ],
  varieties: [
    {
      name: "Nigerian local ginger",
      description:
        "The small, very pungent rhizome grown across the ginger belt. Most of Nigeria's exported ginger is this type.",
      type: "Landrace",
      source: "Grower-maintained",
    },
    {
      name: "Chinese large-root types",
      description:
        "Bigger, juicier, milder rhizomes introduced for fresh-market use. Grown on a small scale near urban markets.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
  ],
  nigeriaNote:
    "Kaduna is Nigeria's ginger state. The crop grows best in the southern LGAs of the state — Zaria, Kagarko, Kachia — and on neighbouring parts of Plateau and Nasarawa. Nigerian ginger is known for being small but very hot.",
  facts: {
    light: "Partial shade to filtered sun",
    water: "Steady rain through growth; dry off before harvest",
    soil: "Deep, loose, fertile loam with good drainage",
    spacing: "Ridges 60 cm apart, seed pieces 25 cm apart",
    harvest: "8–10 months after planting",
    habit: "Tall leafy shoot with an underground branching rhizome",
  },
  growing: [
    {
      title: "Plant seed pieces at the start of the rains",
      body: "Ginger is grown from pieces of rhizome, each with one or two buds. Plant them in well-prepared ridges as the rains begin. Cold or waterlogged soil rots the seed piece before it sprouts.",
    },
    {
      title: "Keep the bed shaded and moist",
      body: "Ginger likes dappled light and steady moisture. In the open savanna, a light shade from banana or plantain helps. In the forest belt, full light is fine.",
    },
    {
      title: "Earth up the ridges",
      body: "Pull soil up around the base of the shoots as they grow. This covers the developing rhizome and stops it pushing above ground, where it would turn green and tough.",
    },
    {
      title: "Harvest when the leaves yellow",
      body: "When the leaves dry and fall, the rhizome is mature. Lift carefully, shake off the soil, and dry in the shade before storing. Young ginger can be lifted earlier for fresh use.",
    },
  ],
  benefits: [
    {
      title: "A cash crop that stores",
      body: "Dried ginger keeps for months and is one of the few Nigerian spices that travels well to export markets.",
    },
    {
      title: "Flavours the kitchen",
      body: "Fresh ginger goes into teas, soups, drinks and stews across Nigeria. A small harvest feeds the household for weeks.",
    },
  ],
  cautions: [
    {
      title: "Wet rhizomes rot fast",
      body: "Ginger lifted wet or stored damp goes mouldy within days. Dry the rhizomes thoroughly before storing in a cool, airy place.",
    },
    {
      title: "Sick seed pieces spread disease",
      body: "Rhizome pieces taken from infected plants carry bacterial wilt into the new field. Use only healthy, firm seed pieces from a clean source.",
    },
    {
      title: "It needs a long season",
      body: "Ginger takes 8–10 months from planting to harvest. Plant early in the rains so the crop has the full season to fill out.",
    },
  ],
  companions: [
    {
      plant: "Plantain",
      why: "Plantain gives light shade and holds moisture, which ginger likes. The two share the bed without competing.",
    },
  ],
  avoid: [
    {
      plant: "Other ginger in the same bed year after year",
      why: "Ginger builds up soil diseases on its own ground. Rotate with a non-ginger crop each season.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
