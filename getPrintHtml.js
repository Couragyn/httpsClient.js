var https = require('https');

function getAndPrintHTML (options) {

  var output = '';

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      output += data + '\n==============';
    });

    response.on('end', function() {
      console.log(output);
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);