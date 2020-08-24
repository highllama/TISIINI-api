const mongoose = require("mongoose");

mongoose.connection.on("open", () => {
  console.log("connected DB");
});

const connectDb = async ({ dbUser, dbPassword, dbHost, dbName }) => {
  try {
    let uri = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/Cluster0?retryWrites=true&w=majority`;
    console.log(uri)
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};





module.exports = connectDb;
