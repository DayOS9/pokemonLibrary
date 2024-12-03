import { getGen1Pokemon } from "./gen1Pok.js";
import { getGen2Pokemon } from "./gen2Pok.js";
import { getGen3Pokemon } from "./gen3Pok.js";

const getPokemon = async () => {
  await Promise.all([getGen1Pokemon(), getGen2Pokemon(), getGen3Pokemon()]);
};

export { getPokemon };
