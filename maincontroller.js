app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Github Users in Nigeria';
}]);
app.controller('PageCtrl', function ($scope, $location, $http) {
console.log("Page Controller reporting for duty.");

});

app.controller('githubDataController', function ($http){
  var search = this;
  search.fetchData = function(user) {
    search.loading = true;
    $http.get('https://api.github.com/users/' + user.name).then(function(response){
      search.data = response;
      search.loading = false;
    })
}
});
