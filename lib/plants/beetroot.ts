import type { Plant } from "./types";

export const beetroot: Plant = {
  slug: "beetroot",
  name: "Beetroot",
  latin: "Beta vulgaris",
  family: "Amaranthaceae",
  category: "Roots & tuber",
  zones: ["Tropical","Highland", "Subtropical"],
  difficulty: "Moderate",
  lifecycle: "Annual",
  featured: true,
  blurb:
    "A round, deep-red root grown for salads, cooking and juice. In Nigeria it is mostly a Plateau and peri-urban crop — it needs cool weather and loose soil to form a good bulb.",
  images: [
    { src: "/images/plants/beetroot/1.jpg" },
    { src: "/images/plants/beetroot/2.jpg" },
    { src: "/images/plants/beetroot/3.jpg" },
    { src: "/images/plants/beetroot/4.jpg" },
    { src: "/images/plants/beetroot/5.jpg" },
    { src: "/images/plants/beetroot/6.jpg" },
  ],
  states: ["plateau", "kaduna", "fct", "lagos", "oyo", "osun", "rivers"],
  varieties: [
    {
      name: "Detroit Dark Red",
      description:
        "The most common commercial type in Nigerian seed shops. Round, deep-red, stores well.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
    {
      name: "Egyptian Flat",
      description:
        "Flatter, earlier-maturing type; common in home gardens on the Plateau.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
    {
      name: "Golden beetroot",
      description:
        "Yellow-fleshed type, milder flavour; occasionally seen in urban markets.",
      type: "Introduced",
      source: "Commercial seed stock",
    },
  ],
  nigeriaNote:
    "Beetroot is a niche crop in Nigeria. It does best on the Jos Plateau and in cool-season beds around Lagos and the south-west. In the hot lowlands it runs to leaf instead of root.",
  facts: {
    light: "Full sun",
    water: "Steady moisture; dry soil gives tough, small roots",
    soil: "Deep, loose, stone-free loam; stones and hard pans deform the bulbs",
    spacing: "Rows 30 cm apart, thin seedlings to 10 cm",
    harvest: "8–10 weeks from sowing",
    habit: "Low rosette with a round swollen root",
  },
  growing: [
    {
      title: "Sow directly where it will grow",
      body: "Beetroot does not transplant well. Sow the seeds thinly in a fine, well-prepared bed and thin the seedlings as they grow.",
    },
    {
      title: "Keep the bed moist",
      body: "The root swells with water. If the soil dries out, the roots turn hard and woody. Water little and often rather than flooding.",
    },
    {
      title: "Thin the seedlings",
      body: "Each beetroot seed gives several seedlings. Thin them so each plant has room to form a proper bulb. The thinnings can be cooked as greens.",
    },
    {
      title: "Harvest while still tender",
      body: "Lift the roots when they are about the size of a tennis ball. Left too long, they become tough and lose their sweetness.",
    },
  ],
  benefits: [
    {
      title: "Fast to harvest",
      body: "From seed to plate in about two months. One of the quicker root crops in the guide.",
    },
    {
      title: "Leaves and root both edible",
      body: "The young leaves can be cooked like spinach, and the root can be boiled, roasted or juiced.",
    },
  ],
  cautions: [
    {
      title: "Heat makes it run to leaf",
      body: "In hot weather the plant flowers instead of swelling a root. Grow in the cool season or on the Plateau for proper bulbs.",
    },
    {
      title: "Stones deform the root",
      body: "Heavy or stony soil gives forked, misshapen bulbs. Prepare the bed well and remove stones before sowing.",
    },
  ],
  companions: [
    {
      plant: "Onion",
      why: "Onion and beetroot share the same bed without fighting — onions above, beetroot below.",
    },
  ],
  avoid: [
    {
      plant: "Climbing beans",
      why: "Tall beans shade the low beetroot rosette and reduce root size.",
    },
  ],
  traditional: null,
  reviewedAt: "2026-11-07",
};
