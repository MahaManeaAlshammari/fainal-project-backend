const mongoose = require ("mongoose")

const favoriteModel = new mongoose.Schema({
    name: { type : String },
    description: { type : String },
    user: {type:mongoose.Schema.ObjectId, ref:"userModel"},
    hotel: {type:mongoose.Schema.ObjectId, ref:"athkarModel"},
});

module.exports = mongoose.model("favoriteModel", favoriteModel)