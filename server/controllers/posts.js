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
exports.createPosts = async (req, res) => {
  let post = new Post({
    title: req.body.title,
    message: req.body.message,
    creator: req.body.creator,
    tags: req.body.tags
  });
  try {
    post = await post.save();
    console.log("Prompt added to database");
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
