const { expectRevert, time } = require('@openzeppelin/test-helpers');
const EggToken = artifacts.require('EggToken');
const Chicken = artifacts.require('Chicken');
const MockERC20 = artifacts.require('MockERC20');
const BurnToMint = artifacts.require("BurntoMint");

contract('BurnToMint', ([alice, burn, dev, minter]) => {

  let t = web3.utils.asciiToHex('TOKEN');

  beforeEach(async () => {
      this.egg = await EggToken.new({ from: alice });
      this.chicken = await Chicken.new(this.egg.address, dev, '1000', '0', '1000', { from: alice });
      await this.egg.transferOwnership(this.chicken.address, { from: alice });
      this.burnToMint = await BurnToMint.new(this.chicken.address, burn, { from: alice });
      await this.chicken.setBurnToMint(this.burnToMint.address, { from: alice });
      // launch a fake token
      this.token1 = await MockERC20.new('TOKEN1', 'TOKEN', '10000', { from: alice });
      // add token1 to burnlist
      // addNewBurnToken(bytes32 symbol_, address address_, uint256 divisor_)
      await this.burnToMint.addNewBurnToken(t, this.token1.address, '1', {from: alice});
  });

  it('should set correct state variables', async () => {
      // check state variables
      let burnToMintAddress = await this.chicken.burnToMintAddress();
      let t1Address = await this.burnToMint.burnList(t);
      //let t1Address = await this.burnToMint.getBurnTokenAddress(t);
      //console.log(t1Address);

      assert.equal(burnToMintAddress.valueOf(), this.burnToMint.address);
      assert.equal(t1Address.addr.valueOf(), this.token1.address);
  });

  it('should not allow burn if not enough approve', async () => {

      await expectRevert(
          this.burnToMint.burnTokens(t,'100', { from: alice }),
          'Burn: Not enough allowance',
      );
      await this.token1.approve(this.burnToMint.address, '50', { from: alice });
      await expectRevert(
          this.burnToMint.burnTokens(t, '100', { from: alice }),
          'Burn: Not enough allowance',
      );

      assert.equal((await this.token1.balanceOf(alice)).valueOf(), '10000');
      assert.equal((await this.token1.balanceOf(burn)).valueOf(), '0');
  });



  it('should mint eggs after burning tokens', async () => {
      // burn fake token
      // check balances
      await this.token1.approve(this.burnToMint.address, '100', { from: alice });
      await this.burnToMint.burnTokens(t, '100', { from: alice });

      assert.equal((await this.token1.balanceOf(alice)).valueOf(), '9900');
      assert.equal((await this.token1.balanceOf(burn)).valueOf(), '100');
      assert.equal((await this.egg.balanceOf(alice)).valueOf(), '100');
  });

});
