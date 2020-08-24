const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      required: true,
      type: String,
    },
    imageUrl: {
      required: false,
      type: String
    },
    phoneNumber : {
      required: true,
      type: Number
    }
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("User", userSchema);
