/**
 * @ngdoc function
 * @name proAngularApp.controller:NationlistCtrl
 * @description
 * # NationlistCtrl
 * Controller of the proAngularApp
 */
var myapp = angular.module('proAngularApp');
(function(app){
  "use strict";

  myapp.controller('NationListCtrl', function ($scope,$http) {
    $http({
      method: 'GET',
      url : '/data/nations.json'
    }).then(function (data) {
          $scope.nations = data ;
       }, function (data) {
         console.log('Error');
       });
  });  
  
     
  })();