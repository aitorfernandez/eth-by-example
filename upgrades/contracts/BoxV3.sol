pragma solidity ^0.8.0;

import "./BoxV2.sol";


contract BoxV3 is BoxV2 {
  function setWidth(uint _width) public virtual {
    width = _width;
  }
}
