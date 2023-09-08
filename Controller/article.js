const data=require("../dummydata")
const bollywood=(req,res)=>{
    const bdata=data.filter((item)=>item.category==='bollywood')
    res.send(bdata);
}
const hollywood=(req,res)=>{
    const hdata=data.filter((item)=>item.category==='bollywood')
    res.send(hdata);
}
const food=(req,res)=>{
    const fdata=data.filter((item)=>item.category==='food')
    res.send(fdata);
}
module.exports={bollywood,hollywood,food};