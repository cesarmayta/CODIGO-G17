const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AutoIncrement = require('mongoose-sequence')(mongoose);

const CategorySchema = new Schema({
    id:{
        type:Number
    },
    name:{
        type:String,
        required:true
    }
},{
    timestamps:false,
    versionKey:false
})

CategorySchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('categories',CategorySchema);