import express from "express";
const router = express.Router();
import { getPok } from "../controllers/pokemonController.js"

//get first 10 pokemon
router.get("/", getPok);

export { router };
