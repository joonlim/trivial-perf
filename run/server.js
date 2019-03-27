const express = require('express')
const primes = require('primes');
const app = express()

app.get('/prime', function (req, res) {
  console.log("Running Test");
  res.send(primes(500,1000));
})

app.get('/moar-prime', function (req, res) {
  console.log("Running Test");
  res.send(primes(500,2000));
})

app.get('/', function (req, res) {
  res.send("101 - Hello from Cloud Run");
})

app.get('/sleep-50', function (req, res) {
  setTimeout(function () {
    res.send(primes(0,50))
  }, 500)
})

app.get('/sleep-500', function (req, res) {
  setTimeout(function () {
    let high = Math.floor((Math.random() * 700) + 1500)
    res.send(primes(500, high))
  }, 500)
})

app.get('/loaderio-279a91b887a58968d7dff00143aa18d2.html', function (req, res) {
  res.send("loaderio-279a91b887a58968d7dff00143aa18d2 ");
})

app.listen(8080, function() {
  console.log(`Running`);
})

