(function() {

  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  function HomeController($scope, $window, $cordovaDevice) {
    $scope.githubRepo = {
      name: 'olivejs/seed-angular-cordova'
    };

    // Retrieve device related information
    $window.document.addEventListener('deviceready', function () {
      $scope.device = $cordovaDevice.getDevice();
    });
  }

})();
