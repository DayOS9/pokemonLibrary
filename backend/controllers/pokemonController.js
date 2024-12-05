import {
  getPokemonByColor,
  getPokemonByGeneration,
  getPokemonByAbility,
  getPokemonByType,
  getPokemonByName,
  getPokemonById,
  getAllPokemon,
  addPokemonIdFavorites,
  addPokemonNameFavorites,
  deletePokemonIdFavorites,
  deletePokemonNameFavorites,
  updatePokemonNickNameIdFavorites,
  updatePokemonNickNameNameFavorites,
  getAllPokemonFavorites,
  getFavoritePokemonByColor,
  getFavoritePokemonByGeneration,
  getFavoritePokemonByAbility,
  getFavoritePokemonByType,
  getFavoritePokemonByName,
  getFavoritePokemonById,
  getTypes,
  getAbilities,
  getGenerations,
  getColors,
} from "../models/pokemonModel.js";

const getByColor = async (req, res) => {
  const { color } = req.params;
  try {
    const pokemons = await getPokemonByColor(color);
    res.json(pokemons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getByGeneration = async (req, res) => {
  const { generation } = req.params;
  try {
    const pokemons = await getPokemonByGeneration(generation);
    res.json(pokemons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getByAbility = async (req, res) => {
  const { ability } = req.params;
  try {
    const pokemons = await getPokemonByAbility(ability);
    res.json(pokemons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getByType = async (req, res) => {
  const { type } = req.params;
  try {
    const pokemons = await getPokemonByType(type);
    res.json(pokemons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getByName = async (req, res) => {
  const { name } = req.params;
  try {
    const pokemon = await getPokemonByName(name);
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await getPokemonById(id);
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAll = async (req, res) => {
  try {
    const pokemon = await getAllPokemon();
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addByIdFav = async (req, res) => {
  const { id } = req.params;

  try {
    await addPokemonIdFavorites(id);
    res.status(201).json({ message: "Pokemon added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add pokemon" });
  }
};

const addByNameFav = async (req, res) => {
  const { name } = req.params;

  try {
    await addPokemonNameFavorites(name);
    res.status(201).json({ message: "Pokemon added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add pokemon" });
  }
};

const deleteByIdFav = async (req, res) => {
  const { id } = req.params;

  try {
    await deletePokemonIdFavorites(id);
    res.status(201).json({ message: "Pokemon deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete pokemon" });
  }
};

const deleteByNameFav = async (req, res) => {
  const { name } = req.params;

  try {
    await deletePokemonNameFavorites(name);
    res.status(201).json({ message: "Pokemon deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete pokemon" });
  }
};

const updateNickNameByIdFav = async (req, res) => {
  const { id } = req.params;
  const { nickname } = req.body;

  try {
    const result = await updatePokemonNickNameIdFavorites(id, nickname);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update pokemon nickname" });
  }
};

const updateNickNameByNameFav = async (req, res) => {
  const { name } = req.params;
  const { nickname } = req.body;

  try {
    const result = await updatePokemonNickNameNameFavorites(name, nickname);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update pokemon nickname" });
  }
};

const getAllFavorites = async (req, res) => {
  try {
    const pokemon = await getAllPokemonFavorites();
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getFavoriteByColor = async (req, res) => {
  const { color } = req.params;
  try {
    const pokemons = await getFavoritePokemonByColor(color);
    res.json(pokemons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getFavoriteByGeneration = async (req, res) => {
  const { generation } = req.params;
  try {
    const pokemons = await getFavoritePokemonByGeneration(generation);
    res.json(pokemons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getFavoriteByAbility = async (req, res) => {
  const { ability } = req.params;
  try {
    const pokemons = await getFavoritePokemonByAbility(ability);
    res.json(pokemons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getFavoriteByType = async (req, res) => {
  const { type } = req.params;
  try {
    const pokemons = await getFavoritePokemonByType(type);
    res.json(pokemons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getFavoriteByName = async (req, res) => {
  const { name } = req.params;
  try {
    const pokemon = await getFavoritePokemonByName(name);
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getFavoriteById = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await getFavoritePokemonById(id);
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const types = async (req, res) => {
  try {
    const pokemon = await getTypes();
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const abilities = async (req, res) => {
  try {
    const pokemon = await getAbilities();
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const generations = async (req, res) => {
  try {
    const pokemon = await getGenerations();
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const colors = async (req, res) => {
  try {
    const pokemon = await getColors();
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  getById,
  getByName,
  getByType,
  getByColor,
  getByAbility,
  getByGeneration,
  getAll,
  addByIdFav,
  addByNameFav,
  deleteByIdFav,
  deleteByNameFav,
  updateNickNameByIdFav,
  updateNickNameByNameFav,
  getAllFavorites,
  getFavoriteById,
  getFavoriteByName,
  getFavoriteByType,
  getFavoriteByColor,
  getFavoriteByAbility,
  getFavoriteByGeneration,
  types,
  abilities,
  generations,
  colors,
};
