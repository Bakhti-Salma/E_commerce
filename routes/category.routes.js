const router = require("express").Router();
const categoryControllers = require("../controllers/category.controllers");
const Category = require("../models/category.models");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
router.post("/" ,verifyToken,isAdmin,categoryControllers.createCategory);
router.get("/", categoryControllers.getCategory);
router.get("/:categoryId" ,verifyToken,isAdmin, categoryControllers.getCategory);
router.delete("/:categoryId",verifyToken,isAdmin, categoryControllers.deleteCategory);
router.put("/:categoryId",verifyToken,isAdmin, categoryControllers.updateCategory);

module.exports = router;