const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  followers: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
  books: {
    type: Array,
    default: [],
  },
  messages: {
    type: Array,
    default: [],
  },
  blocking: {
    type: Array,
    default: [],
  },
  blockedBy: {
    type: Array,
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  theme: {
    type: String,
    default: "light",
  },
});
UserSchema.index({ name: "text" });
const User = mongoose.model("User", UserSchema);

module.exports = User;
