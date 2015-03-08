angular.module('bootstrap')
    .controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.results = [];

        var updateResults = function(results)
        {
            $scope.results = results;
        };

        $scope.search = function () {
            $http.get('/search?q=' + $scope.query)
                .then(function(res) {
                    updateResults(res.data.results);
                });
        };
    }]);
