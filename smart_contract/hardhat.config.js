// https://eth-goerli.alchemyapi.io/v2/o6AP1FiVvB8v5JivPM-yjeT-PxV3jP-_

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/o6AP1FiVvB8v5JivPM-yjeT-PxV3jP-_',
      accounts: [ 'd4f2cb0b06d47e37a005392672ed6109558a3389df09d66c18af67fb2652f3f4' ]
    }
  }
}