var giphy = require('../lib/giphy');
var swig = require('swig');

// Build ui.
var ui = {
  form: document.querySelector('.search-form'),
  keywords: document.querySelector('.keywords'),
  results: document.querySelector('.results'),
  console: document.querySelector('.console')
}

// Focus the keywords input on load.
ui.keywords.focus();

// Submit listener for form.
ui.form.addEventListener('submit', function(e) {
  e.preventDefault();

  var keywords = ui.keywords.value;
  if (keywords) {
    ui.console.innerHTML = 'Searching...';
    giphy.search(keywords, function (error, response, body) {
      if (error) console.log(error);

      if (!error && response.statusCode == 200) {
        var json = JSON.parse(body);
        var output = swig.renderFile('./app/templates/main.html', {
          results: json.data
        });
        ui.results.className += ' loaded';
        ui.results.innerHTML = output;
        ui.console.innerHTML = 'Showing top 10 results for <strong>' + keywords + '</strong>.';
      }
    });
  }
})
