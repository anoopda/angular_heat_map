var express = require('express'),
	path    = require('path'),
	http    = require('http');
var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({ 
 extended: false
})); 


app.use(express.static(__dirname));
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});


var server = http.createServer(app);
server.listen(8000);
console.log('Listening on port 8000...');
