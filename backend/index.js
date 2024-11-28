const express = require('express');
const Pool = require('pg').Pool;
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    port: 5432
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
