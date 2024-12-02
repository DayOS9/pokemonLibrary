import { pool } from "../db/pool.js";

const getPokemon = async () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((json) => { console.log(json); });
};

export { getPokemon };
