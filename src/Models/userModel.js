const mongoose = require("mongoose");
const { StringDecoder } = require("string_decoder");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 0,
  },
  password: {
    type: String,
    required : true
  },
});

const users = mongoose.model("users", UserSchema);

module.exports = users;
