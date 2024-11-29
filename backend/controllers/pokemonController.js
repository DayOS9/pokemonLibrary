import { getPokemon } from "../models/pokemonModel.js"

const getPok = async (req, res) => {
    try {
        const users = await getPokemon();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch pokemon' });
    }
};

export { getPok };
