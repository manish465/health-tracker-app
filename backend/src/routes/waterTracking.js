const express = require("express");
const router = express.Router();
const { add, get } = require("../controller/waterTracking");

router.post("/add", add);
router.get("/:id", get);

module.exports = router;
