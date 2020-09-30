//CONSTANTS
let CONSTANTS = {};

CONSTANTS.INIT_CODE_HASH = '0xc0c875d9c0f62295072f21084a19a575ff5ef887aa5ed8ce83ccfc708901071a';

const { bytecode } = artifacts.require('UniswapV2Pair');
const { ethers } = require("ethers");

const COMPUTED_INIT_CODE_HASH = ethers.utils.keccak256(bytecode);

contract('UniswapV2Pair', ([alice, burn, dev, minter]) => {
  it('INIT_CODE_HASH matches computed bytecode hash', () => {
      assert.equal(COMPUTED_INIT_CODE_HASH, CONSTANTS.INIT_CODE_HASH);
  });
});
