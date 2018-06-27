var app = angular.module('portfolio');

app.factory("Portfolio_api", function factoryFunction($http, $cookies, $rootScope){
  var service = {};

  service.displayHello = function(){
    return $http({
      url: '/api/hello'
    });
  };

  return service;
});

app.controller('HomeController', function($scope, Portfolio_api, $cookies, $rootScope){
    Portfolio_api.displayHello().success(function(results){
      $scope.results = results;
      console.log("Here", $scope.results);
    });
});

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state
    ({
      name : 'home',
      url : '/home',
      templateUrl: 'home.html',
      controller: 'HomeController'
    });
  )};
