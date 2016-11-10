app.controller('postController', function($scope, redditService, $location, $routeParams) {
    var id = $routeParams.id

    redditService.one(id).then(function(post) {
        $scope.city = post.data[0]
    })

    $scope.upVote = function(city) {
        city.votes += 1
        redditService.up(city).then(function() {})
    }

    $scope.downVote = function(city) {
        city.votes -= 1
        redditService.down(city).then(function() {})
    }


    $scope.submitEditPost = function(city) {
        redditService.edit(city).then(function() {
            $location.url('/')
        }).catch(function(error) {
          $scope.error = 'You must be logged in to edit a post.'
        })
    }

    $scope.deletePost = function(city) {
        redditService.delete(city).then(function() {
            $location.url('/')
        })
    }


});
