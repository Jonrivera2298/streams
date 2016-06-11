// Helpers

// Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
  // Add your keys and access token credentials for your Twitter
  // developer application.
  // TODO: Move these values to environment variables. It's very
  // insecure to keep these values in your source code.
  var client = new Twitter({
    consumer_key: '71K1gJWyMwEcSqa6ISTySmvnj',
    consumer_secret: 'HrRnQl4CP7Zz3NNRMNXkvHseWnLIfJcy7IO9WwY3ZJ0vbc9g7c',
    access_token_key: '736631779789017088-SNaPaQMjFQLQmdHPn8Gm3Nu86CllYVT',
    access_token_secret: 'RTyPIbkfQpLDBKVxfK39DNf3UYQjL6xTCXAH87wQfx3lo'
  });

  return client;
};

module.exports = Helpers;
