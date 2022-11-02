const express = require("express");
const router = express.Router();
const db = require("../config/database");
const ProductController = require("../controllers/ProductController");

router.post("/createProduct", ProductController.createProduct);
router.put("/updateProduct/:id", ProductController.updateProduct);
router.get('/showProducts',ProductController.showProduct);
router.get('/selectFromId/:id',ProductController.selectFromId);
router.get('/selectDesc',ProductController.selectDesc);
router.get('/selectProductsByName/:name', ProductController.selectProductsByName);
router.delete('/deleteProductsById/:id',ProductController.deleteProductsById);

module.exports = router