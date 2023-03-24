const express = require("express");

const { connectDB } = require("./db/database");

const signalsRoutes = require('./routes/signals');
const alertRoutes = require('./routes/alerts');

const app = express();

app.use(express.json());

// routes
app.use('/api/signals', signalsRoutes);
app.use('/api/alerts', alertRoutes);

connectDB();

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});