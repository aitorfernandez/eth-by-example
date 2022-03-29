# eth-by-example

Initial contact with ETH and more 🎉

## Commands

```sh
// hardhat
yarn add -D hardhat

// setup project
npx hardhat

// dependencies
yarn add -D @nomiclabs/hardhat-web3 @nomiclabs/hardhat-truffle5 @nomiclabs/hardhat-ethers ethers

// compile
npx hardhat compile

// run node
npx hardhat node

// run console
npx hardhat console --network localhost

// run scripts
npx hardhat run --network localhost scripts/deploy.js
```

## Test environment

```sh
// OpenZeppelin
yarn add -D @openzeppelin/test-environment

// test suite
yarn add -D chai mocha

// run tests
npx hardhat test
```

## Web3 & Truffle

```sh
yarn @nomiclabs/hardhat-truffle5 @nomiclabs/hardhat-web3 web3
```

## verify

```sh
npx hardhat verify --network rinkeby IMPLEMENTATION_ADDRESS
```

## Console

```sh
npx hardhat console --network localhost
```

## Network

```sh
npx hardhat run --network localhost scripts/deploy.js
npx hardhat run --network rinkeby scripts/deploy.js
```
