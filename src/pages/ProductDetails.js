import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CircularProgress,
  Typography,
  Container,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import productService from '../services/productService'; // Service for fetching products
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductDetails = () => {
  const { id } = useParams(); // Grabs product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); // For dispatching actions

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await productService.getProductById(id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch addToCart action
  };

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container component={Paper} elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '20px' }}>
            {product.description}
          </Typography>
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
    </Container>
  );
};

export default ProductDetails;
