const mysql = require('mysql');

let dbConnection = mysql.createConnection({
    host: 'localhost',
    database: 'node_test',
    user: 'root',
    password: 'root'
});

dbConnection.connect((error) => {
    if(error){
        console.log(error.sqlMessage)
    } else {
        console.log('DB connected')
    }
});
module.exports=dbConnection;