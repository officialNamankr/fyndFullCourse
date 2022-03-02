const express = require("express");
const router = express.Router();


let users = [
    {
        name:"naman",
        age:23
    },
    {
        name:"Honey Singh",
        age:40

    }
]


router.get("/",(req,res,next)=>{
    res.json({users});
});


router.post("/",(req,res,next)=>{
    users.push(req.body);
    res.json({message:"sucessfully pushed the data"});
});


module.exports = router;