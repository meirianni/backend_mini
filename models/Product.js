const mongoose = require("mongoose");
const producttSchema = new mongoose.Schema({
  name_product: String,
  quantity: Number,
  price: Number,
});
module.exports = mongoose.model("Product", producttSchema);
