var expect = require("chai").expect;
var randomTest = require('../src/randomCode.js');

describe('random test', () => {
  it('tests the only function in randomCode', () => {
    let firstTest = randomTest(2, 2);
    let secondTest = randomTest(2, 1);
    expect(firstTest).to.equal(true);
    expect(secondTest).to.equal(false);
  });

})