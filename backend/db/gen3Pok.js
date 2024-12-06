import { pool } from "../db/pool.js";
import { capitalizeFirstChar } from "./capitalize.js";

const getGen3Pokemon = async () => {
  try {
    //check if pokemon already present
    const pokemonCheck = await pool.query("SELECT 1 FROM pokemon LIMIT 1");

    if (pokemonCheck.rowCount > 0) {
      console.log("Pokemon data already exists. Skipping loop");
      return;
    }

    for (let index = 252; index < 387; index++) {
      try {
        // Fetch pokemon data
        const pokemonResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${index}/`,
        );
        const pokemonData = await pokemonResponse.json();

        const speciesResponse = await fetch(pokemonData.species.url);
        const speciesData = await speciesResponse.json();
        const color = capitalizeFirstChar(speciesData.color.name);

        // insert to color, type, ability, gen table (the ids)
        await pool.query(
          "UPDATE color SET c_list = array_append(c_list, $1) WHERE c_colorname = $2",
          [index, color],
        );

        await pool.query(
          "UPDATE generation SET g_list = array_append(g_list, $1) WHERE g_generationname = $2",
          [index, "III"],
        );

        await pool.query(
          "UPDATE typing SET t_list = array_append(t_list, $1) WHERE t_primarytype = $2",
          [index, capitalizeFirstChar(pokemonData.types[0].type.name)],
        );

        await pool.query(
          "UPDATE ability SET a_list = array_append(a_list, $1) WHERE a_primaryability = $2",
          [index, capitalizeFirstChar(pokemonData.abilities[0].ability.name)],
        );

        const query = `
        INSERT INTO pokemon (dexid, dexname, dexhp, dexattack, dexdefense, dexspecialattack, dexspecialdefense, dexspeed, dexweight, dexheight, t_primarytype, a_primaryability, g_generationname, c_colorname)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        ON CONFLICT (dexid) DO NOTHING;
      `;

        const values = [
          index,
          capitalizeFirstChar(pokemonData.name),
          pokemonData.stats[0].base_stat,
          pokemonData.stats[1].base_stat,
          pokemonData.stats[2].base_stat,
          pokemonData.stats[3].base_stat,
          pokemonData.stats[4].base_stat,
          pokemonData.stats[5].base_stat,
          pokemonData.weight,
          pokemonData.height,
          capitalizeFirstChar(pokemonData.types[0].type.name),
          capitalizeFirstChar(pokemonData.abilities[0].ability.name),
          "III",
          color,
        ];

        await pool.query(query, values);
      } catch (error) {
        console.error(
          `Error fetching or inserting data for Pokemon ID ${index}:`,
          error,
        );
      }
    }
  } catch (error) {
    console.error("Error in checking pokeon table:", error);
  }
};

export { getGen3Pokemon };
