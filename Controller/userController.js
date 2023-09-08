const login=(req,res)=>{
    res.send({
        name:"mahesh",
        batch:"EA23"
    })
}
const signup=(req,res)=>{
    res.send("sign up page")
}
const jsondata=(req,res)=>{
    res.send("jsondata page")
}
module.exports={login,signup,jsondata}