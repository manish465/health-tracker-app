const express = require("express");
const app = express();
const monsgoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const port = process.env.PORT || 8000;
const userRoute = require("./routes/auth");
const waterTrackingRoute = require("./routes/waterTracking");

dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello & Welcome to Health Tracker App!!");
});

app.use("/api/user", userRoute);
app.use("/api/water", waterTrackingRoute);

monsgoose.connect(process.env.URI, (err) => {
    err
        ? console.log("Something went wrong")
        : app.listen(port, () => console.log("Server is Running!!"));
});
