module.exports = function() {
	var express  =  require('express');
	var app = express();
	var lr = require('tiny-lr')();

	app.use(require('connect-livereload')());
	app.use(express.static(__dirname));
	
	app.engine('html', require('ejs').renderFile);
	app.set('views', __dirname + '/views'); //optional since express defaults to CWD/views
	
	app.get('/', function(req, res){
		res.render('index.html')
	});
	
	app.listen(3100); // express server
	console.log("Server running at http://localhost:3100/");	
}