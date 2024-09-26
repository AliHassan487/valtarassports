import React from 'react';
import { Container, Typography } from '@mui/material';

const ContactUs = () => {
  return (
    <section style={styles.contactSection}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" style={styles.contactTitle}>
          Contact Us
        </Typography>
        <Typography variant="body1" component="p" style={styles.contactDescription}>
          We're here to help! Contact us via email or phone, or follow us on social media.
        </Typography>
        <div style={styles.contactInfo}>
          <Typography>Email: support@valtarassports.com</Typography>
          <Typography>Phone: +1 (234) 567-890</Typography>
        </div>
      </Container>
    </section>
  );
};

// Styles specific to this component
const styles = {
  contactSection: {
    padding: '50px 0',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  contactTitle: {
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  contactDescription: {
    marginBottom: '30px',
    color: '#666',
  },
  contactInfo: {
    color: '#666',
  },
};

export default ContactUs;
