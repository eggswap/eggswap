const Chicken = artifacts.require("Chicken");

// ============ Main Migration ============

const migration = async (deployer) => {
  await Promise.all([
    deployToken(deployer),
  ]);
};

module.exports = migration;

async function deployToken(deployer) {

  let chicken = await Chicken.deployed();

  // Add Farm Pools
  await chicken.add('2000', '0xEBEBB7c541640a996805cb0fC8C17f9F66A3E28b', false); // EGGS
  await chicken.add('2000', '0x9f17C654Ca15d2bE76CfDF6cb806A4b8e4678EeD', false); // LAB
  await chicken.add('2000', '0x90390A27DBe65991cED136Ca6F95fd5953C5e1B8', false); // PEX
  await chicken.add('2000', '0x505B2Fe24Aff173291fEAd573E90dFb21c754bFd', false); // T64
  await chicken.add('2000', '0xc150686B8b24f0e08f1d94773d0355427C25ef0e', false); // LOVE

};
