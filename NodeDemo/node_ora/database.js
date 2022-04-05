var db=require('oracledb');
var dbconfig=require('./dbconfig')
db.autoCommit=true;

var dbutil={};
var con;
dbutil.join=function(user,req,res){
    db.getConnection(dbconfig,function(err,conn){
        console.log(dbconfig)
        if(err){
            console.log(err.message);
            return;
        }
        con=conn;
        var params={
            name:user.name,
            userid:user.userid,
            pwd:user.pwd
        }
        var sql="insert into member values(member_seq.nextval,:name,:userid,:pwd,sysdate)";
        con.execute(sql,params,function(err,result){
            console.log('result',result);
           
            con.close(function(err){
              if(err) throw err;
              if(Number(result.rowsAffected)>0){
                var data={
                    msg:'등록 성공',
                    loc:'/login'
                }
                res.render('message',{data:data})
                //res.end(data);
            } 
            })
            
        })
     
    });
   
}
module.exports=dbutil;