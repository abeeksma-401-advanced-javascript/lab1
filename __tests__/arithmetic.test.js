'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('multiply a and b', () => {
  it('returns stuff need to figure out what all im testing', () => {
    const res = arithmetic.multiply(1, 3);
    expect(res).toBe(3);
  });
});

describe('divide a and b', () => {
  it('divided a by b', () => {
    const res = arithmetic.divide(3,3); 
    expect(res).toBe(1);
  });
});

