import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, List, ListItem, Button } from '@mui/material';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Your Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography>No items in cart</Typography>
      ) : (
        <List>
          {cartItems.map(item => (
            <ListItem key={item.id}>
              <Typography>{item.title} - Quantity: {item.quantity}</Typography>
            </ListItem>
          ))}
        </List>
      )}
      <Button variant="contained" color="primary" onClick={() => console.log('Proceed to Checkout')}>
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default Cart;
