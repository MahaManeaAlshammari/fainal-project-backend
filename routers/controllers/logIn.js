const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/userModel");

const login = async (req, res) => {
  let { email, password } = req.body;
// اسينك للوق ان عشان ياخذ الايميل والباسوورد من البودي
  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
        // ياخذ بيانات اليوزر ويوجد الايميل ويطابقه مع الايميل
      const see = await bcrypt.compare(password, user.password);
         //   يشوف الباسوور اذا كان صحيح يكمل اذا كان خطاء يطلع ايرور 403
      if (see === true) {
        const data = { userId: user._id, userName: user.name, Admin: user.Admin };
        // يطلع التوكن حق اليوزر اي دي واليوزر نيم
        const token = jwt.sign(data, "ABC");
       // يسوي جنريت او توليد او انشاء للتوكن
        res.status(200).json({ token ,data });
        // يرجع التوكن
      } else {
        res.status(403).json("wrong PassWord!");
      }
        //   اذا كان الباسوورد خطاء يطلع الايرور هذا
    } else {
      res.status(404).json("wrong Email!");
    }
       // اذا كان الايميل خطاء يطلع الايرور هذا
  } catch (error) {
    res.send(error);
  }
};

module.exports = { login };
