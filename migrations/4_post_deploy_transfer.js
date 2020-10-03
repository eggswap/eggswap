const EggToken = artifacts.require("EggToken");
const Chicken = artifacts.require("Chicken");

// ============ Main Migration ============

const migration = async (deployer) => {
  await Promise.all([
    deployToken(deployer),
  ]);
};

module.exports = migration;

async function deployToken(deployer) {

  let egg = await EggToken.deployed();
  await egg.transferOwnership(Chicken.address);

};
