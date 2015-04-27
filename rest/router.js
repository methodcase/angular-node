module.exports = function(app){
		
	app.get('/', function(req, res){
		res.render('index.html')
	});

	app.get('/someapi', function(req, res){
		
		res.send("{name:'Funny'}");
	});

	app.post("/upload", function(){
		console.log('uploading..');
	});

	app.get("/rest/show", function(req, res){
		var reddit = require('./reddit.api.js');
		reddit(res);
	});

	app.get("/rest/show2", function(){
		
	});

}
	