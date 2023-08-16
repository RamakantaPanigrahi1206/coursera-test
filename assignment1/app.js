(function () {
    'use strict';
    
    angular.module('LunchApp', [])
    .controller('LunchController', LunchController);
    
    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
      $scope.name = "Enter Lunch Items in comma separeted format";
    
      $scope.LunchMessage = function () {
        return "Message1";
      };
    
    }
    
    })();