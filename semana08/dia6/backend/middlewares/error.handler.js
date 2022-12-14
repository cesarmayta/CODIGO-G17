//middlewares para manejo de errores de la aplicación

function errorHandler(err,req,res,next){
    console.log(err.stack);
    res.status(500).json({
        status:false,
        content:'hubo un error en la aplicacion',
        error:err.message
    })
}

module.exports = {errorHandler};