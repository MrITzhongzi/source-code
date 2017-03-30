(function () {
    angular.module( 'mainApp' )
        .controller( 'controller1', [ '$scope', function ( $scope ) {
            $scope.click = function () {
                console.log( 'controller1: ' + $scope.txt );
            };
        }] )
})();