var contol = angular.module('mainApp');


contol.controller('appnCtrl', function($scope,$http) {
    $http.get("json/data.json")
    .then(function(response) {
        $scope.studentDetails = response.data;
    });

});

