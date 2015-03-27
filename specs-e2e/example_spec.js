describe('angularjs password testing', function() {

  it('should greet the named user', function() {
    browser.get('http://localhost:63342/assert-javascript/angular-test/index.html');
    element(by.model('password')).sendKeys('mlksqjdfmlkqjsfmjsqdmfjqsdfklmjsqd');

    var greeting = element(by.binding('strength'));

    expect(greeting.getText()).toContain('strong');
  });

  describe("test stateful directive",function(){
    it('Should add or remove a class', function() {
      var el  = element(by.css('.button button'));
      expect(el.getAttribute('class')).toBeFalsy();
      el.click();
      expect(el.getAttribute('class')).toBeTruthy();
    });
  });
});
