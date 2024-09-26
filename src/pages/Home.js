import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import productService from '../services/productService';
import HeroBanner from '../components/HeroBanner'; 
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { Container, Grid, CircularProgress } from '@mui/material';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productService.getProducts();
      setProducts(data);
      setLoading(false); // Stop the loading indicator after the data is fetched
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Product List */}
      <Container maxWidth="lg" style={styles.productSection}>
        {loading ? (
          <div style={styles.loader}>
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Styles specific to this page
const styles = {
  productSection: {
    padding: '50px 0',
    textAlign: 'center',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  },
};

export default Home;
