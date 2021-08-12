const mongoose = require("mongoose");

const topicSchema = mongoose.Schema({
  title: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("Topic", topicSchema);
