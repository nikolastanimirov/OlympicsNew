const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "hello" });
});

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

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "olympicstest22@gmail.com",
        pass: "Ns333666999"
      }
    });
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

app.listen(port, () => console.log(`Listening on port ${port}`));
