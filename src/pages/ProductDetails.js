import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Typography, Container, Button, Snackbar, Grid, Paper } from '@mui/material';
import productService from '../services/productService'; // Assuming you fetch from a service
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductDetails = () => {
  const { id } = useParams(); // Grabs product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const dispatch = useDispatch(); // For dispatching actions

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await productService.getProductById(id);
        setProduct(fetchedProduct);
      } catch (error) {
        setSnackbarMessage('Error fetching product.');
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch addToCart action
    setSnackbarMessage(`${product.title} added to cart!`);
    setOpenSnackbar(true);
  };

  if (loading) {
    return <CircularProgress style={{ display: 'block', margin: 'auto', marginTop: '50px' }} />;
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>{product.title}</Typography>
            <Typography variant="h5" color="primary">${product.price.toFixed(2)}</Typography>
            <Typography variant="body1" style={{ margin: '20px 0' }}>{product.description}</Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleAddToCart}
              style={{ marginTop: '10px' }}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Snackbar for notifications */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default ProductDetails;
