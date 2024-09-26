import React from 'react';
import { Button } from '@mui/material';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>{item.price} USD</p>
        <Button variant="contained" color="secondary" onClick={() => removeFromCart(item.id)}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
