const athkarModel = require("../../db/models/athkarModel")
const userModel = require("../../db/models/userModel")


const getreedathkar = async (req, res) => {
    const type = req.params.type
    // جبت الداتا من المونقو
    try {
      const data = await athkarModel.find({type : type});
      res.status(200).json(data);
    //   عرفت كونست اسمه داتا واسندت له قيمه السكيما ويوجد التايب
    }
     catch (error) {
      res.send(error);
    //   الكاتش عشان لو فيه ايرور 
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
            const thkr = await athkarModel.find({})
            // سويت سيف للداتا بعد ماجابه
            res.status(200).json(thkr)
            // اذاكان صحيح يحفظه
        } catch (error) {
            res.status(403).json(error)
            // اذا  كان خطاء يرجع لي الايرور 403
        }  
    }
    console.log("gyftfd");
    // سويت كونسول عشان اتاكد اذا كان الكود شغال او لا

const deleteathkar = async (req , res)=>{
  const id = req.params.id;
  try {
    const del = await athkarModel.findOneAndDelete({ _id: id });
    res.status(200).json(del);

  } catch (err) {
    res.send(err);
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
      const id = req.params.id;
      console.log(id);
      const{description}= req.body;
      try {
        const updateB = await athkarModel.findOneAndUpdate( {_id: id},{description}, { new: true });
       console.log(updateB);
       const cour = await athkarModel.find({}).populate("user")
       res.status(200).json(cour)
      } catch (error) {
        res.send({ message: error });
      }
        }

////////////////////////////////////// اللايك /////////////////////////////////////////////
          const addFavorite = async (req, res) => {
            const id = req.params.id;
            const userId = req.token.userId;
            try {
              const addFavorite = await userModel.findOneAndUpdate(
                { _id: userId },
                { $push: { favorite: id } },
                { new: true }
              );
              console.log("mlknj");
              res.status(201).json(addFavorite);
            } catch (error) {
              res.send(error);
            }
          };
          const getFavorite = async (req, res) => {
            const userId = req.token.userId;
            try {
              const favoriteTkr = await userModel.findOne({ _id: userId }).populate("favorite");
              res.status(200).json(favoriteTkr.favorite);
            } catch (error) {
              res.send(error);
            }
          };
          const deletFavorite = async (req, res) => {
            const id = req.params.id;
            const userId = req.token.userId;
            try {
              const deletFavorite = await userModel.findOneAndUpdate(
                { _id: userId },
                { $pull: { favorite: id } },
                { new: true }
              );
              const favoriteTkr = await userModel.findOne({ _id: userId }).populate("favorite");
              res.status(200).json(favoriteTkr.favorite);
            } catch (error) {
              res.send(error);
            }
          };
        

    module.exports={addathkar, deleteathkar,getreedathkar,getathkar,updateathkar,getFavorite,addFavorite,deletFavorite}