import pTContract from "../configs/pTContract";
import tsContract from "../configs/tsContract";
import cav from "../configs/klaytn";
import { setCookie, getCookie } from "../configs/cookie";
import jwt_decode from "jwt-decode";
// import Caver from "caver-js";
/* import { readFileSync } from "fs";

const DEPLOYED_ADDRESS = JSON.stringify(
  readFileSync("../../deployedAddress", "utf8").replace(/\n|\r/g, "")
); */

export function useKlaytn() {
  function isTokenAlreadyCreated(pictureId) {
    return pTContract.methods.isTokenAlreadyCreated(pictureId).call();
  }
  function createPrivateKey() {
    return cav.klay.accounts.create();
  }
  function pkToAddress(pk) {
    return cav.klay.accounts.privateKeyToAccount(pk);
  }
  function handleLogin(pk) {
    const walletInstance = cav.klay.accounts.privateKeyToAccount(pk);
    cav.klay.accounts.wallet.clear();
    cav.klay.accounts.wallet.add(walletInstance);

    setCookie("walletInstance", walletInstance.toString(), {
      path: "/",
     
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
  function getWallet(pk) {
    //  if (cav.klay.accounts.wallet.length) {
    //   return cav.klay.accounts.wallet[0];
    // } else {

    cav.klay.accounts.wallet.clear();
    const walletInstance = cav.klay.accounts.privateKeyToAccount(pk);
    console.log(walletInstance);

    cav.klay.accounts.wallet.add(walletInstance);
    const feePayer = cav.klay.accounts.wallet.add(
      "0x893f5e30f7751613b1692dde0303afac8c332b3261b39b671c3eca9ac610f55c"
    );
    return cav.klay.accounts.wallet[0];
    // }
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
    pTContract.methods.uploadPhoto(photo, title, location, description).send({
      from: getWallet().address,
      gas: "200000000",
    });
  }

  function mintNFT(
    title,
    author,
    dateCreated,
    hash,
    photo,
    category,
    description
  ) {
    const decoded = jwt_decode(getCookie("myToken").toString());
    const sender = getWallet(decoded.user_privatekey); //로그인한 계정
    //대납 계정

    cav.klay.accounts
      .signTransaction(
        {
          type: "FEE_DELEGATED_SMART_CONTRACT_EXECUTION",
          from: sender.address,
          to: DEPLOYED_ADDRESS,
          data: pTContract.methods
            .mintNFT(
              title,
              author,
              dateCreated,
              hash,
              photo,
              category,
              description
            )
            .encodeABI(),
          gas: "200000000",
          value: cav.utils.toPeb("0", "KLAY"),
        },
        sender.privateKey
      )
      .then(function (data) {
        if (!data) {
          alert("블록체인 등록 실패");
          return;
        }
        const { rawTransaction: senderRawTransaction } = data;

        cav.klay
          .sendTransaction({
            senderRawTransaction: senderRawTransaction,
            feePayer: "0x4541e43e9ceaaea64abf92449b0a876038365a14",
          })
          .then(function (receipt) {
            console.log(receipt);
            if (receipt.transactionHash) {
              //alert(receipt.transactionHash);
            } else {
              alert("블록체인 등록 실패2");
              return;
            }
          })
          .catch((error) => {
            console.log("useKlaytn : error2 : " + error);
            alert("useKlaytn : error2 : " + error);
            return;
          });
      })
      .catch((error) => {
        console.log("useKlaytn : error1 : " + error);
        alert("useKlaytn : error1 : " + error);
        return;
      });
  }

  function displayMyTokensAndSale(walletInstance) {
    getBalanceOf(walletInstance.address).then(function (balance) {
      if (balance == 0) {
        console.log("현재 보유한 토큰이 없습니다.");
      } else {
        for (var i = 0; i < balance; i++) {
          (() => {
            getTokenOfOwnerByIndex(walletInstance.address, i).then(function (
              tokenId
            ) {
              getTokenUri(tokenId).then(function (tokenUri) {
                getNFT(tokenId).then(function (nft) {
                  console.log(tokenId, tokenUri, nft);
                });
              });
            });
          })();
        }
      }
    });
  }
  async function getBalance() {
    if (getCookie("myToken")) {
      const decoded = jwt_decode(getCookie("myToken").toString());
      const sender = getWallet(decoded.user_privatekey);
      const address = sender.address;
      if (!address) return;
      const balance = await cav.klay.getBalance(address);
      return await cav.utils.fromWei(balance, "ether");
    }
  }
  async function sellToken(tokenId, amount) {
    console.log(tokenId, amount);
    if (amount <= 0) return;
    try {
      const decoded = jwt_decode(getCookie("myToken").toString());
      const sender = getWallet(decoded.user_privatekey); //로그인한 계정

      // using the promise
      const { rawTransaction: senderRawTransaction } =
        await cav.klay.accounts.signTransaction(
          {
            type: "FEE_DELEGATED_SMART_CONTRACT_EXECUTION",
            from: sender.address,
            to: DEPLOYED_ADDRESS_TOKENSALES,
            data: tsContract.methods
              .setForSale(tokenId, cav.utils.toPeb(amount, "KLAY"))
              .encodeABI(),
            gas: "500000",
            value: cav.utils.toPeb("0", "KLAY"),
          },
          sender.privateKey
        );
      cav.klay
        .sendTransaction({
          senderRawTransaction: senderRawTransaction,
          feePayer: sender.address,
        })
        .then(function (receipt) {
          if (receipt.transactionHash) {
            console.log(receipt.transactionHash);
          }
        });
    } catch (err) {
      console.error(err);
    }
  }
  function approve() {
    const decoded = jwt_decode(getCookie("myToken").toString());
    const walletInstance = getWallet(decoded.user_privatekey);
    pTContract.methods
      .setApprovalForAll(DEPLOYED_ADDRESS_TOKENSALES, true)
      .send({
        from: walletInstance.address,
        gas: "250000",
      })
      .then(function (receipt) {
        if (receipt.transactionHash) {
          console.log(receipt.transactionHash);
        }
      });
  }
  async function onCancelsellToken(tokenId) {
    const decoded = jwt_decode(getCookie("myToken").toString());
    const walletInstance = getWallet(decoded.user_privatekey);
    const tokensOnSale = [];
    tokensOnSale.push(tokenId);
    if (tokensOnSale.length > 0) {
      const receipt = await tsContract.methods
        .removeTokenOnSale(tokensOnSale)
        .send({
          from: walletInstance.address,
          gas: "250000",
        });
      if (receipt.transactionHash) console.log(receipt.transactionHash);
    }
  }
  function buyToken(tokenId) {
    console.log(tokenId);
    console.log(typeof tokenId);
    try {
      const decoded = jwt_decode(getCookie("myToken").toString());
      const sender = getWallet(decoded.user_privatekey);
      if (getCookie("myToken") == null) {
        alert("로그인 정보가 없습니다");
        console.log("로그인 정보가 없습니다.");
        return;
      }
      //로그인한 계정
      //대납 계정
      // using the promise
      console.log(sender.address);
      getTokenPrice(tokenId).then(function (price) {
        console.log(price);
        if (price <= 0) {
          console.log("price가 0입니다.");
          return;
        }
        cav.klay.accounts
          .signTransaction(
            {
              type: "FEE_DELEGATED_SMART_CONTRACT_EXECUTION",
              from: sender.address,
              to: DEPLOYED_ADDRESS_TOKENSALES,
              data: tsContract.methods.purchaseToken(tokenId).encodeABI(),
              gas: "500000",
              value: price,
            },
            sender.privateKey
          )
          .then(function (data) {
            const { rawTransaction: senderRawTransaction } = data;
            console.log(senderRawTransaction);
            cav.klay
              .sendTransaction({
                senderRawTransaction: senderRawTransaction,
                feePayer: sender.address,
              })
              .then(function (receipt) {
                if (receipt.transactionHash) {
                  console.log(receipt.transactionHash);
                }
              });
            //.catch((error) => console.log("error2 : " + error));
          });
        //.catch((error) => console.log("error1 : " + error));
      });
      //.catch((error) => console.log("error3 : " + error));
    } catch (err) {
      alert(err);
      console.error(err);
    }
  }
  async function getTokenPrice(tokenId) {
    return await tsContract.methods.tokenPrice(tokenId).call();
  }
  async function getBalanceOf(address) {
    console.log(pTContract);
    return await pTContract.methods.balanceOf(address).call();
  }
  async function getTokenOfOwnerByIndex(address, index) {
    return await pTContract.methods.tokenOfOwnerByIndex(address, index).call();
  }
  async function getTotalSupply() {
    return await pTContract.methods.totalSupply().call();
  }
  function getTokenUri(tokenId) {
    return pTContract.methods.tokenURI(tokenId).call();
  }
  function getNFT(tokenId) {
    return pTContract.methods.getNFT(tokenId).call();
  }

  return {
    getBalance,
    approve,
    getTotalSupply,
    onCancelsellToken,
    buyToken,
    sellToken,
    handleLogin,
    checkTokenExists,
    mintNFT,
    uploadNFT,
    displayMyTokensAndSale,
    handleLogout,
    createPrivateKey,
    pkToAddress,
    getBalanceOf,
    getTokenOfOwnerByIndex,
  };
}
