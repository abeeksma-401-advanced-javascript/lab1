'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a+b;
};

arithmetic.subtract = function (a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a-b;
};

arithmetic.multiply = function (a, b) {
  if(typeof a !== 'number' || typeof b !== 'number') {return null;}
  return a * b; 
};

arithmetic.divide = function (a, b) {
  if( typeof a !== 'number' || typeof a === 0 || typeof b !== 'number' || typeof b === 0) {return null;}
  return a / b; 
};
