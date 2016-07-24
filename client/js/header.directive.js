(function() {
  angular
    .module('home')
    .directive('header', function(){
      return {
        restrict: 'E',
        templateUrl: 'template/header.html',
        scope: {
          logo: '=',
          headerImage: '='
        }
      };
    });
})();