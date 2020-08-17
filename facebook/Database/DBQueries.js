var mysql = require("mysql");
var mysqlConfig = require("./config.js");
var connection = mysql.createConnection(mysqlConfig);

const createAccount = (cb) => {
  connection.query(
    "INSERT INTO Accounts(firstname,lastname, email, password) VALUES (? , ? , ?, ?",
    [firstname, lastname, email, password],
    (err, data) => {
      if (err) {
        console.log("Could not create user.");
        cb(err, null);
      } else {
        console.log("User created.");
        cb(null, data);
      }
    }
  );
};

const verifyAccount = (cb) => {
  connection.query("SELECT * from Accounts", (err, data) => {
    if (err) {
      console.log("Could not create user.");
      cb(err, null);
    } else {
      console.log("User created.");
      cb(null, data);
    }
  });
};

module.exports = {
    createAccount,
    verifyAccount,
};
