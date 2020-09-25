const { ethers } = require("ethers");

const { bytecode } = require('../build/contracts/UniswapV2Pair.json');

const INIT_CODE_HASH = ethers.utils.keccak256(bytecode);

const permit = ethers.utils.toUtf8Bytes('Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)');

const PERMIT_TYPEHASH = ethers.utils.keccak256(permit)

let hashes = {

}

hashes.INIT_CODE_HASH = INIT_CODE_HASH;
hashes.PERMIT_TYPEHASH = PERMIT_TYPEHASH;

console.log(hashes);
