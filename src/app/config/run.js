(function() {

  'use strict';

  angular
    .module('app')
    .run(runBlock);

  function runBlock($window, $log, $appInfo) {
    var document = $window.document,
        navigator = $window.navigator;

    document.addEventListener('deviceready', onDeviceReady, false);

    // hide splash screen when device is ready
    function onDeviceReady() {
      navigator.splashscreen.hide();
    }

    $log.debug($appInfo.name + ' ' + $appInfo.version);
  }

})();
