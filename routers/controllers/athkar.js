const athkarModel = require("../../db/models/athkarModel")


const getreedathkar = async (req, res) => {
    const type = req.params.type
    try {
      const data = await athkarModel.find({type : type});
      res.status(200).json(data);
    }
     catch (error) {
      res.send(error);
    }
  };


// ادد هي نفسها البوست
const addathkar =  async (req , res)=>{
        const {name , description ,type } = req.body;
        // سويت اسينك للادد عشان يجيب النيم والديسكربشن والتايب من البودي
        const data = new athkarModel({name, description, type})
        // جاب لي بيانات النيو ادد بناء على البيانات اللي بالسكيما
        try {
            const sav = await data.save()
            // سويت سيف للداتا بعد ماجابه
            res.status(200).json(sav)
            // اذاكان صحيح يحفظه
        } catch (error) {
            res.status(403).json(error)
            // اذا  كان خطاء يرجع لي الايرور 403
        }  
    }
    console.log("gyftfd");
    // سويت كونسول عشان اتاكد اذا كان الكود شغال او لا

const deleteathkar = async (req , res)=>{
        let id = req.params.id
        const userId = req.token.userId
        
        console.log(userId);
     
            try {
                const deletej = await athkarModel.findOneAndDelete({_id:id,user:userId})
                const cour = await athkarModel.find({}).populate("user")
                res.status(200).json(cour)
            } catch (error) {
                res.status(403).json(error)
            }  
    }


const getathkar = async (req , res)=>{
        try {
            const cour = await athkarModel.find({}).populate("user")
            res.status(200).json(cour)
        } catch (error) {
            res.send(error ,"errrrrrrror")
        }
    }

    const updateathkar = async (req , res) => {
            const {idold , name , description } = req.body;
            try {
                let courUpdate = name && await athkarModel.findByIdAndUpdate({_id: idold} , {name})
                 courUpdate = description && await athkarModel.findByIdAndUpdate({_id: idold} , {description})
                const cours = await athkarModel.find({})
                res.status(200).json(cours)
            } catch (error) {
                res.status(403).json(error)
            }
        }


    module.exports = {addathkar , deleteathkar ,getreedathkar , getathkar , updateathkar }