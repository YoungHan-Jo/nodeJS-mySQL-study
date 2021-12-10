var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost', //DB서버가 어떤 컴퓨터에 있는지, 같은컴퓨터에 있으면 localhost로
    user: 'root',
    password: '1234',
    database: 'opentutorials'
});

connection.connect();

connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    };
    console.log(results);
});

connection.end();