const mongoose = require ("mongoose")

const athkarModel = new mongoose.Schema({
    name: { type : String },
    description : { type : String },
    type : {type : String},
    user: {type : mongoose.Schema.ObjectId, ref:"userModel"},
});

module.exports = mongoose.model("athkarModel", athkarModel)