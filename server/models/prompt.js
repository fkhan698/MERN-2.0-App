const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Prompt", promptSchema);
