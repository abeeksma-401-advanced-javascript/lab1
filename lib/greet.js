'use strict';

let greet = module.exports = {};

let greet = function (name) {
  if(typeof name !== 'string') {return null;}
  return 'Hello, ' + name; 
};

