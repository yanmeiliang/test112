const express=require('express');
const  rounter=express.Router();
const  service=require('./service');
rounter.post('/show',service.judge);
rounter.post('/login',service.login);
rounter.get('/',service.manage);
module.exports=rounter//暴露路由