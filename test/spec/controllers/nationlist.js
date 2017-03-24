'use strict';

describe('Controller: NationlistCtrl', function () {

  // load the controller's module
  beforeEach(module('proAngularApp'));

  var NationlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NationlistCtrl = $controller('NationlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NationlistCtrl.awesomeThings.length).toBe(3);
  });
});
