const { ethers, upgrades } = require('hardhat')

const proxyAddress = '0x28D380399840E479DcAc63cD25985D5b2522C40e'
const adminAddress = '0x9A6b4382c072170EFf5536692b99A5d94122A0f6'

async function main() {
  const BoxV4 = await ethers.getContractFactory('BoxV4')
  const upgraded = await upgrades.upgradeProxy(proxyAddress, BoxV4)
  await upgraded.initializeV4(36, 36, adminAddress);

  console.log((await upgraded.area()).toString())
  console.log((await upgraded.perimeter()).toString())
}

main()
