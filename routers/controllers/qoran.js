const qoranModel = require("../../db/models/qoranModel")



const addqoran =  async (req , res)=>{
    const {name , description ,url } = req.body;
    const data = new qoranModel({name, description, url})
    try {
        const sav = await data.save()
        res.status(200).json(sav)
    } catch (error) {
        res.status(403).json(error)
    }  
}
const getQoran = async (req, res) => {
    // جبت الداتا من المونقو
    try {
      const data = await qoranModel.find({});
      res.status(200).json(data);
    //   عرفت كونست اسمه داتا واسندت له قيمه السكيما ويوجد التايب
    }
     catch (error) {
      res.send(error);
    //   الكاتش عشان لو فيه ايرور 
    }
  };

  module.exports={addqoran , getQoran}