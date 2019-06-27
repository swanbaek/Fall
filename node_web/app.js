/**
 * Router 객체를 이용해 라우팅 함수 등록하기
 * POST로 요청할 때 URL 파라미터를 params 객체로 확인
 *
 * (1) 웹 브라우저에서 http://localhost:3000/public/login3.html 페이지 열고 요청
 * (2) 크롬 브라우저의 Postman 앱이나 기타 POST 요청 도구를 사용하여 POST 방식으로 요청
 *
 * @date 2016-10-25
 * @author Mike
 */

// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
  , static = require('serve-static')
  , ejs=require('ejs')
  , fs=require('fs')


 
// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json())

app.use(static(path.join(__dirname, 'public')));


// 라우터 사용하여 라우팅 함수 등록
var router = express.Router();

var oracledb=require('oracledb');
oracledb.autoCommit=true;
var con;

oracledb.getConnection({
	user:'scott',
	password:'tiger',
	connectString:"localhost:1521/xe"
},function(err, conn){
	if(err){
		console.log("db connect fail", err);
	}
	con=conn;
})


app.use('/', router);




app.post('/login',function(req,res){
	let uid=req.body.id;
	let upw=req.body.pwd;
	let sql="select idx,name from member where userid='"+uid+"' and pwd='"+upw+"'";
	con.execute(sql,function(err,result,fields){
		//console.log('result',result);
		//console.log('fields',fields);
		var user=fetchResult(con,result.rows);
		console.log('user', user);
		if(!user){
			alert('로그인 실패');
			res.redirect('login4.html');
			return;
		}
		fs.readFile('login.ejs','utf-8',function(err,data){
			res.writeHead(200,{"Content-Type":"text/html"});
		    res.end(ejs.render(data,{user: user}));
		});
		
	})
});
function fetchResult(con, rs){
	con.close(function(err){
		if(err){
			console.log(err.message);
		}
	})
	//for(var i=0;i<rs.length;i++){
		if(rs.length==1){
			var idx=rs[0][0];
			var name=rs[0][1];
			return {name:name,idx:idx}
		}else{
			return -1;
		}
	
};
// 등록되지 않은 패스에 대해 페이지 오류 응답
app.all('*', function(req, res) {
	res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
});
// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
