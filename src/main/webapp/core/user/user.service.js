angular.
  module('core.user').
  factory('User', ['$resource',
    /**
     * Service gérant l'accès aux utilisateurs depuis l'API (back)
     */
    function($resource) {
      return $resource('user/:userId.json', {}, {
        query: {
          method: 'GET',
          params: {userId: 'user'},
          isArray: true
        }
      });
    }
  ]);
