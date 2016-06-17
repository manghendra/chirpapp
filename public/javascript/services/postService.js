app.factory('postService', function($resource){
  return $resource('/api/posts/:id');
});
