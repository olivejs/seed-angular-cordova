(function() {

  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  function HomeController($scope, $window, $appInfo, $cordovaDevice) {

    $scope.githubRepo = {
      name: 'olivejs/seed-angular-cordova'
    };

    $scope.appInfo = $appInfo;

    $scope.deviceInfo = [
      { name: 'Cordova'},
      { name: 'Model' },
      { name: 'Platform' },
      { name: 'UUID' },
      { name: 'Version' }
    ];

    // Retrieve device related information
    $window.document.addEventListener('deviceready', function () {
      var device = $cordovaDevice.getDevice();
      angular.forEach($scope.deviceInfo, function(info) {
        info.value = device[info.name.toLowerCase()];
      });
    }, false);
  }

})();
