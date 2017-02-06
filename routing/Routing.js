
var route = angular.module('mainApp', ['ui.router']);

route.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        .state('name', {
            url: '/name',
            templateUrl: ' http://localhost:8000/templates/jsonTemplate.html',
            controller:'appnCtrl'
        })

        .state('age', {
            url: '/age',
            templateUrl: ' http://localhost:8000/templates/ageTemplate.html',
            controller:'appnCtrl'
        });

});

