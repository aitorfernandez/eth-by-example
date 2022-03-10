pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";


contract Administered is AccessControl {
  bytes32 public constant GUEST_ROLE = keccak256("GUEST");
  bytes32 public constant BLACK_LIST_ROLE = keccak256("BLACK_LIST_ROLE");

  modifier onlyAdmin() {
    require(isAdmin(msg.sender), "Restricted to admins.");
    _;
  }

  modifier onlyGuest() {
    require(isGuest(msg.sender), "Restricted to guests.");
    _;
  }

  constructor(address root_) public {
    _setupRole(DEFAULT_ADMIN_ROLE, root_);
  }

  function isAdmin(address account_)
    public virtual view returns (bool)
  {
    return hasRole(DEFAULT_ADMIN_ROLE, account_);
  }

  function isGuest(address account_)
    public virtual view returns (bool)
  {
    return hasRole(GUEST_ROLE, account_);
  }

  function addGuest(address account_) public virtual onlyAdmin {
    grantRole(GUEST_ROLE, account_);
  }
}
