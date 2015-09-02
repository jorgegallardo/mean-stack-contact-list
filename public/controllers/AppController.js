var app = angular.module('myApp', []);

app.controller('AppController', ['$scope', '$http', function ($scope, $http) {
  console.log('Hello World from controller');

  $http.get('/contactList').success(function (response) {
    console.log('I got the data I requested');
    $scope.contactList = response;
  })
}]);

