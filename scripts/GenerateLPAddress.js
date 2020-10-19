const { ethers } = require("ethers");

const { bytecode } = require('../build/contracts/UniswapV2Pair.json');
//const { address } = require('../build/contracts/UniswapV2Factory.json');
const factory ='0xaf69b94F4A1BBb09aD54DAaFca4629D915BD84E5';
const INIT_HASH = '0xc0c875d9c0f62295072f21084a19a575ff5ef887aa5ed8ce83ccfc708901071a';

const LAB = {name: 'LAB', addr: '0x3b4cfcc4532eec161860cb6544f49947544d940d'};
const WEXP = {name: 'WEXP', addr: '0x331631B4bb93b9B8962faE15860BD538a389395A'}; // WEXP
const LOVE = {name: 'LOVE', addr: '0x9D2761A714b5b2EfA325a8a3eee21BE32AACeB4A'};
const EGG = {name: 'EGG', addr: '0x05E58e93b35203fdF710cB176E015be3122612eC'};
const T64 = {name: 'T64', addr: '0x72332c512bf2dA5A7Cd11752b380F7d8fcBba847'};
const PEX = {name: 'PEX', addr: '0x4f5ec5a69dbe12c48ca1edc9c52b1e8896aed932'};

let tokens = [LAB, LOVE, EGG, T64, PEX];

function getCreate2Address(factory, [tokenA, tokenB], bytecode) {
  const [token0, token1] = tokenA < tokenB ? [tokenA, tokenB] : [tokenB, tokenA]

  const pack = ethers.utils.solidityPack(['address', 'address'], [token0, token1])

  const create2Inputs = [
    '0xff',
    factory,
    ethers.utils.keccak256(pack),
    //ethers.utils.keccak256(bytecode)
    INIT_HASH
  ]

  const sanitizedInputs = `0x${create2Inputs.map(i => i.slice(2)).join('')}`

  return ethers.utils.getAddress(`0x${ethers.utils.keccak256(sanitizedInputs).slice(-40)}`)
}
/*
let labwexp = getCreate2Address(factory, [LAB, WEXP], bytecode);
let lovewexp = getCreate2Address(factory, [LOVE, WEXP], bytecode);
let eggwexp = getCreate2Address(factory, [EGG, WEXP], bytecode);

console.log(`Generated Address 1: ${generate}`);
console.log(`Generated Address 2: ${generate2}`);
*/

for (i = 0; i < tokens.length; i++) {
  let LP = getCreate2Address(factory, [WEXP.addr, tokens[i].addr], bytecode);
  console.log(`Token: ${tokens[i].name} LP: ${LP} TKN: ${tokens[i].addr}`);
}
