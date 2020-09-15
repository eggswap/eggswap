const EggToken = artifacts.require("EggToken");
const Chicken = artifacts.require("Chicken");
const ChickenCoop = artifacts.require("ChickenCoop");

const UniswapFactory = artifacts.require("UniSwapV2Factory");
const UniswapRouter = artifacts.require("UniswapV2Router02");

const WEXP = "0x1871b7f0b930173be7f7f6abe6e90a0dd83a3c91";

const EggMaker = artifacts.require("EggMaker");

// ============ Main Migration ============

const migration = async (deployer) => {
  await Promise.all([
    deployToken(deployer),
  ]);
};

module.exports = migration;

async function deployToken(deployer) {
  //await deployer.deploy(EggToken);

  //await deployer.deploy(Chicken, EggToken.address);

  // launch uniswap
  //await deployer.deploy(UniswapFactory);
  //await deployer.deploy(UniswapRouter, UniswapFactory.address, WEXP);

  // launch chicken coop and egg EggMaker
  //await deployer.deploy(ChickenCoop, EggToken.address);

  //constructor(IUniswapV2Factory _factory, address _coop, address _egg, address _wexp)
  await deployer.deploy(EggMaker, UniswapFactory.address, ChickenCoop.address, EggToken.address, WEXP);
};
