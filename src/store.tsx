import { createStore, compose } from "redux";
import { useHistory } from "react-router-dom";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(function (state: any, action: any) {
  if (state === undefined) {
    return {
      nft: {
        userId: "default",
        count: 11,
        contents: [
          {
            id: 0,
            onSale: true,
            title: "0쨰 게시물",
            desc: "0째게시물입니다!!!!!!",
            price: 3,
            category: "one",
          },
          {
            id: 1,
            onSale: true,
            title: "1쨰 게시물",
            desc: "1째게시물입니다!!!!!!",
            price: 3,
            category: "two",
          },
          {
            id: 2,
            onSale: true,
            title: "2쨰 게시물",
            desc: "2째게시물입니다!!!!!!",
            price: 3,
            category: "three",
          },
          {
            id: 3,
            onSale: true,
            title: "3쨰 게시물",
            desc: "3번째게시물입니다!!!!!!",
            price: 3,
            category: "four",
          },
          {
            id: 4,
            onSale: true,
            title: "4번쨰 게시물",
            desc: "4번째게시물입니다!!!!!!",
            price: 3,
            category: "five",
          },
          {
            id: 5,
            onSale: true,
            title: "5번쨰 게시물",
            desc: "5번째게시물입니다!!!!!!",
            price: 3,
            category: "six",
          },
          {
            id: 6,
            onSale: true,
            title: "6첫번쨰 게시물",
            desc: "6번째게시물입니다!!!!!!",
            price: 3,
            category: "seven",
          },
          {
            id: 7,
            onSale: true,
            title: "7번쨰 게시물",
            desc: "7번째게시물입니다!!!!!!",
            price: 3,
            category: "one",
          },
          {
            id: 8,
            onSale: true,
            title: "8번쨰 게시물",
            desc: "8번째게시물입니다!!!!!!",
            price: 3,
            category: "two",
          },
          {
            id: 9,
            onSale: true,
            title: "9번쨰 게시물",
            desc: "9번째게시물입니다!!!!!!",
            price: 3,
            category: "three",
          },
          {
            id: 10,
            onSale: true,
            title: "10번쨰 게시물",
            desc: "10번째게시물입니다!!!!!!",
            price: 3,
            category: "four",
          },
        ],
      },
    };
  }
  if (action.type === "CREATE") {
    return { ...state, nft: action.nft };
  }
  if (action.type === "ChangeToOnSaleMode") {
    return { ...state };
  }
  if (action.type === "Login") {
    return { ...state, pwd: action.pwd };
  }
  if (action.type === "Auth") {
    const history = useHistory();
    return history.push("/login");
  }
  return state;
}, composeEnhancers());
//export default store;
