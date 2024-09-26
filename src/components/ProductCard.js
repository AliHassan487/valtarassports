// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled component for the card
const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)', // Scale on hover for a nice effect
  },
  margin: theme.spacing(2),
  maxWidth: 345,
}));

const ProductCard = ({ product }) => {
  return (
    <StyledCard>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="200" // Increased height for better visibility
          image={product.image}
          alt={product.title}
          style={{ objectFit: 'contain' }} // Maintain aspect ratio
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
          <Box mt={2}>
            <Button variant="contained" color="primary" fullWidth>
              View Details
            </Button>
          </Box>
        </CardContent>
      </Link>
    </StyledCard>
  );
};

export default ProductCard;
