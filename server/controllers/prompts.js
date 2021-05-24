const Prompt = require("../models/prompt.js");

exports.getPrompts = async (req, res) => {
  try {
    const prompts = await Prompt.find(data => data);

    res.json(prompts);
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
};

exports.getAddPrompt = async (req, res) => {
  res.render("prompts/new", { prompt: new Prompt() });
};

exports.createPrompts = async (req, res) => {
  let prompt = new Prompt({
    title: req.body.title,
    description: req.body.description
  });
  try {
    prompt = await prompt.save();
    console.log("Prompt added to database");
    res.status(201).redirect("http://localhost:3000/");
  } catch (e) {
    console.log(e);
    res.status(404);
  }
};
