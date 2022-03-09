pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract FiatToken is ERC20 {
  uint256 internal _totalSupply = 0;
  address public masterMinter;

  mapping(address => bool) internal _minters;

  modifier onlyMasterMinter() {
    require(msg.sender == masterMinter, "[FiatToken] caller is not the masterMinter");
    _;
  }

  modifier onlyMinters() {
    require(_minters[msg.sender], "[FiatToken] Caller is not a minter");
    _;
  }

  constructor(address _masterMinter) ERC20("AIT", "AIT") {
    masterMinter = _masterMinter;
  }

  function mint(uint256 _amount)
    external onlyMinters
  {
    require(_amount > 0, "[FiatToken] mint amount not greater than 0");
    _totalSupply = _totalSupply + _amount;
  }

  function getSupply()
    external view returns (uint256)
  {
    return _totalSupply;
  }

  function addMinter(address _minter)
    external onlyMasterMinter
  {
    _minters[_minter] = true;
  }
}
