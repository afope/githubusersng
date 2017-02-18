var app = angular.module('githubUsers', [
  'ngRoute'
]);
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    // Pages
    .when("/home", {templateUrl: "index.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "about.html", controller: "PageCtrl"})


}]);
