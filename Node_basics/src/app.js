const express = require("express")
const app = express();
const userRouter = require("../api/routes/user.js");







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