const express = require("express");
const router = express.Router();

const Prompt = require("../models/prompt");

router.get("/", async (req, res) => {
  try {
    const prompts = await Prompt.find()
      .sort({ createdDate: "desc" })
      .limit(10)
      .exec();
    res.json(prompts);
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

router.get("/new", (req, res) => {
  res.render("prompts/new", { prompt: new Prompt() });
});

router.post("/create", async (req, res) => {
  let prompt = new Prompt({
    title: req.body.title,
    description: req.body.description
  });
  try {
    prompt = await prompt.save();
    res.redirect("prompts");
  } catch (e) {
    console.log(e);
    res.redirect("prompts/new");
  }
});

module.exports = router;
