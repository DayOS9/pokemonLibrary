import express, { json } from 'express';
import cors from 'cors';
import { setupdb } from "./db/setupdb.js";
import { router } from "./routes/pokemon.js";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors())
app.use(json())

//run and create database
setupdb();

//setup root route
app.get("/", (req, res) => {
    res.send("Hello from root node");
});

//set up routes
app.use("/pokemon", router);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
