(function () {
    'use strict';

    function ToastController() {
        this.progressBar = null;

        this.startProgressBar = function (duration) {
            if (this.progressBar) {
                this.progressBar.start(duration);
            }
        };

    }

    angular.module('toastr')
        .controller('ToastController', ToastController);

}());
