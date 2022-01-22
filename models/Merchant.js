const mongoose = require("mongoose");
const MerchantSchema = new mongoose.Schema({
  password: String,
  name: String,
  address: String,
  join_date: Date,
  phone_number: Number,
});
module.exports = mongoose.model("Merchant", MerchantSchema);
