"use strict";

var express = require("express");
var profileController = require("../controller/profileController");
var profileRouter = express.Router();
profileRouter.get("/getAbout", profileController.getAbout);
profileRouter.post("/saveAbout", profileController.saveAbout);
module.exports = profileRouter;