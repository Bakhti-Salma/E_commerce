const Address = require('../models/address.models');
const createAddress = async (req,res) => {
    const newAddress = new Address ({
        zipcode  : req.body.zipcode ,
        city     : req.body.city ,
        street   : req.body.street ,
    });
    try{
        const savedAddress =  await newAddress.save();
        return res.status(200).json({address :savedAddress});

    }
    catch (err){
        return res.status(500).json(err);
    }
};
const getAddresss = async (req,res) => {
    try{
        const addresss  = await Address.find();
        return res.status(200).json({addresss : addresss});

    }
    catch (err){
        return res.status(500).json(err);
    }
};

const getAddress = async (req,res) => {
    const id = req.params.addressId;
    try{
        const address = await Address.findById(id);
        return res.status(200).json({address : address});

    }
    catch (err){
        return res.status(500).json(err);
    }
};
const deleteAddress = async(req,res) => {
    const id = req.params.addressId;
    try{
        const deletedAddress = await Address.findByIdAndDelete(id);
        return res.status(200).json({address :deletedAddress});

    }
    catch (err){
        return res.status(500).json(err);
    }
};

const updateAddress = async(req,res) => {
    const id = req.params.addressId;
    const data ={...req.body};
    try{
        const updatedAddress = await Address.findByIdAndUpdate(id ,data,{new : true} );
        return res.status(200).json({address :updatedAddress});

    }
    catch (err){
        return res.status(500).json(err);
    }
};
module.exports.createAddress = createAddress;
module.exports.getAddresss = getAddresss ;
module.exports.getAddress = getAddress ;
module.exports.deleteAddress = deleteAddress ;
module.exports.updateAddress = updateAddress ;