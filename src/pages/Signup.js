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
import { signupStart, signupSuccess, signupFailure } from '../features/authSlice';
import authService from '../services/authService'; // Assuming you have an auth service

const Signup = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signupStart());
    try {
      const user = await authService.signup(email, password);
      dispatch(signupSuccess(user));
      // Redirect or show success message
    } catch (err) {
      dispatch(signupFailure(err.message));
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
          Create an Account
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
          Please fill in the details to signup
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
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Signup'}
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

export default Signup;
