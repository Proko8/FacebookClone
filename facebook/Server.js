const express = require('express');
const bodyParser = require('body-parser');
const db = require('./DB/DBindex.js');
const path = require('path');
const app = express();
const port = "3001";

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use(express.static(path.join(__dirname + '/../react-client/dist')));

app.get('/api/Reviews', function (req, res) {
    db.verifyAccount((err, data) => {          
      if(err){                                
        console.log('Accounts DB GET error');
        res.status(404).send(data);
      }else{
        console.log('Reviews Returned');
        res.status(200).send(data);
      }
    })
  });

  app.post('/api/Reviews', function (req, res) {
    db.createAccount(req.body.firstname, req.body.lastname,req.body.email, req.body.password,(err, data) => {          
      if(err){                                
        console.log('Accounts DB POST error');
        res.sendStatus(404)
      }else{
        console.log('Reviews post submitted');
        res.sendStatus(200);
      }
    })
  });



app.listen(port, function() {
    console.log('listening on port 3001!');
  });
  