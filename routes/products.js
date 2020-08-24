const express = require("express");
const {
  getProducts,
  createProduct,
} = require("../controllers/productsController");

const auth = (app) => {
  const router = express.Router();
  app.use("/api/products", router);
  // router.get("/", getKittens);

  router.get("/", getProducts);
  router.post("/", createProduct);
};

module.exports = auth;
