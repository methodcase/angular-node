function useStatesConfig($stateProvider) {

	$stateProvider

    .state('home', {
      url: "/home",      
      templateUrl: "www/templates/home.html",
      controller: 'HomeCtrl'
    })

    .state('post', {
      url: "/search",
      templateUrl: "www/templates/home.html",
      controller: 'PostCtrl'
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.overview', {
      url: "/overview",
      views: {
        'menuContent' :{
          templateUrl: "templates/overview.html",
          controller: 'OverviewCtrl'
        }
      }
    })

    .state('app.profile', {
      url: "/profile/:profileId",
      views: {
        'menuContent' :{
          templateUrl: "templates/profile.html",
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('app.addagent', {
      url: "/addagent",
      views: {
        'menuContent' :{
          templateUrl: "templates/addagent.html",
          controller: 'AddagentCtrl'
        }
      }
    })
    
    .state('app.analytics', {
      url: "/analytics",
      views: {
        'menuContent' :{
          templateUrl: "templates/analytics.html",
          controller: 'AnalyticsCtrl'
        }
      }
    })

    .state('app.agents', {
      url: "/agents",
      views: {
        'menuContent' :{
          templateUrl: "templates/agents.html",
          controller: 'AgentsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });

}





