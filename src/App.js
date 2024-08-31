import React, {useState} from 'react';
import {CartProvider} from './context/GlobalContext';
import {AppContainer, Navbar, ProductGrid, CartButton } from './styles/StyledComponents';
import PCard from './components/PCard';
import Cart from './components/Cart';
import { FaShoppingCart } from 'react-icons/fa';

import styled from 'styled-components';

const products = [
  {id:1,name:'Sneakers',price:29.99 },
  {id:2,name:'Watch',price:19.99 },
  { id: 3,name:'Hoodie',price:39.99 },
  { id: 4, name: 'Headphones', price: 49.99 },
];


const App = () => {
  const [showCart,setShowCart] = useState(false);

  return (
    <CartProvider>
      <Navbar>
        <div>
          <FaShoppingCart size={26} style={{ marginRight: '10px' }} />
          <span style={{fontFamily:'fantasy'}}>Demo App</span>
        </div>
      </Navbar>
      <AppContainer>
        <ProductGrid>
          {products.map((product) => (
            <PCard key={product.id} product={product} />
          ))}
        </ProductGrid>
        <CartButton onClick={() => setShowCart(!showCart)}>
          {showCart ? 'Hide Cart' : 'Show Cart'}
        </CartButton>
        {showCart && <Cart />}
      </AppContainer>
    </CartProvider>
  );
};

export default App;
