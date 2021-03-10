/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled/macro';

import Navbar from './components/navbar';
import Listing from './components/listing';
import Cart from './components/cart';
import Footer from './components/footer';

import { useSelector } from 'react-redux';
import { getCart } from './redux/selectors';

const CartButton = styled.button`
  position: sticky;
  width: 80px;
  height: 80px;
  border-style: none;
  border-radius: 40px;
  box-shadow: 0px 0px 50px rgba(0, 255, 0, 0.5);
  background-color: rgba(0, 255, 0, 0.5);
  bottom: 10%;
  left: 90%;
  outline:none;
  color: red;
  font-family: inherit;
  text-shadow: 2px 2px 8px #FF0000;

  :hover {
    box-shadow: 0px 0px 50px rgba(255, 255, 0, 1);
  }
`;

function App() {

  const [toggle, setToggle] = useState(0);
  const cart = useSelector(getCart);

  return (
    <>
      <Cart show={toggle}/>
      <div>
        <Navbar />
        <Listing />
        <Footer />
      <CartButton onClick={() => { setToggle(toggle + 1); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
          <img src="cart.png" alt="cart" />
          {cart.length > 0 ? cart.length : ""}
        </CartButton>
      </div>
    </>
  );
}

export default App;
