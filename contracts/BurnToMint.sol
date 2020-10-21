pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IChicken {
  function burnToMint(address _user, uint256 _amount) external;
}

contract BurnToMint is Ownable {
    using SafeMath for uint256;
    /**
    * @dev Details of each transfer
    * @param contract_ contract address of ER20 token to transfer
    * @param to_ receiving account
    * @param amount_ number of burnList to transfer to_ account
    * @param failed_ if transfer was successful or not
    */
    
    struct Burn {
        address contract_;
        address to_;
        uint amount_;
        bool failed_;
    }

    /**
    * @dev a mapping from transaction ID's to the sender address
    * that initiates them. Owners can create several bTransactions
    */
    mapping(address => uint[]) public bTransactionIndexesToSender;


    /**
    * @dev a list of all transfers successful or unsuccessful
    */
    Burn[] public bTransactions;

    IChicken public chicken;
    address public blackHole;

    /**
    * @dev list of all supported burnList for transfer
    * @param string token symbol
    * @param address contract address of token
    */
    struct sBurnList {
      address addr;
      uint256 divisor;
    }

    mapping(bytes32 => sBurnList) public burnList;

    /**
    * @dev Event to notify if transfer successful or failed
    * after account approval verified
    */
    event BurnSuccessful(address indexed from_, address indexed to_, uint256 amount_);

    event BurnFailed(address indexed from_, address indexed to_, uint256 amount_);

    event TokenAdded(bytes32 symbol, address indexed token, uint256 divisor);

    constructor(address _chicken, address _blackHole) public {
        chicken = IChicken(_chicken);
        blackHole = _blackHole;
    }

    /**
    * @dev add address of token to list of supported burnList using
    * token symbol as identifier in mapping
    */
    function addNewBurnToken(bytes32 symbol_, address address_, uint256 divisor_) public onlyOwner returns (bool) {
        burnList[symbol_].addr = address_;
        burnList[symbol_].divisor = divisor_;

        emit TokenAdded(symbol_, address_, divisor_);

        return true;
    }

    /**
    * @dev remove address of token we no more support
    */
    function removeBurnToken(bytes32 symbol_) public onlyOwner returns (bool) {
        require(burnList[symbol_].divisor != 0);

        delete(burnList[symbol_]);

        return true;
    }

    function getBurnTokenAddress(bytes32 symbol_) public returns (address){
      return burnList[symbol_].addr;
    }

    function burnTokens(bytes32 symbol_, uint256 amount_) public {
        require(burnList[symbol_].divisor != 0);
        require(amount_ > 0);

        address to_ = blackHole;
        address contract_ = burnList[symbol_].addr;
        address from_ = msg.sender;

        IERC20 TOKEN =  IERC20(contract_);

       bTransactions.push(
            Burn({
            contract_:  contract_,
            to_: to_,
            amount_: amount_,
            failed_: true
            })
        );

        uint256 transactionId = bTransactions.length;

        bTransactionIndexesToSender[from_].push(transactionId - 1);


        require(amount_ <= TOKEN.allowance(from_, address(this)), 'Burn: Not enough allowance');
        /*
        if(amount_ > TOKEN.allowance(from_, address(this)))
        {
            emit BurnFailed(from_, to_, amount_);
            revert();
        }
        */


        TOKEN.transferFrom(from_, to_, amount_);

        //bTransactions[transactionId - 1].failed_ = false;

        // MINT SOME TOKENS!
        uint256 mint = amount_.div(burnList[symbol_].divisor);

        chicken.burnToMint(msg.sender, mint);

        emit BurnSuccessful(from_, to_, amount_);
    }

    /**
    * @dev allow contract to receive funds
    */
    //fallback() external public payable {}

    /**
    * @dev withdraw funds from this contract
    * @param beneficiary address to receive ether
    */

    function recoverEther(address payable beneficiary) public payable onlyOwner {
        beneficiary.transfer(address(this).balance);
    }

    function recoverERC20(address tokenAddress, uint256 tokenAmount) public onlyOwner {
        IERC20(tokenAddress).transfer(owner(), tokenAmount);
    }

}
