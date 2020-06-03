const mysql = require("mysql");
const config = require("../config/db");

//Create connection
const db = mysql.createConnection(config.mysql);

//Connect
db.connect(err => {
  if (err) {
    console.log(err);
  }
  console.log("Mysql is connected successfully...");
});

module.exports = db;
