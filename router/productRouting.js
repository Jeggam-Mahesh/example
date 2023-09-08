const express=require('express')
const productroute=express.Router();
productroute.get("/api/login",(re,res)=>{
    res.send("this is product login page")
})
productroute.get("/api/signup",(re,res)=>{
    res.send("this is sign up page")
})
module.exports=productroute;