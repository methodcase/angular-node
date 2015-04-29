angular.module('app.controllers',[])

.controller('HomeCtrl', function($scope, $http){

	$http.get('/rest/article').
	  success(function(data, status, headers, config) {     
	  	$scope.articles = data;
	  }).
	  error(function(data, status, headers, config) {
	  });

})

