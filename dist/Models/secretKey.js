"use strict";

var mongoose = require("mongoose");
var _require = require("string_decoder"),
  StringDecoder = _require.StringDecoder;
var secretSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  secretKey: {
    type: String,
    "default": 0,
    required: true
  }
});
var secretKey = mongoose.model("secretKey", secretSchema);
module.exports = secretKey;