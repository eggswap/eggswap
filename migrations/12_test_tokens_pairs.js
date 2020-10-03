const EggToken = artifacts.require("EggToken");

const UniswapFactory = artifacts.require("UniSwapV2Factory");
const UniswapRouter = artifacts.require("UniswapV2Router02");
const UniswapV2Pair = artifacts.require("UniswapV2Pair");

const WEXP = artifacts.require("WEXP9"); //"0x1871b7f0b930173be7f7f6abe6e90a0dd83a3c91";
const LOVE = artifacts.require("LoveToken");

const ERC644b = artifacts.require("Balances");
const ERC644 = artifacts.require("ERC644");

// ============ Main Migration ============

const migration = async (deployer) => {
  await Promise.all([
    deployToken(deployer),
  ]);
};

module.exports = migration;

async function deployToken(deployer) {

  let erc64b = await ERC644b.deployed();
  await erc64b.setModule(ERC644.address, 'true');

  let factory = await UniswapFactory.deployed();

  let wexpLOVE = await UniswapV2Pair.at((await factory.createPair(LOVE.address, WEXP.address)).logs[0].args.pair);
  let wexpERC644 = await UniswapV2Pair.at((await factory.createPair(ERC644.address, WEXP.address)).logs[0].args.pair);

};
