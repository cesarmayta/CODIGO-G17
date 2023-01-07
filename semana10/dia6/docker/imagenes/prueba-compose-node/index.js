const express = require('express');

const mysqlConnection = require('./database')


const app = express();

app.get('/',function(req,res){
    res.json({
        'status':true,
        'content':'ejemplo de app con docker compose'
    })
})

app.get('/tarea',(req,res)=>{
    mysqlConnection.query("select * from tareas",(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
    })
})

app.listen(5005,()=>console.log("servidor activo"))