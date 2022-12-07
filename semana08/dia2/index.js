const express = require('express');

const mysqlConnection = require('./database')

const app = express();

//permitir recibir data en json
app.use(express.json());

app.get('/',function(req,res){
    res.json({
        'status':true,
        'content':'Mi primera app con express'
    })
})

app.get('/tarea',(req,res)=>{
    mysqlConnection.query("select * from tarea",(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
    })
})

app.post('/tarea',(req,res)=>{
    const {descripcion,estado} = req.body;

    const query = `insert into tarea(descripcion,estado)
                   values('${descripcion}','${estado}')`;

    mysqlConnection.query(query,(err,rows,fields)=>{
        if(!err){
            res.json({
                'status':true,
                'content':'registro exitoso'
            })
        }
        else{
            console.log(err);
        }
    })
})

app.listen(5000,()=>{
    console.log("servidor activo en http://localhost:5000")
})