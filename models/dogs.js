const mongoose = require("mongoose");

const schema = mongoose.Schema;

const dogSchema = schema(
  {
    name: { type: String, required: true },
    age: Number,
    raze: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Dogs!", dogSchema);
