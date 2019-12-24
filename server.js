const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mysql = require("mysql");
const config = require("./config/index");
const email = require("./config/email");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Create connection
const db = mysql.createConnection(config.mysql);

//Connect
db.connect(err => {
  if (err) {
    console.log(err);
  }
  console.log("Mysql Connected");
});

app.get("/api/hello", (req, res) => {
  res.send({ express: "hello" });
});

//Sends Emails to GMAIL
app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h2>Contact Details</h2>

    <table>
    <tr>
    <th><h3>From</h3></th>
    <th><h3>Name:</h3></th>
    <th><h3>Email: </h3></th>
    </tr>
    <tr>
    <td> </td>
    <td> ${req.body.name}</td>
    <td>${req.body.email}</td>
    </tr>
    </table>
    <h2>Message</h2>
    <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport(email);
    let mailOptions = {
      from: "fastfive8@gmail.com",
      to: "olympicstest22@gmail.com",
      replyTo: "fastfiv8@gmail.com",
      subject: "New Message",
      text: req.body.message,
      html: htmlEmail
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      }
    });
  });
});
app.post("/api/dodgeball", (req, res) => {
  let post = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email
  };
  let sql = "INSERT INTO dodgeball SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);

    res.send("item added");
  });
});

//Get Sign Up People
app.get("/api/signups", (req, res) => {
  let sql = "SELECT * FROM dodgeball";
  let query = db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(results);
    res.json(results);
  });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
