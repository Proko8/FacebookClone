const express = require('express');
const bodyParser = require('body-parser');
const db = require('./Database/DBQueries.js');
const path = require('path');
const app = express();
const port = 3008;
var cors = require('cors');

app.use(cors());
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use(express.static(path.join(__dirname + '/../react-client/dist')));

// app.get('/api/accounts', function (req, res) {
//     db.verifyAccount((err, data) => {          
//       if(err){                                
//         console.log('Accounts DB GET error');
//         res.status(404).send(data);
//       }else{
//         console.log('Accounts Returned');
//         res.status(200).send(data);
//       }
//     })
//   });

//   app.post('/api/accounts', function (req, res) {
//     db.createAccount(req.body.firstname, req.body.lastname,req.body.email, req.body.password,(err, data) => {          
//       if(err){                                
//         console.log('Accounts DB POST error');
//         res.sendStatus(404)
//       }else{
//         console.log('Accounts post submitted');
//         res.sendStatus(200);
//       }
//     })
//   });

    app.get('/api/posts', function (req, res) {
      db.retrievePost((err, data) => {          
        if(err){                                
          console.log('Posts DB GET error');
          res.status(404).send(data);
        }else{
          console.log('Posts Returned');
          res.status(200).send(data);
        }
      })
    });
  
    app.post('/api/posts', function (req, res) {
      console.log("Before DB")
      db.createPost(req.body.firstname, req.body.post,(err, data) => {          
        if(err){                                
          console.log('Posts DB POST error');
          res.sendStatus(404)
        }else{
          console.log('Posts post submitted');
          res.sendStatus(200);
        }
      })
  });



app.listen(port, function() {
    console.log('listening on port 3008!');
  });
  