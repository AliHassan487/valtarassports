import React from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';

const ContactUs = () => {
  return (
    <section style={styles.contactSection}>
      <Container maxWidth="md">
        {/* Contact Us Section */}
        <Typography variant="h4" component="h2" style={styles.contactTitle}>
          Contact Us
        </Typography>
        <Typography variant="body1" component="p" style={styles.contactDescription}>
          We're here to help! Contact us via email, phone, or follow us on social media.
        </Typography>
        <div style={styles.contactInfo}>
          <Typography style={styles.contactDetail}>Email: support@valtarassports.com</Typography>
          <Typography style={styles.contactDetail}>Phone: +1 (234) 567-890</Typography>
        </div>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Newsletter Section */}
        <Typography variant="h5" component="h3" style={styles.newsletterTitle}>
          Subscribe to Our Newsletter
        </Typography>
        <Typography variant="body2" component="p" style={styles.newsletterDescription}>
          Get the latest updates on new products, upcoming sales, and more!
        </Typography>
        <Grid container spacing={2} style={styles.newsletterForm}>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              label="Enter your email"
              variant="outlined"
              InputProps={{ style: styles.textField }}
              InputLabelProps={{ style: { color: '#fff' } }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button variant="contained" color="primary" fullWidth style={styles.subscribeButton}>
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

// Styles specific to this component
const styles = {
  contactSection: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#1a1a1a',  // Dark background
    color: '#fff',               // Light text
  },
  contactTitle: {
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#fff',
  },
  contactDescription: {
    marginBottom: '30px',
    color: '#ccc',               // Softer description color
  },
  contactInfo: {
    color: '#fff',
    marginBottom: '30px',
  },
  contactDetail: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  divider: {
    margin: '40px 0',
    height: '1px',
    backgroundColor: '#ccc',
  },
  newsletterTitle: {
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#fff',
  },
  newsletterDescription: {
    marginBottom: '20px',
    color: '#ccc',
  },
  newsletterForm: {
    marginTop: '20px',
  },
  textField: {
    backgroundColor: '#333',     // Dark background for input
    color: '#fff',               // White text input
  },
  subscribeButton: {
    backgroundColor: '#0d47a1',  // Blue subscribe button
    color: '#fff',
    padding: '10px 20px',
    fontWeight: 'bold',
  },
};

export default ContactUs;
