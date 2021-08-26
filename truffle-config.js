//const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const NETWORK_ID = "1001";
const GASLIMIT = "20000000";
const URL = `https://api.baobab.klaytn.net:8651`;
const PRIVATE_KEY =
  "0x893f5e30f7751613b1692dde0303afac8c332b3261b39b671c3eca9ac610f55c";

module.exports = {
  networks: {
    ganache: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
    },

    klaytn: {
      provider: new HDWalletProvider(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null,
    },
  },
};
