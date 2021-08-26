//const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const NETWORK_ID = "1001";
const GASLIMIT = "20000000";
const URL = `https://api.baobab.klaytn.net:8651`;
const PRIVATE_KEY =
  "0x085aae883a661f84e8ec9953949828e157a9829202625f44be3982bd5e347bac";

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
