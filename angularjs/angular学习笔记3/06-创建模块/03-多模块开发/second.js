(function () {
    angular.module( 'secondApp', [] )
        .run( function ( $rootScope ) {
            $rootScope.func = function () {
                console.log( $rootScope.txt );
            }
        });
})();