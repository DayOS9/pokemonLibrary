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
} from "../models/pokemonModel.js";

const getByColor = async (req, res) => {
  const { color } = req.params;
  try {
    const pokemons = await getPokemonByColor(color);
    if (pokemons.length > 0) {
      res.json(pokemons);
    } else {
      res.status(404).json({ error: "Pokemon(s) with that color not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getByGeneration = async (req, res) => {
  const { generation } = req.params;
  try {
    const pokemons = await getPokemonByGeneration(generation);
    if (pokemons.length > 0) {
      res.json(pokemons);
    } else {
      res
        .status(404)
        .json({ error: "Pokemon(s) under that generation not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getByAbility = async (req, res) => {
  const { ability } = req.params;
  try {
    const pokemons = await getPokemonByAbility(ability);
    if (pokemons.length > 0) {
      res.json(pokemons);
    } else {
      res.status(404).json({ error: "Pokemon(s) with that ability not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getByType = async (req, res) => {
  const { type } = req.params;
  try {
    const pokemons = await getPokemonByType(type);
    if (pokemons.length > 0) {
      res.json(pokemons);
    } else {
      res.status(404).json({ error: "Pokemon(s) with that type not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getByName = async (req, res) => {
  const { name } = req.params;
  try {
    const pokemon = await getPokemonByName(name);
    if (pokemon.length > 0) {
      res.json(pokemon);
    } else {
      res.status(404).json({ error: "Pokemon with that name not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await getPokemonById(id);
    if (pokemon.length > 0) {
      res.json(pokemon);
    } else {
      res.status(404).json({ error: "Pokemon with that id not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAll = async (req, res) => {
  try {
    const pokemon = await getAllPokemon();
    if (pokemon.length > 0) {
      res.json(pokemon);
    } else {
      res.status(404).json({ error: "Unable to grab all pokemon" });
    }
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
};
