const { expect } = require('chai')

const FiatToken = artifacts.require('FiatToken')

const accounts = require('./utils.js').accounts

describe('FiatToken', () => {
  let token

  beforeEach(async () => {
    token = await FiatToken.new(accounts.null, {
      from: accounts.tokenOwner,
    })
  })

  it('supply', async () => {
    expect((await token.getSupply()).toNumber()).to.equal(0)
  })

  it('setMasterMinter', async () => {
    const signers = await ethers.getSigners()

    const newMasterMinter = signers[12].address
    await token.setMasterMinter(newMasterMinter)

    expect(await token.masterMinter()).to.equal(newMasterMinter)
  })
})
