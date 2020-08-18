var mysql = require("mysql");
var mysqlConfig = require("./DBConfig.js");
var connection = mysql.createConnection(mysqlConfig);

// const createAccount = (cb) => {
//   connection.query(
//     "INSERT INTO accounts(firstname,lastname, email, password) VALUES (? , ? , ?, ?",
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
//   connection.query("SELECT * from accounts", (err, data) => {
//     if (err) {
//       console.log("Could not create user.");
//       cb(err, null);
//     } else {
//       console.log("User created.");
//       cb(null, data);
//     }
//   });
// };

const createPost = (firstname, post, cb) => {
  connection.query(
    "INSERT INTO posts(firstname, post) VALUES (? , ?",
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
  connection.query("SELECT * from posts", (err, data) => {
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
