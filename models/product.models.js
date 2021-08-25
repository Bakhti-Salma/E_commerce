const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name : {type : String},
    ref : {type : Number},
    brand :{type : String},
    picture :{type : String},
    price : {type : Number , default : 0},
    category:{type : mongoose.Schema.Types.ObjectId,ref : "Category"},
},
{timestamps :true} 
);
module.exports = mongoose.model("Product",productSchema);