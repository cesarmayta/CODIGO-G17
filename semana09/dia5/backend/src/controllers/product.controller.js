const productController = {}

const {config} = require('../config');

const productModel = require('../models/product.model');


productController.getAll = async (req,res)=>{
    const products = await productModel.find();
    res.json({
        success:true,
        message:'The products have been loaded correctly',
        content:products
    })
}

productController.create = async (req,res)=>{
    try{
        const newProduct = new productModel(req.body)
        await newProduct.save();
        res.json({
            success:true,
            message:'product added successfully',
            content:newProduct
        })

    }catch(error){
        res.status(502).json({
            success:false,
            message:'Error by registering a new product',
            content:error
        })
    }
}

module.exports = productController;
