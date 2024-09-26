import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, List, ListItem, ListItemText, Button, ListItemAvatar, Avatar } from '@mui/material';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Your Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography>No items in cart</Typography>
      ) : (
        <List>
          {cartItems.map(item => (
            <ListItem key={item.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={item.image} alt={item.title} variant="rounded" />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <Typography variant="body2" color="textSecondary">
                    Quantity: {item.quantity} - Price: ${item.price * item.quantity}
                  </Typography>
                }
              />
              <Button onClick={() => dispatch(increaseQuantity({ id: item.id }))}>+</Button>
              <Button onClick={() => dispatch(decreaseQuantity({ id: item.id }))}>-</Button>
              <Button onClick={() => dispatch(removeFromCart({ id: item.id }))} color="secondary">Remove</Button>
            </ListItem>
          ))}
        </List>
      )}
      {cartItems.length > 0 && (
        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
          >
            Proceed to Checkout
          </Button>
        </Link>
      )}
    </Container>
  );
};

export default Cart;
