pragma solidity 0.6.12;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract LoveToken is ERC20 {
    constructor(
        uint256 supply
    ) public ERC20('Love', 'LVE') {
        _mint(msg.sender, supply);
    }
}
