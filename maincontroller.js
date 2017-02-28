app.controller('MainController',  ['$scope', '$http', function ($scope, $http) {
  var search = this;
  search.fetchData = function(user) {
    search.loading = true;
    search.data = false;
    $http.get('https://api.github.com/search/users?location=nigeria&q=' + user.name).then(function(response){
      //console.log(response);
      search.data = true,
      search.users = response.data.items;
      //search.name = response.data.name;
      //console.log(search.users.login);
      //console.log(search.name);
      angular.forEach(search.users, function(value, key){
     console.log(key + ': ' + value.login);
});
    })
}
}])
app.controller('PageCtrl', function ($scope, $location, $http) {
console.log("Page Controller reporting for duty.");

});
