import type { Plant } from "./types";

export const gardenEgg: Plant = {
  slug: "garden-egg",
  name: "Garden egg",
  latin: "Solanum aethiopicum",
  family: "Solanaceae",
  category: "Fruiting vegetable",
  zones: ["Tropical"],
  difficulty: "Moderate",
  lifecycle: "Annual or short-lived perennial",
  featured: true,
  blurb:
    "The striped, bitter fruit that stews need. Garden egg comes in several shapes — round, oval, and scarlet-striped — and its slight bitterness is a feature, not a fault. It is fried, stewed, or mashed into agidi.",
  images: [
    { src: "/images/plants/garden-egg/1.jpg" },
    { src: "/images/plants/garden-egg/2.jpg" },
    { src: "/images/plants/garden-egg/3.jpg" },
    { src: "/images/plants/garden-egg/4.jpg" },
    { src: "/images/plants/garden-egg/5.jpg" },
    { src: "/images/plants/garden-egg/6.jpg" },
  ],
  states: [
    "anambra",
    "abia",
    "imo",
    "enugu",
    "ebonyi",
    "delta",
    "edo",
    "lagos",
    "ogun",
    "oyo",
    "osun",
    "ondo",
    "ekiti",
    "rivers",
    "cross-river",
    "akwa-ibom",
    "bayelsa",
    "benue",
    "plateau",
    "kaduna",
    "nasarawa",
  ],
  varieties: [
    {
      name: "Scarlet-striped (gbeti)",
      description:
        "Round or oval fruit with red-and-white stripes. Mild bitterness, firm flesh. The most common market type in the south.",
      type: "Landrace",
      source: "Grower-maintained",
    },
    {
      name: "Green-fruited (nwana)",
      description:
        "Dark green, slightly elongated fruit. Sharper bitterness, softer flesh when cooked. Preferred in Igbo stews.",
      type: "Landrace",
      source: "Grower-maintained",
    },
    {
      name: "White-fruited",
      description:
        "Pale cream skin, mild flavour. Less common, grown mainly in home gardens.",
      type: "Landrace",
      source: "Grower-maintained",
    },
  ],
  nigeriaNote:
    "Garden egg is a daily vegetable across southern Nigeria. It is fried with eggs, stewed with palm oil, or mashed into agidi. The bitterness varies by variety and ripeness — older fruits are sharper.",
  facts: {
    light: "Full sun",
    water: "Moderate; steady moisture through fruiting",
    soil: "Well-drained, fertile loam rich in organic matter",
    spacing: "Rows 60 cm apart, plants 45 cm apart",
    harvest: "60–90 days from transplanting; pick fruits young",
    habit: "Bushy annual, 60–120 cm tall",
  },
  growing: [
    {
      title: "Start in a seedbed",
      body: "Garden egg seeds are small and need warmth to sprout. Sow them thinly in a shaded nursery bed. Keep moist. Seedlings are ready to move in 4–6 weeks.",
    },
    {
      title: "Transplant carefully",
      body: "Move seedlings to the main field in the evening or on a cloudy day to reduce shock. Water immediately after planting.",
    },
    {
      title: "Pick fruits young",
      body: "Harvest when the skin is glossy and the fruit yields slightly to pressure. Overripe fruits turn spongy, seedy, and excessively bitter. Pick every 3–4 days during peak season.",
    },
    {
      title: "Support heavy branches",
      body: "Fruit clusters weigh down the branches. Tie loose supports to nearby stakes if the plants flop over. Broken branches stop production.",
    },
  ],
  benefits: [
    {
      title: "The stew vegetable that needs no apology",
      body: "Its bitterness cuts through palm oil and crayfish richness. Fried with eggs, it becomes a complete meal on its own.",
    },
    {
      title: "Continuous harvest",
      body: "Regular picking keeps the plant producing for months. One planting can feed the kitchen through the entire rainy season.",
    },
  ],
  cautions: [
    {
      title: "Blight risk in wet weather",
      body: "Like tomato and pepper, garden egg shares late blight in cool, wet conditions. Space plants for airflow and remove infected leaves quickly.",
    },
    {
      title: "Fruit borers attack young pods",
      body: "Small caterpillars tunnel into developing fruits. Check undersides of leaves and remove affected fruits immediately to stop spread.",
    },
  ],
  companions: [
    {
      plant: "Onion",
      why: "Onions help repel some pests that attack solanaceous crops, and they share similar water needs.",
    },
  ],
  avoid: [
    {
      plant: "Tomato or pepper in the same bed",
      why: "All three are Solanaceae and share blight and borer pressures. Rotating away breaks the disease cycle.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
