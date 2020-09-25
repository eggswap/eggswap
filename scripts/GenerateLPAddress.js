const { ethers } = require("ethers");

const { bytecode } = require('../build/contracts/UniswapV2Pair.json');
//const { address } = require('../build/contracts/UniswapV2Factory.json');
const factory ='0x5ed62C73Abe16AbCB63eF21fC7720C46958Ff0A5';
const WEXP = '0x1871b7f0b930173be7f7f6abe6e90a0dd83a3c91';
const LAB = '0x3b4cfcc4532eec161860cb6544f49947544d940d';

function getCreate2Address(factory, [tokenA, tokenB], bytecode) {
  const [token0, token1] = tokenA < tokenB ? [tokenA, tokenB] : [tokenB, tokenA]

  const pack = ethers.utils.solidityPack(['address', 'address'], [token0, token1])

  const create2Inputs = [
    '0xff',
    factory,
    ethers.utils.keccak256(pack),
    ethers.utils.keccak256(bytecode)
  ]

  const sanitizedInputs = `0x${create2Inputs.map(i => i.slice(2)).join('')}`

  return ethers.utils.getAddress(`0x${ethers.utils.keccak256(sanitizedInputs).slice(-40)}`)
}

let generate = getCreate2Address(factory, [WEXP, LAB], bytecode);
let generate2 = getCreate2Address(factory, [LAB, WEXP], bytecode);

console.log(`Generated Address 1: ${generate}`);
console.log(`Generated Address 2: ${generate2}`);
