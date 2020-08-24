const products = require("../models/Products");

async function getProducts(req, res) {
  try {
    const items = await products.find({ name: /.*/ }).lean().exec();
    res.status(200).send({ items });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function createProduct(req, res) {
  try {
    const {
      name,
      reference,
      sizes,
      price,
      imageUrl,
      productLine,
      objectType,
      instantDelivery,
    } = req.body;
    const product = products({
      name,
      reference,
      sizes,
      price,
      imageUrl,
      productLine,
      objectType,
      instantDelivery
    });
    const productSaved = await product.save();
    res.status(201).send({ status: "ok", productSaved });
  } catch (error) {
    res.status(500).send({ error });
  }
}

module.exports = {
  getProducts,
  createProduct,
};
