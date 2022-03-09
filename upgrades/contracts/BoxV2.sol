pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";


contract BoxV2 is Initializable {
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

  function perimeter() public view returns(uint) {
    return width * 2 + height * 2;
  }
}
