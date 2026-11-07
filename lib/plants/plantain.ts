import type { Plant } from "./types";

export const plantain: Plant = {
  slug: "plantain",
  name: "Plantain",
  latin: "Musa spp. (AAB group)",
  family: "Musaceae",
  category: "Fruits & tree",
  zones: ["Tropical"],
  difficulty: "Moderate",
  lifecycle: "Perennial giant herb",
  featured: true,
  blurb:
    "The starch that feeds the south. Plantain is not eaten raw like dessert banana — it is boiled, fried, roasted, or mashed while still firm. The 'tree' is actually a giant herb that dies after fruiting, leaving suckers to take its place.",
  images: [
    { src: "/images/plants/plantain/1.jpg" },
    { src: "/images/plants/plantain/2.jpg" },
    { src: "/images/plants/plantain/3.jpg" },
    { src: "/images/plants/plantain/4.jpg" },
    { src: "/images/plants/plantain/5.jpg" },
    { src: "/images/plants/plantain/6.jpg" },
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
    "benue",
    "plateau",
    "kogi",
    "kwara",
    "niger",
    "taraba",
    "adamawa",
  ],
  varieties: [
    {
      name: "Agbagba",
      description:
        "The most widely grown Nigerian plantain. Large bunches, good keeping quality. Dominates markets in the south-west.",
      type: "Landrace",
      source: "Grower-maintained",
    },
    {
      name: "Pome",
      description:
        "Shorter stature, earlier fruiting. Favoured in home gardens where space is tight.",
      type: "Landrace",
      source: "Grower-maintained",
    },
    {
      name: "French type",
      description:
        "Introduced for export markets. Uniform bunch shape, longer shelf life. Grown commercially near Calabar and Port Harcourt.",
      type: "Introduced",
      source: "Commercial planting material",
    },
  ],
  nigeriaNote:
    "Plantain is the second-most important starch crop in southern Nigeria after cassava. It is fried into dodo, boiled into fufu accompaniment, or roasted whole. Every household keeps at least a few mats.",
  facts: {
    light: "Full sun",
    water: "High; steady rainfall or irrigation through growth",
    soil: "Deep, fertile, well-drained loam; hates waterlogging",
    spacing: "Mat spacing 3 × 3 m; one leader per mat",
    harvest: "12–18 months after planting; bunch matures over weeks",
    habit: "Giant herb, 3–5 m tall, dies after fruiting",
  },
  growing: [
    {
      title: "Start with healthy suckers",
      body: "Plantain is grown from suckers taken from vigorous mother plants. Choose sword suckers (narrow base) for faster establishment. Avoid waterlogged digging sites.",
    },
    {
      title: "Prepare deep holes",
      body: "Dig 60 cm square holes and mix compost into the backfill. Plantain roots go deep. Shallow planting leads to toppling when the bunch fills.",
    },
    {
      title: "Keep one leader, remove others",
      body: "Each mat should have one main stem (the leader) plus two follow-up suckers. Remove all other shoots. Crowded mats produce small, weak bunches.",
    },
    {
      title: "Feed heavily",
      body: "Plantain is a hungry crop. Apply compost or manure monthly during the first year. Deficiency shows as yellow leaves and thin pseudostems.",
    },
    {
      title: "Harvest when fingers plump",
      body: "Cut the whole bunch when the individual fruits swell and the angles soften. Green, angular fruits are immature. The mother stem dies after harvest — leave one sucker to become next year's leader.",
    },
  ],
  benefits: [
    {
      title: "The starch that stores on the stem",
      body: "Unripe plantains keep for weeks hanging in a cool shed. No refrigeration needed. The harvest can be used slowly through the lean season.",
    },
    {
      title: "Every part has a use",
      body: "Fruit for food, sap for fibre, leaves for wrapping, trunk for mulch. Nothing on the plant is wasted.",
    },
  ],
  cautions: [
    {
      title: "Toppling in wind",
      body: "Heavy bunches catch the wind. Stake mature plants or prune surrounding vegetation to reduce gust exposure. Fallen stems rarely recover.",
    },
    {
      title: "Banana bacterial wilt spreads through tools",
      body: "Cleaning blades between plants prevents disease transfer. Disinfect machetes with fire or bleach before moving to a new mat.",
    },
  ],
  companions: [
    {
      plant: "Cocoa",
      why: "Plantain gives shade to young cocoa and earns income while the cocoa waits to fruit. Classic west African agroforestry pair.",
    },
    {
      plant: "Ginger",
      why: "Ginger likes the dappled light under young plantain stands. The two share the bed without competing.",
    },
  ],
  avoid: [
    {
      plant: "Crowded mats",
      why: "More than three stems per mat starves everyone. Thin ruthlessly or the whole patch produces weak, small bunches.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
