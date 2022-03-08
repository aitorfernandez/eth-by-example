require('@nomiclabs/hardhat-ethers')
require("@nomiclabs/hardhat-truffle5")
require("@nomiclabs/hardhat-waffle")

const ALCHEMY_API_KEY = "B5GoUSnaDp-KMXAujWesZ-QJCWrTuqVR"

const RINKEBY_PRIVATE_KEY = "bad8662c46ee5765160d6579f5132c175f2f208f57479c11777dc6d53687cb37"

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`],
    }
  }
}
