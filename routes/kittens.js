const express = require("express");
const {addKitten, getKittens} = require('../controllers/kittensController');


const Kittens = (app) => {
  const router = express.Router();
  app.use("/api/kittens", router);



  router.get("/", getKittens);

  router.post("/", addKitten);
};

module.exports = Kittens;
