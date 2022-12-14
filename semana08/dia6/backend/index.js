const express = require('express');
const {config} = require('./config');

const alumnoApi = require('./routes/alumno.routes');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        'status':true,
        'content':'servidor activo'
    })
})

alumnoApi(app)

app.listen(config.port,()=>console.log('servidor en http://localhost:'+config.port))