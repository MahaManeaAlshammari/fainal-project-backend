const mongoose = require ("mongoose")

const userModel = new mongoose.Schema({
    name : { type : String },
    email : { type : String  , unique : true },
    password : { type : String },
    favorite : [{type: mongoose.Schema.Types.ObjectId, ref: "athkarModel"}],
    Admin : {type :Boolean , default: false}
});

module.exports = mongoose.model("userModel", userModel)