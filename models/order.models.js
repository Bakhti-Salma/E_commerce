const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    num : {type : String},
    client : {type : mongoose.Schema.Types.ObjectId,ref : "User"},
    quantity : {type : Number , default : 0},
    price : {type : Number , default : 0},
    product : {type : mongoose.Schema.Types.ObjectId,ref : "Product"},
    order_date : {type : Date},
    delivery_date : {type : Date}
},
{timestamps :true} 
);
module.exports = mongoose.model("Order",orderSchema);