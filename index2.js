const express=require('express')
const dummydata=require('./dummydata')
const cors=require('cors')
const route=require('./router/userRouting')
const validate=require('./middleware/userMiddleware')
const productroute=require('./router/productRouting')
const {home,about,jsondata}=require("./Controller/userController")
const app_middleware=(req,res,next)=>{
    console.log("application level middleware") 
    res.send(" application level middleware") 
}
const app=express();
app.use(express.json())
app.use(cors({
    //'http://localhost:3001'
    origin:'*'
}))
// app.get("/",(req,res)=>{
//     res.send("home page")
// })
// app.get("/about",(req,res)=>{
//     res.send("about page")
// })
// app.get("/fetchjson",(req,res)=>{
//     res.send(dummydata)
// })
// app.post("/login",(req,res)=>{
//     const data=req.body
//     console.log(data)
//     res.send(data)
// })

app.use(app_middleware)

app.use("/user",route);
app.use("/product",productroute);
app.listen(6000,()=>{
    console.log("server is running on port :6000")
})