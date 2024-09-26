import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/index'; // Use the routes from index.js
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
