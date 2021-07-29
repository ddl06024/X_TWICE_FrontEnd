import Login from "../components/Login";
import {connect} from 'react-redux';
import axios from 'axios';
//import Caver from "caver-js";

function mapDispatchToProps(dispatch:any){
  /*  const config = {
        rpcURL: "https://api.baobab.klaytn.net:8651",
      };
    const cav = new Caver(config.rpcURL);
    const App = {
        auth: {
          accessType: "keystore",
          keystore: "",
          password: "",
        },
        start: async function () {
    const walletFromSession = sessionStorage.getItem("walletInstance");
    if (walletFromSession) {
      try {
        cav.klay.accounts.wallet.add(JSON.parse(walletFromSession));
        this.changeUI(JSON.parse(walletFromSession));
      } catch (e) {
        sessionStorage.removeItem("walletInstance");
      }
    }
  },

  handleImport: async function () {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0]);
    fileReader.onload = (event) => {
      try {
        if (!this.checkValidKeystore(event.target.result)) {
          $("#message").text("유효하지 않은 keystore 파일입니다.");
          return;
        }
        this.auth.keystore = event.target.result;
        $("#message").text("keystore 통과. 비밀번호를 입력하세요.");
        document.querySelector("#input-password").focus();
      } catch (event) {
        $("#message").text("유효하지 않은 keystore 파일입니다.");
        return;
      }
    };
  },

  handlePassword: async function () {
    this.auth.password = event.target.value;
  },

  handleLogin: async function () {
    if (this.auth.accessType === "keystore") {
      try {
        const privateKey = cav.klay.accounts.decrypt(
          this.auth.keystore,
          this.auth.password
        ).privateKey;
        this.integrateWallet(privateKey);
      } catch (e) {
        $("#message").text("비밀번호가 일치하지 않습니다.");
      }
    }
  },

  handleLogout: async function () {
    this.removeWallet();
    location.reload();
  },
getWallet: function () {
    if (cav.klay.accounts.wallet.length) {
      return cav.klay.accounts.wallet[0];
    }
  },
  checkValidKeystore: function (keystore) {
    const parsedKeystore = JSON.parse(keystore);
    console.log(parsedKeystore);
    const isValidKeystore =
      parsedKeystore.version &&
      parsedKeystore.id &&
      parsedKeystore.address &&
      parsedKeystore.keyring;

    return isValidKeystore;
  },

  integrateWallet: function (privateKey) {
    const walletInstance = cav.klay.accounts.privateKeyToAccount(privateKey);
    cav.klay.accounts.wallet.add(walletInstance);
    sessionStorage.setItem("walletInstance", JSON.stringify(walletInstance));
    this.changeUI(walletInstance);
  },

  reset: function () {
    this.auth = {
      keystore: "",
      password: "",
    };
  },
   removeWallet: function () {
    cav.klay.accounts.wallet.clear();
    sessionStorage.removeItem("walletInstance");
    this.reset();
  },

    }*/
    return {
        onSubmit:function(pwd:any){
            axios({
                method: "post",
                url: "https://jsonplaceholder.typicode.com/users",
                data:{
                    username: pwd,
                },
            }).then((res)=>{
                console.log(res);
            })
            dispatch({type: 'Login', pwd:pwd});
        }
    }
}
export default connect(null, mapDispatchToProps)(Login);
