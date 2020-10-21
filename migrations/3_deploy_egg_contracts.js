const EggToken = artifacts.require("EggToken");
const Chicken = artifacts.require("Chicken");
const ChickenCoop = artifacts.require("ChickenCoop");

//const DEV = "0x6a620a92Ec2D11a70428b45a795909bd28AedA45";
const DEV = "0x8D6E88103aAd2Cfa54f9516504C0c17606aC5d66";


// ============ Main Migration ============

const migration = async (deployer) => {
  await Promise.all([
    deployToken(deployer),
  ]);
};

module.exports = migration;

async function deployToken(deployer) {
  await deployer.deploy(EggToken);

  await deployer.deploy(Chicken, EggToken.address, DEV, "100000000000000000000", "4010000", "4200000");

  await deployer.deploy(ChickenCoop, EggToken.address);

};
