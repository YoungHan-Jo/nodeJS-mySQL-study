var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost', //DB서버가 어떤 컴퓨터에 있는지, 같은컴퓨터에 있으면 localhost로
    user: 'root',
    password: '1234',
    database: 'opentutorials',
});
db.connect();

module.exports = db;

//multipleStatements: true <- 여러개의 쿼리문을 허용 select * from topic;drop table topic;