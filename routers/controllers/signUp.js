 const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const  userModel  = require("../../db/models/userModel")

  const signUp = async (req, res) => {
    let { name, email, password } = req.body;
    // سوينا اسينك للساين اب عشان يجيب المعلومات من البودي
    console.log(password,"passwordsignupp")
    try {
        password = await bcrypt.hash(password, 10);
        // ياخذ الباسوورد ويسوي له هاش من البيكربت
      
        const newSignUp = new userModel({ name, email, password });
        // ياخذ معلومات اليوزر الجديد بناء على المعطيات بالسكيما
      const response = await newSignUp.save();
      // يسوي اويت للنيو ساين اب ويسوي لها سيف بالمونقو 
      res.status(201).json(response);
    } catch (error) {
      res.send(error);
      // سويت له كاتش عشان لو فيه خطاء بالتسجيل يطلع الايرور
    }
  }
  
  
module.exports = { signUp }