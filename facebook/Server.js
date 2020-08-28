const express = require("express");
const bodyParser = require("body-parser");
const db = require("./Database/DBQueries.js");
const path = require("path");
const app = express();
const port = "8080";
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/../react-client/dist")));

//Posts
app.get("/api/posts", function (req, res, next) {
  db.retrievePost((err, data) => {
    if (err) {
      console.log("Posts DB GET error");
      res.status(404).send(data);
    } else {
      console.log("Posts Returned");
      res.status(200).send(data);
    }
  });
});
//Posts
app.post("/api/posts", function (req, res, next) {
  db.createPost(req.body.firstname.firstname, req.body.post.post, (err, data) => {
    if (err) {
      console.log("Posts DB POST error");
      res.sendStatus(404)
    } else {
      console.log("Posts post submitted");
      res.sendStatus(200)
    }
  });
});
//Comments
app.get("/api/comments", function (req, res, next) {
  db.retrieveComments((err, data) => {
    if (err) {
      console.log("Posts DB GET error");
      res.status(404).send(data);
    } else {
      console.log("Posts Returned");
      res.status(200).send(data);
    }
  });
});
//Comments
app.post("/api/comments", function (req, res, next) {
  console.log(req.body)
  db.createComment(req.body.comment.comment, (err, data) => {
    if (err) {
      console.log("Posts DB POST error");
      res.sendStatus(404)
    } else {
      console.log("Posts post submitted");
      res.sendStatus(200)
    }
  });
});

app.listen(port, function () {
  console.log(`listening on port ${port}!`);
});


