app.controller('MainController',  ['$scope', '$http', function ($scope, $http) {
  var search = this;
  search.fetchData = function(user) {
    search.data = false;
    $http.get('https://api.github.com/search/users?location=nigeria&q=' + user.name).then(function(response){
      search.users = response.data.items;
      console.log(search.users);
    });
}
}])
