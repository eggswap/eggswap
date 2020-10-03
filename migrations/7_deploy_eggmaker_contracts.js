const EggToken = artifacts.require("EggToken");
const ChickenCoop = artifacts.require("ChickenCoop");
const UniswapFactory = artifacts.require("UniSwapV2Factory");
const WEXP = artifacts.require("WEXP9"); //"0x1871b7f0b930173be7f7f6abe6e90a0dd83a3c91";
const EggMaker = artifacts.require("EggMaker");

// ============ Main Migration ============

const migration = async (deployer) => {
  await Promise.all([
    deployToken(deployer),
  ]);
};

module.exports = migration;

async function deployToken(deployer) {

  await deployer.deploy(EggMaker, UniswapFactory.address, ChickenCoop.address, EggToken.address, WEXP.address);

  let factory = await UniswapFactory.deployed();

  await factory.setFeeTo(EggMaker.address);

};
