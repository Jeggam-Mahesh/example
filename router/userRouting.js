const express=require('express')
const validate=require("../middleware/userMiddleware")
const route=express.Router();
const {login,signup,jsondata}=require("../Controller/userController")
route.get("/api/login",validate,login)
route.get("/api/signup",signup)
module.exports=route;