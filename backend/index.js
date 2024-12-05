import express, { json } from "express";
import cors from "cors";
import { setupdb } from "./db/setupdb.js";
import { getPokemon } from "./db/pokemonInsert.js";
import { router } from "./routes/pokemonRoutes.js";

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(cors());
app.use(json());

//run and create database
const initializeDatabase = async () => {
  try {
    await setupdb();
    console.log("Database setup complete. Transferring Pokemon data to the database.");

    await getPokemon();
    console.log("All done getting pokemon into the database.");
  } catch (err) {
    console.error("Error initializing the database:", err);
    process.exit(1); // Exit the process if the setup fails
  }
};

initializeDatabase().then(() => {
  //setup root route
  app.get("/", (req, res) => {
    res.send("Hello from root node");
  });

  //set up routes
  app.use("/api", router);

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
