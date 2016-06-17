app.controller('loginController', loginController);
function loginController($scope, $rootScope, $location, authService){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';

  $scope.login = function(){
    authService.login($scope.user).then(onLoginOk, onLoginFail);
    function onLoginOk(result){
      var data = result.data;
      if(data.state == "success"){
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/');
      }
    }

    function onLoginFail(err){
      console.log(err);
    }
  };
}
