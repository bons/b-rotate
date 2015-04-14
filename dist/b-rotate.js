/* b-rotate - v0.1.0 - 2015-04-13
* https://github.com/bons/b-rotate
* Copyright (c) 2015 Bons; Licensed MIT */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"angular":"angular"}]},{},[1]);
