'use strict';

/**
 * @ngdoc overview
 * @name proAngularApp
 * @description
 * # proAngularApp
 *
 * Main module of the application.
 */

angular
  .module('proAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/nations.html',
        controller: 'NationListCtrl',
 //       controllerAs: 'nationlist'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
