const UniswapFactory = artifacts.require("UniSwapV2Factory");

const DEV = "0x6a620a92Ec2D11a70428b45a795909bd28AedA45";

// ============ Main Migration ============

const migration = async (deployer) => {
  await Promise.all([
    deployToken(deployer),
  ]);
};

module.exports = migration;

async function deployToken(deployer) {

  await deployer.deploy(UniswapFactory);

};
