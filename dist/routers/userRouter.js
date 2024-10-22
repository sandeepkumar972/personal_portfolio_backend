"use strict";

var express = require("express");
var usersController = require("../controller/usersController");
var userRouter = express.Router();
userRouter.post("/save", usersController.saveUser);
module.exports = userRouter;