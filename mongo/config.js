const { mongoose } = require("mongoose");
// const mongo = require("mongoose")
const uername = "sandeep";
const password = "OCyz2j3ZiHOPtTr0";

const mongoConnection = () => {
  const url =
    "mongodb+srv://sandeep:OCyz2j3ZiHOPtTr0@cluster0.m6tzu.mongodb.net/portfolio?retryWrites=true&w=majority";

  //   mongoose.connect(url)
  // Schema,database
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection established!!");
  } catch (err) {
    console.log("Connection to DB failed");
    console.log(err.message);
  }
};

module.exports = { mongoConnection };
