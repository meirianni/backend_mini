const express = require("express");
const router = express.Router();
const Merchant = require("../models/Merchant");
//get all show data
router.get("/", async (req, res) => {
  //   res.send("get all ");
  const merchants = await Merchant.find();
  res.json(merchants);
});
//post new
router.post("/new", async (req, res) => {
  //   res.send("new ");
  const newMerchant = new Merchant(req.body);
  const savedMerchant = await newMerchant.save();
  res.json(savedMerchant);
});

//findId
router.get("/get/:id", async (req, res) => {
  const m = await Merchant.findById({ _id: req.params.id });
  res.json(m);
});

//delete
router.delete("/delete/:id", async (req, res) => {
  const result = await Merchant.findByIdAndDelete({ _id: req.params.id });
  res.json(result);
});

//update
router.put("/update/:id", async (req, res) => {
  const u = await Merchant.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.json(u);
});

module.exports = router;
