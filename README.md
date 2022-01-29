# Run App

npm start

### Get All Merchant

router.get("/", async (req, res) => {
// res.send("get all ");
const merchants = await Merchant.find();
res.json(merchants);
});

### Get ID Merchant

router.get("/get/:id", async (req, res) => {
const m = await Merchant.findById({ \_id: req.params.id });
res.json(m);
});

### POST ADD new Merchant

router.post("/new", async (req, res) => {
// res.send("new ");
const newMerchant = new Merchant(req.body);
const savedMerchant = await newMerchant.save();
res.json(savedMerchant);
});

### Delete new Merchant

router.delete("/delete/:id", async (req, res) => {
const result = await Merchant.findByIdAndDelete({ \_id: req.params.id });
res.json(result);
});

### put Update Merchant

router.put("/update/:id", async (req, res) => {
const u = await Merchant.updateOne(
{ \_id: req.params.id },
{ \$set: req.body }
);
res.json(u);
});
