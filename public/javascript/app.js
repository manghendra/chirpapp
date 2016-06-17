var app = angular.module('chirpApp', [
  'ngRoute',
  'ngResource'
]).run(Runconfig);

function Runconfig($rootScope, $http){
  $rootScope.authenticated = false;
  $rootScope.current_user = "";

  console.log($rootScope.authenticated);
  $rootScope.signOut = function(){
    $http.get("auth/signout");
    $rootScope.authenticated = false;
    $rootScope.current_user = "";
  }
}

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/views/main.html',
      controller: 'mainController'
    })
    .when('/login', {
      templateUrl: '/views/login.html',
      controller: 'loginController'
    });
});
