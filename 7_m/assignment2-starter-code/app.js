(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var buyController = this;

        buyController.items = ShoppingListCheckOffService.getBuyList();

        buyController.bought = function() { ShoppingListCheckOffService.removeItem(); }

        buyController.checkEmptyBuyList = function() {
            return ShoppingListCheckOffService.checkEmptyBuyList();
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtcontroller = this;

        boughtcontroller.items = ShoppingListCheckOffService.getBoughtList();


        boughtcontroller.checkEmptyBoughtList = function() {
            return ShoppingListCheckOffService.checkEmptyBoughtList();
        };

    }

    function ShoppingListCheckOffService() {
        var shoppingListCheckOffService = this;

        var items_tobuy = [
            { name: "Cookies", quantity: 10, pricePerItem: 1 },
            { name: "Chocolate", quantity: 1, pricePerItem: 2 },
            { name: "Coffee", quantity: 2, pricePerItem: 3 },
            { name: "Brocoli", quantity: 4, pricePerItem: 4 },
            { name: "Spinach", quantity: 5, pricePerItem: 5 }
        ];

        var items_bought = [];

        shoppingListCheckOffService.removeItem = function(index) {
            items_bought.push(items_tobuy.splice(index, 1)[0]);
        }

        shoppingListCheckOffService.getBuyList = function() {
            return items_tobuy;
        };

        shoppingListCheckOffService.getBoughtList = function() {
            return items_bought;
        };

    }



})();