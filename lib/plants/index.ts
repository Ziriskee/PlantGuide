import { bambaraNut } from "./bambara-nut";
import { basil } from "./basil";
import { beetroot } from "./beetroot";
import { bitterLeaf } from "./bitter-leaf";
import { cassava } from "./cassava";
import { cowpea } from "./cowpea";
import { cucumber } from "./cucumber";
import { egusi } from "./egusi";
import { ewedu } from "./ewedu";
import { flutedPumpkin } from "./fluted-pumpkin";
import { gardenEgg } from "./garden-egg";
import { ginger } from "./ginger";
import { irishPotato } from "./irish-potato";
import { lavender } from "./lavender";
import { maize } from "./maize";
import { ogbono } from "./ogbono";
import { okra } from "./okra";
import { onion } from "./onion";
import { peppers } from "./peppers";
import { plantain } from "./plantain";
import { rosemary } from "./rosemary";
import { scentLeaf } from "./scent-leaf";
import { soybean } from "./soybean";
import { spearmint } from "./spearmint";
import { sweetPotato } from "./sweet-potato";
import { tomato } from "./tomato";
import { turmeric } from "./turmeric";
import type { Plant } from "./types";
import { waterleaf } from "./waterleaf";
import { yam } from "./yam";

/**
 * Site order, not alphabetical. The hero now selects plants by stable slug,
 * but this order still controls browse listings and featured arrays.
 */
export const plants: Plant[] = [
  tomato,
  basil,
  flutedPumpkin,
  maize,
  spearmint,
  rosemary,
  okra,
  lavender,
  cassava,
  yam,
  ewedu,
  egusi,
  ogbono,
  cucumber,
  onion,
  peppers,
  cowpea,
  bambaraNut,
  soybean,
  sweetPotato,
  irishPotato,
  beetroot,
  ginger,
  turmeric,
  waterleaf,
  scentLeaf,
  gardenEgg,
  plantain,
  bitterLeaf,
];

export const featuredPlants = plants.filter((plant) => plant.featured);

export function getPlant(slug: string): Plant | undefined {
  return plants.find((plant) => plant.slug === slug);
}

export * from "./types";
