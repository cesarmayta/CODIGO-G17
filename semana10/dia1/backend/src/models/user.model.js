const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:100
    },
    userPassword:{
        type:String,
        required:true,
        minlength:4
    }
},{
    timestamps:false,
    versionKey:false
})

module.exports = mongoose.model('users',UserSchema)