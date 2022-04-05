var dbutil=require('./database');
var user={
    name:'최길동',
    userid:'choi',
    pwd:'111'
}
dbutil.join(user);
console.dir(dbutil);