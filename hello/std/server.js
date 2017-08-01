const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log("Running Test");
  res.send("Hello World");
})

app.listen(8080, function() {
  console.log('Started listening')
})
