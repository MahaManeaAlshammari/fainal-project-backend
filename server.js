const express = require("express");
const app = express();
require("./db/db");
app.use(express.json());
const cors = require("cors");
app.use(cors());


// const athkarModel = require("./db/models/athkarModel");



const signUpRoute = require("./routers/routes/signUpRoute");
const loginRoute  = require("./routers/routes/loginRoute");
const athkarRoute = require("./routers/routes/athkarRoute")
app.use(signUpRoute);
app.use(loginRoute);
app.use(athkarRoute);



////////////////////
const Port = 5000;
app.listen(Port, () => {
  console.log("server run on 5000 port");
});
