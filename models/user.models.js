const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
const UserSchema = new Schema({
    firstName:{type : String, maxlength:64 },
    lastName:{type : String, maxlength:64 },
    email:{type : String, unique:true, index:true, required:true},
    password:{type : String, maxlength:1024 },
    phoneNumber:{type: Number, unique:true, index:true},
    sex:{type : String},
    isAdmin:{type : Boolean,default :false},
    isActive:{type : Boolean,default :false},
    address:{type : mongoose.Schema.Types.ObjectId,ref : "Address"},
},
    {timestamps :true} 
);
UserSchema.plugin(uniqueValidator,{message:"not unique"});

module.exports = mongoose.model("User",UserSchema);