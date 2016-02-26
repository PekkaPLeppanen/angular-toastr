(function () {
    'use strict';

    angular.module('toastr')
        .directive('progressBar', progressBar);

    progressBar.$inject = ['toastrConfig'];

    function progressBar(toastrConfig) {
        return {
            replace: true,
            require: '^toast',
            templateUrl: function () {
                return toastrConfig.templates.progressbar;
            },
            link: linkFunction
        };

        function linkFunction(scope, element, attrs, toastCtrl) {

            toastCtrl.progressBar = scope;

            scope.start = function (duration) {
                element.css({
                    'width': 0,
                    'transition-duration': duration + 'ms'
                });
            };

        }
    }
}());
