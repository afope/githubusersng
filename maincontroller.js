app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Github Users in Nigeria';
}]);
app.controller('PageCtrl', function ($scope, $location, $http) {
console.log("Page Controller reporting for duty.");

});

app.controller('AboutCtrl', function ($scope, $location, $http) {
console.log("About Controller reporting for duty.");

});
