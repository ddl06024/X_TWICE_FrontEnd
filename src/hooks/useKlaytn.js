import pTContract from "../configs/pTContract";
import cav from "../configs/klaytn";
import Caver from "caver-js";
import { setCookie, getCookie } from "../configs/cookie";
// import Caver from "caver-js";
/* import { readFileSync } from "fs";

const DEPLOYED_ADDRESS = JSON.stringify(
  readFileSync("../../deployedAddress", "utf8").replace(/\n|\r/g, "")
); */

export function useKlaytn() {
  function isTokenAlreadyCreated(pictureId) {
    return pTContract.methods.isTokenAlreadyCreated(pictureId).call();
  }
  function handleLogin(pk) {
    const walletInstance = cav.klay.accounts.privateKeyToAccount(pk);
    cav.klay.accounts.wallet.add(walletInstance);

    setCookie("walletInstance", walletInstance, {
      path: "/",
      secure: true,
      sameSite: "none",
    });
    return walletInstance;
  }
  function handleLogout() {
    cav.klay.accounts.wallet.clear();
  }
  function checkTokenExists(pictureId) {
    var result = isTokenAlreadyCreated(pictureId);

    if (result) {
      return true; // 이미 토큰화된 썸네일입니다.
    } else {
      return false; //토큰화 가능한 썸네일 입니다.
    }
  }
  function getWallet() {
    if (cav.klay.accounts.wallet.length) {
      return cav.klay.accounts.wallet[0];
    }
  }
  const setFeed = (feed) => ({
    type: SET_FEED,
    payload: { feed },
  });

  const updateFeed = (tokenId) => (dispatch, getState) => {
    KlaystagramContract.methods
      .getPhoto(tokenId)
      .call()
      .then((newPhoto) => {
        const {
          photos: { feed },
        } = getState();
        const newFeed = [feedParser(newPhoto), ...feed];
        setFeed(newFeed);
      });
  };
  function uploadNFT(photo, title, location, description) {
    console.log(getWallet().address);
    console.log(pTContract.methods);
    pTContract.methods.uploadPhoto(photo, title, location, description).send({
      from: getWallet().address,
      gas: "200000000",
    });
    /*.once("transactionHash", (txHash) => {
        console.log(txHash);
      })
      .once("receipt", (receipt) => {
        ui.showToast({
          status: receipt.status ? "success" : "fail",
          message: `Received receipt! It means your transaction is
          in klaytn block (#${receipt.blockNumber}) (uploadPhoto)`,
          link: receipt.transactionHash,
        });
        console.log(receipt);
        const tokenId = receipt.events.PhotoUploaded.returnValues[0];
        updateFeed(tokenId);
      })
      .once("error", (error) => {
        ui.showToast({
          status: "error",
          message: error.toString(),
        });
        console.log(error);
      });*/
  }

  function mintNFT(pictureId, author, dateCreated, hash) {
    const sender = getWallet(); //로그인한 계정
    console.log("sender.address :  " + sender.address);
    const feePayer = cav.klay.accounts.wallet.add(
      "0x893f5e30f7751613b1692dde0303afac8c332b3261b39b671c3eca9ac610f55c"
    ); //대납 계정

    console.log(cav.klay.accounts);
    cav.klay.accounts
      .signTransaction(
        {
          type: "FEE_DELEGATED_SMART_CONTRACT_EXECUTION",
          from: sender.address,
          to: DEPLOYED_ADDRESS,
          data: pTContract.methods
            .mintNFT(pictureId, author, dateCreated, hash)
            .encodeABI(),
          gas: "500000",
          value: cav.utils.toPeb("0", "KLAY"),
        },
        sender.privateKey
      )
      .then(function (data) {
        const { rawTransaction: senderRawTransaction } = data;
        console.log("senderRawTransaction : " + senderRawTransaction);
        cav.klay
          .sendTransaction({
            senderRawTransaction: senderRawTransaction,
            feePayer: feePayer.address,
          })
          .then(function (receipt) {
            alert(receipt);
            if (receipt.transactionHash) {
              //alert(receipt.transactionHash);
            }
          })
          .catch((error) => console.log("error2 : " + error));
      })
      .catch((error) => console.log("error1 : " + error));
    /*
    const { rawTransaction: senderRawTransaction } =
      cav.klay.accounts.signTransaction(
        {
          type: "FEE_DELEGATED_SMART_CONTRACT_EXECUTION",
          from: sender.address,
          to: DEPLOYED_ADDRESS,
          data: pTContract.methods
            .mintNFT(pictureId, author, dateCreated, hash)
            .encodeABI(),
          gas: "500000",
          value: cav.utils.toPeb("0", "KLAY"),
        },
        sender.privateKey
      );*/
    /*
    cav.klay
      .sendTransaction({
        senderRawTransaction: senderRawTransaction,
        feePayer: feePayer.address,
      })
      .then(function (receipt) {
        alert(receipt);
        if (receipt.transactionHash) {
          //alert(receipt.transactionHash);
        }
      });*/
    console.log("3");
  }

  function displayMyTokensAndSale(walletInstance) {
    var balance = parseInt(getBalanceOf(walletInstance.address));

    if (balance == 0) {
      console.log("현재 보유한 토큰이 없습니다.");
    } else {
      for (var i = 0; i < balance; i++) {
        (() => {
          var tokenId = getTokenOfOwnerByIndex(walletInstance.address, i);
          var tokenUri = getTokenUri(tokenId);
          var nft = getNFT(tokenId);
          console.log(tokenId, tokenUri, nft);
        })();
      }
    }
  }
  function getBalanceOf(address) {
    return pTContract.methods.balanceOf(address).call();
  }
  function getTokenOfOwnerByIndex(address, index) {
    return pTContract.methods.tokenOfOwnerByIndex(address, index).call();
  }
  function getTokenUri(tokenId) {
    return pTContract.methods.tokenURI(tokenId).call();
  }
  function getNFT(tokenId) {
    return pTContract.methods.getNFT(tokenId).call();
  }

  return {
    handleLogin,
    checkTokenExists,
    mintNFT,
    uploadNFT,
    displayMyTokensAndSale,
    handleLogout,
  };
}
