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

app.controller('UserCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  console.log("User Controller reporting for duty.");
  var person = this;
  var user = $routeParams.username;
  console.log(user);

    $http.get('https://api.github.com/users/' + user).then(function(res)
  {
    console.log(res);
    person.name = res.data.name;
    console.log(person.name);
    person.location = res.data.location;
    console.log(person.location);
    person.bio = res.data.bio;
    person.followers = res.data.followers;
    person.following = res.data.following;
    person.avatar =  res.data.avatar_url;
    person.repositories = res.data.public_repos;

  });
}])
