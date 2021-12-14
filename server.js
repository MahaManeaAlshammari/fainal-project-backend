// require('dotenv').config()
const express = require("express")
const cors = require("cors")

require("./db/db");

const athkarModel = require("./db/models/athkarModel")

const app = express()
app.use(express.json());
app.use(cors());
const port = 5000
///////////

const athkarRoute = require("./routers/routes/athkarRoute")
const signUpRoute = require("./routers/routes/signUpRoute")
const loginRoute  = require("./routers/routes/loginRoute")
const  userRoute = require("./routers/routes/userRoute")
// const favoriteRoute = require("./routers/routes/favoriteRoute")
app.use(signUpRoute)
app.use(loginRoute)
app.use(userRoute)
// app.use(favoriteRoute)

///////////
app.listen( process.env.PORT||port , ()=>{
    console.log("server is runing on Port : " + port);
})