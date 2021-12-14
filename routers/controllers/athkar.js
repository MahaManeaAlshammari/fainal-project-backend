// const athkarModel = require("../../db/models/athkarModel")

// const bookSelect = async (req , res) => {
//     const id = req.params.id;
//     try {
//         const cour = await athkarModel.find({_id : id}).populate("user")
//         res.status(200).json(cour)
//     } catch (error) {
//         console.log(error);
//     }
// }