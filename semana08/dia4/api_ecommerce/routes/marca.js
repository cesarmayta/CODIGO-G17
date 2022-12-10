const express = require('express');
const router = express.Router();

const mysqlConnection = require('../lib/mysql');

router.get('/marca',(req,res)=>{
    mysqlConnection.query('select * from panel_marca',(err,rows,fields)=>{
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