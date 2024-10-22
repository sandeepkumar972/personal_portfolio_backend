"use strict";

var mongoose = require("mongoose");
var _require = require("string_decoder"),
  StringDecoder = _require.StringDecoder;
var receiveMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: false,
    required: true
  },
  email: {
    type: String,
    // default: 0,
    required: true
  },
  subject: {
    type: String,
    // default: 0,
    required: true
  },
  description: {
    type: String,
    // default: 0,
    required: true
  }
}, {
  timestamps: true
});
var receivedMessage = mongoose.model("messages", receiveMessageSchema);
module.exports = receivedMessage;