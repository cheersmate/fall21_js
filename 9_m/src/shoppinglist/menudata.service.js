(function() {
    'use strict';

    /*This service should be declared on the data module, not on the MenuApp module.*/
    angular.module('data')
        .service('MenuDataService', MenuDataService);

    /* Assign url constant within the methods; https://davids-restaurant.herokuapp.com */

    MenuDataService.$inject = ['$http'];

    function MenuDataService($http) {
        var service = this;

        // this method should return a promise which is a result of using the 
        // $http service, using the following REST API endpoint: 
        service.getAllCategories = function() {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            }).then(function(response) {
                return response.data;
            });
        };

        // before the call to the server, your code should append whatever categoryShortName
        //value was passed in as an argument into the getItemsForCategory method. full json?category=, or stop at /menu_items
        service.getItemsForCategory = function(short_name) {
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
                params: {
                    category: short_name
                        /* params into the url or separate */
                }
            }).then(function(response) {
                return response.data;
            });
        };
    }

})();