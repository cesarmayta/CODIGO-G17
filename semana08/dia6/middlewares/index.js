const express = require('express')

const app = express();

//middlewares
app.use(function(req,res,next){
    console.log("este es un middleware")
    next();
})

app.use((req,res,next)=>{
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    console.log('ejecutado a las ',today.toISOString())
    next();
})

app.use('/usuario',(req,res,next)=>{
    console.log('tipo de request : ' + req.method);
    next();
})

//rutas del app


app.get('/',(req,res)=>{
    console.log(a + 3);
    res.json({
        content:'ejemplo de middlewares'
    })
})

app.get('/usuario',(req,res)=>{
    res.json({
        nombre:'admin',
        email:'admin@gmail.com'
    })
})


//middlewares de errores
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500).json({
        content:'error en el servidor',
        detail: err.stack
    })
})

app.listen(5000,()=>console.log("servidor en http://localhost:5000"));