const mysql= require('mysql');
exports.SQL=(sql,data,callback)=>{
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password : 'yml123',
        database : 'mybook'
    });
    connection.connect();
    connection.query(sql,data, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });

    connection.end();
}

