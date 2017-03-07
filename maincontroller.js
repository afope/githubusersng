app.controller('MainController',  ['$scope', '$http', function ($scope, $http) {
  var search = this;
  search.fetchData = function(user) {
    search.data = false;
    $http.get('https://api.github.com/search/users?location=nigeria&q=' + user.name).then(function(response){
      //console.log(response);
      search.users = response.data.items;




    });


}
}])
app.controller('PageCtrl', function ($scope, $location, $http) {
console.log("Page Controller reporting for duty.");
});

app.controller('UserCtrl',  ['$scope', '$http', '$route', function ($scope, $http, $route) {

  var user = $route.username;
  console.log(user);

    $http.get('https://api.github.com/search/users/' + user.login).then(function(res)
  {
    console.log(res);
    person.name = res.data.name;
    person.location = res.data.location;
  });

}])
