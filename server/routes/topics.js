const express = require("express");
const router = express.Router();
const topicController = require("../controllers/topics");
router.get("/", topicController.getTopics);
router.get("/:id", topicController.getTopicID);
router.post("/", topicController.createTopics);
router.delete("/:id", topicController.deleteTopic);

module.exports = router;
