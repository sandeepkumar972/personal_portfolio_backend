"use strict";

var mongoose = require("mongoose");
var _require = require("string_decoder"),
  StringDecoder = _require.StringDecoder;
var UserSchema = new mongoose.Schema({
  userData: {
    type: Object,
    required: true
  },
  name: {
    type: String,
    "default": 0
  },
  email: {
    type: String,
    "default": 0
  },
  uid: {
    type: String,
    unique: true,
    "default": 0
  }
});
var users = mongoose.model("users", UserSchema);
module.exports = users;