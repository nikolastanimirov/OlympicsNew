const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mysql = require("mysql");
const config = require("./config/db");
const email = require("./config/email");
const session = require("express-session");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Create connection
const db = mysql.createConnection(config.mysql);

//Connect
db.connect(err => {
  if (err) {
    console.log(err);
  }
  console.log("Mysql is connected successfully...");
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

    res.send("item added");
  });
});

app.post("/api/login", function(request, response) {
  var username = request.body.username;
  var password = request.body.password;
  console.log(username);
  console.log(password);
  if (username && password) {
    db.query(
      "SELECT * FROM login WHERE username = ? AND password = ?",
      [username, password],
      function(error, results, fields) {
        if (results.length > 0) {
          request.session.loggedin = true;
          request.session.username = username;

          return response.redirect("/signup");
        } else {
          console.log(error);
          response.send("Incorrect Username and/or Password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});

//Get Sign Up People
app.get("/api/dodgeball", (req, res) => {
  db.query("SELECT * FROM dodgeball", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/api/swimming", (req, res) => {
  db.query("SELECT * FROM swimming", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.listen(port, () => console.log(`Listening on port ${port}...`));
