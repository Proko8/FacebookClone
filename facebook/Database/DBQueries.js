var mysql = require("mysql");
var mysqlConfig = require("./DBConfig.js");
var connection = mysql.createConnection(mysqlConfig);

// const createAccount = (cb) => {
//   connection.query(
//     "INSERT INTO Accounts(firstname,lastname, email, password) VALUES (? , ? , ?, ?",
//     [firstname, lastname, email, password],
//     (err, data) => {
//       if (err) {
//         console.log("Could not create user.");
//         cb(err, null);
//       } else {
//         console.log("User created.");
//         cb(null, data);
//       }
//     }
//   );
// };

// const verifyAccount = (cb) => {
//   connection.query("SELECT * from Accounts", (err, data) => {
//     if (err) {
//       console.log("Could not create user.");
//       cb(err, null);
//     } else {
//       console.log("User created.");
//       cb(null, data);
//     }
//   });
// };

const createPost = (cb) => {
  connection.query(
    "INSERT INTO Posts(firstname, post) VALUES (? , ?",
    [firstname, post],
    (err, data) => {
      if (err) {
        console.log("Could not create post.");
        cb(err, null);
      } else {
        console.log("post created.");
        cb(null, data);
      }
    }
  );
};

const retrievePost = (cb) => {
  connection.query("SELECT * from Posts", (err, data) => {
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
  // createAccount,
  // verifyAccount,
  retrievePost,
  createPost,
};
