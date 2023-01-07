const userController = {}

const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');

const jwt = require('jsonwebtoken');

userController.create = async (req,res)=>{
    try{
        const hash = await bcrypt.hash(req.body.userPassword,10);
        req.body.userPassword = hash
        const newUser = new userModel(req.body)
        await newUser.save();
        res.json({
            success:true,
            message:'user added successfully',
            content:newUser
        })
    }catch(error){
        res.status(502).json({
            success:false,
            message:'Error by registering a new user',
            content:error
        })
    }
}

userController.auth = async (req,res)=>{
    try{
        userName = req.body.userName;
        userPassword = req.body.userPassword;
        console.log("usuario : ",userName);
        console.log("password: ",userPassword);
        const userAuth = await userModel.findOne({userName:userName})
        console.log("usuario encontrado : ",userAuth)
        console.log("password : ",userAuth.userPassword)
        if(await bcrypt.compare(userPassword,userAuth.userPassword)){
            //generamos el token
            const token = jwt.sign({
                userName: userAuth.userName
              }, 'qwerty123', { expiresIn: '1h' });

            res.status(200).json({
                success:true,
                message:'User Authenticated',
                content:token
            })
        }else{
            res.status(404).json({
                success:false,
                message:'Invalid User or Password'
            }) 
        }
    }catch(error){
        console.log("error :",error)
        res.status(502).json({
            success:false,
            message:'Error by auth a user',
            content:error
        })
    }
}

module.exports = userController;