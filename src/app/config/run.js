(function() {

  'use strict';

  angular
    .module('app')
    .run(runBlock);

  function runBlock($window, $log, $appInfo) {
    $log.debug($appInfo.name + ' ' + $appInfo.version);
  }

})();
