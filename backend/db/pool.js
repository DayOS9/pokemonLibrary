import pkg from "pg";
import dotenv from "dotenv";
const { Pool } = pkg;

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: "localhost",
  database: "postgres",
  port: 8888,
});

export { pool };
