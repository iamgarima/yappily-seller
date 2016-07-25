(function() {
  angular.module('home')
         .directive('chatButton',function(){
            return {
              restrict: 'E',
              templateUrl: 'template/chatButton.html',
            };
         });
})();