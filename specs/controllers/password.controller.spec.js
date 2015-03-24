describe('In order to check the strength of my password as a visitor i need to see the message strength of the password', function () {
    var passwordController;
    var $scope;

    beforeEach(function(){
       angular.mock.module('angular-test');

        angular.mock.inject(function($controller,$rootScope){
           $scope=$rootScope.$new();
            passwordController = $controller('passwordController',{
                $scope:$scope
            });
        });
    });

    describe("test grade method",function(){
        it('sets the strength to "weak" if the password is 12345', function() {
            // given
            $scope.password = "12345";
            // and
            $scope.grade();
            // then
            expect($scope.strength).toEqual("weak");
        });
        it('sets the strength to "strong" if the password is 12345678900', function() {
            // given
            $scope.password = "12345678900";
            // and
            $scope.grade();
            // then
            expect($scope.strength).toEqual("strong");
        });
    });
});