import type { Plant } from "./types";

export const sweetPotato: Plant = {
  slug: "sweet-potato",
  name: "Sweet potato",
  latin: "Ipomoea batatas",
  family: "Convolvulaceae",
  category: "Roots & tuber",
  zones: ["Tropical", "Subtropical"],
  difficulty: "Easy",
  lifecycle: "Perennial grown as a seasonal crop",
  featured: true,
  blurb:
    "A trailing vine grown for its swollen roots. It tolerates poor soil better than Irish potato, and the young leaves are eaten as a vegetable in many Nigerian homes.",
  images: [
    { src: "/images/plants/sweet-potato/1.jpg" },
    { src: "/images/plants/sweet-potato/2.jpg" },
    { src: "/images/plants/sweet-potato/3.jpg" },
    { src: "/images/plants/sweet-potato/4.jpg" },
    { src: "/images/plants/sweet-potato/5.jpg" },
    { src: "/images/plants/sweet-potato/6.jpg" },
  ],
  states: [
    "benue",
    "plateau",
    "nasarawa",
    "kaduna",
    "kano",
    "katsina",
    "jigawa",
    "bauchi",
    "gombe",
    "adamawa",
    "taraba",
    "kwara",
    "kogi",
    "niger",
    "fct",
    "oyo",
    "osun",
    "ogun",
    "ondo",
    "ekiti",
    "edo",
    "delta",
    "rivers",
    "anambra",
    "imo",
    "abia",
    "ebonyi",
    "enugu",
    "cross-river",
    "akwa-ibom",
    "lagos",
  ],
  varieties: [
    {
      name: "Ex-Magbessi",
      description:
        "Purple-skinned, white-fleshed type originally from Benin but widely grown across the middle belt and south-west. Stores well.",
      type: "Introduced",
      source: "IITA / NRCRI",
    },
    {
      name: "SPK-004",
      description:
        "Orange-fleshed, pro-vitamin A variety released for Nigerian growers. The orange flesh signals the nutrient content.",
      type: "NASC-released",
      source: "NRCRI Umudike / NASC",
    },
    {
      name: "Tinago",
      description:
        "Purple-fleshed type of Filipino origin, established in Nigerian home gardens for its colour and taste.",
      type: "Introduced",
      source: "IITA / NRCRI",
    },
    {
      name: "Local cream and white types",
      description:
        "Farm-saved vines passed between neighbours. Flesh colour and shape vary by village.",
      type: "Landrace",
      source: "Grower-maintained",
    },
  ],
  nigeriaNote:
    "Sweet potato grows across the middle belt and the south. The leaves are cooked as greens in many homes. It is not as central as cassava or yam, but it fills the gap in seasons when those are short.",
  facts: {
    light: "Full sun",
    water: "Moderate; tolerates dry spells once established",
    soil: "Light, well-drained sandy loam; waterlogged ground rots the roots",
    spacing: "Ridges 75 cm apart, vines 30 cm apart on the ridge",
    harvest: "3–5 months after planting",
    habit: "Trailing vine with swollen storage roots",
  },
  growing: [
    {
      title: "Plant vine cuttings, not seed",
      body: "Sweet potato is grown from 25–30 cm pieces of healthy vine. Push them into ridges at a slant with a few buds above ground. Plant at the start of the rains so the cuttings root without drying out.",
    },
    {
      title: "Keep the field clean for the first two months",
      body: "The vines are slow to cover the ground at first, and weeds can beat them. Weed early, then let the vines shade the soil themselves.",
    },
    {
      title: "Do not overfeed",
      body: "Too much nitrogen gives you lots of leaves and small roots. Sweet potato does best on moderate fertility — a little compost at planting is usually enough.",
    },
    {
      title: "Lift when the leaves start to yellow",
      body: "The roots are ready when the vines slow down and the leaves turn yellow. Lift carefully — a cut root rots quickly. The young leaves can be picked any time after the vines are established.",
    },
  ],
  benefits: [
    {
      title: "Two harvests from one plant",
      body: "The roots feed the household, and the young leaves are cooked as a vegetable. Few crops give both from the same planting.",
    },
    {
      title: "Tough on poor soil",
      body: "Where yam or Irish potato would fail, sweet potato still produces. It is the crop that keeps producing when conditions are hard.",
    },
    {
      title: "Orange types carry vitamin A",
      body: "Orange-fleshed varieties give the body what it needs to make vitamin A — important for children and pregnant women.",
    },
  ],
  cautions: [
    {
      title: "Lifted roots do not keep long",
      body: "Fresh roots spoil within a week or two of lifting. Harvest only what you can use, sell or process quickly.",
    },
    {
      title: "Sick vines spread disease",
      body: "Cuttings taken from infected plants carry the disease into the new field. Source vines from healthy, vigorous plants.",
    },
    {
      title: "Rats and weevils attack stored roots",
      body: "In storage, sweet potato weevils can ruin a whole heap. Keep the store dry, check regularly, and use clean planting material.",
    },
  ],
  companions: [
    {
      plant: "Maize",
      why: "Maize is harvested while the sweet potato is still establishing, so both share the land without competing.",
    },
    {
      plant: "Cowpea",
      why: "Cowpea covers the ground and holds nitrogen; sweet potato trails beneath without crowding it.",
    },
  ],
  avoid: [
    {
      plant: "Cassava in the same ridge",
      why: "Both crops want the same underground space. Planting them together shrinks the harvest on both sides.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
