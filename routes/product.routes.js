const router = require("express").Router();
const productControllers = require("../controllers/product.controllers");
const isAdmin = require("../middlewares/isAdmin");
const verifyToken = require("../middlewares/verifyToken");
router.post("/",verifyToken,isAdmin,productControllers.createProduct);
router.get("/",productControllers.getProducts);

router.get("/:productId",verifyToken,isAdmin,productControllers.getProduct);
router.delete("/:productId",verifyToken,isAdmin,productControllers.deleteProduct);
router.put("/:productId",verifyToken,isAdmin,productControllers.updateProduct);

module.exports = router;