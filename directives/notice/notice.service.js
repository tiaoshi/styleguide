(function () {
    'use strict';
    angular.module('wfm.notice')
        .service('NoticeService', ['$rootScope', '$controller', '$compile', '$timeout', function ($rootScope, $controller, $compile, $timeout) {
            var service = {};
            $rootScope.wfmNotices = $rootScope.wfmNotices ? $rootScope.wfmNotices : [];

            var types = {
                success: 'notice-success',
                error: 'notice-error',
                info: 'notice-info',
                warning: 'notice-warning',
            };

            var icons = {
                success: 'mdi mdi-thumb-up',
                error: 'mdi mdi-alert-octagon',
                info: 'mdi mdi-alert-circle',
                warning: 'mdi mdi-alert',
            };

            var addNotice = function (type, icon, content, timeToLive, destroyOnStateChange) {
                var notice = {
                    type: type,
                    icon: icon,
                    content: content,
                    timeToLive: timeToLive,
                    destroyOnStateChange: destroyOnStateChange
                };

                newNotice(notice);
            };

            service.newNotice = newNotice;

            function newNotice(options) {
                var template = '<div class="notice-container"><div class="notice-item" ng-class="setType(notice)"><i ng-class="setIcon(notice)"></i> <span ng-bind-html="notice.content"></span> <i class="pull-right mdi mdi-close notice-close" ng-click="close()"></i></div></div>';
                var templateScope = $rootScope.$new();
                templateScope.notice = options;

                var compiled = $compile(template)(templateScope);
                var locals = {
                    $scope: templateScope,
                    wfmNoticeRemoveThis: function () { removeNotice(compiled); }
                };

                function SingleNoticeCtrl($scope, wfmNoticeRemoveThis) {
                    $scope.setType = function (notice) {
                        return notice.type;
                    };
                    $scope.setIcon = function (notice) {
                        return notice.icon;
                    };
                    $scope.close = wfmNoticeRemoveThis;
                }
                SingleNoticeCtrl.$inject = ['$scope', 'wfmNoticeRemoveThis'];

                var controller = $controller(SingleNoticeCtrl, locals);

                angular.element($rootScope.wfmNoticeStack).append(compiled);

                if (options.timeToLive) {
                    $timeout(function noticeAutoClose() {
                        removeNotice(compiled);
                    }, options.timeToLive);
                }

                function removeNotice(element) {
                    angular.element(element).remove();
                }
            }

            service.warning = function (content, timeToLive, destroyOnStateChange) {
                addNotice(types.warning, icons.warning, content, timeToLive, destroyOnStateChange);
            };
            service.error = function (content, timeToLive, destroyOnStateChange) {
                addNotice(types.error, icons.error, content, timeToLive, destroyOnStateChange);
            };
            service.info = function (content, timeToLive, destroyOnStateChange) {
                addNotice(types.info, icons.info, content, timeToLive, destroyOnStateChange);
            };
            service.success = function (content, timeToLive, destroyOnStateChange) {
                addNotice(types.success, icons.success, content, timeToLive, destroyOnStateChange);
            };

            return service;
        }]);
})();
