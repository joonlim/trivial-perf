'use strict';
var primes = require('primes');


module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Hello World',
      input: event,
    }),
  };

  callback(null, response);
};


module.exports.prime = (event, context, callback) => {
  var foo = primes(500,1000);
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: foo,
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.moarprime = (event, context, callback) => {
  var foo = primes(500,2000);
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: foo,
      input: event,
    }),
  };

  callback(null, response);
};
