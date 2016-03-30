(function () {
    "use strict";

    angular.module("app", [
        "ngRoute",

        "mainPage"
    ]);
}());

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
    "use strict";

    angular.module("mainPage", [
         
    ]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJhcHAuY29uZmlnLmpzIiwicGFnZXMvbWFpblBhZ2UvbWFpblBhZ2UubW9kdWxlLmpzIiwicGFnZXMvbWFpblBhZ2UvbWFpblBhZ2UuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYXBwXCIsIFtcclxuICAgICAgICBcIm5nUm91dGVcIixcclxuXHJcbiAgICAgICAgXCJtYWluUGFnZVwiXHJcbiAgICBdKTtcclxufSgpKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbmZpZyhjb25maWcpO1xyXG5cclxuICAgIGNvbmZpZy4kaW5qZWN0ID0gW1wiJHJvdXRlUHJvdmlkZXJcIiwgXCIkbG9jYXRpb25Qcm92aWRlclwiXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb25maWcoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIgXHJcbiAgICAgICAgICAgIC53aGVuKFwiL1wiLCB7IHRlbXBsYXRlVXJsOiBcIi9Db250ZW50L2pzL2FwcC9wYWdlcy9tYWluUGFnZS9tYWluUGFnZS5odG1sXCIsIGNvbnRyb2xsZXI6IFwiTWFpblBhZ2VDdHJsXCIsIGNvbnRyb2xsZXJBczogXCJ2bVwiIH0pXHJcbiAgICAgICAgICAgIC5vdGhlcndpc2UoeyByZWRpcmVjdFRvOiBcIi9cIiB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcbn0oKSk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZShcIm1haW5QYWdlXCIsIFtcclxuICAgICAgICAgXHJcbiAgICBdKTtcclxufSgpKTtcclxuICAgIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZSgnbWFpblBhZ2UnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdNYWluUGFnZUN0cmwnLCBNYWluUGFnZUN0cmwpO1xyXG5cclxuICAgIE1haW5QYWdlQ3RybC4kaW5qZWN0ID0gWyckbG9jYXRpb24nLCAnJHNjb3BlJ107XHJcblxyXG4gICAgZnVuY3Rpb24gTWFpblBhZ2VDdHJsKCRsb2NhdGlvbiwgJHNjb3BlKSB7XHJcbiAgICAgICAgLyoganNoaW50IHZhbGlkdGhpczp0cnVlICovXHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICB2bS50aXRsZSA9ICdNYWluUGFnZUN0cmwhJztcclxuICAgICAgICAgXHJcbiAgICAgICAgYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGUoKSB7ICBcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
