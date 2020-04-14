const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const db = require("./db/db");
const email = require("./config/email");
const session = require("express-session");
const User = require("./db/User");
const app = express();
const port = process.env.PORT || 5000;

const user = new User();
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
      html: htmlEmail,
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
    Email: req.body.Email,
  };
  let sql = "INSERT INTO dodgeball SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send("item added");
  });
});
check = false;
app.post("/api/login", function (request, response) {
  user.login(request.body.username, request.body.password, function (result) {
    if (result) {
      console.log(response.status);
    } else {
      console.log("Error while logging in...");
      check = false;
      response.send("Username or Password are incorrect!");
    }
  });
});

app.get("/api/signup", function (request, response) {
  console.log(check);
  if (request.session.login) response.sendStatus(200);
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
