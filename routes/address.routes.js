const router = require("express").Router();
const addressControllers = require("../controllers/address.controllers");
const Address = require("../models/address.models");
router.post("/", addressControllers.createAddress);
router.get("/", addressControllers.getAddresss);
router.get("/:addressId" , addressControllers.getAddress);
router.delete("/:addressId", addressControllers.deleteAddress);
router.put("/:addressId", addressControllers.updateAddress);

module.exports = router;