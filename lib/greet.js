'use strict';

let greet = module.exports = {};

const greet = function (name) {
  if(typeof name !== 'string') {return null;}
  return 'Hello, ' + name; 
};