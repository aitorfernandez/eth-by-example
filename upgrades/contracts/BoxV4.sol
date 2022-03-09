pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./BoxV3.sol";


contract BoxV4 is BoxV3, AccessControl {
  uint8 internal _initializedVersion;

  modifier onlyAdmin() {
    require(isAdmin(msg.sender), "Restricted to admins.");
    _;
  }

  function initializeV4(uint _width, uint _height, address _admin) external {
    require(_initializedVersion == 0, "BoxV4 is already initialized");

    width = _width;
    height = _height;

    _setupRole(DEFAULT_ADMIN_ROLE, _admin);

    _initializedVersion = 1;
  }

  function setHeight(uint _height)
    public virtual onlyAdmin
  {
    height = _height;
  }

  function isAdmin(address _address)
    public virtual view returns (bool)
  {
    return hasRole(DEFAULT_ADMIN_ROLE, _address);
  }
}
