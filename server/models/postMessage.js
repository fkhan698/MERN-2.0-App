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

  createdAt: {
    type: Date,
    default: new Date()
  }
});
module.exports = mongoose.model("Post", postSchema);
