import styled from '@emotion/styled/macro';
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { candyToCart, addToCart } from '../redux/actions';


const Card = styled.div`
  display: inline-block;
  margin: 20px;
  padding: 10px;
  padding-left: 20px;
  width: 360px;
  font-size: 12px;
  background:rgba(255,255,255, 0.3);
  box-shadow: 2px 2px 4px #000000;
  border-radius: 5px;

  img {
    width: 200px;
    height: 150px;
    box-shadow: 2px 2px 4px #000000;
    border-radius: 5px;
  }
`;

const Cart = styled.form`

  button {
    font-family: 'RocknRoll One', sans-serif;
    margin-right: 5px;
    font-size: 16px;
  }

  input {
    width: 60px;
    height: 24px;
    margin-right: 5px;
    font-family: 'RocknRoll One', sans-serif;
    font-size: 16px;
  }
`;

function CandyCard(props) {

  const dispatch = useDispatch();

  const [ quantity, setQuantity ] = useState(0);

  useEffect(() => {
    if (quantity < 0)
    {
      setQuantity(0);
    }
    if (quantity > props.candy.inStock)
    {
      setQuantity(props.candy.inStock);
      alert("Reach max amount!");
    }
  }, [ quantity, props.candy.inStock ]);

  return (
    <Card>
      <img src={props.candy.photoUrl} alt="candy" />
      <p> Name: {props.candy.name} </p>
      <p> Price: {props.candy.price}$ </p>
      <p>
        {props.candy.inStock > 0 ?
          `In Stock: ${props.candy.inStock}` :
          "Out of Stock"
        }

      </p>
      <Cart>
        <button onClick={function (e){
          e.preventDefault();
          setQuantity(quantity + 1)
        }}>
        +
        </button>
        <input type="number" value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
          placeholder="0"/>
        <button onClick={function (e){
          e.preventDefault();
          setQuantity(quantity - 1)
        }}>
        -
        </button>
        {( quantity === 0 || props.candy.inStock === 0) ?
          <button disabled>
            Add to Cart
          </button> :
          <button onClick={function (e){
              e.preventDefault();
              if (quantity > 0)
              {
                const buyCandyAction = candyToCart(props.candy.id, quantity);
                dispatch(buyCandyAction);

                const item = {
                  ...props.candy,
                  "amount": quantity
                }
                const addToCartAction = addToCart(item);
                dispatch(addToCartAction);
              }
          }}>
            Add to Cart
          </button>
          }
      </Cart>
    </Card>
  );
}

export default CandyCard;
