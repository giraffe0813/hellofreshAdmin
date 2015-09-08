var app = angular.module("app",['ngRoute','userControllers','appinfoControllers','orderControllers','cookbookControllers','vegetableControllers']);
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/appinfo', {
                templateUrl: 'views/appinfo.html',
                controller: 'loginController'
            }).
            when('/user', {
                templateUrl: 'views/user.html',
                controller: 'userController'
            }).
            when('/order', {
                templateUrl: 'views/order.html',
                controller: 'orderController'
            }).
            when('/cookbook', {
                templateUrl: 'views/cookbook.html',
                controller: 'cookbookController'
            }).
            when('/vegetable', {
                templateUrl: 'views/vegetable.html',
                controller: 'vegetableController'
            }).
            otherwise({
                redirectTo: '/user'
            });
    }])