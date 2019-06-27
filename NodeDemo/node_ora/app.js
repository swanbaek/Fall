
var routes=require('./routes'),
user=require('./routes/user');

// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , static = require('serve-static')
  , errorHandler = require('errorhandler');
var app=express();

app.set('port',process.env.PORT||3000);
app.set('views',__dirname+"/views");
app.set('view engine','ejs');


//app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.get('/',routes.index);
app.get('/user',user.list);
app.get('/join',user.join);
app.post('/join',user.joinEnd)
app.get('/login',routes.login)
app.post('/login',routes.loginEnd);


http.createServer(app).listen(app.get('port'),function(){
	console.log("http://localhost:"+app.get('port'));;
	console.log(path.join(__dirname,'public'))
})
