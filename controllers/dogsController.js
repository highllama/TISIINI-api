const Dog = require("../models/dogs");

async function addDog(req, res) {
  try {
    const { name, age, raze } = req.body;
    const dog = Dog({
      name,
      age,
      raze,
    });
    const dogSaved = await dog.save();
    res.status(201).send({ succes: true, dog: dogSaved });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function getDogs (req,res) {
  try {
    const dogs = await Dog.find().lean().exec()
    res.send(dogs)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
}


async function deleteDog ( req,res) {
  try {
    const {name,age} = req.query
    const dog = await Dog.deleteOne({name,age })
    res.send(dog)    
  } catch (error) {
    res.status(500).send({message: error.message})
  }
}


async function updateDog (req,res ) {
  try {
    const {name, newName} = req.query
    const dog = await Dog.updateOne({name}, {name: newName})
    res.send(dog)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
}

module.exports = {
  addDog,
  getDogs,
  deleteDog,
  updateDog
};
