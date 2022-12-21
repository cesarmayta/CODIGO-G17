const CategoryController = {}

const CategoryModel = require('../models/category.model');

CategoryController.getAll = async (req,res)=>{
    const categories = await CategoryModel.find();
    res.json({
        success:true,
        message:'categories loaded',
        content:categories
    })
}

module.exports = CategoryController;