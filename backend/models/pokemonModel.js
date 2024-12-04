import { pool } from "../db/pool.js";

const getPokemonByName = async (name) => {
  const result = await pool.query("SELECT * FROM pokemon WHERE dexname = $1", [
    name,
  ]);
  return result.rows;
};

const getPokemonById = async (id) => {
  const result = await pool.query("SELECT * FROM pokemon WHERE dexid = $1", [
    id,
  ]);
  return result.rows;
};

const getPokemonByType = async (type) => {
  const result = await pool.query(
    "SELECT t_list FROM typing WHERE t_primarytype = $1",
    [type],
  );
  if (result.rows.length > 0) {
    return result.rows[0].t_list;
  } else {
    return [];
  }
};

const getPokemonByAbility = async (ability) => {
  const result = await pool.query(
    "SELECT a_list FROM ability WHERE a_primaryability = $1",
    [ability],
  );
  if (result.rows.length > 0) {
    return result.rows[0].a_list;
  } else {
    return [];
  }
};

const getPokemonByGeneration = async (generation) => {
  const result = await pool.query(
    "SELECT g_list FROM generation WHERE g_generationname = $1",
    [generation],
  );
  if (result.rows.length > 0) {
    return result.rows[0].g_list;
  } else {
    return [];
  }
};

const getPokemonByColor = async (color) => {
  const result = await pool.query(
    "SELECT c_list FROM color WHERE c_colorname = $1",
    [color],
  );
  if (result.rows.length > 0) {
    return result.rows[0].c_list;
  } else {
    return [];
  }
};

const getAllPokemon = async () => {
  const result = await pool.query("SELECT * FROM pokemon");
  return result.rows;
};

export {
  getPokemonById,
  getPokemonByName,
  getPokemonByType,
  getPokemonByAbility,
  getPokemonByGeneration,
  getPokemonByColor,
  getAllPokemon,
};
