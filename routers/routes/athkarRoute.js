const express = require("express");
const athkarModel = express.Router();


const {addathkar, deleteathkar, getathkar,getreedathkar, updateathkar,getFavorite,addFavorite } = require
("../controllers/athkar")

const {authentication} = require("../middlewares/authentication")


athkarModel.get("/athkar" ,authentication, getathkar);
athkarModel.post("/athkar" ,authentication , addathkar);
athkarModel.delete("/athkar/:id", authentication ,deleteathkar);
athkarModel.put("/athkar",authentication, updateathkar)
////////
athkarModel.get("/ReedAthkar/:type" ,authentication, getreedathkar);
///////
athkarModel.get("/athkar/:id" ,authentication, getFavorite);
athkarModel.post("/athkar/:id" ,authentication , addFavorite);



module.exports = athkarModel;
