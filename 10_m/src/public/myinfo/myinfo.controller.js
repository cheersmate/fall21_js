(function() {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService'];

    function MyInfoController(MenuService) {
        var $ctrl = this;

        $ctrl.myinfo = {
            'first': '',
            'last': '',
            'email': '',
            'phone': '',
            'shortname': ''
        }

        var signupinfo = MenuService.getInfo();

        if (signupinfo == undefined) {
            $ctrl.exists = false;
            $ctrl.failed = true;
            console.log('SignUp undefined')
        } else {
            $ctrl.myinfo = signupinfo;
            MenuService.getMenuItemShort(signupinfo.shortname).then(function(response) {
                $ctrl.myinfo.shortname = response;
            });
            $ctrl.exists = true;
            $ctrl.failed = false;
        }
    }

})();