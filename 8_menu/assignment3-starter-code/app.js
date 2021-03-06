(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    /* Create Service to Iterate and Push to Menu if lowercase description matches */
    function MenuSearchService($http, ApiBasePath) {
        var menuService = this;
        menuService.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath)
            }).then(function(response) {
                var foundItems = [];
                var menu_items = response.data.menu_items;
                for (var index = 0; index < menu_items.length; index++) {
                    if ((searchTerm.length > 0) && (menu_items[index].description.includes(searchTerm.toLowerCase()))) {
                        foundItems.push(menu_items[index]);
                    }
                }
                return foundItems;
            });
        };
    }

    /* Directive with one way binding on scope and on-remove */
    function FoundItemsDirective() {
        var ddo = {
            templateUrl: "foundItems.html",
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'narrowCtrl',
            bindToController: true
        };
        return ddo;
    }

    NarrowItDownController.$inject = ["MenuSearchService"]

    /* Create Controller for Narrow It Down Button with two methods: 
    getMatchedMenu Items to find matching terms
    removeItem to splice from index
     */

    function NarrowItDownController(MenuSearchService) {
        var narrowCtrl = this;
        narrowCtrl.searchTerm = "";
        narrowCtrl.items = [];

        narrowCtrl.getMatchedMenuItems = function(searchTerm) {
            var promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm);
            promise.then(function(response) {
                if (response && response.length > 0) {
                    narrowCtrl.items = response;
                } else {
                    narrowCtrl.items = [];
                }
            })
        };
        narrowCtrl.removeItem = function(index) {
            narrowCtrl.items.splice(index, 1);
        };
    }

})();