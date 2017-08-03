const express = require('express')
const primes = require('primes');
const app = express()

app.get('/prime', function (req, res) {
  console.log("Running Test");
  res.send(primes(500,1000));
})

app.get('/hello', function (req, res) {
  console.log("App Engine Standard Hello World");
  res.send("App Engine Standard Hello World");
})

app.listen(8080, function() {
  console.log('Started listening')
})
