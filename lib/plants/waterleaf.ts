import type { Plant } from "./types";

export const waterleaf: Plant = {
  slug: "waterleaf",
  name: "Waterleaf",
  latin: "Talinum triangulare",
  family: "Talinaceae",
  category: "Leafy vegetable",
  zones: ["Tropical"],
  difficulty: "Easy",
  lifecycle: "Annual or short-lived perennial",
  featured: true,
  blurb:
    "The succulent green that cooks into a soft, slippery soup. Waterleaf grows fast from stem cuttings or seed, thrives in wet ground, and is one of the quickest pot-leaves in Nigerian markets.",
  images: [
    { src: "/images/plants/waterleaf/1.jpg" },
    { src: "/images/plants/waterleaf/2.jpg" },
    { src: "/images/plants/waterleaf/3.jpg" },
    { src: "/images/plants/waterleaf/4.jpg" },
    { src: "/images/plants/waterleaf/5.jpg" },
    { src: "/images/plants/waterleaf/6.jpg" },
  ],
  states: [
    "lagos",
    "ogun",
    "oyo",
    "osun",
    "ondo",
    "ekiti",
    "edo",
    "delta",
    "rivers",
    "cross-river",
    "anambra",
    "imo",
    "abia",
    "enugu",
    "ebonyi",
    "akwa-ibom",
    "bayelsa",
  ],
  varieties: [
    {
      name: "Local waterleaf",
      description:
        "Farm-saved cuttings passed between neighbours. Stem thickness and leaf size vary by village.",
      type: "Landrace",
      source: "Grower-maintained",
    },
  ],
  nigeriaNote:
    "Waterleaf is a south-west and south-south staple. It is cooked with palm oil, crayfish, and sometimes egusi. The plant tolerates poor drainage better than most leafy greens.",
  facts: {
    light: "Full sun to partial shade",
    water: "High; prefers moist soil but does not like standing water",
    soil: "Rich, well-drained loam; tolerates heavier soils than most greens",
    spacing: "Rows 30 cm apart, plants 20 cm apart",
    harvest: "4–6 weeks from planting",
    habit: "Succulent upright plant, 40–80 cm tall",
  },
  growing: [
    {
      title: "Plant stem cuttings or seed",
      body: "Waterleaf roots easily from 15–20 cm stem pieces pushed into moist soil. Seed works too, but cuttings establish faster. Plant after the rains begin.",
    },
    {
      title: "Keep the bed moist",
      body: "The plant is succulent and holds water in its stems. Dry soil makes the leaves tough and small. Mulch around the base to hold moisture.",
    },
    {
      title: "Harvest young stems and leaves",
      body: "Cut the tender tops every 2–3 weeks. Older stems go woody and lose their slipperiness. Regular cutting encourages bushier growth.",
    },
    {
      title: "Rotate if pests appear",
      body: "Aphids can attack waterleaf in dry weather. Move the bed each season or spray with diluted neem oil if needed.",
    },
  ],
  benefits: [
    {
      title: "One of the fastest greens in the guide",
      body: "From cutting to plate in about a month. Few crops turn rain into food this quickly.",
    },
    {
      title: "The slipperiness is the point",
      body: "Cooked waterleaf gives soups a soft, viscous body. That texture is not a flaw — it is what the leaf is grown for.",
    },
  ],
  cautions: [
    {
      title: "It bolts when the rains end",
      body: "As the weather turns dry, waterleaf rushes to flower and set seed. Leaf quality drops fast once that starts, so harvest before then.",
    },
    {
      title: "Stems break easily",
      body: "The succulent stems snap under heavy rain or rough handling. Harvest gently and pack loosely.",
    },
  ],
  companions: [
    {
      plant: "Okra",
      why: "Two fast, warm-season soup crops share one bed — waterleaf is harvested young while the okra is still establishing.",
    },
  ],
  avoid: [
    {
      plant: "Closed maize canopy",
      why: "Waterleaf wants light and open sky. Under a thick cereal stand, the stems stretch, turn pale and lose weight.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
