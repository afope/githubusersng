app.controller('UserCtrl', ['$scope', '$http', '$routeParams', function ( $scope, $http, $routeParams) {
  console.log("User Controller reporting for duty.");
  var person = this;
  var user = $routeParams.username;

    $http.get('https://api.github.com/users/' + user).then(function(res)
  {
    var githubuser = res.data;
     $scope.githubuser = res.data;
    console.log($scope.githubuser);

  });
}])
