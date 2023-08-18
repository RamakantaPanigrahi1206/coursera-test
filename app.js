(function () {
    'use strict';
    
    angular.module('LunchApp', [])
    .controller('LunchController', LunchController);
    
    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
      $scope.name = "";
    
      $scope.LunchMessage = function () {
        return "Enter Lunch Items in comma separeted format";
      };

      $scope.CheckLunchItem = function () {
        $scope.LunchMessage ("Message2")
        return LunchMessage;

      };
    
    }
    
    })();