// @ts-ignore
import Caver from "caver-js";

const BAOBAB_TESTNET_RPC_URL = "wss://api.baobab.klaytn.net:8652";

const rpcURL = BAOBAB_TESTNET_RPC_URL;

const ws = new Caver.providers.WebsocketProvider(
  "wss://api.baobab.klaytn.net:8652/",
  { reconnect: { auto: true } }
);

const caver = new Caver(ws);

/* const caverContract = new Caver(rpcURL).klay.Contract(
  DEPLOYED_ABI,
  DEPLOYED_ADDRESS
); */

export default caver;
//new Caver(new Caver.providers.HttpProvider("https://api.baobab.klaytn.net:8651/"));
