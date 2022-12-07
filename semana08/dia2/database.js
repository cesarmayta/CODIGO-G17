const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user :'root',
    password:'',
    database:'db_tareas_nodejs'
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

/*
mysqlConnection.query('select count(*) as total from tarea',function(error,results,fields){
    if(error) throw error;
    console.log('total de tareas : ',results[0].total);
});

mysqlConnection.end();
*/

