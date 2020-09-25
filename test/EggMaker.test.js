const EggToken = artifacts.require('EggToken');
const EggMaker = artifacts.require('EggMaker');
const MockERC20 = artifacts.require('MockERC20');
const UniswapV2Pair = artifacts.require('UniswapV2Pair');
const UniswapV2Factory = artifacts.require('UniswapV2Factory');

contract('EggMaker', ([alice, bar, minter]) => {
    beforeEach(async () => {
        this.factory = await UniswapV2Factory.new(alice, { from: alice });
        this.egg = await EggToken.new({ from: alice });
        await this.egg.mint(minter, '100000000', { from: alice });
        // launch tokens
        this.wexp = await MockERC20.new('WETH', 'WETH', '100000000', { from: minter });
        this.token1 = await MockERC20.new('TOKEN1', 'TOKEN', '100000000', { from: minter });
        this.token2 = await MockERC20.new('TOKEN2', 'TOKEN2', '100000000', { from: minter });
        // launch egg maker
        this.maker = await EggMaker.new(this.factory.address, bar, this.egg.address, this.wexp.address);
        // create pools
        this.eggWETH = await UniswapV2Pair.at((await this.factory.createPair(this.wexp.address, this.egg.address)).logs[0].args.pair);
        this.wexpToken1 = await UniswapV2Pair.at((await this.factory.createPair(this.wexp.address, this.token1.address)).logs[0].args.pair);
        this.wexpToken2 = await UniswapV2Pair.at((await this.factory.createPair(this.wexp.address, this.token2.address)).logs[0].args.pair);
        this.token1Token2 = await UniswapV2Pair.at((await this.factory.createPair(this.token1.address, this.token2.address)).logs[0].args.pair);
    });

    it('should make EGGs successfully', async () => {
        await this.factory.setFeeTo(this.maker.address, { from: alice });

        await this.wexp.transfer(this.eggWETH.address, '10000000', { from: minter });
        await this.egg.transfer(this.eggWETH.address, '10000000', { from: minter });
        await this.eggWETH.mint(minter);

        await this.wexp.transfer(this.wexpToken1.address, '10000000', { from: minter });
        await this.token1.transfer(this.wexpToken1.address, '10000000', { from: minter });
        await this.wexpToken1.mint(minter);

        await this.wexp.transfer(this.wexpToken2.address, '10000000', { from: minter });
        await this.token2.transfer(this.wexpToken2.address, '10000000', { from: minter });
        await this.wexpToken2.mint(minter);

        await this.token1.transfer(this.token1Token2.address, '10000000', { from: minter });
        await this.token2.transfer(this.token1Token2.address, '10000000', { from: minter });
        await this.token1Token2.mint(minter);

        // Fake some revenue
        await this.token1.transfer(this.token1Token2.address, '100000', { from: minter });
        await this.token2.transfer(this.token1Token2.address, '100000', { from: minter });
        await this.token1Token2.sync();

        await this.token1.transfer(this.token1Token2.address, '10000000', { from: minter });
        await this.token2.transfer(this.token1Token2.address, '10000000', { from: minter });
        await this.token1Token2.mint(minter);
        // Maker should have the LP now
        assert.equal((await this.token1Token2.balanceOf(this.maker.address)).valueOf(), '16528');
        // After calling convert, bar should have EGG value at ~1/6 of revenue
        await this.maker.convert(this.token1.address, this.token2.address);
        assert.equal((await this.egg.balanceOf(bar)).valueOf(), '32965');
        assert.equal((await this.token1Token2.balanceOf(this.maker.address)).valueOf(), '0');
        // Should also work for EGG-ETH pair
        await this.egg.transfer(this.eggWETH.address, '100000', { from: minter });
        await this.wexp.transfer(this.eggWETH.address, '100000', { from: minter });
        await this.eggWETH.sync();
        await this.egg.transfer(this.eggWETH.address, '10000000', { from: minter });
        await this.wexp.transfer(this.eggWETH.address, '10000000', { from: minter });
        await this.eggWETH.mint(minter);
        assert.equal((await this.eggWETH.balanceOf(this.maker.address)).valueOf(), '16537');
        await this.maker.convert(this.egg.address, this.wexp.address);
        assert.equal((await this.egg.balanceOf(bar)).valueOf(), '66249');
        assert.equal((await this.eggWETH.balanceOf(this.maker.address)).valueOf(), '0');
    });
});
