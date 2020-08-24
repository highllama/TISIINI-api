const express = require('express');
const {addDog, getDogs, deleteDog, updateDog} = require('../controllers/dogsController');


const Dogs = (app) =>  {
   

   const router = express.Router();
   app.use("/api/dogs", router);
   // router.get("/", getKittens);

   router.get('/dog', deleteDog)
   router.get('/dog/update', updateDog)
   router.post("/", addDog);
   router.get('/', getDogs)

} 

module.exports = Dogs;