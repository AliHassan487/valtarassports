import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Box,
  Paper,
} from '@mui/material';
import { loginStart, loginSuccess, loginFailure } from '../features/authSlice';
import authService from '../services/authService'; // Assuming you have an auth service

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const user = await authService.login(email, password);
      dispatch(loginSuccess(user));
      // Redirect or show success message
    } catch (err) {
      dispatch(loginFailure(err.message));
      setOpenSnackbar(true);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh', // Full height to center vertically
      }}
    >
      <Paper elevation={3} sx={{ padding: 3, borderRadius: '10px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
          Please login to your account
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1976d2', // Customize border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#115293', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1976d2', // Focused border color
                  },
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1976d2',
                  },
                  '&:hover fieldset': {
                    borderColor: '#115293',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1976d2',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
            </Button>
          </Box>
        </form>
        {error && (
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={() => setOpenSnackbar(false)}
            message={error}
          />
        )}
      </Paper>
    </Container>
  );
};

export default Login;
