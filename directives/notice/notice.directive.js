(function() {
    'use strict';

    var wfmNotice = angular.module('wfm.notice');

    wfmNotice.directive('wfmNotice', ['$timeout', '$rootScope', '$compile', '$controller', function($timeout, $rootScope, $compile, $controller) {
        return {
            restrict: 'EA',
            controller: ['$rootScope', '$element', function ($rootScope, $element) {
                $rootScope.wfmNoticeStack = $element[0];
            }]
        };
    }]);

})();
