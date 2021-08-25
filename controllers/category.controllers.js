const Category = require('../models/category.models');

const createCategory = async (req,res) => {
    const newCategory = new Category ({
        type  : req.body.type 
    });
    try{
        const savedCategory=  await newCategory.save();
        return res.status(200).json({category :savedCategory});

    }
    catch (err){
        return res.status(500).json(err);
    }
};
const getCategorys = async (req,res) => {
    try{
        const categorys = await Category.find();
        return res.status(200).json({categorys : categorys});

    }
    catch (err){
        return res.status(500).json(err);
    }
};

const getCategory = async (req,res) => {
    const id = req.params.categoryId;
    try{
        const category = await Category.findById(id);
        return res.status(200).json({category : category});

    }
    catch (err){
        return res.status(500).json(err);
    }
};
const deleteCategory = async(req,res) => {
    const id = req.params.categoryId;
    try{
        const deletedCategory = await Category.findByIdAndDelete(id);
        return res.status(200).json({category :deletedCategory});

    }
    catch (err){
        return res.status(500).json(err);
    }
};

const updateCategory = async(req,res) => {
    const id = req.params.categoryId;
    const data ={...req.body};
    try{
        const updatedCategory = await Category.findByIdAndUpdate(id ,data,{new : true} );
        return res.status(200).json({category :updatedCategory});

    }
    catch (err){
        return res.status(500).json(err);
    }
};
module.exports.createCategory = createCategory ;
module.exports.getCategorys = getCategorys ;
module.exports.getCategory  = getCategory  ;
module.exports.deleteCategory  = deleteCategory  ;
module.exports.updateCategory  = updateCategory  ;