const express = require("express");
const router = express.Router();

const promptController = require("../controllers/prompts.js");

router.get("/", promptController.getPrompts);

router.get("/new", promptController.getAddPrompt);

router.post("/create", promptController.createPrompts);

module.exports = router;
