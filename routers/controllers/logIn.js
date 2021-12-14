const jwt = require("jsonwebtoken");
const  userModel  = require("../../db/models/userModel")
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    let { email, password } = req.body;
    console.log(password,"password")
  
    try {
      const user = await userModel.findOne({ email: email });
      if (user) {
        const see = await bcrypt.compare(password, user.password);
        if (see === true) {
          const payload = { userId: user._id, userName: user.name };
          const token = jwt.sign(payload, "ABC");
          res.status(200).json({ token , userId :user._id });
          // res.status(200).json(`Hello admain! ${user.name}`);
        } else {
          res.status(403).json("wrong PassWord!");
        }
      } else {
        res.status(404).json("wrong email!");
      }
    } catch (error) {
        console.log("jajaja")
      res.send(error);
    }
  };
  module.exports = {login }