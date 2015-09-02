var app = angular.module('myApp', []);

app.controller('AppController', ['$scope', '$http', function ($scope, $http) {
  console.log('Hello World from controller');

  var refresh = function() {
    $http.get('/contactlist').success(function (response) {
      console.log('I got the data I requested');
      $scope.contactlist = response;
      $scope.contact = '';
    });
  };

  refresh();

  $scope.addContact = function() {
    console.log($scope.contact);
    $http.post('/contactlist', $scope.contact).success(function (response) { // $scope.contact is the data sent to the server
      console.log(response);
      refresh();
    }); 
  };

  $scope.remove = function(id) {
    console.log(id);
    $http.delete('/contactlist/' + id).success(function (response) {
      refresh();
    });
  };
}]);