const express = require("express");
const { registerUser,getUser } = require("../controllers/authController");

const auth = (app) => {
  const router = express.Router();
  app.use("/api/auth", router);
  // router.get("/", getKittens);

  router.post("/login", getUser);
  router.post("/register", registerUser);
};

module.exports = auth;
