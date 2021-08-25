const router = require("express").Router();
const orderControllers = require("../controllers/order.controllers");
const Order = require("../models/order.models");
const verifyToken = require("../middlewares/verifyToken");
const isActive = require("../middlewares/isActive");
const isAdmin = require("../middlewares/isAdmin");
router.post("/",verifyToken, isActive,orderControllers.createOrder);
router.get("/",verifyToken, isActive,isAdmin,orderControllers.getOrders);
router.get("/:orderId" ,verifyToken, isActive,orderControllers.getOrder);
router.delete("/:orderId",verifyToken, isActive,orderControllers.deleteOrder);
router.put("/:orderId",verifyToken,isActive,orderControllers.updateOrder);

module.exports = router;