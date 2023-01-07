const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'db',
    user :'root',
    password:'codigo',
    database:'db_docker'
})

mysqlConnection.connect(function(err){
    if(err){
        console.error(err);
        return;
    }
    else{
        console.log('conexión a base de datos exitosa')
    }
})

module.exports = mysqlConnection