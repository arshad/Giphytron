var request = require('request');
var apiKey = 'dc6zaTOxFJmzC';
var url = 'http://api.giphy.com/v1/gifs';

exports.search = function(keywords, callback) {
  url += '/search?q=' + keywords + '&limit=10&offset=0&api_key=' + apiKey;
  request(url + '&q=' + keywords, callback);
}