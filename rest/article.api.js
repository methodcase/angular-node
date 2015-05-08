var getArticle = function(response){
	
	var http = require('http');

	var options = {
	'hostname': 'api.reddit.com',
	'port': 80,
	'path': '/hot',
	'method': 'GET',
	'headers': {'user-agent': 'Mozilla/5.0'}
	}

	var callBack = function(d){
		var list = [];
	    d.data.children.map(function(a){
	        list.push({title:a.data.title});
	    });	    	       
	    response.send(list);
	}
		
	var httpGetApi = function(options, caller){
		http.get(options, function(res){
			var body = '';
			res.on('data', function(chunk){
				body += chunk
			})

			res.on('end', function(){
				var info = JSON.parse(body)
				caller(info)
			})
		})
	};

	httpGetApi(options, callBack);

}

exports.show = function(response){
	getArticle(response)
}
	