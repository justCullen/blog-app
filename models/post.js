const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    userName: { type: String, required: true },
    imgURL: { type: String, required: true },
    location: { type: String, required: true },
    content: { type: String, required: true },
    cohort: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", Post);
