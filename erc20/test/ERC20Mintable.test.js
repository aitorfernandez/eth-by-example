const { expect } = require('chai')

const ERC20Mintable = artifacts.require('ERC20Mintable')

contract('ERC20Mintable', (accounts) => {
  // const [admin] = await ethers.getSigners()
  const [sender, alice, bob, ...addrs] = accounts
  let sc

  beforeEach(async () => {
    sc = await ERC20Mintable.new("AI", "AI")
  })

  it('admin', async () => {
    expect(await sc.isAdmin(sender)).to.equal(true)
  })
})
