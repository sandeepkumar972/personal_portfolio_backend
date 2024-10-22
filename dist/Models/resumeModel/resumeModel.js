"use strict";

var mongoose = require("mongoose");
var dataSchema = new mongoose.Schema({
  data: {
    type: Object,
    required: true
  },
  module: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  id: {
    type: String,
    // required: true,
    unique: true
  }
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  },
  timestamps: true
});
dataSchema.pre("save", function (next) {
  this.id = this._id;
  // console.log(this);
  next();
});
dataSchema.index({
  "$**": "text"
});
var dataModel = mongoose.model("data", dataSchema);
module.exports = dataModel;