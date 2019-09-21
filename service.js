const  bd=require('./sql.js');
exports.manage=(req,res)=>{
    let sql='select * from mybook.login';
    bd.SQL(sql,null,(result)=>{
        console.log(result);
        res.render('manage',{list:result});
    })

}
exports.judge=(req,res)=>{
    let urser=req.body;
    //会读取数据库并判断
    let sql='select count(*) as count from mybook.login where name=?and pwd=?';
    let data=[urser.urser,urser.pwd1];
    bd.SQL(sql,data,(result)=>{
        console.log(result[0]);
   if(result[0].count==1){
        res.send('登陆成功'+data);
   }
   else {
        // console.log(result);
       res.send('登陆失败,请注册');
   }
    })
}
exports.login=(req,res)=>{
    let dade=req.body;
    let sql='insert into mybook.login set name=?,pwd=?';
    let date=[dade.name,dade.pwd];
    bd.SQL(sql,date,(result)=>{
        // res.send(result);
        if(result.affectedRows==1)
        {
            res.send('注册成功');
        }
        else {
            res.send('注册失败');
        }
    })
}
