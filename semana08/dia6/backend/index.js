const express = require('express');
const {config} = require('./config');

const alumnoApi = require('./routes/alumno.routes');

const {errorHandler,boomErrorHandler} = require('./middlewares/error.handler');

const app = express();

app.use(express.static('public'));

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
app.use(boomErrorHandler);

app.listen(config.port,()=>console.log('servidor en http://localhost:'+config.port))