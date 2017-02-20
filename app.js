var app = angular.module('githubUsers', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "about.html", controller: "PageCtrl"})
    .otherwise("/404", {templateUrl: "404.html", controller: "PageCtrl"});
}]);
