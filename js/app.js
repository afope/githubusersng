var app = angular.module('githubUsers', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "MainController"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "MainController"})
    .when("/:username", {templateUrl: "partials/user.html", controller: "UserCtrl"})
}]);
