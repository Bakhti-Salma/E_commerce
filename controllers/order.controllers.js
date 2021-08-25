const Order = require('../models/order.models');
const createOrder = async (req,res) => {
    const newOrder = new Order ({
        num : req.body.num ,
        quantity   : req.body.quantity ,
        price : req.body.price ,
        order_date     : req.body.order_date ,
        delivery_date  : req.body.delivery_date ,
        client : req.verifiedUser._id,
        
    });
    try{
        const savedOrder =  await newOrder.save();
        return res.status(200).json({order :savedOrder});

    }
    catch (err){
        return res.status(500).json(err);
    }
};
const getOrders = async (req,res) => {
    try{
        const orders  = await Order.find();
        return res.status(200).json({orders : orders});

    }
    catch (err){
        return res.status(500).json(err);
    }
};

const getOrder = async (req,res) => {
    const id = req.params.addressId;
    try{
        const order = await Order.findById(id);
        return res.status(200).json({order : order});

    }
    catch (err){
        return res.status(500).json(err);
    }
};
const deleteOrder = async(req,res) => {
    const id = req.params.orderId;
    try{
        const deletedOrder = await Order.findByIdAndDelete(id);
        return res.status(200).json({order :deletedOrder});

    }
    catch (err){
        return res.status(500).json(err);
    }
};

const updateOrder = async(req,res) => {
    const id = req.params.orderId;
    const data ={...req.body};
    try{
        const updatedOrder = await Order.findByIdAndUpdate(id ,data,{new : true} );
        return res.status(200).json({order :updatedOrder});

    }
    catch (err){
        return res.status(500).json(err);
    }
};
module.exports.createOrder = createOrder;
module.exports.getOrders = getOrders ;
module.exports.getOrder = getOrder ;
module.exports.deleteOrder = deleteOrder ;
module.exports.updateOrder = updateOrder ;