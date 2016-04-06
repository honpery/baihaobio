var express = require('express');
var app = express();



app.use(express.static('src'));


app.get('/', function (req, res) {
	res.sendFile('/src/index.html');

});


app.listen(3000, function () {
	console.log("server running 3000");
});



