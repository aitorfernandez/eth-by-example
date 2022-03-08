pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Administered.sol";


contract ERC20Mintable is ERC20, Administered {
  constructor(string memory name_, string memory symbol_)
    public ERC20(name_, symbol_) Administered(msg.sender)
  {}

  function mint(address account, uint256 amount)
    public virtual onlyAdmin returns (bool)
  {
    _mint(account, amount);
    return true;
  }
}
