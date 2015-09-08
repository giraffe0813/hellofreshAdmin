
var userControllers = angular.module('userControllers',['ngDialog']);

userControllers.controller('userController',['$scope','$http','ngDialog',function($scope,$http, ngDialog){
    $scope.name = 'user';
    $scope.user = "";
    $scope.address = "";
    //获取用户信息
    $http.get('http://localhost:3000/users').success(function(data) {
        $scope.user = data;
        console.log($scope.user);
    });
    //点击详细地址按钮时，跳出模式对话框
    $scope.clickToAddress = function (address) {
        $scope.address = address;
        ngDialog.open({ template: 'views/test.html',//模式对话框内容为test.html
            className: 'ngdialog-theme-plain',
            scope:$scope //将scope传给test.html,以便显示地址详细信息
        });
    };
}])


