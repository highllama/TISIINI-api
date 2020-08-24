const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = User({
      name,
      email,
      password: hashedPassword,
      phoneNumber
    });

    const userExist = await User.findOne({ email });
    
    if (!userExist) {
      const userSaved = await user.save();
      res.status(201).send({ data: userSaved, succes: true });
    } else res.status(400).send({ ok: false, message: "user already exist" });
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getUser(req, res) {
  try {
    const {  phoneNumber } = req.body;

    const user = await User.findOne({ phoneNumber });
    
    if (user) {
      const token = jwt.sign({ _id: user._id }, process.env.AUTH_JWT_SECRET);
      // console.log(token);
      // console.log(jwt.decode(token));
      // res.status(200).send({ data: user, succes: true });
      res.status(200).send({ token });
    } else
      res.status(400).send({ ok: false, message: "incorrect credentials" });
  } catch (error) {
    res.status(500).send({ error, status: false });
  }
}

module.exports = {
  registerUser,
  getUser,
};
