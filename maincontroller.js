app.controller('MainController', function($http) {
  var search = this;
  search.fetchData = function(user) {
    search.loading = true;
    search.data = false;
    $http.get('https://api.github.com/search/users?location=nigeria&q=' + user.name).then(function(response){
      console.log(response);
      search.data = true;
      search.name = response.data.name;
      search.location = response.data.location;
      search.bio = response.data.bio;
      search.followers = response.data.followers;
      search.public_repos = response.data.public_repos;
      search.avatar = response.data.avatar_url;
      search.loading = false;
      search.isComplete = false;
    })
}
})
app.controller('PageCtrl', function ($scope, $location, $http) {
console.log("Page Controller reporting for duty.");

});
