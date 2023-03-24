const express = require("express");

const { connectDB } = require("./db/database");

const app = express();

app.use(express.json());

connectDB();
