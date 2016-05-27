var express = require('express')
var app = express()


//205.186.140.45
//80
app.get('/', function(req, res) {
	res.send('Hello World!')
});

var server = app.listen(80, function() {
	var host = server.address().address;
  var port = server.address().port;
 
  console.log('Dashboard listening at http://%s:%s', host, port);
});