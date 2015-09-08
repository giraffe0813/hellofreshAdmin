/**
 * Created by apple on 2015/3/17.
 */

var vegetableControllers = angular.module('vegetableControllers',[]);

vegetableControllers.controller('vegetableController',['$scope',function($scope){
    $scope.name='vegetable';
}])