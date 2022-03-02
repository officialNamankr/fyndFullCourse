const express = require("express");
const app = express();
const userRouter = require("../api/routes/user.js");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//configuring bodyParser (used to parse request into formats like json)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
//configuring morgan (logger)
app.use(morgan("dev"));






app.get("/",(req,res,next)=>{
    res.json({message:"come on"});
    next();
});


app.use("/users",userRouter)







// app.get("/",(req,res,next)=>{
//     res.json({message:"Hello Render ho gaya"});
// });



// app.post("/naman",(req,res,next)=>{
//     res.json({message:"Hey posting example done"})
// });

module.exports = app;