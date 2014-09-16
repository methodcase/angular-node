var gulp = require('gulp');

gulp.task('default',function () {

	var express  =  require('express');
	var app = express();
	var lr = require('tiny-lr')();
	var browserify = require('browserify');

	app.use(require('connect-livereload')());
	app.use(express.static(__dirname));

	app.listen(3100); // express server
	console.log("Server running at http://localhost:3100/");

	lr.listen(35729); // tiny-lr server	
	console.log("tiny-lr server running at port 35729");

	gulp.watch('*',function(event){		
		var fileName = require('path').relative(__dirname, event.path);
		console.log(fileName);
		 lr.changed({
			body: {
			files: [fileName]
			}
		});
	});
	
});

