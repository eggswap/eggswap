const { expectRevert, time } = require('@openzeppelin/test-helpers');
const EggToken = artifacts.require('EggToken');
const Chicken = artifacts.require('Chicken');
const MockERC20 = artifacts.require('MockERC20');
const UniswapV2Pair = artifacts.require('UniswapV2Pair');
const UniswapV2Factory = artifacts.require('UniswapV2Factory');
const Migrator = artifacts.require('Migrator');

contract('Migrator', ([alice, bob, dev, minter]) => {
    beforeEach(async () => {
        this.factory1 = await UniswapV2Factory.new(alice, { from: alice });
        this.factory2 = await UniswapV2Factory.new(alice, { from: alice });
        this.egg = await EggToken.new({ from: alice });
        this.wexp = await MockERC20.new('WETH', 'WETH', '100000000', { from: minter });
        this.token = await MockERC20.new('TOKEN', 'TOKEN', '100000000', { from: minter });
        this.lp1 = await UniswapV2Pair.at((await this.factory1.createPair(this.wexp.address, this.token.address)).logs[0].args.pair);
        this.lp2 = await UniswapV2Pair.at((await this.factory2.createPair(this.wexp.address, this.token.address)).logs[0].args.pair);
        this.chicken = await Chicken.new(this.egg.address, dev, '1000', '0', '100000', { from: alice });
        this.migrator = await Migrator.new(this.chicken.address, this.factory1.address, this.factory2.address, '0');
        await this.egg.transferOwnership(this.chicken.address, { from: alice });
        await this.chicken.add('100', this.lp1.address, true, { from: alice });
    });

    it('should do the migration successfully', async () => {
        await this.token.transfer(this.lp1.address, '10000000', { from: minter });
        await this.wexp.transfer(this.lp1.address, '500000', { from: minter });
        await this.lp1.mint(minter);
        assert.equal((await this.lp1.balanceOf(minter)).valueOf(), '2235067');
        // Add some fake revenue
        await this.token.transfer(this.lp1.address, '100000', { from: minter });
        await this.wexp.transfer(this.lp1.address, '5000', { from: minter });
        await this.lp1.sync();
        await this.lp1.approve(this.chicken.address, '100000000000', { from: minter });
        await this.chicken.deposit('0', '2000000', { from: minter });
        assert.equal((await this.lp1.balanceOf(this.chicken.address)).valueOf(), '2000000');
        await expectRevert(this.chicken.migrate(0), 'migrate: no migrator');
        await this.chicken.setMigrator(this.migrator.address, { from: alice });
        await expectRevert(this.chicken.migrate(0), 'migrate: bad');
        await this.factory2.setMigrator(this.migrator.address, { from: alice });
        await this.chicken.migrate(0);
        assert.equal((await this.lp1.balanceOf(this.chicken.address)).valueOf(), '0');
        assert.equal((await this.lp2.balanceOf(this.chicken.address)).valueOf(), '2000000');
        await this.chicken.withdraw('0', '2000000', { from: minter });
        await this.lp2.transfer(this.lp2.address, '2000000', { from: minter });
        await this.lp2.burn(bob);
        assert.equal((await this.token.balanceOf(bob)).valueOf(), '9033718');
        assert.equal((await this.wexp.balanceOf(bob)).valueOf(), '451685');
    });

    it('should allow first minting from public only after migrator is gone', async () => {
        await this.factory2.setMigrator(this.migrator.address, { from: alice });
        this.tokenx = await MockERC20.new('TOKENX', 'TOKENX', '100000000', { from: minter });
        this.lpx = await UniswapV2Pair.at((await this.factory2.createPair(this.wexp.address, this.tokenx.address)).logs[0].args.pair);
        await this.wexp.transfer(this.lpx.address, '10000000', { from: minter });
        await this.tokenx.transfer(this.lpx.address, '500000', { from: minter });
        await expectRevert(this.lpx.mint(minter), 'Must not have migrator');
        await this.factory2.setMigrator('0x0000000000000000000000000000000000000000', { from: alice });
        await this.lpx.mint(minter);
    });
});
