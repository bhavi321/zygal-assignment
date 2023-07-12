const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const createUser = async (req, res) => {
  try {
    const body = req.body;


    let created = await userModel.create(body);
    return res.status(201).send({ status: true, message: "Sucessfully Registered", data: created });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).send({ message: "email is required for login" });
  if (!password) return res.status(400).send({ message: "password is required for login" });

    const user = await userModel.findOne({ email: email, password: password });

    let token = jwt.sign({ userId: user._id, email: user.email },"secret-key");
    res.setHeader("x-api-key", token);
    res.status(200).send({status: true,data: { token: token},msg: "loggedin successfully",
    })
  } catch (error) {
    res.status(500).send({ status: false, message: error.message })
  }
};

module.exports = { createUser, logIn }