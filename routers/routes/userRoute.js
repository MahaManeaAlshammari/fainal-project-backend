const express = require("express");
const userRoute = express.Router();


// const { authentication } = require("../middlewares/authentication");
const { getUser } = require("../controllers/signUp")

userRoute.get("/user",  getUser);


module.exports = userRoute;
