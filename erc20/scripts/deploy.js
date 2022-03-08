// npx hardhat run scripts/deploy.js --network <network-name>
// npx hardhat run scripts/deploy.js --network rinkeby

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log("Deploying contracts with the account:", deployer.address)
  console.log("Account balance:", (await deployer.getBalance()).toString())

  const Token = await ethers.getContractFactory('ERC20Mintable')
  const token = await Token.deploy("AI", "AI")

  console.log("Token address:", token.address)
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
