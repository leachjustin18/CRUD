var cruddly = angular.module('cruddly', ['ui.router']);

cruddly.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/create/');

        $stateProvider
                //  PAGE AND MULTIPLE NAMED VIEWS =================================
                .state('create', {
                    url: 'create',
                    templateUrl: '../app/features/create/create.html',
                    controller: function ($scope) {

                    }
                })
                .state('read', {
                    url: 'read',
                    templateUrl: '../app/features/read/read.html',
                    controller: 'ReadCtrl'
                })
                .state('update', {
                    url: 'update/:id',
                    templateUrl: '../app/features/update/update.html',
                    controller: 'UpdateCtrl'
                })
                .state('delete', {
                    url: 'delete/:id',
                    templateUrl: '../app/features/delete/delete.html',
                    controller: 'DeleteCtrl'
                });

    }]);