(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.lunchList = '';
        $scope.redBox = '';
        $scope.redText = '';
        $scope.greenText = '';
        $scope.greenBox = '';

        /* $scope.displayNumeric = function() {
           var given_response = calculateResponse($scope.lunchArray);
            $scope.message = given_response;;} */

        $scope.calculateResponse = function() {
            var lunchArray = $scope.lunchList.split(',').map(s => s.trim()).filter(e => e);

            if (lunchArray.length > 3) {
                $scope.message = "Too Much";
                $scope.redBox = '';
                $scope.redText = '';

            } else
            if (lunchArray.length <= 3 && lunchArray.length > 0) {
                $scope.message = "Enjoy";
                $scope.greenText = '';
                $scope.greenBox = '';

            } else {
                $scope.message = "Please Enter Data";
            }

        }
    }
})();