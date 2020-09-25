const { bytecode } = artifacts.require('UniswapV2Pair');
const { keccak256 } = require('@ethersproject/solidity');

const INIT_CODE_HASH = '0xd3870190fa535265a223fa6b139c61092bc00cb5199ff5771b7dd7ad5d043772';

const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`${bytecode}`])

contract('UniswapV2Pair', ([alice, burn, dev, minter]) => {
  it('INIT_CODE_HASH matches computed bytecode hash', () => {
      assert.equal(COMPUTED_INIT_CODE_HASH, INIT_CODE_HASH);
  })
});
