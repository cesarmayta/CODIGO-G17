const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.json({
        'status':true,
        'content':'Mi primera app con express'
    })
})

app.listen(5000,()=>{
    console.log("servidor activo en http://localhost:5000")
})