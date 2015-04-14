'use strict';

require('angular');
require('angular-mocks');
var app = require('../lib/b-rotate');

describe('Test Suite: bRotate', function()
{
  var scope,
      $compile;

  beforeEach(angular.mock.module('bons.bRotate'));

  beforeEach(angular.mock.inject(['$rootScope','$compile',
      function ($rootScope, _$compile)
      {
        $compile = _$compile;
        scope = $rootScope.$new();
      }
    ])
  );

  it('should be defined', function()
  {
    expect(app).toBeDefined();
  });

  it('should be awsome', function()
  {
    var body  = document.querySelector("body");
    body.innerHTML = '<div b-rotate x="50" y="60" z="90"></div>';
    $compile(body)(scope);


    //TODO add tester
  });

});
