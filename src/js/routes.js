'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

      $stateProvider.state('index', {
        url: '/dashboard',
        views: {
          "main": {templateUrl: 'templates/dashboard.html'}
        }
      })
      $stateProvider.state('login', {
        url: '/login',
        views: {
          "main": {templateUrl: 'templates/login.html'}
        }
      })

    }
]);
