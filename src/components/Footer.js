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

        <div style={styles.followUsContainer}>
          <Typography variant="body1" component="p" style={styles.followUsText}>
            Follow Us
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
        </div>
      </Container>
    </footer>
  );
};

// Styles specific to this component
const styles = {
  footer: {
    backgroundColor: "#0d47a1",  // Keep the dark blue color consistent
    padding: "20px 0",
    color: "#fff",               // White text for contrast
    textAlign: "center",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",    // Stack elements vertically for mobile
    gap: "15px",
  },
  footerText: {
    marginBottom: "0",
    fontSize: "14px",           // Slightly smaller for subtle footer text
  },
  followUsContainer: {
    textAlign: "center",        // Center-align the follow us section
  },
  followUsText: {
    fontSize: "18px",           // Increase font size to make it prominent
    fontWeight: "bold",
    marginBottom: "10px",       // Add some spacing below "Follow Us" text
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
  },
  socialLink: {
    color: "#fff",
    margin: "0 15px",           // Space out the icons slightly more
    textDecoration: "none",
    transition: "color 0.3s ease",  // Add a hover effect for icons
  },
};

export default Footer;
