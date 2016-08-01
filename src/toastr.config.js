(function() {
  'use strict';

  angular.module('toastr')
    .constant('toastrConfig', {
      autoDismiss: false,
      closeButton: false,
      containerId: 'toast-container',
      extendedTimeOut: 3000,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      },
      maxOpened: 0,
      messageClass: 'toast-message',
      newestOnTop: true,
      onHidden: null,
      onShown: null,
      onTap: null,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      preventOpenDuplicates: false,
      progressBar: true,
      tapToDismiss: true,
      target: '.content',
      templates: {
          toast: 'messages/toast.html',
          progressbar: 'messages/progressbar.html'
      },
      timeOut: 10000,
      titleClass: 'toast-title',
      toastClass: 'toast'
    });
}());
