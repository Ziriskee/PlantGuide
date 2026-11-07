import type { Plant } from "./types";

export const turmeric: Plant = {
  slug: "turmeric",
  name: "Turmeric",
  latin: "Curcuma longa",
  family: "Zingiberaceae",
  category: "Spices & aromatics",
  zones: ["Tropical"],
  difficulty: "Moderate",
  lifecycle: "Perennial grown as a seasonal crop",
  featured: true,
  blurb:
    "The golden rhizome related to ginger, grown for colour and flavour. It is an emerging crop in Nigeria, mostly on the Plateau and in parts of Kaduna.",
  images: [
    { src: "/images/plants/turmeric/1.jpg" },
    { src: "/images/plants/turmeric/2.jpg" },
    { src: "/images/plants/turmeric/3.jpg" },
    { src: "/images/plants/turmeric/4.jpg" },
    { src: "/images/plants/turmeric/5.jpg" },
    { src: "/images/plants/turmeric/6.jpg" },
  ],
  states: ["kaduna", "plateau", "nasarawa", "benue", "niger", "kogi"],
  varieties: [
    {
      name: "Local Nigerian types",
      description:
        "Small-scale plantings of rhizomes passed between growers. No released-variety list exists for turmeric in Nigeria yet.",
      type: "Landrace",
      source: "Grower-maintained",
    },
    {
      name: "Indian introductions",
      description:
        "Larger, higher-yielding types brought in for trial and small-scale commercial use.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
  ],
  nigeriaNote:
    "Turmeric is still a small crop in Nigeria. Most of what is grown is on the Jos Plateau and in parts of Kaduna, where the weather matches what the plant needs. It is not yet a mainstream market spice.",
  facts: {
    light: "Partial shade to filtered sun",
    water: "Steady rain through growth; dry off before harvest",
    soil: "Deep, loose, fertile loam",
    spacing: "Ridges 60 cm apart, seed pieces 30 cm apart",
    harvest: "7–9 months after planting",
    habit: "Tall leafy shoot with an underground branching rhizome",
  },
  growing: [
    {
      title: "Plant rhizome pieces at the start of the rains",
      body: "Turmeric is grown like ginger, from pieces of rhizome with one or two buds. Plant them in ridges as the rains begin. Cold or waterlogged soil rots the seed piece.",
    },
    {
      title: "Keep the bed shaded and moist",
      body: "Turmeric likes dappled light and steady moisture. In the open savanna, light shade from taller crops helps. In the forest belt, full light is fine.",
    },
    {
      title: "Earth up the ridges",
      body: "Pull soil up around the base of the shoots as they grow. This keeps the developing rhizome covered and stops it turning green above ground.",
    },
    {
      title: "Harvest when the leaves dry",
      body: "When the leaves yellow and fall, the rhizome is ready. Lift carefully, wash, and boil or steam before drying. Boiling sets the colour and kills the living bud.",
    },
  ],
  benefits: [
    {
      title: "Colour and flavour",
      body: "Dried turmeric gives food a warm yellow colour and a mild earthy flavour. A small harvest lasts a long time once dried.",
    },
    {
      title: "An emerging cash crop",
      body: "Demand for Nigerian turmeric is growing. Early growers who learn the crop now may find a market later.",
    },
  ],
  cautions: [
    {
      title: "It stains everything",
      body: "Fresh and dried turmeric stains hands, clothes and pots yellow. Wear gloves when handling large amounts.",
    },
    {
      title: "Wet rhizomes rot",
      body: "Lifted rhizomes stored damp go mouldy fast. Dry them thoroughly in the shade before storing somewhere cool and airy.",
    },
    {
      title: "It needs a long season",
      body: "Turmeric takes 7–9 months from planting to harvest. Plant early in the rains so the crop has the full season to fill out.",
    },
  ],
  companions: [
    {
      plant: "Ginger",
      why: "Both are rhizomes with the same growing needs and can share a bed without competing.",
    },
  ],
  avoid: [
    {
      plant: "The same bed year after year",
      why: "Like ginger, turmeric builds up soil diseases on its own ground. Rotate with a non-rhizome crop each season.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
