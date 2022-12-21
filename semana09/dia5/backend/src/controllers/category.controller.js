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

CategoryController.create = async (req,res)=>{
    try{
        const newCategory = new CategoryModel(req.body)
        await newCategory.save();
        res.json({
            success:true,
            message:'Category added successfully',
            content:newCategory
        })

    }catch(error){
        res.status(502).json({
            success:false,
            message:'Error by registering a new Category',
            content:error
        })
    }
}

module.exports = CategoryController;