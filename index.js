const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/home.html');
})

app.get('/register', function(req, res) {
  res.sendFile(__dirname + '/register.html');
})

app.get('/login', function(req, res) {
  res.sendFile(__dirname + '/login.html');
})

app.get('/store', function(req, res) {
  res.sendFile(__dirname + '/store.html');
})

app.get('/myorder', function(req, res) {
  res.sendFile(__dirname + '/myorder.html');
})

app.get('/silverpoint', function(req, res) {
  res.sendFile(__dirname + '/silverpoint.html');
})

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/about.html');
})

app.get('/point', function(req, res) {
  res.sendFile(__dirname + '/point.html');
})

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
})

app.get('/team', function(req, res) {
  res.sendFile(__dirname + '/team.html');
})

app.get('/storeclose', function(req, res) {
  res.sendFile(__dirname + '/storeclose.html');
})

//Confirmation for 'node index.js' or 'nodemon'
app.listen(process.env.PORT || 3000, function(){
console.log('Port is running...');
})
