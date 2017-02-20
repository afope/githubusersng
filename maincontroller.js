app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Github Users in Nigeria';
}]);
app.controller('PageCtrl', function ($scope, $location, $http) {
console.log("Page Controller reporting for duty.");

});

app.controller('githubDataController', function ($scope, $location, $http)
{
      $scope.getGitInfo = function () {
         $scope.userNotFound = false;
         $scope.loaded = false;
         $http.get("https://api.github.com/users/" + $scope.username)
               .success(function (data) {
                  if (data.name == "") data.name = data.login;
                  $scope.user = data;
                  $scope.loaded = true;
               })
               .error(function () {
                  $scope.userNotFound = true;
               });
         $http.get("https://api.github.com/users/" + $scope.username + "/repos").success(function (data) {
            $scope.repos = data;
            $scope.reposFound = data.length > 0;
         });
      }
})
