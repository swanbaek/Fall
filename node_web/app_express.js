var express=require('express'),
http=require('http');

var app=express();

app.set('port',process.env.PORT||3000);


app.get('/',function(req,res){
    var name=req.query.name;
    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'})
    res.write("<h1> 당신의 이름은 : "+name+"이군요</h1>");
    res.write("<h2>"+req.header('User-Agent')+"</h2>");
    res.end();
})

http.createServer(app).listen(app.get('port'),function(){
    console.log("Server started at http://localhost:3000");
})

//npm i express --save