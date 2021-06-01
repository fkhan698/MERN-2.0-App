const express = require("express");
const mongoose = require("mongoose");

const Post = require("../models/postMessage.js");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find(data => data);
    res.json(posts);
  } catch (e) {
    console.log(e);
  }
};
exports.createPosts = async (req, res) => {
  let post = new Post({
    title: req.body.title,
    message: req.body.message,
    creator: req.body.creator
  });
  try {
    post = await post.save();
    console.log("Prompt added to database");
  } catch (e) {
    console.log(e);
  }
};
