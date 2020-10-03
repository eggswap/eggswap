const UniswapFactory = artifacts.require("UniSwapV2Factory");
const UniswapRouter = artifacts.require("UniswapV2Router02");

const WEXP = artifacts.require("WEXP9"); //"0x1871b7f0b930173be7f7f6abe6e90a0dd83a3c91";

// ============ Main Migration ============

const migration = async (deployer) => {
  await Promise.all([
    deployToken(deployer),
  ]);
};

module.exports = migration;

async function deployToken(deployer) {

  await deployer.deploy(UniswapRouter, UniswapFactory.address, WEXP.address);

};
