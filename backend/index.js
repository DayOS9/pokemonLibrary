import express, { json } from 'express';
import cors from 'cors';
import { setupdb } from "./db/setupdb.js"

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors())
app.use(json())

//run and create database
setupdb();

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
