'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

      $stateProvider.state('dashboard', {
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
      $stateProvider.state('regions', {
        url: '/regions',
        views: {
          "main": {templateUrl: 'templates/regions.html'}
        }
      })
      $stateProvider.state('operator', {
        url: '/operator',
        views: {
          "main": {templateUrl: 'templates/operator.html'}
        }
      })
      $stateProvider.state('categorier', {
        url: '/categorier',
        views: {
          "main": {templateUrl: 'templates/categoriers.html'}
        }
      })
      $stateProvider.state('plans-offers', {
        url: '/plans-offers',
        views: {
          "main": {templateUrl: 'templates/plans_offers.html'}
        }
      })
    }
]);
