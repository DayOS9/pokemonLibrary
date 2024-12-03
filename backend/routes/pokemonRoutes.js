import express from "express";
import {
  getById,
  getByName,
  getByType,
  getByColor,
  getByAbility,
  getByGeneration,
} from "../controllers/pokemonController.js";
const router = express.Router();

router.get("/pokemon/id/:id", getById);

router.get("/pokemon/name/:name", getByName);

router.get("/pokemon/type/:type", getByType);

router.get("/pokemon/color/:color", getByColor);

router.get("/pokemon/:ability", getByAbility);

router.get("/pokemon/generation/:generation", getByGeneration);

export { router };
