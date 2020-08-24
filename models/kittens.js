const mongoose = require('mongoose');

const schema = mongoose.Schema


const kittySchema = schema({
   name: String,
   age: Number,
 },{
    timestamps: true
 });
 

 module.exports = mongoose.model('Kitten', kittySchema )
