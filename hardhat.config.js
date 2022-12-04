require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  paths: {
    sources: './contracts', // this is defualt
    artifacts: './src/artifacts'
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: "1337"
  },
  goerli: {
    //url: https:goerli-testnet-node.com
    //accounts: private key or [ privateKey, privateKey]
  }
};
