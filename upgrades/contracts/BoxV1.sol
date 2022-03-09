pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";


contract BoxV1 is Initializable {
  uint public width;
  uint public height;

  function initialize(uint _width, uint _height)
    public initializer
  {
    width = _width;
    height = _height;
  }

  function area() public view returns(uint) {
    return width * height;
  }
}
