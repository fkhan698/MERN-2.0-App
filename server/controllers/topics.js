const express = require("express");
const mongoose = require("mongoose");

const Topic = require("../models/topics.js");

exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.find(data => data);
    res.json(topics);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};

exports.getTopicID = async (req, res) => {
  const { id } = req.params;
  try {
    const topic = await Topic.findById(id);
    res.status(200).json(topic);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
exports.createTopics = async (req, res) => {
  let topic = new Topic({
    title: req.body.title
  });
  try {
    await topic.save();
    console.log("Topic added to database");
  } catch (e) {
    console.log(e);
    res.status(409).json({ message: e.message });
  }
};

exports.deleteTopic = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  try {
    await Topic.findByIdAndRemove(id);
    console.log("Topic was deleted");
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
