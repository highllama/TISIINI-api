const mongoose = require("mongoose");

const schema = mongoose.Schema;

const ProductsSchema = schema(
  {
    name: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
    sizes: {
      type: Array,
      required: true,
    },
    price: {
      required: true,
      type: Number,
    },
    imageUrl: {
      required: true,
      type: String,
    },
    gender: {
      type: String,
    },
    instantDelivery: {
      type: Boolean,
    },
    objectType: {
      type: String,
    },
    productLine: {
      type: String,
    },
    stock: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", ProductsSchema);
