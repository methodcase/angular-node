var gulp = require('gulp');
var app = require('./app.js')

gulp.task('default',function () {
	app(); // call app.js

	var lr = require('tiny-lr')();
	lr.listen(35729); // tiny-lr server	
	console.log("tiny-lr server running at port 35729");

	require("openurl").open("http://localhost:3100") // open the browser and load localhost:3100

	gulp.watch('www/*.*',function(event){		
		var fileName = require('path').relative(__dirname, event.path);
		console.log(fileName);
		 lr.changed({
			body: {
			files: [fileName]
			}
		});
	});
	
});