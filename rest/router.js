module.exports = function(app){
		
	app.get('/', function(req, res){
		res.render('index.html')
	});

	app.get("/rest/article", function(req, res){
		var article = require('./article.api.js')
		console.log(article.show(res))
	});
	
}