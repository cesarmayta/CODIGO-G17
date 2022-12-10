const mysql = require('mysql');
const {config} = require('../config/index');

const mysqlConnection = mysql.createConnection({
    host:config.dbHost,
    user:config.dbUser,
    password:config.dbPassword,
    database:config.dbDatabase,
    port:config.dbPort
})

mysqlConnection.connect(function (err){
    if(err){
        console.error(err);
        return;
    }
    else{
        console.log('conexión a base de datos exitosa')
    }
})

module.exports = mysqlConnection;