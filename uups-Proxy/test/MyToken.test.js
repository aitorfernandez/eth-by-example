const { ethers, upgrades } = require('hardhat')

describe('MyToken', function () {
  it('deploys', async function () {
    const MyTokenV1 = await ethers.getContractFactory('MyTokenV1')
    // First time
    await upgrades.deployProxy(MyTokenV1, { kind: 'uups' })

    // Once we have a new version of the contract code and we want to upgrade a proxy, we can use upgrades.upgradeProxy. It's no longer necessary to specify kind: 'uups' since it is now inferred from the proxy address.
    // await upgrades.upgradeProxy(proxyAddress, MyTokenV2)
  })
})
