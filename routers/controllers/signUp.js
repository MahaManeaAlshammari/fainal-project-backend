 const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const  userModel  = require("../../db/models/userModel")



  const signUp = async (req, res) => {
    let { name, email, password } = req.body;
    console.log(password,"passwordsignupp")
    try {
        password = await bcrypt.hash(password, 10);
      const newSignUp = new userModel({ name, email, password });
      const response = await newSignUp.save();
      res.status(201).json(response);
    } catch (error) {
      res.send(error);
    }
  }

  const getUserInfo = async (req, res) => {
    try {
      const userId = req.token.userId;
      const userInfo = await userModel.findOne({ _id: userId });
      res.status(200).json(userInfo);
    } catch (error) {
      res.send("err in token");
    }
  };
  
  const updateUserName = async (req, res) => {
    const { newName } = req.body;
    try {
      const userId = req.token.userId;
      const response = await userModel.findOneAndUpdate(
        { _id: userId },
        { name: newName },
        { new: true }
      );
      res.status(200).json(response);
    } catch (error) {
      res.send("err in token");
    }
  };

module.exports = { signUp , getUserInfo , updateUserName}