import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { Card, PImage, Button } from '../styles/StyledComponents';

const PCard = ({ product }) => {
  const {cart,dispatch }=useContext(GlobalContext);
  const inCart=cart.some(item=>item.id===product.id);

  const addToCart =()=> {
    if (!inCart){
      dispatch({type:'ADD',product });
    }
  };

  const removeFromCart = () => {
    dispatch({type:'REMOVE',productId:product.id});
  };

  const impath = require(`../images/${product.id}.png`);
  return (
    <Card>
      <h2>{product.name}</h2>
      <PImage src={impath} alt={product.name} />
      <p>${product.price.toFixed(2)}</p>
      <Button inCart={inCart} onClick={inCart?removeFromCart:addToCart}>
        {inCart?'Remove':'Add to Cart'}
      </Button>
    </Card>
  );
};

export default PCard;
