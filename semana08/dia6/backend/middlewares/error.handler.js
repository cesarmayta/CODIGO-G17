//middlewares para manejo de errores de la aplicación

function errorHandler(err,req,res,next){
    console.log(err.stack);
    res.status(500).json({
        status:false,
        content:'hubo un error en la aplicacion',
        error:err.message
    })
}

function boomErrorHandler(err,req,res,next){
    if(err.isBoom){
        const {output} = err;
        res.status(output.statusCode).json(output.payload);
    }
}

module.exports = {errorHandler,boomErrorHandler};