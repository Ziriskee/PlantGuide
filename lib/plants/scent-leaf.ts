import type { Plant } from "./types";

export const scentLeaf: Plant = {
  slug: "scent-leaf",
  name: "Scent leaf",
  latin: "Ocimum gratissimum",
  family: "Lamiaceae",
  category: "Herb",
  zones: ["Tropical"],
  difficulty: "Easy",
  lifecycle: "Perennial shrub",
  featured: true,
  blurb:
    "The strong-smelling herb that defines pepper soup. Known as nchanwu in Igbo kitchens and efirin in Yoruba ones, scent leaf is a woody shrub whose crushed leaves release a sharp, clove-like aroma that no other herb quite matches.",
  images: [
    { src: "/images/plants/scent-leaf/1.jpg" },
    { src: "/images/plants/scent-leaf/2.jpg" },
    { src: "/images/plants/scent-leaf/3.jpg" },
    { src: "/images/plants/scent-leaf/4.jpg" },
    { src: "/images/plants/scent-leaf/5.jpg" },
    { src: "/images/plants/scent-leaf/6.jpg" },
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
  ],
  varieties: [
    {
      name: "Local nchanwu / efirin",
      description:
        "Seed saved from mature plants left to flower. Aroma strength varies by village and by how often the shrub is pruned.",
      type: "Landrace",
      source: "Grower-maintained",
    },
  ],
  nigeriaNote:
    "Scent leaf is essential in Igbo pepper soup and Yoruba abula. It is grown in home gardens across the south and middle belt, rarely sold fresh in distant markets because the aroma fades fast once picked.",
  facts: {
    light: "Full sun to partial shade",
    water: "Moderate; steady moisture through establishment",
    soil: "Well-drained loam; tolerates poorer soils than basil",
    spacing: "Rows 45 cm apart, plants 30 cm apart",
    harvest: "Year-round once established; pick leaves as needed",
    habit: "Woody shrub, 60–150 cm tall",
  },
  growing: [
    {
      title: "Start from seed or cutting",
      body: "Sow seed thinly in a fine bed or push 10 cm stem cuttings into moist soil. Cuttings root within two weeks and give stronger aroma than seedlings.",
    },
    {
      title: "Prune regularly",
      body: "Pinch off the growing tips every few weeks. This keeps the shrub bushy and stops it going leggy. Unpruned plants lose leaf density and aroma strength.",
    },
    {
      title: "Let some plants flower",
      body: "Leave a few shrubs uncut to flower and set seed. That is next season's planting material. Harvest leaves from the younger, pruned plants.",
    },
    {
      title: "Protect from hard frost",
      body: "In highland areas like Jos, scent leaf dies back in cold weather. Cover the base with mulch or move potted plants indoors during harmattan nights.",
    },
  ],
  benefits: [
    {
      title: "The aroma that defines pepper soup",
      body: "Crushed scent leaf releases a sharp, clove-like smell that no substitute quite matches. A handful transforms a plain broth into something recognisable.",
    },
    {
      title: "Grows year-round in the tropics",
      body: "Once established, the shrub gives leaves continuously through the rains and the dry season. Few herbs are this reliable.",
    },
  ],
  cautions: [
    {
      title: "Aroma fades fast after picking",
      body: "Cut leaves lose their punch within hours. Harvest just before cooking, crush them in your hands to release the oils, and add them late in the cooking process.",
    },
    {
      title: "Becomes woody if unpruned",
      body: "Left alone, the shrub sends up long, bare stems with sparse leaves at the tip. Pruning is not optional — it is what keeps the plant useful.",
    },
  ],
  companions: [
    {
      plant: "Peppers",
      why: "Both are aromatic kitchen essentials and share similar soil and water needs without competing.",
    },
  ],
  avoid: [
    {
      plant: "Dense shade",
      why: "Under a closed tree canopy, scent leaf stretches, loses aroma and drops lower leaves. Give it at least half-day sun.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
