/**
 * Extend the `mdToolbar` directive
 */

(function() {

  'use strict';

  angular
    .module('app')
    .directive('mdToolbar', mdToolbarDirective);

  function mdToolbarDirective($window) {

    return {
      priority: 1,
      link: linkFunc
    };

    function linkFunc($scope, $element) {

      var document = $window.document;

      document.addEventListener('deviceready', onDeviceReady, false);
      $scope.$on('$destroy', function() {
        document.removeEventListener('deviceready', onDeviceReady, false);
      });

      function onDeviceReady() {
        var device = $window.device;

        // add special styling for iOS version 7 or greater
        if (device.platform.toLowerCase() === 'ios' && parseFloat(device.version) >= 7.0) {
          $element.addClass('ios-statusbar-overlay');
        }
      }

    } // END linkFunc

  }

})();
