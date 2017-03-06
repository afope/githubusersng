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

app.controller('UserCtrl',  ['$scope', '$http', function ($scope, $http) {

  var vm = this;
  vm.data = false;
  vm.fetchData = function (user) {
    vm.loading = true;
    $http.get('https://api.github.com/search/users/' + user.login).then(function(res)
  {
    console.log(res);
    vm.data = true;
    vm.name = res.data.name;
    vm.locatin = res.data.location;
  });
}
}])
