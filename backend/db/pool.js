import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    user: 'daois',
    host: 'localhost',
    database: 'postgres',
    port: 5432
});

export { pool };