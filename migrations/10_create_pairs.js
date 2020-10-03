const EggToken = artifacts.require("EggToken");

const UniswapFactory = artifacts.require("UniSwapV2Factory");
const UniswapRouter = artifacts.require("UniswapV2Router02");
const UniswapV2Pair = artifacts.require("UniswapV2Pair");

const WEXP = artifacts.require("WEXP9"); //"0x1871b7f0b930173be7f7f6abe6e90a0dd83a3c91";

const PEX = "0x4f5ec5a69dbe12c48ca1edc9c52b1e8896aed932";
const LAB = "0x3b4cfcc4532eec161860cb6544f49947544d940d"; //0xa887adb722cf15bc1efe3c6a5d879e0482e8d197 is also LAB but i believe this one is broken

// ============ Main Migration ============

const migration = async (deployer) => {
  await Promise.all([
    deployToken(deployer),
  ]);
};

module.exports = migration;

async function deployToken(deployer) {

  let factory = await UniswapFactory.deployed();

  let eggWEXP = await UniswapV2Pair.at((await factory.createPair(WEXP.address, EggToken.address)).logs[0].args.pair);
  let wexpPEX = await UniswapV2Pair.at((await factory.createPair(WEXP.address, PEX)).logs[0].args.pair);
  let wexpLAB = await UniswapV2Pair.at((await factory.createPair(WEXP.address, LAB)).logs[0].args.pair);

  let pexLab = await UniswapV2Pair.at((await factory.createPair(PEX, LAB)).logs[0].args.pair);

};
