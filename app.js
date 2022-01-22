const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//create express app
const app = express();
//db
mongoose.connect("mongodb://localhost/merchaant", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDb");
});

//midleware
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("hello");
});

const MerchantRoute = require("./routes/Merchant");
app.use("/merchant", MerchantRoute);

const ProductRoute = require("./routes/Product");
app.use("/product", ProductRoute);

app.listen(3000, console.log("listening mei"));
