const express = require("express");
const resumeController = require("../controller/resumeController");
const resumeRouter = express.Router();

resumeRouter.get("/get", resumeController.getResume);


resumeRouter.post("/save", resumeController.saveResume);


module.exports = resumeRouter;
