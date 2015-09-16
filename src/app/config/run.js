(function() {

  'use strict';

  angular
    .module('app')
    .run(runBlock);

  function runBlock($window, $log, $appInfo) {
    $window.FastClick.attach($window.document.body);
    $log.debug($appInfo.name + ' ' + $appInfo.version);
  }

})();
