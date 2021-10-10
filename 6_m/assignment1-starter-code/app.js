(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.lunchList = '';
        $scope.customStyle = {};
        $scope.customStyle2 = {};


        $scope.calculateResponse = function() {
            var lunchArray = $scope.lunchList.split(',').map(s => s.trim()).filter(e => e);

            if (lunchArray.length > 3) {
                $scope.message = "Too Much";
                $scope.customStyle.style = { "color": "green" };
                $scope.customStyle.style2 = { "border": "1px solid green" };


            } else
            if (lunchArray.length <= 3 && lunchArray.length > 0) {
                $scope.message = "Enjoy";
                $scope.customStyle.style = { "color": "green" };
                $scope.customStyle.style2 = { "border": "1px solid green" };


            } else {
                $scope.message = "Please Enter Data";
                $scope.customStyle.style = { "color": "red" };
                $scope.customStyle.style2 = { "border": "1px solid red" };

            }
        }
    }
})();