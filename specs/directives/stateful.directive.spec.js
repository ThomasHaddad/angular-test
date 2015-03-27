describe('stateful test', function () {
    var simpleHtml="<button ng-stateful='test-value'></button>",
        element;
    beforeEach(function(){
       angular.mock.module('angular-test');

        angular.mock.inject(function($compile, $rootScope){
            element=$compile(simpleHtml)($rootScope);
        });
    });

    describe("test stateful directive",function(){
        it('Should add or remove a class', function() {
            expect(element.hasClass('test-value')).toBeFalsy();
            element.triggerHandler('click');
            expect(element.hasClass('test-value')).toBeTruthy();
        });
    });
});