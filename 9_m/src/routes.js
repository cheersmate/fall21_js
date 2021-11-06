(function() {
    'use strict';

    angular.module('MenuApp')
        .config(Routes);

    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Routes($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/shoppinglist/templates/home.template.html'
            })

        /*Assigns State of the Items Controller with a Resolve to retrieve All Categories within the Menu */

        .state('categorieslist', {
            url: '/categories',
            templateUrl: 'src/shoppinglist/templates/categorieslist.template.html',
            controller: 'CategoriesController as categoriesCtrl',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();

                }]
            }
        })

        /*Assigns State of the Items Controller with a Resolve to retrieve All Items within the provided Category */
        .state('items', {
            url: '/items/{category}',
            templateUrl: 'src/shoppinglist/templates/items.template.html',
            controller: 'ItemsController as itemsCtrl',
            resolve: {
                items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                    return MenuDataService.getItemsForCategory($stateParams.category);
                }]
            }
        });


    } /* close Routes Config */

})();