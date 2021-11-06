(function() {

    /* Create items component with one way bind on items */

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/shoppinglist/templates/items.component.template.html',
            bindings: {
                items: '<'
            }
        });
})();