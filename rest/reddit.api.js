module.exports = function(ress){

	var http = require('http');
	var options = {
		'hostname': 'api.reddit.com',
		'port': 80,
		'path': '/hot',
		'method': 'GET',
		'headers': {'user-agent': 'Mozilla/5.0'}
	}	

	var obj = {};
	
	var callBack = function(d){
		processed_data = [];
		d.data.children.map(function(a){		
			processed_data.push(a.data.title)
		});

		return processed_data;
	}

	http.get(options, function(res){	
		console.log(res.statusCode)	
		var body  = '';		
		res.on('data', function(chunk){
			body += chunk
		});
		res.on('end', function(){
			var info  = JSON.parse(body);
			callBack(info);
		});
	}, callBack);

	console.log(obj)	 //no data returned
	ress.send(obj)
}