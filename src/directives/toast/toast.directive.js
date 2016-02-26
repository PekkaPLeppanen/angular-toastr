(function () {
    'use strict';

    angular.module('toastr')
        .directive('toast', toast);

    toast.$inject = ['$interval', 'toastrConfig', 'toastr'];

    function toast($interval, toastrConfig, toastr) {
        return {
            replace: true,
            templateUrl: function () {
                return toastrConfig.templates.toast;
            },
            controller: 'ToastController',
            link: toastLinkFunction
        };

        function toastLinkFunction(scope, element, attrs, toastCtrl) {
            var timeout;

            scope.toastClass = scope.options.toastClass;
            scope.titleClass = scope.options.titleClass;
            scope.messageClass = scope.options.messageClass;
            scope.progressBar = scope.options.progressBar;

            scope.init = function () {
                if (scope.options.timeOut) {
                    timeout = createTimeout(scope.options.timeOut);
                }
                if (scope.options.onShown) {
                    scope.options.onShown();
                }
            };

            element.on('mouseenter', function () {
                hideAndStopProgressBar();
                if (timeout) {
                    $interval.cancel(timeout);
                }
            });

            scope.tapToast = function () {
                if (angular.isFunction(scope.options.onTap)) {
                    scope.options.onTap();
                }
                if (scope.options.tapToDismiss) {
                    scope.close(true);
                }
            };

            scope.close = function (wasClicked, $event) {
                if ($event) {
                    $event.stopPropagation();
                }
                toastr.remove(scope.toastId, wasClicked);
            };

            element.on('mouseleave', function () {
                if (scope.options.timeOut === 0 && scope.options.extendedTimeOut === 0) {
                    return;
                }
                scope.$apply(function () {
                    scope.progressBar = scope.options.progressBar;
                });
                timeout = createTimeout(scope.options.extendedTimeOut);
            });

            function createTimeout(time) {
                toastCtrl.startProgressBar(time);
                return $interval(function () {
                    toastr.remove(scope.toastId);
                }, time, 1);
            }

            function hideAndStopProgressBar() {
                scope.progressBar = false;
            }

        }
    }
}());
