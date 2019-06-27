var routes=require('./routes'),
user=require('./routes/user');

// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

var app=express();  

http.createServer(app).listen(3333,function(){
    console.log("3333");
})