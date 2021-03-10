import styled from '@emotion/styled/macro';
import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';

import { useDispatch } from 'react-redux';
import { checkOut, removeFromCart, backToListing } from '../redux/actions';

import { useSelector } from 'react-redux';
import { getCart } from '../redux/selectors';

const MyCartDiv = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 400%;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${props=> props.show ? 'block' : 'none' };
`;

const CartDiv = styled.div`
  position: relative;
  top: 2%;
  left: 20%;
  width: 60%;
  height: 20%;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  box-shadow: 5px 5px 50px rgba(125, 0, 0, 0.5);
`;

const MiniCardContainer = styled.div`
  position: relative;
  float: left;
  width: 60%;
  height: 95%;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 4%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const MiniCard = styled.div`
  display: inline-block;
  margin: 20px;
  margin-bottom: 5px;
  padding: 10px;
  padding-left: 20px;
  width: 80%;
  font-size: 12px;
  background:rgba(255,255,255, 0.3);
  box-shadow: 2px 2px 4px #000000;
  border-radius: 5px;

  img {
    float: left;
    width: 200px;
    height: 150px;
    box-shadow: 2px 2px 4px #000000;
    border-radius: 5px;
  }

  .info {
    float: left;
    width: 60%;
    margin-left: 10px;
  }

  button {
    float: right;
    text-decoration: underline;
    color: blue;
    outline: none;
    border: none;
    background-color: inherit;

    :hover {
      cursor: pointer;
    }
  }
`;

const CheckoutContainer = styled.div`
  position: relative;
  float:left;
  width: 30%;
  height: 90%;
  margin-top: 2%;
  margin-right: 2%;
  border-left: solid 2px silver;
`;

const Checkout = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 80%;

  button {
    font-size: 24px;
    width: 130px;
    margin-top: 20px;
    margin-left: 20px;
    padding: 5px;
    box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.5);
  }
`;

function Cart (props) {
  const dispatch = useDispatch();

  const [ isShow, setIsShow ] = useState(false);

  const cart = useSelector(getCart);
  console.log(cart);

  useEffect(() => {
    if (props.show !== 0)
      setIsShow(true);
  }, [props.show])

  return (
    <MyCartDiv show={isShow}>
      <CartDiv>
        <MiniCardContainer>
          { cart.length > 0 ?
            cart.map(item => (
              <MiniCard key={uuid()}>
                <img src={item.photoUrl} alt="candy"/>
                <div className="info">
                  <p>Name: {item.name}</p>
                  <p>Price: {item.price}$ per unit</p>
                  <p>Amount: {item.amount}</p>
                  <p>Sub Total: {Math.round(item.amount * item.price * 100)/100}$</p>
                  <button onClick={() => {
                    const removeFromCartAction = removeFromCart(item.id);
                    dispatch(removeFromCartAction);
                    const backToListingAction = backToListing(item.id, item.amount);
                    dispatch(backToListingAction);
                  }}>
                    Remove
                  </button>
                </div>
              </MiniCard>
            )) :
            <div>Cart Empty</div>
          }
        </MiniCardContainer>
        <CheckoutContainer>
          <Checkout>
            Total: { Math.round(
                cart
                .map(item => item.price * item.amount)
                .reduce((a, b) => a + b, 0)
                * 100) / 100 }$
            <br/>
            <button disabled={cart.length > 0 ? false : true} onClick={
              ()=> {
                const checkOutAction = checkOut();
                dispatch(checkOutAction);
                setIsShow(false);
                alert("Checkout Success!.")
              }
            }>
             Checkout
            </button>
            <button onClick={()=> setIsShow(false)}>
              Cancel
            </button>
          </Checkout>
        </CheckoutContainer>
      </CartDiv>
    </MyCartDiv>
  );
}

export default Cart;
