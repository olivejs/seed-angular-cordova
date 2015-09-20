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

    $window.document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady() {
      // retrieve device related information
      var device = $cordovaDevice.getDevice();
      angular.forEach($scope.deviceInfo, function(info) {
        info.value = device[info.name.toLowerCase()];
      });

      // for iOS version 7 or greater
      if ($window.device.platform.toLowerCase() === 'ios' && parseFloat($window.device.version) >= 7.0) {
        angular.element('body').addClass('statusbar-overlay');
      }
    }

  }

})();
