const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/User.js");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "gfvdasuyhjfgbfciulhasdejkfbcvs";

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  console.log("hi");
  res.json("hello");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userData = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json({ userData });
    console.log({ userData });
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await User.findOne({ email });
    if (userData) {
      // res.json("Email already exist");
      const passOk = bcrypt.compareSync(password, userData.password);
      if (passOk) {
        jwt.sign(
          { email: userData.email, id: userData._id },
          jwtSecret,
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json("Password right!");
          }
        );
      } else {
        res.status(422).json("Password wrong!");
      }
    } else {
      res.json("Email doesn't exist");
    }
  } catch (e) {
    res.status(422).json(e);
  }
});

app.listen(5000);
