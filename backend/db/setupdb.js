import { readFileSync } from "fs";
import { dirname, join } from "path";
import { pool } from "./pool.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filepath = join(__dirname, "init.sql");

const setupdb = async () => {
  try {
    const sql = readFileSync(filepath, "utf8");
    await pool.query(sql);
  } catch (error) {
    console.error("An error has occurred when created database:", error);
  }
};

export { setupdb };
