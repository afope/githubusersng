app.controller('MainController',  ['$scope', '$http', function ($scope, $http) {
  $scope.fetchData = function(user) {
    $http.get('https://api.github.com/search/users?location=nigeria&q=' + user.name).then(function(response){
      $scope.users = response.data.items;
      console.log($scope.users);
    });
}
}])
