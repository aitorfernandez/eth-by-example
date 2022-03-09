const { expect } = require('chai')

const FiatToken = artifacts.require('FiatToken')

const nullAccount = "0x0000000000000000000000000000000000000000"

contract('FiatToken', (accounts) => {
  let token

  beforeEach(async () => {
    token = await FiatToken.new(nullAccount)
  })

  it('supply', async () => {
    expect((await token.getSupply()).toNumber()).to.equal(0)
  })
})
