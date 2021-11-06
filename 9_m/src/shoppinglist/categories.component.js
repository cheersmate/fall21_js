(function() {
    'use strict';

    /* Create categorieslist component with one way bind on categories */
    angular.module('MenuApp')
        .component('categorieslist', {
            templateUrl: 'src/shoppinglist/templates/categorieslist.component.template.html',
            bindings: {
                categories: '<'
            }
        });


})();