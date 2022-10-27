const express = require("express");
const router = express.Router();
const db = require("../config/database");
const CategoryController = require("../controllers/CategoryController");

router.post("/createCategory", CategoryController.createCategory);
router.put ("/updateCategory/:id", CategoryController.updateCategory);
router.get ('/showCategories', CategoryController.showCategories);
router.get ('/selectCategorybyId/:id',CategoryController.selectCategorybyId);
