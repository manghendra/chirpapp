app.controller('mainController', mainController);
function mainController(postService, $scope, $rootScope){
  $scope.posts = postService.query();
  $scope.newPost = {
    text: '',
    username: '',
    created_at: ''
  }

  // post fucntion
  $scope.post = function(){
    $scope.newPost.username = $rootScope.current_user;
    $scope.newPost.created_at = Date.now();
    postService.save(newPost, function(){
      $scope.posts = postService.query();
      $scope.newPost = {text: '', username: '',created_at: ''};
    });
  }
}
