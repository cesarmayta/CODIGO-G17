const userController = {}

const userModel = require('../models/user.model');

userController.create = async (req,res)=>{
    try{
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

module.exports = userController;