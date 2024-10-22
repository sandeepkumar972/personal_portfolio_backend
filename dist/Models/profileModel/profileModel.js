"use strict";

var mongoose = require("mongoose");
var profileSchema = new mongoose.Schema({
  des: {
    type: String
    // required: true,
  },
  detail: {
    type: Object
  }
});
var profileModel = mongoose.model("profile", profileSchema);
module.exports = profileModel;