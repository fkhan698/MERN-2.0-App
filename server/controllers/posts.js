const express = require("express");
const mongoose = require("mongoose");

const Post = require("../models/postMessage.js");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find(data => data);
    res.json(posts);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
exports.createPosts = async (req, res) => {
  let post = new Post({
    title: req.body.title,
    message: req.body.message,
    creator: req.body.creator,
    selectedFile: req.body.selectedFile,
    tags: req.body.tags
  });
  try {
    post = await post.save();
    console.log("Prompt added to database");
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with ${id}`);

  await Post.findByIdAndRemove(id);
  res.json({ message: "Post was deleted" });
  console.log("Post was deleted");
};
