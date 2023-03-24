const express = require("express");

const { connectDB } = require("./db/database");

const signalsRoutes = require('./routes/signals');

const app = express();

app.use(express.json());

// routes
app.use('/api/signals', signalsRoutes);

connectDB();

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});