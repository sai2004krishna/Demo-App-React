import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { CartContainer, Item, Clear } from "../styles/StyledComponents";

const Cart =()=> {
  const {cart,dispatch} =useContext(GlobalContext);

  const clearCart=()=> {
    dispatch({type:'CLEAR'});
  };

  let total=0;
  for(let i=0;i<cart.length;i++) {
    total+=cart[i].price;
  }

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((p, i) => (
          <Item key={i}>
            <span>{p.name}</span>
            <span>${p.price}</span>
          </Item>
        ))
      )}
      {cart.length>0 && (
        <>
          <h3>Total:${total}</h3>
          <Clear onClick={clearCart}>Clear Cart</Clear>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
