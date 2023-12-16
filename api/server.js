const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/User.js");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const Token = require("./model/Token.js");
const sendEmail = require("./utils/sendEmail.js");
const crypto = require("crypto");
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
        res.json(userData);
      }
    );
    const verifToken = await new Token({
      userId: userData._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
    const url = `${process.env.BASE_URL}users/${userData._id}/verify/${verifToken.token}`;
    console.log(userData.email, url);
    await sendEmail(userData.email, "Verify Email", url);
    return res.send({ message: "Verify the Email" });
  } catch (e) {
    res.status(422);
  }
});

app.get("/:id/verify/:token", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    // res.send(user);
    if (!user) {
      return res.status(400).send({ message: "User not Existing" });
    }
    // Token.findOneAndDelete(
    //   {
    //     userId: user._id,
    //     token: req.params.token,
    //   },
    //   (err, doc) => {
    //     if (err) {
    //       res.json({ err });
    //     }

    //     res.json({ doc });
    //   }
    // );
    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) {
      return res.status(400).send({ message: "Link was Expired/Wrong" });
    }

    await User.updateOne({ _id: user._id, verfied: true });
    res.status(200).send({ message: "Email verified successfully" });
    // token.remove();
  } catch (error) {
    res.send(error);
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
        if (userData.verfied) {
          jwt.sign(
            { email: userData.email, id: userData._id },
            jwtSecret,
            {},
            (err, token) => {
              if (err) throw err;
              res.cookie("token", token).json(userData);
            }
          );
        } else if (!userData.verfied) {
          const token = await Token.findOne({
            userId: userData._id,
          });
          if (token) {
            res
              .status(202)
              .send({ message: "Check Your Email and Vaildate the Account" });
          } else if (!token) {
            const verifToken = await new Token({
              userId: userData._id,
              token: crypto.randomBytes(32).toString("hex"),
            }).save();
            const url = `${process.env.BASE_URL}users/${userData._id}/verify/${verifToken.token}`;
            await sendEmail(userData.email, "Verify Email", url);
            res.status(202).send({ message: "Email sent again" });
          }
        }
      } else {
        res.status(202).send({ message: "Password wrong!" });
      }
    } else {
      res.status(202).send({ message: "Email doesn't exist" });
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
