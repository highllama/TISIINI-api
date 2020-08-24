const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//DB
const mongoDb = require("./db/mongoDb");
//INITS
const app = express();
//SETTINGS
const config = require("./config/index");

app.set("port", process.env.PORT || 4000);
//MIDLEWARES
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

//GLOBAL VARS

//ROUTES
const Kittens = require("./routes/kittens");
const Dogs = require("./routes/dogs");
const Auth = require("./routes/auth");
const Products = require("./routes/products");
Kittens(app);
Dogs(app);
Auth(app);
Products(app);

//STATIC FILES

//SERVER

const initServer = async () => {
  try {
    await mongoDb(config.config);
    app.listen(app.get("port"), () => {
      console.log("server on port", app.get("port"));
    });
  } catch (error) {
    console.log(error);
  }
};

initServer();
