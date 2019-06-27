var fs=require('fs');
var bodyParser = require('body-parser');
//  , cookieParser = require('cookie-parser')
//  , static = require('serve-static')
//  , errorHandler = require('errorhandler');
var ejs = require("ejs");//동적인 html 생성모듈   

var oracledb=require('oracledb');
oracledb.autoCommit=true;
var con=null;
exports.index=function(req,res){
    res.render('index',{title:'Hello Express'})
}

exports.login=function(req,res){
    fs.readFile("public/login4.html",function(err, data){
        if(err) throw err;        
        res.end(data);
    });
}

exports.loginEnd=function(req,res){
    oracledb.getConnection({
        user:'scott',
        password:'tiger',
        connectString:'localhost:1521/xe'
    },function(err,conn){
        if(err){
            console.log('db con error: ',err);
            throw err;
        }
        con=conn;
        console.log('db connected')
    
    var uid=req.body.userid;
    var upw=req.body.pwd;

    var sql="select idx,name from member where userid='"+uid+"' and pwd='"+upw+"'";
    con.execute(sql,function(err,results, fields ){
        if(err){
            doRelease(con,results);
            //throw err;
            res.send('실패');

            return;
        }
        doRelease(con,results);   
       
    });//execute()----------------
    function doRelease(con, results){
        con.close(function(err){
            if(err){
                console.err(err.message);
                return;
            } 
            fs.readFile('views/loginResult.ejs','utf-8',function(err,data){
                if(err){
                    console.log("실패 ",err);
                }
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(ejs.render(data,{                                            
                                               records : results,
                                              
                                        }
                        ));
            });//readFile end()
    
        })
    
    }
    
})//function end()
}



