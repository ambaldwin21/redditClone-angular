//this is what should be on this page from pirates
var app = angular.module('reddit', ['ngRoute', 'ngAnimate'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/allposts.html',
        controller: 'mainController'
      })
      .when('/signup', {
        templateUrl: '../views/signup.html',
        controller: 'signUpController'
      })
      .when('/login', {
        templateUrl: '../views/login.html',
        controller: 'signUpController'
      })
      .when('/:id', {
        templateUrl: '../views/onepost.html',
        controller: 'postController'
      })
});
