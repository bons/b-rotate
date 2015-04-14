'use strict';

var MODULE_NAME = 'bons.bRotate';

var angular = require('angular');

function isNumeric(n)
{
  return !isNaN(parseFloat(n)) && isFinite(n);
}

angular .module(MODULE_NAME, [])
        .directive('bRotate',[
          function()
          {
            return {
              restrict: 'A',

              link: function(scope, elem, attr)
              {
                var value = '';

                if(isNumeric(attr.x))
                {
                  value = 'rotateX('+attr.x+'deg) ';
                }

                if(isNumeric(attr.y))
                {
                  value += 'rotateY('+attr.y+'deg) ';
                }

                if(isNumeric(attr.z))
                {
                  value += 'rotateZ('+attr.z+'deg) ';
                }

                if(!value)
                {
                  return;
                }

                elem
                  .css('-webkit-transform', value)
                  .css('-moz-transform', value)
                  .css('-o-transform', value)
                  .css('transform', value);
              }
            };
          }
        ]);

module.exports = MODULE_NAME;
