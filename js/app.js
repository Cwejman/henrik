angular.module('henrik', ['ui.router', 'controllers'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  })

  .state('adventure', {
    url: '/adventure',
    templateUrl: 'partials/adventure.html',
    controller: 'HomeCtrl'
  })

  .state('clients', {
    url: '/clients',
    templateUrl: 'partials/clients.html',
    controller: 'HomeCtrl'
  })

  .state('social', {
    url: '/social',
    templateUrl: 'partials/social.html',
    controller: 'HomeCtrl'
  });

  $urlRouterProvider.otherwise('/home');

});
