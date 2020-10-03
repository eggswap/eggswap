const Chicken = artifacts.require("Chicken");

const BurnToMint = artifacts.require("BurnToMint");

const BURN = "0x6a620a92Ec2D11a70428b45a795909bd28AedA45"; // ideally this will be to 0x0 or perhaps charity address or something.

// ============ Main Migration ============

const migration = async (deployer) => {
  await Promise.all([
    deployToken(deployer),
  ]);
};

module.exports = migration;

async function deployToken(deployer) {

  await deployer.deploy(BurnToMint, Chicken.address, BURN);

  let chicken = await Chicken.deployed();
  await chicken.setBurnToMint(BurnToMint.address);

  // set burn tokens

};
