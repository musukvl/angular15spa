(function () {
    "use strict";

    angular.module("app").config(config);

    config.$inject = ["$routeProvider", "$locationProvider"];

    function config($routeProvider, $locationProvider) {
        
        $routeProvider 
            .when("/", { templateUrl: "/Content/js/app/pages/mainPage/mainPage.html", controller: "MainPageCtrl", controllerAs: "vm" })
            .otherwise({ redirectTo: "/" });
            
    }
}());
