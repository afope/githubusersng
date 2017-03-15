app.controller('UserCtrl', ['$http', '$routeParams', function ( $http, $routeParams) {
  console.log("User Controller reporting for duty.");
  var person = this;
  var user = $routeParams.username;

    $http.get('https://api.github.com/users/' + user).then(function(res)
  {
    var githubuser = res.data;
    githubuser.name = res.data.name;
    console.log(githubuser.name);

  });
}])
