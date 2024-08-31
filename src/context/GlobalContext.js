
import React, { createContext, useReducer } from 'react';

const GlobalContext = createContext();

const CartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      return [...state,action.product];
    case 'CLEAR':
      return [];
    case 'REMOVE':
      return state.filter(item => item.id!==action.productId);
    default:
      return state;
  }
};

export const CartProvider = ({children}) => {
  const [cart,dispatch]=useReducer(CartReducer,[]);

  return (
    <GlobalContext.Provider value={{cart,dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
