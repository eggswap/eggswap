//import { INIT_CODE_HASH } from '../src/constants'

const { bytecode } = require('../build/contracts/UniswapV2Pair.json');
const { keccak256 } = require('@ethersproject/solidity');
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`${bytecode}`])

console.log(COMPUTED_INIT_CODE_HASH);
