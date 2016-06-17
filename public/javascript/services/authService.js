app.factory('authService', function($http){
  var authService = {
    login: login,
    logout: logout,
    signup: signup
  };
  return authService;
  function login(params){
    return $http({
      url: '/auth/login',
      method: 'POST',
      data: params
    });
  }

  function logout(){
    // TODO : logout function
  }

  function signup(){
    // TODO : signup function
  }
});
