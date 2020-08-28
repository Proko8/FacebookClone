var mysql = require("mysql");
var mysqlConfig = require("./DBConfig.js");
var connection = mysql.createConnection(mysqlConfig);

//posts
const retrievePost = (cb) => {
  connection.query("SELECT * from posts", (err, data) => {
    if (err) {
      console.log("Could not update timeline.");
      cb(err, null);
    } else {
      console.log("timeline updated.");
      cb(null, data);
    }
  });
};
//posts
const createPost = (firstname, post, cb) => {
  connection.query(
    "INSERT INTO posts (firstname, post) VALUES (? , ?)",
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
//comments
const retrieveComments = (cb) => {
  connection.query("SELECT * from comments", (err, data) => {
    if (err) {
      console.log("Could not update comments.");
      cb(err, null);
    } else {
      console.log("comments updated.");
      cb(null, data);
    }
  });
};
//comments
const createComment = (comment, cb) => {
  console.log(typeof comment);
  connection.query(
    "INSERT INTO comments (comment) VALUES (?)",
    [comment],
    (err, data) => {
      if (err) {
        console.log("Could not create comment.");
        cb(err, null);
      } else {
        console.log("comment created.");
        cb(null, data);
      }
    }
  );
};

module.exports = {
  retrievePost,
  createPost,
  createComment,
  retrieveComments,
  // createAccount,
  // verifyAccount,
};

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
