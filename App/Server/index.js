const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/database");

const signalsRoutes = require("./routes/signals");
const alertRoutes = require("./routes/alerts");
const personalAlertRoutes = require("./routes/personalAlert")

const app = express();
const corsOptions = {
  AccessControlAllowOrigin: "*",
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));
app.use(express.json());

// routes
app.use("/api/signals", signalsRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/personalalert", personalAlertRoutes);

connectDB();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
