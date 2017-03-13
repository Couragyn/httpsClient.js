var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var output = '';

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      output += data + '\n==============';
    });

    response.on('end', function() {
      console.log(output);
    });
  });

}

getAndPrintHTML();