const dataModel = require("../Models/resumeModel/resumeModel");

const getResume = async (req, res, next) => {
  try {
    const resume = await dataModel.find();
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
    console.log("start save data!!", req.body);
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

const deleteResume = async (req, res, next) => {
  const id = req.params.id;
  console.log("start delete data!!", req.body);
  try {
    const resume = await dataModel.findOneAndDelete({ id });
    if (!resume) {
      throw "Resume not found!!";
    }
    console.log("Resume Deleted", resume);
    res.status(200).send(resume);
  } catch (err) {
    console.log("Resume Not Deleted", err.message);
    res.status(400).send(err);
  }
};

const updateResume = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  console.log("start update data!!", data.secret);

  try {
    const resume = await dataModel.findOneAndUpdate(
      { id },
      { data },
      { new: true }
    );
    if (!resume) {
      throw "Resume not found!!";
    }
    console.log("Resume Updated", resume);
    res.status(200).send(resume);
  } catch (err) {
    console.log("Resume Not Updated", err.message);
    res.status(400).send(err);
  }
};

module.exports = {
  getResume,
  saveResume,
  deleteResume,
  updateResume,
};
