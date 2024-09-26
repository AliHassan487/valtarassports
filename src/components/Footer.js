import React from "react";
import { Container, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <Container maxWidth="lg" style={styles.footerContainer}>
        <Typography variant="body2" component="p" style={styles.footerText}>
          © {new Date().getFullYear()} Valtaras Sports. All rights reserved.
        </Typography>
        <div style={styles.socialLinks}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <InstagramIcon fontSize="large" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <FacebookIcon fontSize="large" />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <WhatsAppIcon fontSize="large" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

// Styles specific to this component
const styles = {
  footer: {
    backgroundColor: "#0d47a1",
    padding: "20px 0",
    color: "#fff",
    textAlign: "center",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    marginBottom: "0",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
  },
  socialLink: {
    color: "#fff",
    margin: "0 10px",
    textDecoration: "none",
  },
};

export default Footer;
