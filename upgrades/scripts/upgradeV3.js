const { ethers, upgrades } = require('hardhat')

const proxyAddress = '0x28D380399840E479DcAc63cD25985D5b2522C40e'

async function main() {
  const BoxV3 = await ethers.getContractFactory('BoxV3')
  const upgraded = await upgrades.upgradeProxy(proxyAddress, BoxV3)
  console.log((await upgraded.area()).toString())
  console.log((await upgraded.perimeter()).toString())
}

main()
