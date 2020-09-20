pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";


contract ChickenCoop is ERC20("ChickenCoop", "xEGG"){
    using SafeMath for uint256;
    IERC20 public egg;

    constructor(IERC20 _egg) public {
        egg = _egg;
    }

    // Enter the coop. Pay some EGGs. Earn some shares.
    function enter(uint256 _amount) public {
        uint256 totalEgg = egg.balanceOf(address(this));
        uint256 totalShares = totalSupply();
        if (totalShares == 0 || totalEgg == 0) {
            _mint(msg.sender, _amount);
        } else {
            uint256 what = _amount.mul(totalShares).div(totalEgg);
            _mint(msg.sender, what);
        }
        egg.transferFrom(msg.sender, address(this), _amount);
    }

    // Leave the coop. Claim back your EGGs.
    function leave(uint256 _share) public {
        uint256 totalShares = totalSupply();
        uint256 what = _share.mul(egg.balanceOf(address(this))).div(totalShares);
        _burn(msg.sender, _share);
        egg.transfer(msg.sender, what);
    }
}
