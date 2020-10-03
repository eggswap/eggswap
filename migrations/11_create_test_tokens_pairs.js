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

  await deployer.deploy(LOVE, '1000000');

  await deployer.deploy(ERC644b, '1000');
  await deployer.deploy(ERC644, ERC644b.address, 'Test64', 'T64');

};
