var primes = require('primes');

/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloWorld = function helloWorld (req, res) {
  console.log("Running Test");
  var foo = primes(500,1000);
  res.status(200).send(foo);
};
