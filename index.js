//import high level packages
const express = require('express');
const app=express();
const mongoose = require("mongoose");
const cors = require ("cors");
//database connection
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://test:ZOwPRBSEQUzRCnWj@cluster0.poylc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
mongoose.connection.on("connected",() =>{
    console.log("DB Connnected"); 

});
mongoose.connection.on("error",(err) =>{
    console.log("DB Connection failed with=",err);
});
//import routes
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const addressRoutes = require("./routes/address.routes");
const categoryRoutes = require("./routes/category.routes");
const orderRoutes = require("./routes/order.routes");



//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
//routes middelwares
app.get("/",(req,res)=>{ 
    return res.json({msg : "hello"});
});

app.use("/auth" ,authRoutes);
app.use("/product" ,productRoutes);
app.use("/address",addressRoutes);
app.use("/category",categoryRoutes);
app.use("/order",orderRoutes);

//serveur listening
const port = 8000;
app.listen(port,()=>{
	console.log("server is listening on port 8000");
});
