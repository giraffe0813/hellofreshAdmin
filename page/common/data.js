define(['jquery'], function () {
    var baseUrl = 'http://127.0.0.1:3000';
    var _base = {
        makeData : function (url, type, dataType,temData) {
            $.ajax({
                type: type,
                url: baseUrl + url,
                dataType: dataType,
                timeout: 300,
                async: false,
                success: function (data) {
                    temData = data;
                },
                error: function (xhr, type) {
                    temData = false;
                }
            });
            return temData;
        },
        food : function () {
            return this.makeData('/food','GET','json');
        },
        login : function (url) {
            return this.makeData('/login' + url,'post','json');
        },
        token : function (url){
            return this.makeData('/login' + url,'post','json');
        },
        user : function(url){
            return this.makeData('/user' + url,'get','json');
        },
        submit : function(url){
            return this.makeData('/order' + url,'post','json');
        },
        orders : function(url){
            return this.makeData('/order' + url,'get','json');
        },
        register : function(url){
            return this.makeData('/register' + url,'post','json');
        },
        address : function(url){
            return this.makeData('/user' + url,'post','json');
        },
        recharge : function(url){
            return this.makeData('/recharge' + url,'post','json');
        },
        cookbook : function(url){
            console.log("cookbook");
            return this.makeData('/cookbook' + url ,'get','json');
            console.log("url");
        }
    };
    return _base;
});

var dataControllers = angular.module('dataControllers',[]);
dataControllers.controller('dataController',[$scope,])
