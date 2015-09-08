/**
 * Created by apple on 2015/3/17.
 */
var cookbookControllers = angular.module('cookbookControllers',[]);

cookbookControllers.controller('cookbookController',['$scope',function($scope){
    $scope.name='cookbook';
}])