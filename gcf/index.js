var primes = require('primes');

exports.prime = function prime (req, res) {
  console.log("Running Test");
  var foo = primes(500,1000);
  res.status(200).send(foo);
};

exports.hello = function hello (req, res) {
  console.log("GCF - Hello World");
  res.status(200).send("GCF - Hello World")
}
