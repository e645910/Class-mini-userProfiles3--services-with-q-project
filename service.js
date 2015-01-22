var app = angular.module('userProfiles');

//---Inject $q into the service
app.service('mainService', function($http, $q) {
//Once injected we can begin using it by adding a deffered variable to handle the $q	
  var deferred = $q.defer();
  this.getUsers = function() {
    $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
 //Now let's add a promise to our service       
    }).then(function(response) {
      deferred.resolve(response.data.data)
    });
    // return only successfully processed data does not deal with error problems in the code
    return deferred.promise;
  }
});