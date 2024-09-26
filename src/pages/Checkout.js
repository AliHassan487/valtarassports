// src/pages/Checkout.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, List, Snackbar, Alert } from '@mui/material';
import CartItem from '../components/CartItem';
import UserInfoForm from '../components/UserInfoForm';
import OrderSummary from '../components/OrderSummary';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [userInfo, setUserInfo] = useState({ name: '', address: '', paymentMethod: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handlePlaceOrder = () => {
    console.log('Order placed!', { userInfo, cartItems });
    setOpenSnackbar(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      {cartItems.length === 0 ? (
        <Typography>No items in cart to checkout</Typography>
      ) : (
        <>
          <List>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </List>
          <UserInfoForm userInfo={userInfo} handleInputChange={handleInputChange} />
          <OrderSummary totalPrice={totalPrice} handlePlaceOrder={handlePlaceOrder} />
        </>
      )}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Order placed successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Checkout;
