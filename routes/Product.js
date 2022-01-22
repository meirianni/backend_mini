const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
//get all show data
router.get("/", async (req, res) => {
  //   res.send("all product ");
  const products = await Product.find();
  res.json(products);
});
//post new
router.post("/new-product", async (req, res) => {
  //   res.send("new ");
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.json(savedProduct);
});

//findId
router.get("/get/:id", async (req, res) => {
  const p = await Product.findById({ _id: req.params.id });
  res.json(p);
});

// //delete
router.delete("/delete/:id", async (req, res) => {
  const result = await Product.findByIdAndDelete({ _id: req.params.id });
  res.json(result);
});

// //update
router.put("/update/:id", async (req, res) => {
  const u = await Product.updateOne({ _id: req.params.id }, { $set: req.body });
  res.json(u);
});

module.exports = router;
