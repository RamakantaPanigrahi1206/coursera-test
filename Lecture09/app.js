(function () {
    'use strict';
    
    angular.module('DIApp', [])
    .controller('DIController', DIController);
    
    function DIController ($scope,
                           $filter,
                           $injector) {
      $scope.name = "Yaakov";
    
      $scope.upper = function () {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
      };
    
      console.log($injector.annotate(DIController));
    }
    
    function AnnonateMe(name, job, blah) {
      return "Blah!";
    }
    
    console.log(DIController.toString());
    
    })();

  /**function(){"use strict";function n(o,t,e){o.name="Yaakov",o.upper=function(){var n=t("uppercase");o.name=n(o.name)},console.log(e.annotate(n))}function o(n,o,t){return"Blah!"}angular.module("DIApp",[]).controller("DIController",n),console.log(n.toString())}();