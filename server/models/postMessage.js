const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Topic"
  },

  createdAt: {
    type: Date,
    default: new Date()
  }
});
module.exports = mongoose.model("Post", postSchema);
