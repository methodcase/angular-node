angular.module('myApp', ['ui.router','app.controllers','app.service'])

.run(function() {
  
})

.config(function($stateProvider, $urlRouterProvider) {

  useStatesConfig($stateProvider);
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});

