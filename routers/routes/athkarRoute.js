const express = require("express");
const athkarModel = express.Router();


const {addathkar , deleteathkar  , getathkar , updateathkar } = require("../controllers/athkar")

const {authentication} = require("../middlewares/authentication")


athkarModel.get("/athkar" ,authentication, getathkar);
athkarModel.post("/athkar" ,authentication , addathkar);
athkarModel.delete("/athkar/:id", authentication ,deleteathkar);
athkarModel.put("/athkar",authentication, updateathkar)



module.exports = athkarModel;
