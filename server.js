const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const db = require("./db-sports/db");
var cors = require("cors");
const email = require("./config/email");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
  console.log("Sent an Email");
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
    console.log("Person Sign up for Dodgeball");
    res.send("item added");
  });
});

app.post("/api/swimming", (req, res) => {
  let post = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email,
  };
  let sql = "INSERT INTO swimming SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send("item added");
  });
});

//Get Sign Up People
app.get("/api/dodgeball", (req, res) => {
  db.query("SELECT * FROM dodgeball", (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log("Collected data from the dodgeball table");
  });
});
app.get("/api/swimming", (req, res) => {
  db.query("SELECT * FROM swimming", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/api/running", (req, res) => {
  db.query("SELECT * FROM running", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/api/volleyball", (req, res) => {
  db.query("SELECT * FROM volleyball", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/api/football", (req, res) => {
  db.query("SELECT * FROM football", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.use(cors());
var Users = require("./routes/Users");

app.use("/users", Users);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("website/build"));
}

app.listen(port, () => console.log(`Listening on port ${port}...`));
