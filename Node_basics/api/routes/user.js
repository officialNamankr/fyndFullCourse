const express = require("express");
const router = express.Router();



router.get("/",(req,res,next)=>{
    res.json({message:"This is coming from /user/user ............"});
});


router.post("/Naman",(req,res,next)=>{
    res.json({message:"This is post request from naman route"});
})


module.exports = router;