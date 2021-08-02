const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts.js");

router.get("/", postController.getPosts);
router.get("/:id", postController.getPost);
router.post("/", postController.createPosts);
router.delete("/:id", postController.deletePost);

module.exports = router;
