import React from 'react';
import { Button, Grid, Typography, Container } from '@mui/material';
import heroImage from '../assests/new sports.avif'; 

const HeroBanner = () => {
  return (
    <section style={styles.heroSection}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" style={styles.heroTitle}>
              Welcome to Valtaras Sports
            </Typography>
            <Typography variant="h6" component="p" style={styles.heroDescription}>
              Explore the best products, offers, and deals from the comfort of your home.
            </Typography>
            <Button variant="contained" color="primary" size="large" style={styles.shopNowButton}>
              Shop Now
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={heroImage} alt="Hero Banner" style={styles.heroImage} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

// Styles specific to this component
const styles = {
  heroSection: {
    padding: '50px 0',
    backgroundColor: '#121212',
    textAlign: 'left',
  },
  heroTitle: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  heroDescription: {
    margin: '20px 0',
    color: '#b0b0b0',
  },
  shopNowButton: {
    backgroundColor: '#0d47a1',
    color: '#000',
    padding: '10px 30px',
  },
  heroImage: {
    width: '100%',
    borderRadius: '10px',
  },
};

export default HeroBanner;
