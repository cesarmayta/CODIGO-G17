const jwt = require('jsonwebtoken');

function verifyToken(req,res,next){
    const bearerToken = req.headers['authorization'];
    console.log('bearer Token : ',bearerToken);

    if(typeof bearerToken !== 'undefined'){
        //validamos el token
        const bearer = bearerToken.split(' ')
        const token = bearer[1];
        console.log('jwt : ',token)
        try{
            const decoded = jwt.verify(token,'qwerty123')
            console.log(decoded);
        }catch(err){
            return res.status(401).json({
                success:false,
                message:'error al validar token',
                content: err
            })
        }
        return next();
    }else{
        res.status(403).json({
            status:false,
            message:'token is undefined'
        })
    }
}

module.exports = {verifyToken}