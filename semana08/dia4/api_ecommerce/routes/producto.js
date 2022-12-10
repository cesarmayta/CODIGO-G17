const express = require('express');
const router = express.Router();

const {config} = require('../config')

const mysqlConnection = require('../lib/mysql');

router.get('/producto',(req,res)=>{
    query = `
    select id,nombre,precio,CONCAT('${config.mediaFolder}',imagen) as imagen_url,precio
    from panel_producto
    `
    mysqlConnection.query(query,(err,rows,fields)=>{
        if(!err){
            res.json({
                'status':true,
                'content':rows
            })
        }else{
            console.log(err);
        }
    })
})

router.get('/adicionales',(req,res)=>{
    query = `
    select id,nombre,precio
    from panel_producto where categoria_id = 3
    `
    mysqlConnection.query(query,(err,rows,fields)=>{
        if(!err){
            res.json({
                'status':true,
                'content':rows
            })
        }else{
            console.log(err);
        }
    })
})

module.exports = router;