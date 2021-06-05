const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts.js");

router.get("/", postController.getPosts);
router.post("/create", postController.createPosts);

module.exports = router;
