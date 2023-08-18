(function () {
  'use strict';
 
  angular.module('LunchApp', [])
  .controller('LunchController', LunchController);
 
  LunchController.$inject = ['$scope'];
  function LunchController($scope) {
    $scope.name = "";
    $scope.CheckLunchItem = function () {
      $scope.LunchMessage ="";
      if($scope.name == '') {
          $scope.LunchMessage = "Please enter data first"
      }else {
        $scope.nameArr = $scope.name.split(",");
        $scope.itemCount = 0;
        for(var i = 0; i < $scope.nameArr.length; i++) {
          if($scope.nameArr[i].trim() != '') {
            $scope.itemCount++;
          }
        }
        if($scope.itemCount <= 3) {
          $scope.LunchMessage = "Enjoy!";
        }else{
          $scope.LunchMessage = "Too much!";
        }
      }
      return $scope.LunchMessage;
    };
 
  }
 
  })();