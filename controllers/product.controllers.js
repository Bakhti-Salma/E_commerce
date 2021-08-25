const Product = require("../models/product.models");
const Category = require ("../models/category.models");
const getProducts = async (req,res) => {
    try{
        const products = await Product.find();
        return res.status(200).json({products:products});

    }
    catch (err){
        return res.status(500).json(err);
    }
};

const getProduct = async (req,res) => {
    const id = req.params.ProductId;
    try{
        const product = await Product.findById(id);
        return res.status(200).json({product : product});

    }
    catch (err){
        return res.status(500).json(err);
    }
};

const createProduct = async (req,res) => {
    const newCategory = new Category ({
        type  : req.body.type 
    });
    
        const savedCategory=  await newCategory.save();
    const newProduct  = new Product  ({
    name : req.body.name ,
    ref : req.body.ref  ,
    brand : req.body.brand ,
    price : req.body.price ,
    category :req.category ,
    });
    try{
        const savedProduct =  await newProduct.save();
        return res.status(200).json({product :savedProduct});

    }
    catch (err){
        return res.status(500).json(err);
    }
};

const updateProduct = async(req,res) => {
    const idCategory = req.params.categoryId;
    const dataCategory ={...req.body};
    
        const updatedCategory = await Category.findByIdAndUpdate(idCategory ,dataCategory,{new : true} );
    const id = req.params.productId;
    const data ={...req.body};
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id ,data,{new : true} );
        return res.status(200).json({product :updatedProduct});

    }
    catch (err){
        return res.status(500).json(err);
    }
};
const deleteProduct = async(req,res) => {
    const id = req.params.productId;
    try{
        const deletedProduct = await Product.findByIdAndDelete(id);
        return res.status(200).json({product :deletedProduct});

    }
    catch (err){
        return res.status(500).json(err);
    }
};

module.exports.createProduct = createProduct;
module.exports.getProducts = getProducts ;
module.exports.getProduct = getProduct ;
module.exports.deleteProduct = deleteProduct ;
module.exports.updateProduct = updateProduct ;