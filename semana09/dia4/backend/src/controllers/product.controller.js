const productController = {}

const {config} = require('../config');

const productModel = require('../models/product.model');


productController.getAll = async (req,res)=>{
    const products = await productModel.find();
    res.json({
        success:true,
        message:'Los productos se han cargado correctamente',
        content:products
    })
}

module.exports = productController;
