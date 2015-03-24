describe('SET FIRST LETTER UPPERCASE', function () {
    var upperCaseFilter;

    beforeEach(function(){
       angular.mock.module('angular-test');

        angular.mock.inject(function($filter){
            upperCaseFilter = $filter('upperCase');
        });
    });

    describe("test upperCaseFilter",function(){
        it('shoud set the letters in the right way', function() {
            expect(upperCaseFilter('thomas')).toEqual('Thomas');
            expect(upperCaseFilter('THOMAS')).toEqual('Thomas');
            expect(upperCaseFilter('thomas haddad')).toEqual('Thomas Haddad');

        });
    });
});