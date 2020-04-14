const express = require("express");
const jwt = require("jsonwebtoken");
const users = express.Router();
const bcrypt = require("bcrypt");
const cors = require("cors");

const User = require("../models/User");
users.use(cors());

process.env.SECRET_key = "secret";

users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.email,
    created: today,
  };

  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        bcrypt
          .hash(req.body.password, 10, (err, hash) => {
            userData.password = hash;
            User.create(userData).then((user) => {
              res.json({ status: user.email + "registered" });
            });
          })
          .catch((err) => {
            res.send("Error: " + err);
          });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch((err) => {
      res.send("Error: " + err);
    });
});
users.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_key, {
            expiresIn: 1440,
          });
          res.send(token);
        }
      } else {
        res.status(400).json({ error: "User does not exists" });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});

module.exports = users;
