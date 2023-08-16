(function () {
    'use strict';
    
    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function ($scope) {
        $scope.name = "Rama";
        $scope.sayHello = function() {
            return "Hello Course Era scope function!";
        }
    });
    
    })();