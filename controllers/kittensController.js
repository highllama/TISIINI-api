const Kitten = require("../models/kittens");

async function addKitten(req, res) {
  try {
    const { name, age } = req.body;
    const kitten = Kitten({
      name,
      age,
    });
    const kittenSaved = await kitten.save();
    res.status(201).send({ succes: true, kitten: kittenSaved });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function getKittens(req, res) {
  try {
    const { name } = req.query;
    let kittens = await Kitten.find({ name: name || /.*/ })
      .lean()
      .exec();
    res.status(200).send(kittens);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
  addKitten,
  getKittens,
};
