const express = require("express");
const router = express.Router();
const { signup, signin, get } = require("../controller/auth");

router.get("/:id", get);
router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
