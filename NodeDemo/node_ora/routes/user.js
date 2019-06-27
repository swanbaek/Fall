var dbutil=require('../database');

exports.list=function(req,res){
    res.render('user',{name:'Swan Baek'})
}
exports.join=function(req,res){
    res.render('join',{title:'Member Join'})
}
exports.joinEnd=function(req,res){
    var user={
        name:req.body.name,
        userid:req.body.userid,
        pwd:req.body.pwd
    };
    dbutil.join(user,req,res);
}