// Helpers

// Global dependencies 
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
    // TODO: This is super insecure.
    // Move to environment variables.
    var client = new Twitter({
        consumer_key: '71K1gJWyMwEcSqa6ISTySmvnj',
        consumer_secret: 'HrRnQl4CP7Zz3NNRMNXkvHseWnLIfJcy7IO9WwY3ZJ0vbc9g7c',
        access_token_key: '736631779789017088-SNaPaQMjFQLQmdHPn8Gm3Nu86CllYVT',
        access_token_secret: 'RTyPIbkfQpLDBKVxfK39DNf3UYQjL6xTCXAH87wQfx3lo',
    })

    return client;
};

module.exports = Helpers;