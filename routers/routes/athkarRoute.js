const express = require("express");
const athkarModel = express.Router();


const {addathkar, deleteathkar, getathkar,getreedathkar, updateathkar,getFavorite,addFavorite,deletFavorite } = require
("../controllers/athkar")

const {authentication} = require("../middlewares/authentication")


athkarModel.get("/athkar" ,authentication, getathkar);
athkarModel.post("/athkar" ,authentication , addathkar);
athkarModel.delete("/athkar/:id", authentication ,deleteathkar);
athkarModel.put("/athkar/:id",authentication, updateathkar)
////////
athkarModel.get("/ReedAthkar/:type" ,authentication, getreedathkar);
///////
athkarModel.get("/Favorite" ,authentication, getFavorite);
athkarModel.post("/Favorite/:id" ,authentication , addFavorite);
athkarModel.delete("/Favorite/:id", authentication ,deletFavorite);




module.exports = athkarModel;
