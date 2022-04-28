const dataModel = require("../Models/resumeModel/resumeModel");

const getResume = async (req, res, next) => {
  try {
    const resume = await dataModel.findOne({ _id: "626acf51e9be65dcf9b00eef" });
    if (!resume) {
      throw "Resume not found!!";
    }
    res.status(200).send(resume);
  } catch (err) {
    res.status(400).send(err);
  }
};

const saveResume = async (req, res, next) => {
  try {
    // console.log("start save data!!", req.body);
    let resume = await dataModel.create({
      ...req.body,
    });

    // resume.save();
    console.log("data saved !!", resume);

    if (!resume) {
      throw "Resume Creation failed!!";
    }
    res.status(200).send(resume);
  } catch (err) {
    console.log("end save data with failed!!", err.message);
    res.status(400).send(err.message);
  }
};

module.exports = {
  getResume,
  saveResume,
};
