const { expectRevert, time } = require('@openzeppelin/test-helpers');

const ERC644 = artifacts.require('ERC644');
const Balances = artifacts.require('Balances');

contract('ERC644', ([alice, burn, dev, minter]) => {

  beforeEach(async () => {
      this.balances = await Balances.new('10000000', { from: alice });
      this.token = await ERC644.new(this.balances.address, 'test', 'tst', { from: alice });
      await this.balances.setModule(this.token.address, 'true');
  });

  it('has a name', async function () {
    expect(await this.token.name()).to.equal(name);
  });

  it('has a symbol', async function () {
    expect(await this.token.symbol()).to.equal(symbol);
  });

  it('has 18 decimals', async function () {
    expect(await this.token.decimals()).to.be.bignumber.equal('18');
  });

  it('should set module true', async () => {
      // check state variables
      let isSet = await this.balances.getModule(this.token.address);

      assert.equal(isSet.valueOf(), true);
      assert.equal(await this.token.balanceOf(alice).valueOf(), '10000000000000000000000000');
  });

  it('should let you setApprove', async () => {
      // check state variables
      await this.token.approve(dev, '10000', {from: alice});
      let allowance = await this.token.allowance(alice, dev);
      assert.equal(allowance.valueOf(), '10000');
  });

});
