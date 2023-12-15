const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/User.js");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "gfvdasuyhjfgbfciulhasdejkfbcvs";

app.use(express.json());
app.use(cookieParser());
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
  const { fname, lname, email, password } = req.body;
  try {
    const userData = await User.create({
      fname,
      lname,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    jwt.sign(
      {
        email: userData.email,
        id: userData._id,
        fname: userData.fname,
        lname: userData.lname,
      },
      jwtSecret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json(userData);
      }
    );
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
            res.cookie("token", token).json(userData);
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

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { _id, email, fname, lname } = await User.findById(userData.id);
      res.json({ _id, email, fname, lname });
    });
  } else {
    res.json(null);
  }
  // res.json({ token });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("Succesful Logout");
});
app.listen(5000);
