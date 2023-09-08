const route=require('express').Router();
const {bollywood,hollywood,food}=require('../Controller/article')
route.get('/',bollywood)
route.get('/hollywood',hollywood)
route.get('/food',food)
module.exports=route;