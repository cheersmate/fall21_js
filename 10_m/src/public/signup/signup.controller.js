(function() {
    "use strict"

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService'];

    function SignupController(MenuService) {
        var $ctrl = this;

        $ctrl.myinfo = {
            'first': '',
            'last': '',
            'email': '',
            'phone': '',
            'shortname': ''
        }

        $ctrl.submit = function() {

            MenuService.getMenuItemShort($ctrl.myinfo.shortname).then(function(response) {
                    $ctrl.myinfo.shortname = response;
                    MenuService.setInfo($ctrl.myinfo);
                    $ctrl.saved = true;
                    console.log('SignUp Profile Saved')

                })
                .catch(function(error) {
                    $ctrl.saved = false;
                    console.log('SignUp Profile NOT Saved')

                });
        };

        $ctrl.checkShortItem = function() {
            MenuService.getFavorite($ctrl.myinfo.shortname)
                .then(function(response) {
                    $ctrl.invaliditem = false;
                })
                .catch(function(e) {
                    $ctrl.invaliditem = true;
                });
        }
    }

})();