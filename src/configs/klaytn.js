// @ts-ignore
import Caver from "caver-js";

const BAOBAB_TESTNET_RPC_URL = "https://api.baobab.klaytn.net:8651/";

const rpcURL = BAOBAB_TESTNET_RPC_URL;

const caver = new Caver(rpcURL);

caver.klay.setProvider(
  new Caver.providers.HttpProvider("https://api.baobab.klaytn.net:8651/")
);

/* const caverContract = new Caver(rpcURL).klay.Contract(
  DEPLOYED_ABI,
  DEPLOYED_ADDRESS
); */

export default caver;
//new Caver(new Caver.providers.HttpProvider("https://api.baobab.klaytn.net:8651/"));
