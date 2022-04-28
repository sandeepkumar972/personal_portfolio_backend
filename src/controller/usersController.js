const users = require("../Models/userModel");

const postFirst = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await users.create(req.body);
    console.log("User added!!");
  } catch (err) {
    console.log(err.message);
  }
    res.json({message:"executed!!"});
//   res.json(user);
};

module.exports = {
  postFirst,
};
