"use strict";

var express = require("express");
var resumeController = require("../controller/resumeController");
var resumeRouter = express.Router();
resumeRouter.get("/get", resumeController.getResume);
resumeRouter.post("/save", resumeController.saveResume);
resumeRouter.put("/delete/:id", resumeController.deleteResume);
resumeRouter.put("/update/:id", resumeController.updateResume);
resumeRouter.get("/getBlogs", resumeController.getBlogs);
resumeRouter.post("/checkCreds", resumeController.checkCreds);
resumeRouter.put("/updateProjectStatus/:id", resumeController.updateProjectStatus);
module.exports = resumeRouter;