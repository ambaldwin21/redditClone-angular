app.service('redditService', function ($http) {
  return {
    all: function() {
      return $http.get('./api/allposts');
    },
    new: function(city) {
      return $http.post('./api/allposts', city);
    },
    up: function(city) {
      return $http.put('./votes', city);
    },
    down: function(city) {
      return $http.put('./votes', city);
    },
    signup: function(newUser) {
      return $http.post('./signup/signup', newUser);
    },
    login: function(returningUser) {
      return $http.post('./login/login', returningUser);
    },
    logout: function() {
      return $http.get('./login/login');
    },
    one: function(id) {
      return $http.get(`/onepost/${id}`)
    },
    edit: function(editedCity) {
      const id = editedCity.postId
      return $http.put(`/onepost/${id}`, editedCity)
    },
    delete: function(id) {
      // const deleteId = city.postId
      return $http.delete(`/onepost/${id}`)
    },
    newComment: function(city, newComment) {
      let commentObj = {
        text: newComment.text,
        postId: city.postId
      }
        return $http.post('./comments', commentObj);
    }
  }
})
