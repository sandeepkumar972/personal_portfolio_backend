const express = require("express");
const { mongoConnection } = require("./mongo/config");
const usersController = require("./src/controller/usersController");
const profileRouter = require("./src/routers/profileRouter.js");
const resumeRouter = require("./src/routers/resumeRouter");
const cors = require("cors");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());
app.use(cors());

mongoConnection();

const host = 8080;
app.listen(host, () => {
  console.log(`Server run on local host : ${host}`);
});

app.use("/profile", profileRouter);
app.use("/portfolio", resumeRouter);
