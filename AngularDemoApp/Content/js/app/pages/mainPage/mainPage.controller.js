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
