const express = require('express')
const primes = require('primes');
const app = express()

app.get('/', function (req, res) {
  console.log("Running Test");
  var foo = primes(500,1000);
  res.send(foo);
})

app.listen(8080, function() {
  console.log('Started listening')
})
