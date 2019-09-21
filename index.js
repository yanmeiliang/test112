const express=require('express');
const  BoderParse=require('body-parser');
const rounter=require('./rounter.js');
const  path=require('path');
const  app=express();
//设置模板引擎
app.set('views',path.join(__dirname,'views'));
app.set('view engine','art');
app.engine('art',require('express-art-template'));
app.use(BoderParse.urlencoded({extended:false}));
app.use(BoderParse.json());
app.use('/www',express.static('public'));
app.use(rounter);
app.listen(8989,()=>{
    console.log('服务器启动成功:http://localhost:8989');
})