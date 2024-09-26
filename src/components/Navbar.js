import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
// import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#0d47a1' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo and Company Name */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
            {/* <img src={logo} alt="Company Logo" style={{ width: '40px', marginRight: '10px' }} /> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MyShop
            </Typography>
          </Link>
        </div>

        {/* Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/shop" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
            <Button color="inherit">Shop</Button>
          </Link>
          <Link to="/deals" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
            <Button color="inherit">Deals</Button>
          </Link>
        </div>

        {/* Icons for Cart, Search, and Profile */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="large" color="inherit">
            <SearchIcon />
          </IconButton>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={2} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
          <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>
            <IconButton size="large" color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
