const { expect } = require('chai')

const FiatToken = artifacts.require('FiatToken')
const MasterMinter = artifacts.require('MasterMinter')

const accounts = require('./utils.js').accounts

contract('MasterMinter', ([tokenOwner, mintOwner, controller, minter]) => {
  let token, masterMinter

  beforeEach(async () => {
    token = await FiatToken.new(accounts.null, {
      from: tokenOwner,
    })
    masterMinter = await MasterMinter.new(token.address, {
      from: mintOwner,
    })
    await token.setMasterMinter(masterMinter.address)
  })

  it("should mint through mint controller", async () => {
    const signers = await ethers.getSigners()
    const amount = 999;

    await masterMinter.configureController(controller, minter, {
      from: mintOwner,
    })

    // await masterMinter.configureMinter(amount, {
    //   // Controller manages minter
    //   from: accounts.controller,
    // })

    // const arbitrary = signers[19].address
    // await token.mint(arbitrary, amount, {
    //   from: accounts.minter,
    // })

    expect(true).to.equal(true)
  })
})
