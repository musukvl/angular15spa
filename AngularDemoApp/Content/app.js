(function () {
    "use strict";

    angular.module("app", [
        "ngRoute",

        "mainPage"
    ]);
}());

(function () {
    "use strict";

    angular.module("mainPage", [
         
    ]);
}());
   
angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("/Content/js/app/app/pages/mainPage/mainPage.html","<div>\r\n    {{vm.title}}\r\n</div>");}]);
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

(function () {
    'use strict';

    angular
        .module('mainPage')
        .controller('MainPageCtrl', MainPageCtrl);

    MainPageCtrl.$inject = ['$location', '$scope'];

    function MainPageCtrl($location, $scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'MainPageCtrl!';
         
        activate();

        function activate() {  
             console.log('activate');
        }
    }

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJwYWdlcy9tYWluUGFnZS9tYWluUGFnZS5tb2R1bGUuanMiLCJ0ZW1wbGF0ZXMuanMiLCJhcHAuY29uZmlnLmpzIiwicGFnZXMvbWFpblBhZ2UvbWFpblBhZ2UuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJhcHBcIiwgW1xyXG4gICAgICAgIFwibmdSb3V0ZVwiLFxyXG5cclxuICAgICAgICBcIm1haW5QYWdlXCJcclxuICAgIF0pO1xyXG59KCkpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJtYWluUGFnZVwiLCBbXHJcbiAgICAgICAgIFxyXG4gICAgXSk7XHJcbn0oKSk7XHJcbiAgICIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcIi9Db250ZW50L2pzL2FwcC9hcHAvcGFnZXMvbWFpblBhZ2UvbWFpblBhZ2UuaHRtbFwiLFwiPGRpdj5cXHJcXG4gICAge3t2bS50aXRsZX19XFxyXFxuPC9kaXY+XCIpO31dKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29uZmlnKGNvbmZpZyk7XHJcblxyXG4gICAgY29uZmlnLiRpbmplY3QgPSBbXCIkcm91dGVQcm92aWRlclwiLCBcIiRsb2NhdGlvblByb3ZpZGVyXCJdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbmZpZygkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcclxuICAgICAgICBcclxuICAgICAgICAkcm91dGVQcm92aWRlciBcclxuICAgICAgICAgICAgLndoZW4oXCIvXCIsIHsgdGVtcGxhdGVVcmw6IFwiL0NvbnRlbnQvanMvYXBwL3BhZ2VzL21haW5QYWdlL21haW5QYWdlLmh0bWxcIiwgY29udHJvbGxlcjogXCJNYWluUGFnZUN0cmxcIiwgY29udHJvbGxlckFzOiBcInZtXCIgfSlcclxuICAgICAgICAgICAgLm90aGVyd2lzZSh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgIH1cclxufSgpKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnbWFpblBhZ2UnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdNYWluUGFnZUN0cmwnLCBNYWluUGFnZUN0cmwpO1xyXG5cclxuICAgIE1haW5QYWdlQ3RybC4kaW5qZWN0ID0gWyckbG9jYXRpb24nLCAnJHNjb3BlJ107XHJcblxyXG4gICAgZnVuY3Rpb24gTWFpblBhZ2VDdHJsKCRsb2NhdGlvbiwgJHNjb3BlKSB7XHJcbiAgICAgICAgLyoganNoaW50IHZhbGlkdGhpczp0cnVlICovXHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICB2bS50aXRsZSA9ICdNYWluUGFnZUN0cmwhJztcclxuICAgICAgICAgXHJcbiAgICAgICAgYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7ICBcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
