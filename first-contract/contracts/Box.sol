pragma solidity ^0.8.0;

import "./access-control/Auth.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
  uint256 private _value;
  Auth private _auth;

  // Emitted when the stored value changes.
  event ValueChanged(uint256 value);

  constructor() {
    _auth = new Auth(msg.sender);
  }

  // Stores a new value in the contract.
  function store(uint256 value) public {
    // Require the caller is registered ad an administrator.
    require(_auth.isAdmin(msg.sender), "Unauthorized");

    _value = value;
    emit ValueChanged(value);
  }

  // Reads the last stored value.
  function retrieve() public view returns (uint256) {
    return _value;
  }
}
