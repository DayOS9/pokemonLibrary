import { pool } from "../db/pool.js";

const getPokemon = async () => {
    const result = await pool.query("SELECT * FROM pokemon limit 10");
    return result.rows;
};

export { getPokemon };
