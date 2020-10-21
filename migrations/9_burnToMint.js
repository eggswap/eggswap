const Chicken = artifacts.require("Chicken");

const BurnToMint = artifacts.require("BurnToMint");
const BURN = "0x0000000000000000000000000000000000000000"; // ideally this will be to 0x0 or perhaps charity address or something.

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

  let burn = await BurnToMint.deployed();

  await burn.addNewBurnToken('0x4c41420000000000000000000000000000000000000000000000000000000000', '0x3b4cfcc4532eec161860cb6544f49947544d940d', '1'); // LAB
  await burn.addNewBurnToken('0x5045580000000000000000000000000000000000000000000000000000000000', '0x4f5ec5a69dbe12c48ca1edc9c52b1e8896aed932', '100'); // PEX
};
