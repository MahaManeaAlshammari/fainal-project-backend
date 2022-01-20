const express = require("express");
require('dotenv').config()

const app = express();
require("./db/db");
app.use(express.json());
const cors = require("cors");
app.use(cors());


const signUpRoute = require("./routers/routes/signUpRoute");
const loginRoute  = require("./routers/routes/loginRoute");
const athkarRoute = require("./routers/routes/athkarRoute");
const qoranRoute = require("./routers/routes/qoranRoute")

app.use(signUpRoute);
app.use(loginRoute);
app.use(athkarRoute);
app.use(qoranRoute);



////////////////////
console.log(process.env.PORT);

const Port = 5000;
app.listen(Port, () => {
  console.log("server run on 5000 port");
});
