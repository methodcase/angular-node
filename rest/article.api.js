var getArticle = function(response){
	
	var http = require('http');
	var weather  = require('weather-js');

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
	    return list;
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

	//httpGetApi(options, callBack);

	weather.find({search: 'Cebu', degreeType: 'F'}, function(err, result) {
	  if(err) console.log(err);
	 
	  //console.log(JSON.stringify(result, null, 2));
	  JSON.stringify(result, null, 2)
	});
	
}

exports.show = function(response){
	getArticle(response)
}
	