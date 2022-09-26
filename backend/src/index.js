const express = require("express");
const monsgoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello & Welcome to Health Tracker App!!");
});

app.listen(port, () => console.log("Server is Running!!"));
