var express = require('express')
var app = express()


//205.186.140.45
//80
app.get('/', function(req, res) {
	res.send('Hello World!')
});

app.on('listening', function() {
	console.log('ok, server is running');
});

app.listen(process.env.PORT || 80);