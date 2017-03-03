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

app.controller('UserCtrl', function ($scope, $http)
{
  var search = this;
  search.getData = function(user) {
  console.log(search.users);
  $http.get('https://api.github.com/users/' + search.user.login).then(function(person){
  search.data = true;
  search.name = person.data.name;
  search.location = person.data.location;
  search.bio = person.data.bio;
  search.followers = person.data.followers;
  search.following = person.data.following;
  search.repos = person.data.public_repos;
  search.avatar = person.data.avatar_url;
  console.log(search.name);
  console.log(search.location);
  console.log(search.bio);
})
}
});
