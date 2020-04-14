const db = require("../db/db");
const bcrypt = require("bcrypt");

function User() {}

User.prototype = {
  //Find the user
  find: function (username, callback) {
    if (!username) return;

    let sql = `SELECT * FROM login WHERE username = ?`;

    db.query(sql, username, function (err, result) {
      // if (err) throw err;
      if (result.length) {
        callback(result[0]);
      } else {
        callback(null);
      }
    });
  },
  login: function (username, password, callback) {
    this.find(username, function (user) {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          callback(user);
          console.log("Passwords Matched");
          return;
        }
      } else {
        callback(null);
        return;
      }
    });
  },
};

module.exports = User;
