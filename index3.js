const express=require('express');
const route=require('./router/category')
const app=express();
app.use("/",route);
app.listen(9000,()=>{
    console.log("server running",9000);
})
