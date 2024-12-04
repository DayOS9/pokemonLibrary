import express from "express";
import {
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
} from "../controllers/pokemonController.js";
const router = express.Router();

router.patch("/pokemon/id/:id/nickname", updateNickNameByIdFav);

router.patch("/pokemon/name/:name/nickname", updateNickNameByNameFav);

router.post("/pokemon/id/:id/add/favorites", addByIdFav);

router.post("/pokemon/name/:name/add/favorites", addByNameFav);

router.delete("/pokemon/id/:id/delete/favorites", deleteByIdFav);

router.delete("/pokemon/name/:name/delete/favorites", deleteByNameFav);

router.get("/pokemon/id/:id", getById);

router.get("/pokemon/name/:name", getByName);

router.get("/pokemon/type/:type", getByType);

router.get("/pokemon/color/:color", getByColor);

router.get("/pokemon/ability/:ability", getByAbility);

router.get("/pokemon/generation/:generation", getByGeneration);

router.get("/pokemon/all/favorites", getAllFavorites);

router.get("/pokemon/all", getAll);

export { router };
