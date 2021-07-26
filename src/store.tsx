import {createStore, compose} from 'redux';
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(function(state:any, action:any){
    if(state === undefined){
        return {nft:{
            userId:'default',
            count: 1,
            contents:[
            {id: 0, onSale:true, title: "첫번쨰 게시물", desc:"첫번째게시물입니다!!!!!!", price:3}
        ]
        }}
    }
    if(action.type === 'CREATE'){
        return {...state, nft: action.nft}
    }
    if(action.type=== 'ChangeToOnSaleMode'){
        return {...state}
    }
    return state;
}, composeEnhancers());