const path = require('path');
const app = express();


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
// DB Config
const db = require('./config/keys').mongoURI;

//Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDb Connected...'))
    .catch(err => console.log(err));


    const port = process.env.PORT || 5000;

    app.listen(port, ()=> console.log(`Server started on port ${port}`))