const mongoose = require ("mongoose")

const qoranModel = new mongoose.Schema({
    name: { type : String },
    description : { type : String },
    url : {type : String}

});

module.exports = mongoose.model("qoranModel", qoranModel)