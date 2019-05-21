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

// arithmetic.multiply = function (a, b) {
//   if(typeof a !== 'number' || typeof b !== 'number') {return null;}
//   return a * b; 
// };

arithmetic.multiply = function(number){
  let total = 1;
  for(let i = 0; i < number.length; i++){
    total *= number[i];
  }
};

//arithmetic.divide = function (a, b) {
//  if( typeof a !== 'number' || typeof a === 0 || typeof b !== 'number' || typeof b === 0) {return null;}
//  return a / b; 
//};

arithmetic.divide = function(number){
  let total = 0;
  for(let i = 0; i < number.length; i++){
    total /= number[i]; 
  }
  return total;
};
