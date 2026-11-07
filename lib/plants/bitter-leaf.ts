import type { Plant } from "./types";

export const bitterLeaf: Plant = {
  slug: "bitter-leaf",
  name: "Bitter leaf",
  latin: "Vernonia amygdalina",
  family: "Asteraceae",
  category: "Leafy vegetable",
  zones: ["Tropical"],
  difficulty: "Easy",
  lifecycle: "Perennial shrub",
  featured: true,
  blurb:
    "The leaf that demands respect. Onugbu (Igbo) or Efoyido (Ibibio) is washed repeatedly to tame its sharp bitterness, then cooked into soups that define eastern Nigerian cuisine. The plant itself is a hardy roadside shrub that anyone can grow.",
  images: [
    { src: "/images/plants/bitter-leaf/1.jpg" },
    { src: "/images/plants/bitter-leaf/2.jpg" },
    { src: "/images/plants/bitter-leaf/3.jpg" },
    { src: "/images/plants/bitter-leaf/4.jpg" },
    { src: "/images/plants/bitter-leaf/5.jpg" },
    { src: "/images/plants/bitter-leaf/6.jpg" },
  ],
  states: [
    "anambra",
    "abia",
    "imo",
    "enugu",
    "ebonyi",
    "delta",
    "edo",
    "rivers",
    "cross-river",
    "akwa-ibom",
    "bayelsa",
    "lagos",
    "ogun",
    "oyo",
  ],
  varieties: [
    {
      name: "Local onugbu",
      description:
        "Seed-gathered shrubs from roadsides and forest edges. Bitterness intensity varies by location and age of leaf.",
      type: "Landrace",
      source: "Grower-maintained",
    },
  ],
  nigeriaNote:
    "Bitter leaf soup is the signature dish of Anambra, Imo, and Ebonyi. The leaves are washed in warm water until the bitterness mellows, then cooked with palm oil, stockfish, and potash. The plant grows wild along roadsides but is kept deliberately in home yards.",
  facts: {
    light: "Full sun to partial shade",
    water: "Low; tolerates dry spells once established",
    soil: "Any reasonable soil; grows on marginal land",
    spacing: "Rows 1.5 m apart, plants 1 m apart",
    harvest: "Year-round once established; pick young leaves",
    habit: "Woody shrub or small tree, 2–5 m tall",
  },
  growing: [
    {
      title: "Start from seed or cutting",
      body: "Fresh seed germinates within two weeks. Stem cuttings also root easily. Plant at the start of the rains so the young shrub establishes before the dry season.",
    },
    {
      title: "Let it grow wild",
      body: "Bitter leaf needs almost no care once established. It survives poor soil, drought, and neglect. Prune lightly to keep it accessible for picking.",
    },
    {
      title: "Pick young leaves only",
      body: "Old leaves are tougher and more intensely bitter. Snip the tender tips weekly during the rains. The plant responds by sending out more shoots.",
    },
    {
      title: "Wash before cooking",
      body: "The bitterness is real and must be reduced. Rinse the leaves in warm water, squeeze, rinse again. Repeat until the taste suits your pot. Skipping this step ruins the soup.",
    },
  ],
  benefits: [
    {
      title: "The soup that defines a region",
      body: "Onugbu soup is inseparable from Igbo identity. Growing your own guarantees the freshest leaves for the pot.",
    },
    {
      title: "Thrives where nothing else will",
      body: "Marginal soil, dry spells, roadside dust — bitter leaf handles it all. It is the most forgiving leafy crop in the guide.",
    },
  ],
  cautions: [
    {
      title: "Bitterness varies wildly",
      body: "Some shrubs are sharply bitter; others are mild. Test a leaf before harvesting a whole branch. Adjust washing time accordingly.",
    },
    {
      title: "Gets tall if unpruned",
      body: "Left alone, the shrub reaches 5 m and puts leaves out of reach. Cut back annually to keep picking height manageable.",
    },
  ],
  companions: [
    {
      plant: "Maize",
      why: "Bitter leaf tolerates the shade of young maize and continues producing after the cereal is harvested.",
    },
  ],
  avoid: [
    {
      plant: "Nothing significant",
      why: "This is one of the few crops with no known companion conflicts. It grows beside almost anything.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
