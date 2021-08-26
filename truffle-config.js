//const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const NETWORK_ID = "1001";
const GASLIMIT = "20000000";
const URL = `https://api.baobab.klaytn.net:8651`;
const PRIVATE_KEY =
  "0x64496fa5d2e0f86eabf4b9d72a0326c0b932009ff7db66075909aacd49a29fa9";

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
