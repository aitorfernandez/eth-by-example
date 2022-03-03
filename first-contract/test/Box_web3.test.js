const Box = artifacts.require('Box')

describe('Box', function() {
  let accounts

  before(async function() {
    accounts = await web3.eth.getAccounts()
    console.log(accounts)
  })

  it('retrieve returns a value previously stored', async function() {
    const box = await Box.new()
    await box.store(42)
    expect((await box.retrieve()).toString()).to.equal('42')
  })
})
