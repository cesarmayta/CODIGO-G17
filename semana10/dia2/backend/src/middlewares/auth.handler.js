const jwt = require('jsonwebtoken');

function verifyToken(req,res,next){
    const bearerToken = req.headers['authorization'];
    console.log('bearer Token : ',bearerToken);

    if(typeof bearerToken !== 'undefined'){
        //validamos el token
        return next();
    }else{
        res.status(403).json({
            status:false,
            message:'token is undefined'
        })
    }
}

module.exports = {verifyToken}