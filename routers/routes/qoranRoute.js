const express = require("express");
const qoranModel = express.Router();


const {addqoran ,getQoran } = require("../controllers/qoran")

const {authentication} = require("../middlewares/authentication")


qoranModel.get("/qoran" ,authentication, getQoran);
qoranModel.post("/qoran" ,authentication , addqoran);

module.exports = qoranModel;
