"use strict";

var express = require("express");
var receivedController = require("../controller/receivedController");
var receviedRouter = express.Router();
receviedRouter.post("/getMessage", receivedController.getMessage);
receviedRouter.post("/sendMessage", receivedController.sendMessage);
receviedRouter.post("/deleteMessage/:id", receivedController.deleteMessage);
module.exports = receviedRouter;