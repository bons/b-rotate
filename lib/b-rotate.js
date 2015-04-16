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
              transclude: true,
              link: function(scope, elem, attr, ctrl, trans)
              {
                var value = '';
                var reset = '';

                var options = {
                  duration : attr.duration || 1,
                  delay : attr.delay || 0,
                  timingFunction : attr.timingFunction || 'linear'
                };

                if(isNumeric(attr.x))
                {
                  value = 'rotateX('+attr.x+'deg) ';
                  reset = 'rotateX(0deg) ';
                }

                if(isNumeric(attr.y))
                {
                  value += 'rotateY('+attr.y+'deg) ';
                  reset += 'rotateY(0deg) ';
                }

                if(isNumeric(attr.z))
                {
                  value += 'rotateZ('+attr.z+'deg) ';
                  reset += 'rotateZ(0deg) ';
                }

                if(!value)
                {
                  return;
                }

                var transition = 'transform ' + options.duration + 's ' + options.timingFunction + ' ' + options.delay;

                elem
                  .css('-webkit-transition', transition)
                  .css('-moz-transition', transition)
                  .css('-o-transition', transition)
                  .css('transition', transition);

                scope.isRotated = false;

                scope.rotate = function()
                {
                  if(!scope.isRotated)
                  {
                    elem
                      .css('-webkit-transform', value)
                      .css('-moz-transform', value)
                      .css('-o-transform', value)
                      .css('transform', value);

                    scope.isRotated = true;
                  }
                  else
                  {
                    elem
                      .css('-webkit-transform', reset)
                      .css('-moz-transform', reset)
                      .css('-o-transform', reset)
                      .css('transform', reset);

                    scope.isRotated = false;
                  }
                };

                // manually transclusion appending this scope
                trans(scope, function(clone)
                {
                  elem.append(clone);
                });
              }
            };
          }
        ]);

module.exports = MODULE_NAME;
