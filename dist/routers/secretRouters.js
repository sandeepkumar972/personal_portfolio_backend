"use strict";

var express = require("express");
var secretKeyController = require("../controller/secretKeyController");
var secretRouter = express.Router();
secretRouter.post("/save", secretKeyController.postSecretKey);
secretRouter.get("/get", secretKeyController.getSecretKey);
module.exports = secretRouter;