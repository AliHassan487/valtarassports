const login = (email, password) => {
    return { email, token: 'fake-jwt-token' };  // Dummy authentication response
  };
  
  const signup = (email, password) => {
    return { email, token: 'fake-jwt-token' };  // Dummy signup response
  };
  
  export default { login, signup };
  