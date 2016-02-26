(function () {
    'use strict';

    angular.module('toastr')
        .controller('ToastController', ToastController);

    function ToastController() {
        this.progressBar = null;

        this.startProgressBar = function (duration) {
            if (this.progressBar) {
                this.progressBar.start(duration);
            }
        };

    }
}());
