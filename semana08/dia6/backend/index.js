const express = require('express');
const {config} = require('./config');

const alumnoApi = require('./routes/alumno.routes');

const {errorHandler} = require('./middlewares/error.handler');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    console.log(z)
    res.json({
        'status':true,
        'content':'servidor activo'
    })
})

alumnoApi(app)

//middleware de errores
app.use(errorHandler);

app.listen(config.port,()=>console.log('servidor en http://localhost:'+config.port))